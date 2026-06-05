# Agent Mailor

**Status:** Integration stub — orchestration layer for AI agents across mint, vault, and compliance desks.

## Intended role

Agent Mailor coordinates asynchronous handoffs when human-in-the-loop gates complete:

- Notify counsel when vault manifest `contentHash` is anchored
- Prompt troptionsmint operator when VC issuance succeeds
- Route x402-paid export requests to the correct namespace executor
- Surface GMIIE comp updates that trigger credential re-issuance policy

## Ruby scope

This repository documents interfaces and journey phases only. No Agent Mailor service implementation ships in `feat/client-portal`.

## Phase 2

Wire Agent Mailor to Legacy webhooks and ruby GitHub Projects automation for intake status changes.
