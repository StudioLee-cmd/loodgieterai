---
title: "Mobiele loodgieter-website: waarom 70% afhaakt op de telefoon"
excerpt: "De meeste loodgieter-websites verliezen drie van elke vier mobiele bezoekers binnen 30 seconden. Dit is wat dat veroorzaakt en hoe je het oplost zonder je site opnieuw te bouwen."
date: "2026-04-25"
cluster: "website-conversie"
authorSlug: "tim-van-der-lee"
image: "/images/blog/mobiele-loodgieter-website-conversie.jpg"
tags: ["Loodgieter", "Website", "Mobiel", "Conversie"]
---
Iemand zit met een lekkende kraan in de keuken en pakt zijn telefoon. Hij Google't "loodgieter [stad]", klikt op het derde resultaat — jouw website. Hij ziet een trage pagina, een hero-foto die maar half laadt, een menu met een hamburger-icoon waar hij eerst op moet zoeken om je telefoonnummer te vinden, en een contactformulier met acht velden. Hij sluit het tabblad en gaat door naar de volgende loodgieter. Dat zijn 30 seconden waarin je een potentiële spoedklus van €280 verliest, en je merkt het nooit.

Dit is geen randgeval. Voor de meeste Nederlandse loodgieter-websites verliest 60 tot 75 procent van de mobiele bezoekers het tabblad voordat ze contact opnemen. Het probleem zit zelden in de inhoud van je website — het zit in vijf concrete fricties op de telefoon die je waarschijnlijk niet ziet omdat je je eigen site checkt op je laptop. Dit artikel beschrijft die fricties en hoe je ze oplost zonder je hele site opnieuw te bouwen.

**In het kort:**

- 70 tot 80 procent van de loodgieter-zoekers gebruikt een telefoon, niet een laptop. Een mobiel-onvriendelijke site verliest de meerderheid van je verkeer voordat ze ook maar één pagina hebben gelezen.
- Vijf veelvoorkomende fricties: laadtijd boven 3 seconden, een telefoonnummer dat niet klikbaar is, een hamburger-menu dat de bel-knop verstopt, een formulier met meer dan 4 velden, en knoppen of tekst onder de minimum-mobiele-grootte.
- Op mobiel hoort de bel-knop boven de vouw, dik en duidelijk. WhatsApp komt op de tweede plek, contactformulier op de derde.
- Een goed werkende mobiele loodgieter-site converteert tussen 8 en 15 procent van de bezoekers naar een telefoontje of WhatsApp; een gemiddelde site komt zelden boven de 3 procent.
- Test je mobiel niet door je eigen site te bekijken — die heb je al ingeladen in je browser. Test op een toestel waar je site nog nooit op is geweest, op 4G zonder Wi-Fi.

## Waarom mobiel fundamenteel anders is dan desktop voor loodgieter-zoekers

De typische desktop-bezoeker is iemand die rustig oriënteert: naam Google't, doorklikt naar drie of vier sites, vergelijkt prijzen of reviews, en pas later contact opneemt. De typische mobiele loodgieter-bezoeker is iemand met haast en stress. De tegel staat los, de afvoer is verstopt, de cv-ketel doet het niet en het is zaterdagavond. Hij wil binnen tien seconden weten of jij beschikbaar bent en hoe hij je belt.

Dat verschil heeft consequenties voor elke knop, elke foto en elke tekst op je site. Op desktop kan een groot uitleg-blok bovenaan werken; op mobiel kost het je de bezoeker. Op desktop is een uitgebreid contactformulier acceptabel; op mobiel is het een drempel die de meeste mensen niet nemen. Op desktop kun je vertrouwen wekken met portfoliofotos en testimonials; op mobiel moet eerst de bel-knop in beeld staan.

Voor de loodgieter-business-owner betekent dit dat je site twee verschillende ervaringen moet bieden. De meeste loodgieter-websites bieden alleen de desktop-versie en stoppen die in een mobiele template, zonder de echte herontwerp die de mobiele zoeker eigenlijk nodig heeft. Het verschil tussen "responsive" (de tekst loopt door) en "mobile-first" (de site is ontworpen voor de telefoon) is in conversie-cijfers vaak een factor 3 of 4.

## De 5 fricties die het meeste afval veroorzaken op mobiel

![Smartphone met een loodgieter-website op een houten werkbank, naast moersleutel en notitieboek](/images/blog/mobiele-loodgieter-website-conversie-2.jpg)

### 1. Laadtijd boven 3 seconden

