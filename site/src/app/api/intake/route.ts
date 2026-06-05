import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";
import { z } from "zod";

const intakeSchema = z.object({
  organization: z.string().min(2).max(200),
  email: z.string().email().max(254),
  role: z.enum(["family_office", "counsel", "custody", "lender", "other"]).optional(),
  notes: z.string().max(4000).optional(),
});

function ticketId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `ARWA-${ts}-${rand}`.toUpperCase();
}

async function logIntake(record: Record<string, unknown>) {
  const dir = join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(join(dir, "intake.log"), `${JSON.stringify(record)}\n`, "utf8");
}

async function webhookNotify(record: Record<string, unknown>) {
  const url = process.env.INTAKE_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = intakeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const id = ticketId();
  const record = {
    id,
    ...parsed.data,
    createdAt: new Date().toISOString(),
  };

  try {
    await logIntake(record);
    await webhookNotify(record).catch(() => undefined);
  } catch (e) {
    console.error("intake log failed", e);
    return NextResponse.json({ error: "Failed to record intake" }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    ticketId: id,
    message: "Onboarding request received. A relationship manager will follow up.",
  });
}
