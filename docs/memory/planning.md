

# Planning Memory — 2026-04-20
**Contributor**: Project creator (via Ignition planning session)
**Session type**: Initial brainstorm and project definition

---

## What We're Building

We're building a timeline-based CRM interface for Venture Home Solar's field sales team. The core idea is to replace their current clunky, scattered CRM experience with a single **command center** that organizes every customer opportunity as a chronological journey — from the moment an appointment is assigned to a rep, all the way through design, proposal, contract signing, and deal approval.

Today, a Venture Home Solar sales rep has to piece together their day across multiple tools: Salesforce for opportunity data, a separate calendar for appointments, Aurora Solar for system designs, notes from inside sales calls scattered somewhere else, and utility rate data looked up manually. This interface unifies all of that into one coherent view that matches how sales actually works — linearly, chronologically, one customer touchpoint at a time.

The interface is built around a **customer journey timeline** on the left side and a **dynamic context panel** on the right that changes based on which stage the rep is viewing. When they click on "Pre-Appointment Brief," they see AI-generated insights from the booking call, previous meeting history, inquiry history, and utility data. When they click on "Aurora Design Session," they get a button to launch Aurora with customer data pre-populated. When they click on "Contract & Financing," they see deal submission workflows. The rep never leaves this interface — everything flows through it.

This isn't just a dashboard or a read-only view. It's an **active orchestration layer**: scheduling follow-ups updates the calendar and triggers notifications, marking a stage complete advances the opportunity, launching Aurora pre-populates customer data, and every action syncs back to the underlying systems in real-time. The interface becomes the workflow itself.

## Why We're Building It

Venture Home Solar's current CRM experience is actively hurting sales performance. Reps spend time context-switching between tools instead of preparing for and running appointments. They miss follow-ups because scheduling isn't integrated. They show up to appointments without key insights from the booking call. They manually re-enter customer data into Aurora. Every friction point costs time and deals.

If this works, the impact is concrete:
- **Reps arrive prepared**: AI insights from the booking call tell them exactly what the customer cares about, what their concerns are, and what their timeline is — before the rep walks in the door.
- **Nothing falls through the cracks**: Every opportunity has a visible timeline showing exactly what's been done and what needs to happen next. Follow-ups are scheduled and tracked.
- **The appointment itself is faster**: Aurora launches with customer data pre-loaded, Photon Path photos are already captured and organized, proposals generate and present seamlessly.
- **Managers get visibility**: Every opportunity's journey is documented and trackable, making it possible to identify where deals stall and why.

The success criteria are: sales reps can complete the entire customer journey without switching apps, a 50% reduction in missed follow-ups, and measurably faster appointment prep through AI-powered call insights.

## Decisions Made

**Frontend stack**: React (JSX) with Vite. This is a highly interactive, state-driven UI — React is the right choice for the dynamic timeline and panel switching. Vite for fast dev iteration.

**Styling approach**: Inline styles with a design token system (not CSS modules or Tailwind). The token object `T` defines all colors centrally. This keeps the prototype self-contained and makes it easy to adjust the entire theme from one place. The dark theme is intentional — this is meant to feel like a command center, not a consumer app.

**Design language**: Professional dark theme with specific accent colors:
- **Amber (`#F0A830`)**: Primary actions and active states
- **Teal/Green (`#2DD4A8`)**: Completed steps and positive indicators
- **Coral/Red (`#F87171`)**: Attention items and alerts
- **Dark surfaces** with subtle borders for depth

**Typography**: JetBrains Mono for data, timestamps, and technical information. Outfit for all UI text. This creates a clear visual hierarchy between "data" and "interface."

**Architecture approach**: Phase-based delivery. Phase 1 is a React client with mock data demonstrating the full workflow. Phase 2 adds a backend API for real integrations. Phase 3 is mobile-responsive for field use. This lets us validate the UX before investing in integration complexity.