Google's eigen onderzoek wijst uit dat 53 procent van de mobiele bezoekers afhaakt als een pagina langer dan 3 seconden laadt. Voor loodgieter-zoekers met haast ligt dat nog lager: vermoedelijk 60 tot 70 procent stopt al bij 4 seconden. De grootste oorzaak van trage loodgieter-websites is bijna altijd dezelfde: ongoptimaliseerde foto's. Een hero-banner die op desktop 2 MB weegt, weegt op mobiel ook 2 MB en moet via een trage 4G-verbinding worden geladen.

Praktische oplossing: comprimeer alle foto's naar maximaal 200 kB per stuk (TinyPNG, Squoosh of WebP-conversie). Maak de hero kleiner of vervang door een vlakke kleur met tekst erover. Test je laadtijd op pagespeed.web.dev — alles boven de 3 seconden is direct conversieverlies.

### 2. Telefoonnummer dat niet klikbaar is

Op een loodgieter-website hoort het telefoonnummer een directe `tel:`-link te zijn, zodat één tap op het nummer het belscherm opent. Veel loodgieter-sites hebben het telefoonnummer als gewone tekst, of als afbeelding (om scrapers tegen te houden), waardoor de gebruiker het moet onthouden, het tabblad moet sluiten, het belscherm moet openen en het nummer handmatig moet intikken. Op die manier verlies je twee derde van de potentiële bellers.

Praktische oplossing: zorg dat elk telefoonnummer in de HTML-broncode is opgemaakt als `<a href="tel:+31201234567">020 123 4567</a>`. Plaats het minimaal twee keer prominent: in de header en in een sticky-bar onderaan. Gebruik een [AI telefonist](/voice-ai) als je niet altijd zelf kunt opnemen — anders is een klikbaar nummer net zo goed verloren werk als de avond/het weekend ingaat zonder antwoord.

### 3. Hamburger-menu dat de bel-knop verstopt

Het hamburger-icoon (de drie streepjes rechtsboven) is op desktop een logische uitbreiding, maar op mobiel verstopt het je belangrijkste actie. De gebruiker moet eerst op de drie streepjes tikken, dan in het uitvouwende menu zoeken naar "Contact", dan op die pagina klikken om het telefoonnummer te zien. Drie taps in plaats van één.

Praktische oplossing: de bel-knop hoort niet in het menu. Hij hoort als een zichtbare, contrasterende knop in de header — bij voorkeur ook als een sticky-bar onderaan zodat hij meedraait als de gebruiker scrollt. WhatsApp komt op de tweede plek met dezelfde behandeling. De rest van het menu (over ons, diensten, gebied) mag in de hamburger blijven.

### 4. Contactformulier met meer dan 4 velden

Een formulier met velden voor naam, e-mail, telefoonnummer, adres, postcode, type klus, omschrijving, gewenste tijdslot en akkoordvinkje is op desktop al een drempel. Op mobiel — waar het toetsenbord het halve scherm bedekt en typen sowieso traag is — verlies je 70 tot 90 procent van de mensen die het formulier openen. Voor een loodgieter is een lang formulier bijna altijd overcomplete administratie die op de kosten van conversie gaat.

Praktische oplossing: drie velden maximaal op mobiel. Naam, telefoonnummer, korte omschrijving (1-2 zinnen). De rest haal je op tijdens je terugbelmoment. Een nog kortere variant: alleen telefoonnummer + "wat is er aan de hand", en je belt zelf binnen 5 minuten terug. Dat converteert in de praktijk drie tot vijf keer beter dan een uitgebreid formulier. Combineer dit met een goed gekozen [AI-chatbot](/chatbot) op de site om buiten kantooruren leads op te vangen.

### 5. Tekstgrootte onder 16 px en knoppen onder 44 px

Apple en Google geven beide aan dat 16 pixels het minimum is voor leesbare body-tekst op mobiel, en dat tikbare elementen minimaal 44 bij 44 pixels moeten zijn. Veel loodgieter-websites hebben — vaak per ongeluk, via een desktop-eerst CSS — body-tekst onder de 14 pixels en knoppen die te klein of te dicht op elkaar staan. Het resultaat: bezoekers die "verkeerd" tikken en gefrustreerd weggaan.

Praktische oplossing: open je site op je telefoon, knijp niet (geen pinch-to-zoom), en lees de body-tekst zoals een normale bezoeker dat zou doen. Als je moet inzoomen om iets te lezen, is je font te klein. Doe hetzelfde voor knoppen: kun je zonder zorgen op de bel-knop tikken zonder dat je per ongeluk een andere knop raakt? Zo nee, vergroot ze.

