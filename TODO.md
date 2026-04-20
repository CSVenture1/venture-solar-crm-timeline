# TODO — venture-solar-crm-timeline

## Project Summary

A timeline-based CRM interface for Venture Home Solar sales reps that guides them through each customer opportunity journey from appointment scheduling to deal approval.

Venture Home Solar's current CRM is extremely clunky and scattered across multiple tools. Sales reps struggle to prepare for appointments, track customer journey progress, and coordinate follow-ups. This timeline interface becomes their command center, matching how sales actually works in the real world - chronologically organized around customer touchpoints.


## Release Strategy
**MVP → Iterative releases**
- MVP: Single customer timeline view with all journey stages, AI call insights, utility data integration, Aurora design workflow, and real-time stage updates that sync back to calendar and trigger notifications
- Success: Sales reps can complete entire customer journey without switching apps, 50% reduction in missed follow-ups, faster appointment prep with AI insights

---

## Data Model

### Objects
Opportunity (customer journey with stages, amount, timeline), Appointment (scheduled meetings with prep data), Customer (contact info, utility company, previous interactions), Call Record (AI insights, booking details), Proposal (Aurora-generated designs and pricing), Site Assessment (scheduling and results), Contract (financing details, additional products needed)

### Relationships
Opportunity contains multiple Appointments over time; Customer has historical Call Records and previous Opportunities; Appointments link to Call Records for AI insights; Proposals generated during Aurora Design sessions belong to Opportunities; Site Assessments and Contracts are follow-up activities tied to specific Opportunities

### Fields & API Names to Confirm
These must be confirmed before going to production. Each confirmed value should be written to `docs/memory/YYYY-MM-DD.md` as `[Tier 1]`, updated in `.auto-memory/project_venture-solar-crm-timeline.md`, and updated in code as a named constant.

Exact API endpoints for Aurora design system integration,Call recording storage location and AI transcription service,Calendar system integration (Outlook/Google) for scheduling sync,Utility rate data source and update frequency,Photo storage solution for Photon Path walk-around images

### Known Data Issues
Each appointment generates Aurora design session that must sync back automatically; multiple follow-up types (RSM call, site assessment, contract signing) need different scheduling workflows; customer history spans multiple years and inquiry sources

---

## Phase 0: Planning ✅
- [x] Brainstorm and discovery conversation
- [x] Scope and release strategy defined
- [x] Project docs generated
- [x] Planning memory file created

## Phase 1: Setup