**Scope type**: MVP — single customer timeline view first, multi-customer dashboard later.

**Aurora integration model**: The interface launches Aurora (likely as a new window/tab or iframe), not a custom reimplementation. Customer data is pre-populated so the rep doesn't re-enter anything. Design results sync back automatically into the timeline.

## MVP Scope

### In scope for v1:
1. **Single customer timeline view** — the full journey from appointment scheduled through deal approved, displayed as a vertical timeline with clickable stages
2. **Customer header** — name, address, phone, utility company, lead source, average monthly bill, assigned rep, booked-by rep, next appointment date/time
3. **Quick action buttons** — Scan Utility Bill, Schedule Site Assessment, Schedule Contract Signing, Schedule RSM Call, Launch Aurora, Send Proposal
4. **Pre-Appointment Brief panel** (right side, stage 1):
   - AI Booking Insights from inside sales call (key points, concerns, timeline)
   - Previous meeting history with dates, types, reps, outcomes, durations
   - Inquiry history with dates, sources, actions, details
   - Utility insights with rate data, rate increase history, current rates, bill insights button
5. **Photon Path Walk Around panel** (stage 2):
   - Photo documentation grid (Roof Overview, Panel Access, Obstacles, Electrical)
   - Capture and view interface
6. **Aurora Design Session panel** (stage 3):
   - "Launch Aurora Design Tool" button
   - Pre-load status indicators (address loaded, photos integrated, system sizing based on bill)
7. **Proposal Presentation panel** (stage 4) — display and send generated proposals
8. **Site Assessment panel** (stage 5) — scheduling and results tracking
9. **RSM Follow-up panel** (stage 6) — scheduling the local sales manager call
10. **Contract & Financing panel** (stage 7) — contract management and finance company approval
11. **Deal Approved panel** (stage 8) — final approval status and submission
12. **Stage status tracking** — each step shows completed (✅), in progress (🔄), or pending (⏳)
13. **Active step highlighting** — clicking a timeline step changes the right panel and highlights the step with amber accent

### Explicitly out of scope for v1:
- Multi-customer dashboard / rep daily view showing all opportunities
- Mobile-optimized / responsive layout for tablet field use
- Real backend API or database (mock data only)
- Live Aurora API integration (button launches Aurora but no automated data sync)
- Live calendar sync (UI only, no actual calendar integration)
- Real AI call transcription or analysis (mock insights)
- Real-time notifications or push alerts
- Analytics on conversion patterns, appointment duration, design feature correlation
- Manager/admin views
- Deal approval workflow automation
- Follow-up scheduling for lost/no-show scenarios (branching paths)
- Finance company API integration
- User authentication

## Data Model

### Opportunity (the central object — one per customer journey)
- `id` — unique identifier
- `customerName` — display name (e.g., "Robert & Jennifer Martinez") *(confirmed from prototype)*
- `address` — full street address *(confirmed)*
- `phone` — customer phone *(confirmed)*
- `utilityCompany` — e.g., "Eversource Energy" *(confirmed)*
- `leadSource` — e.g., "Solar Reviews" *(confirmed)*
- `avgMonthlyBill` — dollar amount *(confirmed)*
- `assignedRep` — field sales rep name *(confirmed)*
- `bookedBy` — inside sales rep who set the appointment *(confirmed)*
- `status` — "ACTIVE OPPORTUNITY", "CLOSED WON", "CLOSED LOST", etc. *(confirmed from prototype, full enum assumed)*
- `currentStage` — integer or enum for which journey stage is active *(assumed)*
- `nextAppointmentDate` — date/time of next scheduled appointment *(confirmed)*

### Journey Step (the stages within an opportunity)
- `id` — 1 through 8 *(confirmed from prototype)*
- `title` — step name *(confirmed: "Appointment Scheduled", "Photon Path Walk Around", "Aurora Design Session", "Proposal Presentation", "Site Assessment", "RSM Follow-up", "Contract & Financing", "Deal Approved")*
- `status` — "completed", "current", "pending" *(confirmed)*
- `date` — scheduled or completed date *(confirmed)*
- `opportunityId` — parent opportunity *(assumed)*