## Wat de mobiele loodgieter-bezoeker in de eerste 5 seconden moet zien

In de eerste 5 seconden — dat is letterlijk de gemiddelde tijd voordat een mobiele bezoeker beslist of hij blijft of weggaat — moet hij vier dingen kunnen herkennen zonder te scrollen of te tikken: dat hij op een loodgieter-website is, in welk gebied je werkt, of je nu beschikbaar bent, en hoe hij je belt. Niet meer, niet minder.

Vertaald naar een homepage: een korte H1 ("Loodgieter [stad/regio]"), één regel beschikbaarheid ("24/7 beschikbaar" of "Vandaag nog langs"), één vetgedrukte bel-knop. Eventueel een tweede regel "of stuur ons een WhatsApp" met een knop ernaast. Geen lange uitleg, geen carrousel met sliders, geen welkomstvideo. Voor desktop kan dat allemaal — maar dat is een ander tabblad.

Pas onder de vouw — als de bezoeker scrollt — komt de extra info: diensten, werkgebied, reviews, prijsindicaties. Wie blijft scrollen is al binnen, en wie binnen 5 seconden niet de bel-knop ziet, scrollt sowieso niet meer.

## CTA-prioriteit op mobiel: bel, WhatsApp of formulier?

Een belangrijke beslissing op je mobiele loodgieter-website is welke acties je in welke volgorde aanbiedt. Niet alle CTA's zijn gelijk waardevol. Onderstaande tabel geeft de typische conversie en tijd-tot-contact per kanaal.

| Kanaal | Mobiele conversie | Tijd tot contact | Beste voor |
|---|---|---|---|
| **Bel-knop** | 6-12% | < 30 sec | Spoedklussen, urgente lekkages |
| **WhatsApp-knop** | 4-9% | 1-5 min | Vragen met info-uitwisseling, foto's van schade |
| **Contactformulier (3 velden)** | 2-5% | 5-30 min | Niet-urgent, prijsindicatie, planning |
| **Contactformulier (8+ velden)** | < 1% | > 30 min | Vermijd op mobiel — verlies > opbrengst |
| **E-mailadres als tekst** | < 1% | 1-24 uur | Skip — te veel friction |

Voor een typische loodgieter is de optimale prioriteit op mobiel: bel-knop bovenaan, WhatsApp als tweede, kort formulier als derde, geen e-mailadres-als-tekst en geen lang formulier. Dat is geen vrije keuze meer in 2026 — het is gewoon hoe loodgieter-websites converteren. Wil je weten welke pagina's op jouw site het meest verlies veroorzaken? Bekijk ook de [tarieven van LoodgieterAI](/tarieven) als je benieuwd bent wat een complete managed-service kost — een audit van je mobiele site zit standaard in elk pakket inbegrepen.

## Hoe meet je of je mobiele site werkt?

Drie meetpunten bepalen of je mobiele loodgieter-site converteert of lekt.

**1. Mobiele bouncerate (Google Analytics 4 / Plausible).** Een gezonde loodgieter-site zit onder de 55 procent. Boven de 70 procent betekent dat een meerderheid van de bezoekers binnen seconden weggaat — vrijwel altijd een teken van trage laadtijd of een hero die niet aansluit bij hun zoekintentie.

**2. Conversie van mobiel verkeer (% klikkers op bel-knop, WhatsApp of formulier-submit).** Een goed werkende mobiele loodgieter-site converteert 8 tot 15 procent. Onder de 3 procent is een teken dat je bel-knop niet zichtbaar genoeg is, of dat je laadtijd te lang is. Track dit via een eenvoudig event op je bel-knop in Google Analytics 4.

**3. Pagespeed-score (pagespeed.web.dev).** Streef naar een mobile-score van 80+. Onder de 60 verliest je site verkeer voordat het ook maar één tap heeft gedaan. Concentreer eerst op image-compressie en third-party scripts (chatbot-widgets, analytics, ads); die zijn meestal de grootste vertragers.

Twee weken meten geeft genoeg data om een eerste oordeel te vellen. Test daarna gericht: vervang één element per keer, meet twee weken, en kijk wat de conversie doet. Knaagje-aan-knaagje testen werkt op een loodgieter-site beter dan een complete redesign in één keer.

