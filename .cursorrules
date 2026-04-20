# venture-solar-crm-timeline — AI Assistant Instructions

This file is read automatically by your AI tool (Claude Code, Cursor, Windsurf, Copilot, etc.).
Full detail is in AGENTS.md and PROJECT_INSTRUCTIONS.md.

## Start of every session — do this first, without being asked:
1. Read `.auto-memory/MEMORY.md` — canonical project index. Follow its links.
2. Read `AGENTS.md` — role definitions, memory system, session lifecycle
3. Read `docs/memory/` — newest first, prioritize Tier 1 entries
4. Read `TODO.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTER_PROMPTS.md`
5. **Verify actual state** — don't trust "TBD" fields at face value. Check:
   - `git remote -v` and `git log --oneline -3` for repo status
   - `package.json` for installed dependencies
   - If any .auto-memory/ fields say "TBD", try to verify the real state and update them

## Autonomous execution — this is critical:
This project was planned in detail through Ignition. The planning is done. Your job is **execution**.

1. Give a brief status summary (2-3 lines max)
2. **Determine what to work on next** — in priority order:
   a. If the user gave a specific request → do that
   b. If there are uncompleted sessions in `STARTER_PROMPTS.md` → start the next one
   c. If all starter sessions are done → pick the next unchecked item from `TODO.md`
3. **Start working immediately.** Don't ask "where should I start?" or "what would you like to focus on?" — the plan already answers that. Just say what you're doing and do it.
4. When you finish a task, move to the next one. Keep going until the session ends or you need a decision only the user can make.
5. Only pause for user input when you hit a genuine decision point (e.g. choosing between two architectural approaches, needing an API key, unclear business requirement).

## During every session — update docs automatically:
When any of these happen, write to `docs/memory/YYYY-MM-DD.md` immediately:
- A field name, API name, or schema detail is confirmed → tag as `[Tier 1]`
- An architectural decision is made (include the reasoning)
- A bug is found and fixed (include: what it was, root cause, fix)
- An integration endpoint, auth method, or credential name is confirmed
- A business rule or threshold is agreed on (include the exact agreed value)
- Any infrastructure detail changes (URL, bucket name, branch, env var)

If it's a **Tier 1 fact** (infra, architecture, confirmed field name, deployment state), also update the relevant `.auto-memory/` file.

Do NOT ask the user to update the docs. Do it yourself the moment it's known.

## End of every session — do this before closing:
1. Finalize today's session file in `docs/memory/`
2. If any Tier 1 context changed, update relevant `.auto-memory/` files
3. Update `TODO.md` — check off completed items, add new ones
4. `git add -A && git commit -m "[what shipped]"`
5. Push to the current branch: `git push`
6. Tell the user what shipped

(Ultra-fast-path fixes can bundle into the next real commit — see AGENTS.md.)

## Project context:
- **Description**: A timeline-based CRM interface for Venture Home Solar sales reps that guides them through each customer opportunity journey from appointment scheduling to deal approval.
- **Stack**: React (JSX), Vite + Cloud Run
- **Integrations**: Aurora Solar (design generation), Calendar systems (appointment sync), Utility rate databases (Connecticut focus), Call recording/AI transcription service, Photo storage for walk-around documentation, Solar Reviews (lead source tracking)
- **Canonical memory**: `.auto-memory/MEMORY.md` — read first, trust first
- **Session memory**: `docs/memory/YYYY-MM-DD.md` — one per session day
- **Full instructions**: See AGENTS.md and PROJECT_INSTRUCTIONS.md

## Never:
- Ask the user to "update the memory file" — do it yourself
- Skip the session-start read — always read `.auto-memory/MEMORY.md` first
- Commit secrets or `.env.local` — it's in .gitignore for a reason
- Use `--set-env-vars` on Cloud Run — always use `--update-env-vars`
- Run `gcloud` or `docker` commands without first verifying the tool is installed

## Quick commands (run from repo root: `~/venture-solar-crm-timeline`):
```bash
npm run dev                  # local dev server
docker build -t venture-solar-crm-timeline .   # test Docker build locally
gcloud run deploy venture-solar-crm-timeline --source . --region us-east1 --project YOUR_PROJECT
```