### Tool Verification (run these first)
- [ ] Verify Node.js: `node --version` (requires v18+)
- [ ] Verify npm: `npm --version`
- [ ] Verify git: `git --version`
- [ ] Verify Docker: `docker --version`
- [ ] Verify gcloud: `gcloud --version` (install from https://cloud.google.com/sdk/docs/install if missing)

### Project Initialization
- [ ] Extract scaffold zip to `~/venture-solar-crm-timeline`
- [ ] `cd ~/venture-solar-crm-timeline && npm install`
- [ ] Copy `.env.example` → `.env.local` and fill in values
- [ ] Verify local dev server: `npm run dev`
- [ ] Initialize git: `git init && git add -A && git commit -m "initial scaffold from Ignition"`
- [ ] Create GitHub repo and push: `gh repo create venture-solar-crm-timeline --source . --push`
- [ ] Set up `.auto-memory/` directory and `MEMORY.md` index
- [ ] Update `.auto-memory/reference_venture-solar-crm-timeline.md` with GitHub URL

### GCP & Cloud Run
- [ ] Test Docker build: `docker build -t venture-solar-crm-timeline . && docker run -p 8080:8080 venture-solar-crm-timeline`
- [ ] Create GCP project: `gcloud projects create venture-solar-crm-timeline --name="venture-solar-crm-timeline"`
- [ ] Link billing: https://console.cloud.google.com/billing/linkedaccount?project=venture-solar-crm-timeline
- [ ] Enable APIs: `gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com storage.googleapis.com`
- [ ] Create Artifact Registry: `gcloud artifacts repositories create venture-solar-crm-timeline --repository-format=docker --location=us-east1`
- [ ] First Cloud Run deploy (use `--update-env-vars`, never `--set-env-vars`)
- [ ] Update `.auto-memory/reference_venture-solar-crm-timeline.md` with Cloud Run URL + GCP project ID
- [ ] Write first session file: `docs/memory/YYYY-MM-DD.md`

### Database Setup
- [ ] Create database instance (Cloud SQL, managed Postgres, Supabase, etc.)
- [ ] Note connection string → `DATABASE_URL` in `.env.local`
- [ ] Run initial schema migrations
- [ ] Set `DATABASE_URL` as Cloud Run env var (`--update-env-vars`)
- [ ] Verify connection from Cloud Run service
- [ ] Write connection details (host, engine, env var names) to `.auto-memory/reference_venture-solar-crm-timeline.md` as `[Tier 1]`

### Aurora Solar (design generation) Setup
- [ ] Obtain API credentials for Aurora Solar (design generation)
- [ ] Add to `.env.example` as placeholder + `.env.local` with real values
- [ ] Build mock data layer that mirrors the real API response shape
- [ ] Implement real API calls after mock is working
- [ ] Write confirmed endpoints and auth details to `docs/memory/YYYY-MM-DD.md` as `[Tier 1]`

### Calendar systems (appointment sync) Setup
- [ ] Obtain API credentials for Calendar systems (appointment sync)
- [ ] Add to `.env.example` as placeholder + `.env.local` with real values
- [ ] Build mock data layer that mirrors the real API response shape
- [ ] Implement real API calls after mock is working
- [ ] Write confirmed endpoints and auth details to `docs/memory/YYYY-MM-DD.md` as `[Tier 1]`

### Call recording/AI transcription service Setup
- [ ] Obtain API credentials for Call recording/AI transcription service
- [ ] Add to `.env.example` as placeholder + `.env.local` with real values
- [ ] Build mock data layer that mirrors the real API response shape
- [ ] Implement real API calls after mock is working
- [ ] Write confirmed endpoints and auth details to `docs/memory/YYYY-MM-DD.md` as `[Tier 1]`

### Photo storage for walk-around documentation Setup
- [ ] Obtain API credentials for Photo storage for walk-around documentation
- [ ] Add to `.env.example` as placeholder + `.env.local` with real values
- [ ] Build mock data layer that mirrors the real API response shape
- [ ] Implement real API calls after mock is working
- [ ] Write confirmed endpoints and auth details to `docs/memory/YYYY-MM-DD.md` as `[Tier 1]`

### Solar Reviews (lead source tracking) Setup
- [ ] Obtain API credentials for Solar Reviews (lead source tracking)
- [ ] Add to `.env.example` as placeholder + `.env.local` with real values
- [ ] Build mock data layer that mirrors the real API response shape
- [ ] Implement real API calls after mock is working
- [ ] Write confirmed endpoints and auth details to `docs/memory/YYYY-MM-DD.md` as `[Tier 1]`

## Phase 2: Prototype
- [ ] Build core UI with mock data
- [ ] Implement main views and interactions
- [ ] Verify mock mode works end-to-end
- [ ] Deploy prototype to Cloud Run for review

### What the prototype already covers:
✅ Complete customer timeline interface with all journey stages,✅ Pre-appointment brief with customer history and AI insights,✅ Dynamic right-side panels that change based on current stage,✅ Quick action buttons for scheduling and utility bill scanning,✅ Connecticut utility company examples (Eversource),✅ Solar Reviews lead source integration,✅ Photon Path walk-around photo viewing,✅ Aurora design session integration points,✅ Proposal and contract management interfaces


## Phase 3: Live Data
- [ ] Confirm all field names and API names — write each to `docs/memory/YYYY-MM-DD.md` as `[Tier 1]` and update `.auto-memory/project_venture-solar-crm-timeline.md`
- [ ] Connect Aurora Solar (design generation) integration
- [ ] Connect Calendar systems (appointment sync) integration
- [ ] Connect Utility rate databases (Connecticut focus) integration
- [ ] Connect Call recording/AI transcription service integration
- [ ] Connect Photo storage for walk-around documentation integration
- [ ] Connect Solar Reviews (lead source tracking) integration
- [ ] Set production env vars on Cloud Run (`--update-env-vars`, never `--set-env-vars`)
- [ ] Run with live data end-to-end
- [ ] Verify in production

## Phase 4: MVP Features
- [ ] Single customer timeline view with all journey stages, AI call insights, utility data integration, Aurora design workflow, and real-time stage updates that sync back to calendar and trigger notifications

## Phase 5: MVP Deploy
- [ ] All env vars confirmed on Cloud Run
- [ ] Tested with real users in production
- [ ] Memory finalized, TODO updated
- [ ] Ship

## Phase 6+: Post-MVP
- [ ] Multi-customer dashboard view, mobile-optimized interface for field use, advanced analytics on conversion patterns, deeper Aurora API integration
---

## Known Challenges & Open Questions

Aurora integration complexity - need seamless launch from timeline interface with customer data pre-populated and design results syncing back automatically. Real-time calendar sync across multiple systems. AI call insight quality depends on call recording infrastructure. Utility rate data freshness and accuracy for Connecticut market.

---

## Brainstorm Notes
User wants to replace Venture Home Solar's clunky CRM with a timeline-based interface that guides sales reps through customer journeys chronologically. Each opportunity flows from appointment scheduling through Aurora design sessions to contract signing, with AI insights from booking calls, utility data, and seamless integrations. The MVP focuses on single customer timeline view with all stages, prep data, and follow-up scheduling. Key integration is Aurora Solar for design generation during appointments, plus calendar sync and call record AI insights.

---

## Reference Data

Connecticut utilities: Eversource (primary), United Illuminating. Example rate increases: Eversource 12% increase March 2023, 8% increase September 2023. Journey stages: Appointment Scheduled → Photon Path → Aurora Design → Proposal Presentation → Site Assessment → Contract & Financing → Deal Approved. Lead sources include Solar Reviews, referrals, online inquiries.