### Appointment
- `date` — date/time *(confirmed)*
- `type` — e.g., "Initial Consultation", "Follow-up Call", "Re-engagement Call" *(confirmed)*
- `rep` — rep name *(confirmed)*
- `outcome` — text summary *(confirmed)*
- `duration` — e.g., "45 min" *(confirmed)*
- `opportunityId` — parent opportunity *(assumed)*

### Call Record / AI Booking Insights
- `keyPoints` — text summary of customer motivations *(confirmed from prototype)*
- `concerns` — text summary of objections/worries *(confirmed)*
- `timeline` — text summary of customer's urgency *(confirmed)*
- `opportunityId` — parent opportunity *(assumed)*
- `callDate` — when the booking call happened *(assumed)*
- `insideSalesRep` — who made the call *(assumed)*

### Inquiry History
- `date` — inquiry date *(confirmed)*
- `source` — e.g., "Solar Reviews", "Phone", "Email" *(confirmed)*
- `action` — e.g., "Website form submission", "Inbound call" *(confirmed)*
- `details` — text description *(confirmed)*
- `opportunityId` — parent opportunity *(assumed)*

### Utility Data
- `company` — utility company name *(confirmed)*
- `rateIncreases` — array of `{ date, percentage }` *(confirmed from prototype)*
- `currentRatePeak` — $/kWh *(confirmed: $0.284)*
- `currentRateOffPeak` — $/kWh *(confirmed: $0.198)*

### Photon Path Photos
- `category` — "Roof Overview", "Panel Access", "Obstacles", "Electrical" *(confirmed)*
- `imageUrl` — stored photo URL *(assumed)*
- `opportunityId` — parent opportunity *(assumed)*
- `capturedAt` — timestamp *(assumed)*

### Proposal (generated from Aurora)
- `designData` — Aurora system design output *(assumed)*
- `systemSize` — kW *(assumed)*
- `estimatedSavings` — $/month *(assumed)*
- `proposalPdf` — URL to generated document *(assumed)*
- `opportunityId` — parent opportunity *(assumed)*

### Site Assessment
- `scheduledDate` — when the assessment happens *(assumed)*
- `status` — scheduled, completed, issues found *(assumed)*
- `findings` — roof upgrade needed, electrical panel upgrade, structural issues *(assumed from conversation)*
- `opportunityId` — parent opportunity *(assumed)*

### Contract
- `signingDate` — scheduled contract signing *(assumed)*
- `financeCompany` — which financing partner *(assumed)*
- `approvalStatus` — pending, approved, hold *(assumed from conversation: "approval process hold")*
- `additionalProducts` — other products purchased *(mentioned in conversation)*
- `opportunityId` — parent opportunity *(assumed)*

## Fields & API Names to Confirm

Before connecting to real data sources, these need to be verified against actual systems:

- [ ] Salesforce Opportunity field names (if Salesforce is the backing system)
- [ ] Salesforce Opportunity stage values — do they match our 8-step journey exactly?
- [ ] Customer name field — is it one field or first/last split?
- [ ] Utility company field — free text or picklist? What are all valid values?
- [ ] Lead source field — what are all valid values? Is "Solar Reviews" the exact string?
- [ ] "Booked By" field — does this exist on the Opportunity or is it derived from the Appointment?
- [ ] Average monthly bill — is this stored on the Opportunity, derived from utility bill scans, or entered manually?
- [ ] Appointment object — is this a Salesforce Event, a custom object, or something else?
- [ ] Call record storage — where are inside sales booking calls stored? CRM, call center software, separate recording tool?
- [ ] AI insight fields — are these generated from an existing AI tool or do we need to build the analysis pipeline?
- [ ] Aurora customer ID / project ID — what's the identifier used to launch Aurora with pre-populated data?
- [ ] Photo storage — where are Photon Path photos stored today?
- [ ] Finance company names and approval status values
- [ ] Site assessment team assignment — how is this routed?
- [ ] RSM (Regional Sales Manager) — how are these assigned to opportunities?

