---
titre: "Current projects: what I'm building while the paperwork moves"
date: 2026-11-18
langue: en
etape: 0
statut: en cours
resume: "Four projects are moving alongside the company setup: a real estate portal, a boating platform, a drivable reconstruction of Angkor and a Bitcoin terminal. Where each one stands, and what isn't done."
tags: [projects, getting started]
brouillon: false
traduction: projets-en-cours
---

Setting up the company is only half the work. The other half is what it will have to show. While the paperwork moves forward, I'm building four projects. This post presents them by what they do for the person using them, with their actual state as I write, including what's missing.

*Updated on 21 November 2026. What has changed since the first version, of 18 November, is summarised at the end of the post.*

[TO BE COMPLETED BY STEFAN: how these projects relate to Chantrea Systems. Company products, a showcase of skills, personal projects?]

## 1. A real estate portal for Cambodia

**What it is:** a property search portal, for sale and rent, covering the whole country.

**The problem I want to solve:** in Cambodia, there is no listings database shared between agencies. The same property is posted by several agencies, at different prices, with different photos, and listings stay online long after the sale.

**What the portal does:**

- **One property = one listing.** A single listing per property, with the list of agencies offering it and each one's price.
- **A last-confirmed date** shown on every listing, so you know whether it is still current.
- **A "foreigner-eligible" filter**, which keeps only properties a foreigner can buy. Official source on ownership rules for foreigners: [TO BE COMPLETED BY STEFAN: link to the text]

