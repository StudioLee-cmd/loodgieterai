"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsArrowRight,
  BsWhatsapp,
  BsCalendar3,
  BsBellFill,
  BsLightning,
  BsChatDots,
  BsClockHistory,
  BsGearFill,
  BsArrowRepeat,
  BsXCircle,
  BsBoxSeam,
  BsTelephone,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const niche = siteDetails.niche?.toLowerCase() || "loodgieters";
const nicheSingular = niche.endsWith("s") ? niche.slice(0, -1) : niche;
const brand = siteDetails.siteName;

const workflows = [
  {
    icon: BsBellFill,
    title: "Automatische herinneringen",
    desc: `24 uur en 2 uur voor elke afspraak gaat er automatisch een WhatsApp- of SMS-herinnering uit. Bevestigen kan met één tik. Geen klant niet-thuis, geen vergeefse rit met de bus.`,
  },
  {
    icon: BsLightning,
    title: "Lead-opvolging",
    desc: `Nieuwe website-aanvraag of gemiste oproep? Klant krijgt binnen 60 seconden automatisch een bevestiging via WhatsApp of e-mail. Jij belt later terug, de lead is al opgevangen.`,
  },
  {
    icon: BsChatDots,
    title: "Klant-onderweg-communicatie",
    desc: `"Ik kom over 15 minuten" gaat automatisch uit zodra je in de bus stapt richting de klus. Geen verraste klant aan de deur, geen klacht over wachten — meer 5-sterren reviews.`,
  },
  {
    icon: BsCalendar3,
    title: "Agenda + bus-route sync",
    desc: `Nieuwe boekingen vanuit chatbot, Voice AI of de website landen automatisch in Google Calendar of Outlook. Routes per dag worden geoptimaliseerd zodat je niet kriskras door de stad rijdt.`,
  },
  {
    icon: BsCheck2Circle,
    title: "Review-verzoek na elke klus",
    desc: `Twee uur na afgerond werk gaat er automatisch een WhatsApp uit met directe Google-review link. Meer reviews, hogere ranking, meer instroom — zonder dat jij er aan hoeft te denken.`,
  },
  {
    icon: BsArrowRepeat,
    title: "Onderhoud-cycli (CV-ketel, ontkalking)",
    desc: `Klant had een CV-ketel installatie in november? In oktober gaat er automatisch een onderhoud-uitnodiging uit. Terugkerende klussen, terugkerende omzet — volledig automatisch.`,
  },
];

const reminderExamples = [
  "Bevestigings-bericht direct na boeking via Voice AI of chatbot",
  '"Wij komen morgen om 09:30" — 24u van tevoren',
  '"Ik vertrek over 15 minuten" — wanneer je in de bus stapt',
  "Factuur-volgop 3 dagen na klus (betaling-herinnering, vriendelijk)",
  "CV-ketel jaaronderhoud-herinnering, 12 maanden na installatie",
  "Reactiveer-bericht voor klanten die 6 maanden niets gehoord hebben",
];

const integrations = [
  { icon: BsWhatsapp, title: "WhatsApp Business", desc: "Het hoofdkanaal — 90% van loodgieter-klanten checkt WhatsApp sneller dan e-mail." },
  { icon: BsTelephone, title: "SMS / Telefoon", desc: "Voor klanten die geen WhatsApp gebruiken — gewoon een SMS. Werkt op elke telefoon." },
  { icon: BsCalendar3, title: "Google Calendar + Outlook", desc: "Afspraken sync je agenda automatisch. Geen dubbel-boekingen tussen jou en je monteurs." },
  { icon: BsBoxSeam, title: "Boekingssystemen", desc: "Custom boekingsformulier, online afsprakenboeker en Voice AI vullen dezelfde agenda." },
];

const steps = [
  {
    number: "01",
    title: "Wij brengen je flows in kaart",
    desc: `In een 30-min gesprek mappen we welke 3-5 flows direct waarde opleveren: gemiste oproepen, no-shows, review-verzoeken, CV-ketel onderhoud. Geen overkill, alleen wat oplevert.`,
  },
  {
    number: "02",
    title: "Wij bouwen de automatiseringen",
    desc: `Wij koppelen alles aan WhatsApp, je agenda, je boekingsformulier en je facturatie. Bestaande systemen blijven, ze gaan alleen automatisch samenwerken.`,
  },
  {
    number: "03",
    title: "Live binnen een week",
    desc: `Binnen 5-7 werkdagen draaien je flows. Wij testen elke route. Daarna pas je het zelf aan via een simpele dashboard — geen tech-kennis nodig.`,
  },
];

