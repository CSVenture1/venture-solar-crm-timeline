# Project: venture-solar-crm-timeline

## What This Is

A timeline-based CRM interface for Venture Home Solar sales reps that guides them through each customer opportunity journey from appointment scheduling to deal approval.

Venture Home Solar's current CRM is extremely clunky and scattered across multiple tools. Sales reps struggle to prepare for appointments, track customer journey progress, and coordinate follow-ups. This timeline interface becomes their command center, matching how sales actually works in the real world - chronologically organized around customer touchpoints.


## Repo Setup

- **Local project directory**: `~/venture-solar-crm-timeline` (extracted from scaffold zip or cloned from GitHub)
- **GitHub repo**: `[your-gh-org]/venture-solar-crm-timeline`
- **Branch strategy**: `main` is production. Work on feature branches (`feature/[name]`) and merge via PR.

When asked to make changes, commit to the current working branch with clear commit messages. Push to GitHub when asked to "push" or "ship it."

## Tech Stack

- **Frontend**: React (JSX), Vite
- **Styling**: Inline styles, dark theme with Venture Solar design tokens
- **Data Sources**: Mock customer data, Aurora API integration, calendar systems, call recording AI
- **Integrations**: Aurora Solar (design generation), Calendar systems (appointment sync), Utility rate databases (Connecticut focus), Call recording/AI transcription service, Photo storage for walk-around documentation, Solar Reviews (lead source tracking)


## Hosting & Deployment

- **Runtime**: Google Cloud Run (containerized, port 8080)
- **Static/File Storage**: Google Cloud Storage
- **Container Registry**: Google Artifact Registry
- **Region**: us-east1

### Key deployment rules:
- Cloud Run URL format: `https://venture-solar-crm-timeline-HASH-ue.a.run.app`
- Environment variables are set via Cloud Run service configuration — never baked into the container
- `.env.local` is for local dev only — never deployed, never committed
- For server-side API calls, use the Cloud Run service URL as the base, not localhost
- Always test Docker builds locally before deploying: `docker build -t venture-solar-crm-timeline . && docker run -p 8080:8080 venture-solar-crm-timeline`

### Deployment Commands
All commands run from the repo root (`~/venture-solar-crm-timeline`).

```bash
# Verify required tools first
which node && which npm && which git && which docker && which gcloud
# If any are missing, install before proceeding

# First-time GCP setup (run once)
gcloud auth login
gcloud config set project YOUR_GCP_PROJECT_ID
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com storage.googleapis.com

# Create Artifact Registry repo (once)
gcloud artifacts repositories create venture-solar-crm-timeline --repository-format=docker --location=us-east1

# Build and deploy
gcloud builds submit --tag us-east1-docker.pkg.dev/YOUR_GCP_PROJECT_ID/venture-solar-crm-timeline/venture-solar-crm-timeline:latest .
gcloud run deploy venture-solar-crm-timeline \
  --image us-east1-docker.pkg.dev/YOUR_GCP_PROJECT_ID/venture-solar-crm-timeline/venture-solar-crm-timeline:latest \
  --region us-east1 --platform managed --allow-unauthenticated

# Update environment variables
gcloud run services update venture-solar-crm-timeline --region us-east1 \
  --update-env-vars="KEY=value,KEY2=value2"
```

## Project Structure

