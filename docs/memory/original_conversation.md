# Original Planning Conversation
**Project:** venture-solar-crm-timeline
**Date:** 2026-04-20

> This is the raw brainstorming conversation that produced this project scaffold.
> Use it to recover context, resume planning, or onboard a new contributor.
> Paste it into any AI tool with the prompt: "Read this planning conversation and help me continue building."

---

Ignition: Hey — tell me what's on your mind. What are you trying to solve, or build, or figure out? Start wherever feels natural.

User: I would like help  designing  the part of our CRM that are  sales team interacts with  period  right now it's extremely clunky  as you know  and I want there to be  a journey that A salesperson goes through  for every single opportunity  period  Once A salesperson gets  an appointment put in their name it also puts the opportunity in their name  period I'm thinking some kind of  timeline  in chronological serialized order for a salesperson  that  gives the breakdown of a journey of a customer period  what happens first is the appointment gets put in their name period  I'll just give an example  let's say someone gets  an appointment assigned to them for  a  Tuesday  at 5:00 p.m.  and it's currently Sunday  it should show that appointment  coming up you should be able to see insights  for that appointment from  the  call  that the inside sales team when they made it period they should be smart AI  booking insights  period  you should also be able to see the breakdown  of the lead Source period have we met with them before and really just some kind of pre-appointment brief to get the salesperson prepared  for the appointment period  you should also be able  to  and it's cold outside  next you should have the  part of the appointment  where the salesperson is actually with  the homeowner  period  if someone is taking next steps they'll be scheduling a call with the local sales manager to resolidify the meeting and a  site assessment that we need to complete  before we get the customer signed off  period  the homeowner might need some kind of roof  upgrade  or an electric panel upgrade or structural upgrade they might also buy other products from us  and we hope to have the contract  and everything figured out  before we're going back for the contract signing  period  after they sign the contract there should be some kind of smart deal submission and Finance Company approval that the salesperson can figure out  on their own  and then if we don't have everything we need it might sit in approval process hold where we're waiting to get something figured out before we can approve the project and once it  is done with approval process  hold or approval process if it didn't need anything else the project gets Ford they don't wind up moving forward  should be some kind of chronological  Journey where we can figure out next  steps for example we are scheduling follow-up meetings.

Ignition: This is fascinating — you're talking about transforming the entire sales experience from a scattered set of tools into one coherent journey that actually matches how sales works in the real world. I love that you're thinking chronologically, because that's exactly how a salesperson experiences their day.

Let me pull out what I'm hearing: You want to create a timeline-based interface where every opportunity becomes a living journey that guides the rep through each stage — from pre-appointment prep all the way through contract signing and deal submission. And you want it packed with intelligence at every step.








This makes me think big picture — what if this became the command center that every field rep opens first thing in the morning? Like, instead of logging into Salesforce and trying to piece together what's happening today, they open this and immediately see their entire week laid out as a series of customer journeys?

A few things I'm curious about:

**The intelligence layer** — you mentioned AI booking insights from inside sales calls. How much call data do you have? Are these recorded? Because there's a massive opportunity here to surface not just "customer is interested in solar" but "customer mentioned they're concerned about roof age, has a $200 electric bill, and their neighbor just got solar." That level of prep could be game-changing.

**The workflow connections** — when a rep schedules that follow-up call with the local sales manager, does that need to sync back to calendars, trigger notifications, update the opportunity stage? And the site assessment — is that something that gets assigned to a different team, or does the same rep handle it?

**What happens when things go sideways?** — Like if a customer no-shows, or if the roof assessment reveals a major issue that kills the deal. Does the journey need to handle those branching scenarios?

What's the version of this that would make your best rep 2x more effective? What would they be able to do that they can't do today?

User: we will be having lots of information from the inside sales book and call period I forgot to mention as part of the visit  in the first meeting we are generating a proposal  and a design  with Aurora  we are doing that no matter what

