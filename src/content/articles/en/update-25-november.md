---
titre: "Update, 25 November: the address is stuck, the management system moves on"
date: 2026-11-25
langue: en
etape: 0
statut: en cours
resume: "The registered address hasn't moved: Water Festival, police busy elsewhere. Everything else is on track: Chantrea Systems' management system works, in Khmer, and now needs its 700 texts reviewed and certified."
tags: [getting started, company, address, khmer, odoo]
brouillon: false
traduction: point-25-novembre
---

A week after the [starting point](/blogsdg/en/articles/starting-point/), here is where things stand. One step is stuck: the company's registered address. Everything else is going well, especially the system that will run the company day to day.

## The registered address: no progress

This was the first obstacle in the series, and it is still there. No registered address, no company. No company, no work permit.

This week, two things brought everything to a halt:

- **The Water Festival.** Bon Om Touk is one of the biggest holidays in the country. During those days, government offices run at a slow pace.
- **The police are busy.** They are taken up by the festival, and the step that depends on them is waiting.

What exactly I need from the police for the address: [TO BE COMPLETED BY STEFAN]

When I can follow up: [TO BE COMPLETED BY STEFAN]

The calendar doesn't stop, though: my visa still runs out in March, and the company, then the work permit, have to be done before that. Every week lost on the address comes off the end.

## Everything else is on track: Chantrea Systems' management system

While waiting for the company, I built the system that will run it: internal management and a customer area. It is based on [Odoo](https://www.odoo.com/) 19 Community, an open-source business management suite, plus modules from the OCA community and modules written for Chantrea.

**The repository:** [github.com/stefan-cambodia/chantrea-odoo](https://github.com/stefan-cambodia/chantrea-odoo)

Work started on 21 November. Here is what works as of 22 November.

**For customers, in their area:**

- They log in in Khmer, English or French, and get the language of their account back.
- They ask for help: a ticket, from the customer area or by email. They get an acknowledgement in their language, in the company's name.
- They see their equipment (servers, network, workstations, licences) and the status of each warranty, read-only.
- They accept and sign a quotation online, and download their documents. One customer cannot see another customer's documents: this is checked by tests.

**Printed documents, the Cambodian way:**

- Quotations and invoices in Khmer, with English just below.
- The total in dollars and in riels, at the official daily rate published by the [National Bank of Cambodia](https://www.nbc.gov.kh/). If the official rate is not available yet, the invoice says so.
- Service reports, signed on site by the customer.

**For me, on the management side:**

- Monthly maintenance contracts, which prepare their invoice as a draft.
- A record for each piece of equipment, with alerts before the warranty ends. The system refuses to store passwords there.
- Mandatory two-factor authentication for staff.
- An encrypted backup every night, and a restore test every week. The restore has been checked end to end locally.

**What isn't done:**

- Installation on the real server: the script is written, but the system isn't live yet. Planned date: [TO BE COMPLETED BY STEFAN]
- And above all, the Khmer review, which is the next step.

## Next step: getting the Khmer certified

All the Khmer texts in the system were translated from English by an AI (Claude). I don't read Khmer. So I can't send a Cambodian customer an invoice whose wording I can't vouch for.

These texts are gathered in a single file: [RELECTURE_KM.md](https://github.com/stefan-cambodia/chantrea-odoo/blob/main/docs/RELECTURE_KM.md) (in French). Each line gives the Khmer text, the English original and where it appears. Each time a line is reviewed, its status changes to "reviewed" and the counter goes up.

The file has **700 texts**, in three parts:

1. **Printed documents**: quotations, invoices, service reports. 65 texts. This is what every customer holds in their hands, and what the tax administration sees.
2. **Chantrea modules**: ticket categories, emails, customer area home page. 65 texts.
3. **Odoo and OCA texts** that customers see. 570 texts.

Today: **0 out of 700 reviewed.**

The order is set: parts 1 and 2 first, because every customer sees them, then part 3.

I'm looking for a native Khmer speaker to review and certify this file. What I still have to decide:

- who: a certified translator, a translation agency, or a trusted reviewer: [TO BE COMPLETED BY STEFAN]
- the cost: [TO BE COMPLETED BY STEFAN]
- the time it takes: [TO BE COMPLETED BY STEFAN]
- whether official certification is required for invoices, or whether a review is enough. Official source: [TO BE COMPLETED BY STEFAN: link to the tax administration's rule on the language of invoices]

## What changes in the roadmap

Nothing was completed this week. Step 3, **finding premises or a registered address**, stays open and holds up everything after it. I'm adding a step to the journey, one that can move forward without waiting for the company: **getting the management system's Khmer reviewed and certified.**

I'll come back to the address as soon as the police are back at their desks.