## Integrations

### 1. Aurora Solar (Design Generation)
**What it does**: Generates 3D solar system designs, panel layouts, shading analysis, and cost proposals during the first appointment. Every first appointment includes an Aurora design session — no exceptions.

**Integration approach**: The interface provides a "Launch Aurora Design Tool" button that opens Aurora with customer data pre-populated (address, utility company, monthly bill, Photon Path photos). After the design session, results (system specs, proposal PDF, cost breakdown) need to sync back into the opportunity automatically.

**Auth**: Unknown — need to determine Aurora's API authentication model (API key, OAuth, session-based).

**What needs to be set up**: Aurora API access credentials, mapping between our customer data model and Aurora's input fields, webhook or polling mechanism to detect when a design session is complete.

**What's unknown**: Exact API endpoints, whether Aurora supports embedded iframe mode vs. new window launch, what data comes back via API vs. what must be exported manually, rate limits, and whether Photon Path photos can be programmatically imported into Aurora.

### 2. Calendar Systems (Appointment Sync)
**What it does**: Two-way sync between the timeline interface and the rep's calendar. When a rep schedules a follow-up, site assessment, RSM call, or contract signing, it creates a calendar event and sends notifications. When an appointment is modified externally, the timeline updates.

**Auth**: Depends on calendar provider — Google Calendar API (OAuth 2.0) or Microsoft Graph API (OAuth 2.0 for Outlook).

**What needs to be set up**: OAuth app registration, calendar API permissions, mapping between our appointment types and calendar event formats.

**What's unknown**: Which calendar system Venture Solar uses (Google Workspace vs. Microsoft 365), whether reps use personal or company calendars, notification preferences, and whether calendar events need to include customer details or link back to the opportunity.

### 3. Call Recording / AI Transcription
**What it does**: Surfaces AI-generated insights from inside sales booking calls in the Pre-Appointment Brief panel. Insights include key points (customer motivations), concerns (objections), and timeline (urgency).

**Auth**: Depends on call recording platform.

**What needs to be set up**: Access to call recordings, AI transcription pipeline (could be existing tool like Gong/Chorus, or custom using OpenAI Whisper + GPT), structured output format for insights.

**What's unknown**: Current call recording system, whether calls are already transcribed, what AI service will generate the structured insights, how much historical call data exists, and quality/completeness of recordings.

### 4. Utility Rate Data
**What it does**: Provides rate increase history and current rate information for the customer's utility company, displayed in the Pre-Appointment Brief panel. Primary market is Connecticut.

**Auth**: Depends on data source — could be a third-party API, scraped data, or manually maintained.

**What needs to be set up**: Data source selection, update frequency, rate data model.

**What's unknown**: Data source (OpenEI, utility company APIs, manual entry), update frequency needed, whether we need historical rates or just current, and whether all Connecticut utilities are in scope or just Eversource and United Illuminating.

### 5. Photo Storage (Photon Path)
**What it does**: Stores and retrieves photos taken during the Photon Path walk-around (roof overview, panel access, obstacles, electrical panel). Photos are captured on-site and need to be viewable in the timeline and potentially importable into Aurora.

**Auth**: Cloud storage auth (GCS service account or similar).

**What needs to be set up**: Storage bucket, upload endpoint, image optimization pipeline, categorization system.

**What's unknown**: Current photo capture method (phone camera, dedicated app), storage solution, image size/format requirements, and whether photos need to be geotagged or timestamped.

### 6. CRM Backend (Salesforce or equivalent)
**What it does**: Source of truth for opportunity data, customer records, appointment history, and stage tracking. All updates from the timeline interface sync back here.