## Mobiele site én Google-zichtbaarheid: het is één pakket

Een snelle, mobiel-vriendelijke site werkt twee kanten op. Direct: meer bezoekers worden klant. Indirect: Google ziet je site sneller laden en beloont dat met een hogere positie in de mobiele zoekresultaten — wat weer meer bezoekers oplevert. Sinds Google's mobile-first indexing (2021 voor alle nieuwe sites, 2024 voor alle bestaande) bepaalt de mobiele versie van je site je hele ranking, óók de desktop-positie.

Dat betekent in de praktijk: een trage mobiele loodgieter-site verliest niet alleen mobiele klanten, hij verliest ook desktop-vindbaarheid. Twee lekken voor één probleem. Wie alleen aan zijn [Google-zichtbaarheid](/seo) werkt zonder mobiele optimalisatie, betaalt voor verkeer dat zijn eigen site niet kan opvangen. Eerst de site fixen, daarna de SEO-investering schalen.

## Veelgestelde vragen

### Heeft een dure responsive website automatisch een goede mobiele conversie?

Niet automatisch. Veel responsive websites zijn ontworpen op desktop en daarna mobielvriendelijk gemaakt — dat is iets anders dan een mobile-first ontwerp. Test je site altijd op een echt toestel, niet alleen op de "mobile preview" in je browser. De praktische ervaring op een telefoon is wat telt, niet hoe het er in een simulator uitziet.

### Moet ik mijn hele website opnieuw laten bouwen voor mobiel?

In de meeste gevallen niet. De vijf fricties hierboven kun je vrijwel altijd oplossen met aanpassingen aan je bestaande site: foto's comprimeren, telefoonnummer klikbaar maken, sticky-bar onderaan toevoegen, formulier inkorten. Een complete herbouw is alleen nodig als je site nog op een echt verouderd platform draait (oude WordPress-themes vóór 2018, bijvoorbeeld) of zo traag is dat optimalisatie geen verschil maakt.

### Wat als ik vooral via Google Bedrijfsprofiel klanten krijg, niet via mijn website?

Dan is je website nog steeds de plek waar bezoekers landen na het zien van je profiel — en de mobiele ervaring bepaalt of ze blijven of teruggaan naar de zoekresultaten. Een sterke Google Bedrijfsprofiel-aanwezigheid en een zwakke mobiele site werken elkaar tegen. Een AI-scan brengt in een paar minuten in kaart waar je grootste lek zit.

### Welke conversie-cijfers haalt een goed geoptimaliseerde loodgieter-site echt?

Realistisch: 8 tot 15 procent van de mobiele bezoekers belt of WhatsAppt na een goed geoptimaliseerd traject. Topsites halen 18 tot 22 procent maar dat vraagt verder werk dan alleen mobiele optimalisatie (sterke reviews, prijsstelling, expliciet werkgebied, garantie). Begin met de basis op orde — daarna kun je de bovenkant van het bereik najagen.

### Hoe vaak moet ik mijn mobiele site testen?

Minimaal eens per kwartaal volledig (op een ander toestel dan dat van jezelf) en bij elke grotere wijziging — nieuwe foto's uploaden, een plugin updaten, een redesign van één pagina. Veel loodgieters merken pas dat hun site traag is geworden als de telefoon stopt te rinkelen, en dat is twee tot drie maanden te laat.

## Conclusie

Mobiele optimalisatie van je loodgieter-website is geen "leuk extra" meer — het is voor de meeste Nederlandse loodgieters het verschil tussen 3 procent en 12 procent conversie op je belangrijkste verkeer. De vijf fricties hierboven zijn binnen één tot twee weken op te lossen, vrijwel altijd zonder een complete herbouw. Het effect zie je terug in twee weken: meer telefoontjes en WhatsApps op de drukke avonden en weekends die je hardste verkeer geven.

Begin met de meest waardevolle zes-uurs-investering: comprimeer je foto's, maak je telefoonnummer klikbaar, voeg een sticky bel-knop toe. Daarna pas naar het formulier en de typografie. Wil je weten welk van deze vijf fricties op jouw site de grootste lek veroorzaakt? Plan een [gratis website-scan](/gratis-website) en je krijgt per pagina concrete punten met prioriteit, plus een schatting van het verlies dat ze veroorzaken. Met de Groei-of-Geld-Terug Garantie van LoodgieterAI zit je vast aan niets — alleen aan een eerlijk overzicht van waar je site nu staat en wat de eerste drie verbeteringen je opleveren.