const painPoints = [
  {
    icon: BsXCircle,
    title: "Klant niet thuis = verloren rit",
    desc: `Je rijdt naar de klus, klant staat niet thuis. Een uur verloren, brandstof verspild, geen omzet. Eén automatische herinnering 24u + 2u van tevoren had het opgelost.`,
  },
  {
    icon: BsClockHistory,
    title: "Gemiste oproep, lead verdampt",
    desc: `Je zit onder een wasmachine, telefoon gaat. Tegen de tijd dat je terugbelt heeft de klant al een collega gebeld. Zonder automatische opvolging is het over.`,
  },
  {
    icon: BsGearFill,
    title: "CV-ketel onderhoud vergeten",
    desc: `Je hebt 200 klanten met CV-ketels die jaarlijks onderhoud nodig hebben. Zonder cyclus-systeem vergeet je 60% van die jaarlijkse omzet. Dat is duizenden euro's per jaar.`,
  },
];

const faqs = [
  {
    q: `Wat is workflow automatisering voor ${niche}?`,
    a: `Het is het automatisch versturen van berichten, follow-ups, herinneringen en review-verzoeken op het juiste moment in de klant-flow. Voor ${niche}: bevestiging na boeking, "ik kom eraan" voor je vertrekt, review-vraag na de klus, CV-ketel onderhoud-uitnodiging een jaar later. Het systeem doet het werk, jij focust op de klussen.`,
  },
  {
    q: "Werkt het samen met mijn huidige boekingssysteem en agenda?",
    a: "Ja. We koppelen aan Google Calendar, Outlook, en de gangbare boekings- en facturatie-tools. Je hoeft niets te vervangen — bestaande systemen blijven werken, ze gaan automatisch met elkaar communiceren.",
  },
  {
    q: "Worden alle berichten via WhatsApp verstuurd?",
    a: `WhatsApp is het hoofdkanaal omdat ${niche}-klanten daar het snelst reageren. Maar SMS, e-mail en zelfs telefoontjes (via de Voice AI) zijn ook mogelijk. Het systeem kiest het kanaal dat het beste werkt per klant.`,
  },
  {
    q: "Hoe weet het systeem wanneer ik in de bus stap?",
    a: `Je kunt het zelf triggeren met één knop in de app, of we koppelen het automatisch aan je agenda — wanneer een afspraak status "onderweg" krijgt gaat het bericht uit. Veel ${niche} stellen het zo in: zodra ze op "vertrek" tikken in de planner gaat de "ik kom eraan" automatisch.`,
  },
  {
    q: "Wat kost workflow automatisering?",
    a: `Alle automatiseringen — herinneringen, lead-opvolging, klantcommunicatie, agenda-sync, review-verzoeken, onderhoud-cycli — zitten inbegrepen in het maandelijkse pakket vanaf €79/maand. Geen opstartkosten, geen kosten per bericht. Bekijk de tarieven voor alle details.`,
  },
  {
    q: "Krijg ik mijn data terug als ik stop?",
    a: "Ja. Klantdata, gesprekgeschiedenis, agenda en review-data zijn altijd van jou — exporteerbaar als CSV op elk moment. Geen lock-in.",
  },
  {
    q: "Kan ik later flows zelf aanpassen?",
    a: "Ja. Via een simpele drag-and-drop dashboard kun je triggers, timing en berichten aanpassen. Geen developer nodig. En als je vastloopt — wij staan ernaast om bij te sturen.",
  },
];

