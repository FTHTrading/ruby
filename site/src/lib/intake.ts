import { z } from "zod";

export const intakeSchema = z.object({
  organization: z.string().min(2).max(200),
  email: z.string().email().max(254),
  role: z.enum(["family_office", "counsel", "custody", "lender", "other"]).optional(),
  notes: z.string().max(4000).optional(),
});

export type IntakePayload = z.infer<typeof intakeSchema>;

export type IntakeSuccess = { ticketId: string; message: string };
export type IntakeFailure = { error: string };

function ticketId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `ARWA-${ts}-${rand}`.toUpperCase();
}

const INQUIRY_EMAIL = "rwa-inquiry@fthtrading.com";

export async function submitIntake(
  payload: IntakePayload
): Promise<IntakeSuccess | IntakeFailure> {
  const parsed = intakeSchema.safeParse(payload);
  if (!parsed.success) {
    return { error: "Please check required fields and try again." };
  }

  const id = ticketId();
  const record = {
    id,
    ...parsed.data,
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.NEXT_PUBLIC_INTAKE_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!res.ok) {
        return { error: "Submission failed — please email us directly." };
      }
      return {
        ticketId: id,
        message:
          "Onboarding request received. A relationship manager will follow up.",
      };
    } catch {
      return { error: "Network error — try again or email us directly." };
    }
  }

  const subject = encodeURIComponent(`Allure Ruby RWA inquiry ${id}`);
  const body = encodeURIComponent(
    [
      `Ticket: ${id}`,
      `Organization: ${record.organization}`,
      `Email: ${record.email}`,
      `Role: ${record.role ?? "other"}`,
      "",
      record.notes ?? "",
    ].join("\n")
  );
  window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`;
  return {
    ticketId: id,
    message: "Your email client should open with a pre-filled message. Send it to complete your request.",
  };
}
