import type { Dictionary } from "../types";

const nl: Dictionary = {
  meta: {
    title: "PRO SAT — Pakket volgen",
    description: "Volg uw pakketten wereldwijd met PRO SAT.",
  },
  brand: { name: "PRO SAT", nameAccent: "SAT" },
  topbar:
    "Internationaal netwerk — 120+ logistieke platforms — Standaard of expreslevering",
  nav: {
    home: "Home",
    services: "Diensten",
    network: "Ons netwerk",
    track: "Pakket volgen",
    trackShort: "Volgen",
  },
  hero: {
    badge1: "24/7 operationeel",
    badge2: "Wereldwijd netwerk",
    title: "Pakketbezorging",
    titleEm: "betrouwbaar",
    titleRest: "overal ter wereld",
    subtitle:
      "Realtime tracking, e-mailmeldingen bij elke stap en veilige levering via onze internationale keten.",
    searchTitle: "Mijn pakket volgen",
    searchHint: "Voer uw internationale trackingnummer in",
    searchHelp: "Het nummer staat in de bevestigingsmail van de zending",
  },
  search: {
    label: "Trackingnummer",
    placeholder: "Trackingnummer",
    submit: "Pakket zoeken",
    searching: "Zoeken…",
    checkMsg1: "Verbinding met logistiek netwerk…",
    checkMsg2: "Hubs raadplegen…",
    checkMsg3: "Route bijwerken…",
  },
  stats: [
    { value: "2.4", suffix: "M", label: "Pakketten geleverd in 2025" },
    { value: "98.2", suffix: "%", label: "Geslaagde leveringen" },
    { value: "190", suffix: "+", label: "Bestemmingen" },
    { value: "4.6", suffix: "/5", label: "Klanttevredenheid" },
  ],
  services: {
    tag: "Onze diensten",
    title: "Volledige, geïntegreerde logistiek",
    subtitle: "Van ophaal tot levering — één trackingnummer.",
    items: [
      {
        icon: "parcel",
        title: "Ophaal & registratie",
        text: "Binnen 24 uur geregistreerd bij partnerhubs.",
      },
      {
        icon: "radar",
        title: "Realtime tracking",
        text: "Elke scan zichtbaar: magazijn, sortering, distributie, levering.",
      },
      {
        icon: "van",
        title: "Levering aan ontvanger",
        text: "Aflevering op het opgegeven adres met historiek.",
      },
      {
        icon: "shield",
        title: "Verzekerde pakketten",
        text: "Standaard transportdekking; uitgebreide opties mogelijk.",
      },
      {
        icon: "mail",
        title: "E-mailmeldingen",
        text: "Eén transactionele melding per statuswijziging.",
      },
      {
        icon: "globe",
        title: "Internationaal",
        text: "Netwerk op alle continenten via regionale platforms.",
      },
    ],
  },
  how: {
    tag: "Hoe het werkt",
    title: "De reis van uw pakket",
    steps: [
      { title: "Ophaal", text: "Registratie met uniek trackingnummer." },
      { title: "Sorteercentrum", text: "Routing naar de bestemmingsregio." },
      { title: "Transport", text: "Via regionale hubs naar lokaal depot." },
      { title: "Levering", text: "Overhandiging aan de ontvanger." },
    ],
  },
  cta: {
    title: "Een pakket te volgen?",
    text: "Bekijk de leveringsstatus in realtime.",
    button: "Naar tracking",
  },
  demos: {
    delivered: "Demo — geleverd",
    inTransit: "Demo — onderweg",
    email: "Demo — e-mail",
  },
  tracking: {
    back: "← Terug",
    backHome: "Terug naar home",
    newSearch: "← Nieuwe zoekopdracht",
    pageTitle: "Pakket volgen",
    pageHint: "Voer uw internationale trackingnummer in.",
    missing: "Voer een trackingnummer in.",
    notFoundTitle: "Pakket niet gevonden",
    notFoundText: "Geen pakket voor nummer",
    notFoundDemo: "Demo:",
    currentStatus: "Huidige status",
    history: "Gedetailleerde historiek",
    trackingNumber: "Trackingnummer",
    estimated: "Geschatte levering",
    destination: "Bestemming",
  },
  emailPreview: {
    title: "Voorbeeld transactionele e-mail",
    subtitle: "Afgeronde stappen aangevinkt, huidige stap gemarkeerd, volgende grijs.",
    delivered: "Geleverd",
    inTransit: "Onderweg",
    updateSubject: "Leveringsupdate",
    hello: "Hallo,",
    cta: "Gedetailleerde tracking bekijken",
    footer: "Transactionele e-mail · één melding per statuswijziging",
  },
  footer: {
    about:
      "Pakketnetwerk naar meer dan 190 bestemmingen. Realtime tracking en e-mailupdates.",
    copyright: "© 2026 PRO SAT — Alle rechten voorbehouden.",
    support: "Klantenservice 7 dagen per week",
    cols: {
      company: "Bedrijf",
      delivery: "Levering",
      legal: "Juridisch",
      help: "Help",
    },
    links: {
      about: "Over ons",
      contact: "Contact",
      careers: "Vacatures",
      intl: "Internationale levering",
      delays: "Termijnen & zones",
      packaging: "Verpakking & restricties",
      cgu: "Algemene voorwaarden",
      privacy: "Privacy",
      cookies: "Cookies",
      track: "Pakket volgen",
      faq: "Tracking FAQ",
      claims: "Klachten",
    },
  },
  parcel: {
    deliveredTitle: "Pakket succesvol geleverd",
    deliveredDetail: "Uw pakket werd op 6 oktober 2026 aan de ontvanger overhandigd.",
    inTransitTitle: "Pakket onderweg voor levering",
    inTransitDetail: "Uw pakket is op het distributienetwerk. Verwacht binnen 24–48 uur.",
    processingTitle: "Pakket in voorbereiding",
    processingDetail:
      "Uw zending is geregistreerd en wordt binnenkort door ons logistieke netwerk opgepakt.",
    exceptionTitle: "Probleem met uw pakket",
    exceptionDetail:
      "Er is een incident gemeld. Ons team neemt contact op of werkt de tracking binnen 24 uur bij.",
    destination: "Stedelijk gebied — internationaal netwerk",
    events: [
      { label: "Pakket in ontvangst", location: "Regionaal logistiek hub" },
      { label: "Aankomst sorteercentrum", location: "Nationaal platform" },
      { label: "Aankomst lokaal depot", location: "Distributiecentrum" },
      { label: "Onderweg voor levering", location: "Lokale route" },
      { label: "Geleverd", location: "Adres ontvanger" },
    ],
  },
  legal: {
    back: "← Tracking home",
    pages: {
      "qui-sommes-nous": {
        title: "Over ons",
        paragraphs: [
          "PRO SAT beheert een pakketnetwerk naar meer dan 190 bestemmingen.",
          "Deze site kan demogegevens bevatten.",
        ],
      },
      contact: {
        title: "Contact",
        paragraphs: [
          "Klantenservice 7 dagen per week.",
          "E-mail: support@pro-sat.com",
        ],
      },
      carrieres: { title: "Vacatures", paragraphs: ["Vacatures volgen bij lancering."] },
      livraison: {
        title: "Internationale levering",
        paragraphs: ["Levering naar de meeste partnerregio's."],
      },
      delais: { title: "Termijnen", paragraphs: ["Standaard: 5–12 dagen.", "Expres: 2–5 dagen."] },
      emballage: { title: "Verpakking", paragraphs: ["Verboden: gevaarlijke stoffen, wapens."] },
      cgu: { title: "Voorwaarden", paragraphs: ["Gebruik impliceert aanvaarding van de voorwaarden."] },
      confidentialite: { title: "Privacy", paragraphs: ["Gegevens voor dienst en e-mailmeldingen."] },
      cookies: { title: "Cookies", paragraphs: ["Strikt noodzakelijke cookies."] },
      faq: { title: "FAQ", paragraphs: ["Nummer in bevestigingsmail."] },
      reclamations: { title: "Klachten", paragraphs: ["Contacteer support met trackingnummer."] },
    },
  },
};

export default nl;