Ignition: Ah, that's huge! So every single first appointment becomes a design session — you're not just talking about solar, you're showing them exactly what their system would look like and what it would cost. That completely changes the timeline flow.

So the journey becomes: prep → appointment/design → proposal presentation → next steps (site assessment, manager call, etc.) → contract → deal submission. And Aurora is doing the heavy lifting on the design side during that first visit.

This is where I start thinking really big. What if this timeline interface became the thing that actually guides the entire appointment? Like, the rep opens it on their tablet, and it's not just showing them what's coming up — it's actually their workflow tool during the visit?

**During the appointment itself:**
- Pull up the customer brief 
- Walk through the Aurora design process (maybe embedded?)
- Generate and present the proposal
- Capture next steps and automatically schedule follow-ups
- Update opportunity stage in real-time

**The Aurora integration** — are you thinking the rep launches Aurora separately, or could this interface actually embed the Aurora workflow? Because if a rep could do the entire customer journey without switching apps, that's powerful.

**Proposal delivery** — once Aurora generates the design and proposal, how does that get to the customer? Email? Printed on-site? Could this interface handle that delivery and track whether they've opened it?

What's the current friction with Aurora? Do reps struggle with it, or is it pretty smooth? And when you say "no matter what" — even if it's clear the customer isn't a fit, you're still doing a design to show them what's possible?

User: yes everything needs to sync back to  calendar is trigger notifications  they need to update the opportunity stage and need to update the appointment

Ignition: Perfect — so this becomes a true command center that's both showing the journey AND actively managing it. When a rep schedules that follow-up call or marks a site assessment as needed, the whole system updates in real-time.

That Aurora integration is really interesting. Are you thinking the rep stays inside this interface and Aurora launches as an embedded widget, or more like a seamless handoff where they click "Start Design" and it opens Aurora but then syncs the results back automatically?

**The intelligence piece** — you mentioned insights from inside sales calls. How much detail are we talking? Is this:
- Basic notes ("interested in battery backup")
- Transcribed call highlights with sentiment
- Full call analysis with objection patterns and buying signals

Because if you have rich call data, this prep phase could be incredible. Imagine the rep seeing "Customer asked about financing 3 times, mentioned concern about roof age, and specifically requested panels that don't look industrial."

**Calendar and notification orchestration** — when that site assessment gets scheduled, who needs to know? Does it go to a different team? Do you need automatic reminders? And if the customer cancels last minute, what cascade of updates happens?

**The proposal moment** — after Aurora generates the design, what's the ideal handoff to the customer? Do you print it on-site, email it immediately, or present it digitally? This could be where you capture their reaction in real-time and determine next steps.

What would success look like if this worked perfectly? Like, what would change about how your sales team operates day-to-day?

User: the interface should be able to launch Aurora on its own

Ignition: Got it — so this becomes a true orchestration layer. The rep never leaves your interface, but Aurora launches seamlessly when it's design time, then the results flow back into the customer journey automatically.

This is really powerful because you're not just building a better view of the sales process — you're building the actual sales process. The interface becomes the workflow.

**The Aurora handoff** — when you say "launch Aurora on its own," are we talking about:
- Opening Aurora in a new tab/window but with customer data pre-populated?
- Actually embedding Aurora's interface inside your timeline view?
- Or more of an API integration where your interface presents a simplified design flow that talks to Aurora behind the scenes?

**The data flow back** — when the Aurora design is complete, what comes back? The 3D rendering, the proposal PDF, system specs, cost breakdown? And does that automatically populate into your opportunity record and trigger the next step in the timeline?

**Real-time updates** — if the rep is in an appointment and marks "Customer wants battery backup" or "Needs roof assessment," does that immediately notify other teams? Like, does the site assessment team get an alert, or the manager get flagged for the follow-up call?

What's the current pain with Aurora integration? Do reps have to manually copy information back and forth, or recreate customer details every time?

And bigger picture — what would this let you do that's impossible today? Like, could you start tracking conversion rates by appointment duration, or see which design features correlate with faster closes?