```
venture-solar-crm-timeline/
├── .auto-memory/
│   ├── MEMORY.md                  # Canonical index — read first every session
│   ├── reference_venture-solar-crm-timeline.md       # Infra: GCP project, Cloud Run URL, env vars
│   └── project_venture-solar-crm-timeline.md         # Tech stack, components, architecture decisions
├── src/
│   ├── main.jsx
│   ├── app.jsx
│   ├── components/                 # React (JSX), Vite components (.jsx)
│   ├── views/
│   ├── data/
│   ├── auth/
│   └── utils/
├── docs/
│   └── memory/
│       └── planning.md            # Bootstrap planning artifact from Ignition
├── PROJECT_INSTRUCTIONS.md
├── AGENTS.md
├── TODO.md
├── STARTER_PROMPTS.md
├── Dockerfile
├── .dockerignore
├── .gcloudignore
├── .env.example
├── .env.local                     # Local dev only — git-ignored
├── .gitignore
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## Current State

✅ Complete customer timeline interface with all journey stages,✅ Pre-appointment brief with customer history and AI insights,✅ Dynamic right-side panels that change based on current stage,✅ Quick action buttons for scheduling and utility bill scanning,✅ Connecticut utility company examples (Eversource),✅ Solar Reviews lead source integration,✅ Photon Path walk-around photo viewing,✅ Aurora design session integration points,✅ Proposal and contract management interfaces

## Design

- **Theme**: Professional dark theme command center for sales reps
- **Fonts**: JetBrains Mono for data/timestamps, Outfit for UI text

- **Visual rules**: Amber accents for primary actions, teal for completed steps, coral for attention items, utility companies highlighted in brand colors

## Data Model

### Objects
Opportunity (customer journey with stages, amount, timeline), Appointment (scheduled meetings with prep data), Customer (contact info, utility company, previous interactions), Call Record (AI insights, booking details), Proposal (Aurora-generated designs and pricing), Site Assessment (scheduling and results), Contract (financing details, additional products needed)

### Relationships
Opportunity contains multiple Appointments over time; Customer has historical Call Records and previous Opportunities; Appointments link to Call Records for AI insights; Proposals generated during Aurora Design sessions belong to Opportunities; Site Assessments and Contracts are follow-up activities tied to specific Opportunities

### Fields to Confirm Before Going Live
Exact API endpoints for Aurora design system integration,Call recording storage location and AI transcription service,Calendar system integration (Outlook/Google) for scheduling sync,Utility rate data source and update frequency,Photo storage solution for Photon Path walk-around images

### Known Data Issues
Each appointment generates Aurora design session that must sync back automatically; multiple follow-up types (RSM call, site assessment, contract signing) need different scheduling workflows; customer history spans multiple years and inquiry sources

## Architecture Notes

Phase 1: React client with mock data demonstrating full workflow. Phase 2: Add backend API for real data integration with Aurora, calendar systems, and call records. Phase 3: Mobile-responsive interface for field use during appointments. Eventually may integrate into larger Venture Solar platform.


## Multi-User Collaboration

These docs are **AI-agnostic** — they work with Claude, GPT, Gemini, Copilot, or any LLM.
- **Team**: small team


## How to Work in This Project

1. **Read in this order every session**: `.auto-memory/MEMORY.md` (follow its links) → `AGENTS.md` → `docs/memory/` (newest first) → `TODO.md` and this file. The project spec is distributed across these files — no single file has the complete picture. Give a brief status summary before starting work.

2. **Follow AGENTS.md.** It defines agent roles, the memory system (tiers, auto-memory, golden snapshots), and session lifecycle. Read it and follow it.

3. **Keep mock data working at all times.** Every feature must be testable with mock/demo data before live data is wired up. The mock mode should always work.

4. **Field names and API names are placeholders until confirmed.** Keep them as configurable constants. When a field name is confirmed, update the constant, write it to today's session file in `docs/memory/` as `[Tier 1]`, and update `.auto-memory/project_venture-solar-crm-timeline.md`.

5. **Design rules are not suggestions.** Amber accents for primary actions, teal for completed steps, coral for attention items, utility companies highlighted in brand colors

6. **Ambiguous or multi-step work goes through the PM agent first.** When a feature is described in business terms, scope it before building: data source needed, API calls required, UI components to build, which agents are involved, and what goes in TODO.md as follow-up. See AGENTS.md → Fast Path for when to skip PM.

7. **Write to memory incrementally.** The moment a field name is confirmed, a decision is made, or a bug is fixed — write it to today's session file in `docs/memory/YYYY-MM-DD.md`. If it's a Tier 1 fact (infra, architecture, confirmed field name, deployment state), also update the relevant `.auto-memory/` file. See AGENTS.md → Memory System for the full rules.

8. **Commit often in small chunks.** After each logical unit of work (a component, a data integration, a view), commit with a descriptive message.

9. **Memory files and TODO.md are committed to GitHub.** They are project artifacts, not ephemeral notes. Every session should end with a commit and push that includes updated memory and TODO files.

10. **End every session the same way.** Finalize today's session file in `docs/memory/`. If any Tier 1 context changed, update the relevant `.auto-memory/` files. Update TODO.md, commit everything, push to GitHub, confirm what was shipped. (Ultra-fast-path fixes can bundle into the next real commit — see AGENTS.md.)

11. **Cloud Run deploys**: test locally in Docker first. `docker build -t venture-solar-crm-timeline . && docker run -p 8080:8080 venture-solar-crm-timeline`

12. **Environment variables**: `.env.local` for local dev. Set production vars via `gcloud run services update --update-env-vars` (never `--set-env-vars` — it wipes all existing vars). Never commit secrets.

## Reference Data

Connecticut utilities: Eversource (primary), United Illuminating. Example rate increases: Eversource 12% increase March 2023, 8% increase September 2023. Journey stages: Appointment Scheduled → Photon Path → Aurora Design → Proposal Presentation → Site Assessment → Contract & Financing → Deal Approved. Lead sources include Solar Reviews, referrals, online inquiries.
