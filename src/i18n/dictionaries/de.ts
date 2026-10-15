import type { Dictionary } from "../types";

const de: Dictionary = {
  meta: {
    title: "PRO SAT — Paketverfolgung",
    description: "Verfolgen Sie Ihre Pakete weltweit mit PRO SAT.",
  },
  brand: { name: "PRO SAT", nameAccent: "SAT" },
  topbar:
    "Internationales Netz — über 120 Logistikplattformen — Standard- oder Expresszustellung",
  nav: {
    home: "Start",
    services: "Leistungen",
    network: "Unser Netz",
    track: "Paket verfolgen",
    trackShort: "Tracking",
  },
  hero: {
    badge1: "24/7 einsatzbereit",
    badge2: "Weltweites Netz",
    title: "Paketzustellung",
    titleEm: "zuverlässig",
    titleRest: "weltweit",
    subtitle:
      "Echtzeit-Tracking, E-Mail-Benachrichtigungen bei jedem Schritt und sichere Zustellung über unsere internationale Logistikkette.",
    searchTitle: "Mein Paket verfolgen",
    searchHint: "Internationale Sendungsnummer eingeben",
    searchHelp: "Die Nummer steht in der Versandbestätigung per E-Mail",
  },
  search: {
    label: "Sendungsnummer",
    placeholder: "Sendungsnummer",
    submit: "Paket suchen",
    searching: "Suche läuft…",
    checkMsg1: "Verbindung zum Logistiknetz…",
    checkMsg2: "Hubs werden abgefragt…",
    checkMsg3: "Route wird aktualisiert…",
  },
  stats: [
    { value: "2.4", suffix: "M", label: "Zugestellte Pakete 2025" },
    { value: "98.2", suffix: "%", label: "Erfolgreiche Zustellungen" },
    { value: "190", suffix: "+", label: "Abgedeckte Ziele" },
    { value: "4.6", suffix: "/5", label: "Kundenzufriedenheit" },
  ],
  services: {
    tag: "Unsere Leistungen",
    title: "Vollständige, integrierte Logistik",
    subtitle: "Von der Annahme bis zur Zustellung — eine Sendungsnummer.",
    items: [
      {
        icon: "parcel",
        title: "Annahme & Erfassung",
        text: "Registrierung innerhalb von 24 h in Partner-Hubs.",
      },
      {
        icon: "radar",
        title: "Echtzeit-Tracking",
        text: "Jeder Scan sichtbar: Lager, Sortierung, Distribution, Zustellung.",
      },
      {
        icon: "van",
        title: "Zustellung an Empfänger",
        text: "Übergabe an der angegebenen Adresse mit Zeitstempel-Historie.",
      },
      {
        icon: "shield",
        title: "Versicherte Sendungen",
        text: "Standard-Transportversicherung; erweiterte Optionen möglich.",
      },
      {
        icon: "mail",
        title: "E-Mail-Benachrichtigungen",
        text: "Eine transaktionale Meldung pro Statuswechsel — kein Spam.",
      },
      {
        icon: "globe",
        title: "International",
        text: "Netz auf allen Kontinenten über regionale Plattformen.",
      },
    ],
  },
  how: {
    tag: "So funktioniert es",
    title: "Die Reise Ihres Pakets",
    steps: [
      { title: "Annahme", text: "Erfassung mit eindeutiger Sendungsnummer." },
      { title: "Sortierzentrum", text: "Routing in die Zielregion." },
      { title: "Transport", text: "Über regionale Hubs zum lokalen Depot." },
      { title: "Zustellung", text: "Übergabe an den Empfänger." },
    ],
  },
  cta: {
    title: "Paket zu verfolgen?",
    text: "Lieferstatus in Echtzeit einsehen.",
    button: "Zum Tracking",
  },
  demos: {
    delivered: "Demo — zugestellt",
    inTransit: "Demo — in Zustellung",
    email: "Demo — E-Mail",
  },
  tracking: {
    back: "← Zurück",
    backHome: "Zur Startseite",
    newSearch: "← Neue Suche",
    pageTitle: "Paket verfolgen",
    pageHint: "Internationale Sendungsnummer eingeben.",
    missing: "Bitte Sendungsnummer eingeben.",
    notFoundTitle: "Paket nicht gefunden",
    notFoundText: "Kein Paket für Nummer",
    notFoundDemo: "Demo:",
    currentStatus: "Aktueller Status",
    history: "Detaillierter Verlauf",
    trackingNumber: "Sendungsnummer",
    estimated: "Voraussichtliche Zustellung",
    destination: "Ziel",
  },
  emailPreview: {
    title: "Vorschau Transaktions-E-Mail",
    subtitle: "Erledigte Schritte markiert, aktueller Schritt hervorgehoben, folgende ausgegraut.",
    delivered: "Zugestellt",
    inTransit: "In Zustellung",
    updateSubject: "Lieferungsupdate",
    hello: "Guten Tag,",
    cta: "Detailliertes Tracking ansehen",
    footer: "Transaktions-E-Mail · eine Benachrichtigung pro Statuswechsel",
  },
  footer: {
    about:
      "Paketzustellung in über 190 Ziele. Echtzeit-Tracking und E-Mail-Updates bei jedem Schritt.",
    copyright: "© 2026 PRO SAT — Alle Rechte vorbehalten.",
    support: "Kundenservice 7 Tage die Woche",
    cols: {
      company: "Unternehmen",
      delivery: "Zustellung",
      legal: "Rechtliches",
      help: "Hilfe",
    },
    links: {
      about: "Über uns",
      contact: "Kontakt",
      careers: "Karriere",
      intl: "Internationale Zustellung",
      delays: "Laufzeiten & Zonen",
      packaging: "Verpackung & Beschränkungen",
      cgu: "AGB",
      privacy: "Datenschutz",
      cookies: "Cookies",
      track: "Paket verfolgen",
      faq: "Tracking-FAQ",
      claims: "Reklamationen",
    },
  },
  parcel: {
    deliveredTitle: "Paket erfolgreich zugestellt",
    deliveredDetail: "Ihr Paket wurde am 6. Oktober 2026 an den Empfänger übergeben.",
    inTransitTitle: "Paket in Zustellung",
    inTransitDetail: "Ihr Paket ist im Zustellnetz. Erwartet innerhalb von 24–48 Stunden.",
    processingTitle: "Paket in Vorbereitung",
    processingDetail:
      "Ihre Sendung ist registriert und wird in Kürze von unserem Logistiknetz übernommen.",
    exceptionTitle: "Problem mit Ihrem Paket",
    exceptionDetail:
      "Ein Vorfall wurde gemeldet. Unser Team meldet sich oder aktualisiert die Sendungsverfolgung innerhalb von 24 Stunden.",
    destination: "Stadtgebiet — internationales Netz",
    events: [
      { label: "Paket angenommen", location: "Regionales Logistik-Hub" },
      { label: "Im Sortierzentrum", location: "Nationale Plattform" },
      { label: "Lokales Depot erreicht", location: "Verteilzentrum" },
      { label: "In Zustellung", location: "Lokale Tour" },
      { label: "Zugestellt", location: "Empfängeradresse" },
    ],
  },
  legal: {
    back: "← Tracking-Start",
    pages: {
      "qui-sommes-nous": {
        title: "Über uns",
        paragraphs: [
          "PRO SAT betreibt ein Paketnetz in über 190 Zielen.",
          "Diese Plattform kann Demodaten enthalten.",
        ],
      },
      contact: {
        title: "Kontakt",
        paragraphs: [
          "Kundenservice 7 Tage die Woche.",
          "E-Mail: support@pro-sat.com",
        ],
      },
      carrieres: { title: "Karriere", paragraphs: ["Stellenangebote folgen zum Launch."] },
      livraison: {
        title: "Internationale Zustellung",
        paragraphs: ["Zustellung in die meisten Partnerregionen."],
      },
      delais: {
        title: "Laufzeiten",
        paragraphs: ["Standard: 5–12 Tage.", "Express: 2–5 Tage."],
      },
      emballage: { title: "Verpackung", paragraphs: ["Verboten: Gefahrstoffe, Waffen."] },
      cgu: { title: "AGB", paragraphs: ["Nutzung des Trackings akzeptiert diese Bedingungen."] },
      confidentialite: {
        title: "Datenschutz",
        paragraphs: ["Tracking-Daten für Service und Transaktions-E-Mails."],
      },
      cookies: { title: "Cookies", paragraphs: ["Technisch notwendige Cookies."] },
      faq: { title: "FAQ", paragraphs: ["Nummer in der Versandbestätigung."] },
      reclamations: {
        title: "Reklamationen",
        paragraphs: ["Support mit Sendungsnummer kontaktieren."],
      },
    },
  },
};

export default de;