export default function AutomatiseringContent() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 sl-reveal"
          >
            Workflow Automatisering
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 sl-reveal sl-reveal-1"
          >
            Workflow automatisering voor {siteDetails.niche}
          </motion.h1>
          <motion.p
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8 sl-reveal sl-reveal-1"
          >
            Automatische herinneringen, lead-opvolging, klantcommunicatie en
            onderhoud-cycli — voor {niche} die geen tijd hebben voor admin
            maar wel volle agendas willen. Jij lost de lekkage op, wij regelen de rest.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center sl-reveal sl-reveal-2"
          >
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsCalendar3 /> Plan een Gratis Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          className="max-w-5xl mx-auto mt-12 px-4 sl-reveal sl-reveal-2"
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-2xl">
            <Image
              src="/images/services/automatisering-hero.jpg"
              alt={`Workflow automatisering voor ${niche} — herinneringen, klus-updates, review-verzoeken automatisch`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </motion.div>
      </section>

      {/* Wat is workflow automatisering? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat is workflow automatisering?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Workflow automatisering betekent dat berichten, follow-ups, herinneringen,
              review-verzoeken en onderhoud-uitnodigingen automatisch op het juiste moment
              uitgaan. Geen handmatig &quot;even een appje sturen&quot;, geen vergeten
              terugbel-actie, geen gemiste onderhoud-cyclus.
            </p>
            <p>
              Voor {niche} betekent dit dat de klant-flow van eerste contact tot review
              vanzelf draait: een homeowner vraagt &apos;s avonds een offerte aan via je
              website, de chatbot vangt het op, een bevestigingsbericht gaat uit, een
              herinnering 24u voor de afspraak gaat uit, &quot;ik kom over 15 minuten&quot;
              gaat uit als je in de bus stapt, en een review-verzoek gaat uit 2u na afgerond
              werk. Jij hoeft alleen het werk te doen — de communicatie loopt vanzelf.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            De meeste {niche} lopen tegen dezelfde admin-problemen aan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="text-red-600 dark:text-red-400" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-foreground-accent text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Hoe het werkt</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            In 3 stappen draaien jouw automatiseringen — zonder tech-kennis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-neutral-700" />
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-neutral-900 relative z-10">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-accent text-sm max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Workflow image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xl">
              <Image
                src="/images/services/automatisering-workflow.jpg"
                alt={`Flat-lay automatisering tools voor ${niche} — workflow cards en gereedschap`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <p className="text-center text-sm text-foreground-accent mt-3 max-w-2xl mx-auto">
              Bevestiging na boeking, herinnering 24u + 2u van tevoren, &quot;ik kom eraan&quot; bij vertrek, review-verzoek 2u na klus — alles automatisch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6 Workflow categorieen */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Welke flows automatiseren we?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Zes categorieen die voor {niche} de meeste tijd én omzet opleveren.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflows.map((w, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <w.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{w.title}</h3>
                <p className="text-foreground-accent text-sm">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: automatische herinneringen (deepdive) */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">In de spotlight</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Automatische herinneringen — de quickest win</h2>
            <p className="text-foreground-accent max-w-2xl mx-auto">
              Van alle workflows leveren herinneringen + klus-updates de snelste ROI: minder vergeefse ritten, minder telefoontjes, meer 5-sterren reviews.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4">Voorbeelden van automatische berichten</h3>
              {reminderExamples.map((ex, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <BsCheck2Circle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-foreground-accent">{ex}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xl"
            >
              <Image
                src="/images/services/automatisering-section.jpg"
                alt={`Workflow-builder canvas voor ${niche} — geautomatiseerde flows op laptop scherm`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp-eerst */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">WhatsApp-eerst, niet email-eerst</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-2xl mx-auto">
            Loodgieter-klanten checken WhatsApp 4x sneller dan email. We bouwen alle flows daarom WhatsApp-first, met SMS/e-mail als backup.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((i, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-base font-bold mb-2">{i.title}</h3>
                <p className="text-foreground-accent text-sm">{i.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combinatie met andere services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Combineer met andere AI-tools</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Automatisering werkt het beste als onderdeel van het complete platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/voice-ai", title: "Voice AI Telefonist", desc: "Vangt oproepen op die buiten kantooruren binnenkomen en triggert automatisch een lead-opvolg-flow." },
              { href: "/chatbot", title: "AI Chatbot", desc: "Vangt website-aanvragen op en start direct de bevestigings-flow zonder dat jij iets hoeft te doen." },
              { href: "/crm", title: "CRM voor Loodgieters", desc: "Elke geautomatiseerde flow logt naar het juiste klantprofiel — volledige geschiedenis op een plek." },
              { href: "/reviews", title: "Reviews", desc: "Automatisch review-verzoek 2u na elke klus — meer 5-sterren, hogere Google ranking." },
              { href: "/seo", title: "SEO voor Loodgieters", desc: "Reviews + automatisering versterken lokale SEO. Combineer voor maximaal effect in Google Maps." },
              { href: "/gratis-scan", title: "Gratis AI-scan", desc: "Niet zeker waar je moet beginnen? We maken een gratis automatisering-scan voor jouw situatie." },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-foreground-accent text-sm mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Bekijk <BsArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[var(--card-border)] rounded-xl">
                <summary className="cursor-pointer p-5 font-semibold text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-foreground-accent">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om automatisch te draaien?</h2>
          <p className="text-foreground-accent mb-8">
            Plan een gratis strategiegesprek van 15 minuten. We laten zien welke 3-5 flows direct waarde opleveren in jouw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gratis-scan"
              className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              Gratis AI Scan
            </Link>
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/20 px-8 py-3 rounded-xl font-semibold hover:bg-foreground/5 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsCalendar3 /> Plan een Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-foreground-accent mt-6">
            Of bekijk eerst onze{" "}
            <Link href="/tarieven" className="text-primary hover:underline">tarieven</Link>
          </p>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
