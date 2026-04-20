# venture-solar-crm-timeline

A timeline-based CRM interface for Venture Home Solar sales reps that guides them through each customer opportunity journey from appointment scheduling to deal approval.

## Getting Started

**First time?** Open **QUICKSTART.pdf** — it walks you through everything step by step.

```bash
npm install
bash setup.sh   # creates .env.local, prints next steps
npm run dev
```

## Deploy to Cloud Run

See PROJECT_INSTRUCTIONS.md for full deployment commands.

## For AI Assistants

Read these files in order:
1. `.auto-memory/MEMORY.md` — canonical project index (follow its links)
2. `AGENTS.md` — role definitions, memory system, session lifecycle
3. `docs/memory/` — session history (newest first)
4. `TODO.md` — current project state and roadmap
5. `PROJECT_INSTRUCTIONS.md` — project context and rules
6. `STARTER_PROMPTS.md` — sequenced prompts for first sessions