**The repository:** [github.com/stefan-cambodia/immo](https://github.com/stefan-cambodia/immo)

**Who it's for:** Western expats and investors (French, English), Chinese investors (Simplified Chinese), the Khmer market (Khmer). Russian became the portal's fifth language on 5 November.

**Where I stand (21 November):**

- Browsing works: search, map, listing pages.
- The catalogue is filled with real listings, collected every day from a public Cambodian portal. After catching up on a two-month backlog on 16 November, it holds 3,937 listings.
- Under way: pages by neighbourhood and property type, a dashboard for agencies, email or Telegram alerts on saved criteria.
- **What isn't done:** automatic reading of the listings agencies send on Telegram, and automatic translation, are written but have never run against the real AI service, for lack of an access key.
- No change since 16 November.
- Public launch: [TO BE COMPLETED BY STEFAN]

## 2. Cambodia Nautic: a boating platform

**What it is:** a platform for water activities in Southeast Asia: tourism, boat rental and sales, navigation, management for professionals, technical services, community. Cambodia is the first target market.

**The repository:** [github.com/stefan-cambodia/nautica](https://github.com/stefan-cambodia/nautica)

**What the platform does today (21 November):**

- **Public side, on the website:** search for an activity or a boat to rent (date, number of participants, price, distance), book, cancel according to the stated policy, leave a review once the trip is over. You can also search for a boat for sale, find a port and its services, join a waiting list for a full departure, and delete your own account. The interface exists in five languages: Khmer, English, French, Chinese, Thai.
- **Professional side:** an area to manage your business, fleet, activities, departures, bookings and team, with boat maintenance reminders, invoices and credit notes, accounting exports and promo codes.
- **A mobile app** (Android and iPhone), added on 19 November. For the public: the same searches and bookings, available offline. For the crew: the passenger list offline, the route, GPS track recording, and reporting departure and return. If the return isn't reported 30 minutes after the scheduled time, the shore team is alerted.
- **Accessibility** was checked on 20 November: automated checks on about fifty pages of the website, text enlarged to 200% in the app's five languages, phone screen readers.
- Opening a new country is done in the admin, without touching the code. It was tried with Thailand.

**What isn't done:**

- **Online payment.** Only payment on site works. Cards and QR code payment require contracts with payment providers, which I don't have.
- **Review** of the Khmer, Chinese and Thai by native speakers. The tool that prepares the texts for review is ready.
- **Phone notifications** are written, but not connected: accounts need to be created with Google (Firebase) and Apple. For text messages, no provider has been chosen.
- **Publishing on Google Play and the App Store:** the store listings and screenshots are ready in all five languages, and the Android version is signed. Still missing: developer accounts, the final logo, screenshots with real listings and a legal review of the texts.
- **Public launch:** hosting, domain name, accounts with outside services, legal and accounting sign-off. Launch date: [TO BE COMPLETED BY STEFAN]

## 3. Angkor at real scale, to explore by vehicle

**What it is:** a reconstruction of the Angkor area, built from open geographic data, at 1:1 scale. One metre in the game is one metre on the ground: a journey takes the same time as in real life. The aim is to use it for games and driving simulations, on Android phones and on PC.

**The repository:** [github.com/stefan-cambodia/angkor](https://github.com/stefan-cambodia/angkor)

**What works:**

- The whole area can be explored: 37 × 45 km, from the West Baray to the shore of the Tonlé Sap, through Angkor Thom, Angkor Wat, Siem Reap and Roluos.
- Nothing is placed by hand: roads, buildings, moats and reservoirs are at their surveyed position.
- Five vehicles to drive: car, motorbike, scooter, and two kinds of tuk-tuk: the three-wheeled auto-rickshaw and the remorque, a motorbike towing a passenger trailer.
- **Twenty temples now have their own model**, up from nine on 18 November. Since that date, they are rebuilt from the surveys of the École française d'Extrême-Orient: plans, sections and elevations drawn between 1935 and 1971, whose dimensions are read one by one. Angkor Wat, the eight temple-mountains (Phnom Bakheng, Baksei Chamkrong, Bakong, Pre Rup, East Mebon, Ta Keo, Phimeanakas, Baphuon), Banteay Srei, Thommanon, Chau Say Tevoda, Neak Pean, Banteay Kdei, Prasat Kravan, Prasat Bei and Banteay Samré. The Bayon, Ta Prohm and Preah Khan are started: only a few parts.
- **Central Siem Reap** looks more like the real town: the old colonial quarter around the Old Market, with its arcaded galleries and colourful façades, lit streets lined with trees, the signs and string lights of Pub Street at night, the pagodas and their stupas, the French administrative quarter with its villas.
- Villages have their houses on stilts, with hammocks, jars, bamboo fences, cows and chickens.
- Weather, night, headlights.
- On a mid-range Android phone, it ran at 80 frames per second. This measurement dates from 18 November and hasn't been repeated since the new temples were added.

**What isn't done:**

- It's a prototype. The visuals are still provisional. The temples have their volume and their tiers, without carvings.
- The other temples are still only shapes drawn from their outline on the map.
- When a survey doesn't give a height, it is estimated according to a written rule. No one has yet compared the models with an on-site survey.
- The controls haven't yet been tried with fingers, a gamepad or phone tilt, and no entry-level phone has been measured.

## 4. BTC Terminal: a workstation for following Bitcoin

**What it is:** a single screen, in the spirit of a Bloomberg terminal, that brings together what you need to read the Bitcoin market.

**The repository:** [github.com/stefan-cambodia/btcterm](https://github.com/stefan-cambodia/btcterm)

**What you see:** the price and its indicators, the order books of several exchanges, the price gaps between them, liquidations, ETF flows, the perpetual futures market, options, a news feed, the macroeconomic calendar, and configurable alerts. Each panel can go full screen.

It's a tool for reading the market. It places no orders.

**The latest additions (5 to 13 November):** a panel that puts signals to the test, alerts sent all the way to the phone, a one-page summary of the day, the move expected by options until expiry, retail positioning compared with large holders, and alerts on weekly or monthly extremes.

**Where I stand:** no change since 13 November. [TO BE COMPLETED BY STEFAN: personal use or meant for others, and what remains to be done]

## What I don't know yet

- Which of these projects will come first, and in what order: [TO BE COMPLETED BY STEFAN]
- How much time I spend on them alongside the paperwork: [TO BE COMPLETED BY STEFAN]
- What each one has cost so far (hosting, domain names, tools): [TO BE COMPLETED BY STEFAN]

I will update this post when one of them changes state.

## What has changed since the first version

**21 November 2026**

- **Cambodia Nautic:** a mobile app (19 November), with an offline mode for the crew, trip tracking and an alert when a return is late. Accessibility checked (20 November). Store listings and screenshots ready. Online payment and the public launch are still to do.
- **Angkor:** from nine to twenty modelled temples, now based on the surveys of the École française d'Extrême-Orient. Central Siem Reap redrawn from published sources.
- **Real estate portal:** no change since the post. Details added: the catalogue of real listings (3,937) and Russian as the fifth language, two changes that predate 18 November.
- **BTC Terminal:** no change since the post. The latest additions, from 5 to 13 November, are described.
