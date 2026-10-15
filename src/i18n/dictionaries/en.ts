import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "PRO SAT — Parcel tracking",
    description: "Track your parcels worldwide with PRO SAT.",
  },
  brand: { name: "PRO SAT", nameAccent: "SAT" },
  topbar: "International network — 120+ logistics hubs — Standard or express delivery",
  nav: {
    home: "Home",
    services: "Services",
    network: "Our network",
    track: "Track a parcel",
    trackShort: "Track",
  },
  hero: {
    badge1: "Operational 24/7",
    badge2: "Global network",
    title: "Parcel delivery",
    titleEm: "reliable",
    titleRest: "worldwide",
    subtitle:
      "Real-time tracking, email updates at every step, and secure delivery through our international logistics chain.",
    searchTitle: "Track my parcel",
    searchHint: "Enter your international tracking number",
    searchHelp: "The number is in your shipment confirmation email",
  },
  search: {
    label: "Tracking number",
    placeholder: "Tracking number",
    submit: "Track my parcel",
    searching: "Searching…",
    checkMsg1: "Connecting to logistics network…",
    checkMsg2: "Querying hubs…",
    checkMsg3: "Updating route…",
  },
  stats: [
    { value: "2.4", suffix: "M", label: "Parcels delivered in 2025" },
    { value: "98.2", suffix: "%", label: "Successful delivery rate" },
    { value: "190", suffix: "+", label: "Destinations covered" },
    { value: "4.6", suffix: "/5", label: "Customer satisfaction" },
  ],
  services: {
    tag: "Our services",
    title: "Complete, integrated logistics",
    subtitle: "From pickup to delivery — one tracking number.",
    items: [
      {
        icon: "parcel",
        title: "Pickup & handling",
        text: "Registered within 24 h at partner hubs and integrated into the logistics chain.",
      },
      {
        icon: "radar",
        title: "Real-time tracking",
        text: "Every scan is visible: warehouse, sorting, distribution, delivery.",
      },
      {
        icon: "van",
        title: "Delivery to recipient",
        text: "Handover at the stated address with timestamped status history.",
      },
      {
        icon: "shield",
        title: "Insured parcels",
        text: "Standard transport cover; enhanced options depending on shipment type.",
      },
      {
        icon: "mail",
        title: "Email alerts",
        text: "One transactional notification per status change — no spam.",
      },
      {
        icon: "globe",
        title: "International",
        text: "Network across continents via regional platforms and partners.",
      },
    ],
  },
  how: {
    tag: "How it works",
    title: "Your parcel's journey",
    steps: [
      { title: "Pickup", text: "Collection and unique tracking number in the system." },
      { title: "Sorting centre", text: "Routed to the destination region." },
      { title: "Transit", text: "Through regional hubs to the local depot." },
      { title: "Delivery", text: "Handed to the recipient and case closed." },
    ],
  },
  cta: {
    title: "Have a parcel to track?",
    text: "See your delivery status in real time.",
    button: "Go to tracking",
  },
  demos: {
    delivered: "Demo — delivered",
    inTransit: "Demo — out for delivery",
    email: "Demo — email",
  },
  tracking: {
    back: "← Back",
    backHome: "Back to home",
    newSearch: "← New search",
    pageTitle: "Track a parcel",
    pageHint: "Enter your international tracking number.",
    missing: "Please enter a tracking number.",
    notFoundTitle: "Parcel not found",
    notFoundText: "No parcel found for number",
    notFoundDemo: "Demo:",
    currentStatus: "Current status",
    history: "Detailed history",
    trackingNumber: "Tracking number",
    estimated: "Estimated delivery",
    destination: "Destination",
  },
  emailPreview: {
    title: "Transactional email preview",
    subtitle: "Completed steps checked, current step highlighted, upcoming steps greyed out.",
    delivered: "Delivered",
    inTransit: "Out for delivery",
    updateSubject: "Delivery update",
    hello: "Hello,",
    cta: "View detailed tracking",
    footer: "Transactional email · one notification per status change",
  },
  footer: {
    about:
      "Parcel delivery network to 190+ destinations. Real-time tracking and email updates at every step.",
    copyright: "© 2026 PRO SAT — All rights reserved.",
    support: "Customer service 7 days a week",
    cols: {
      company: "Company",
      delivery: "Delivery",
      legal: "Legal",
      help: "Help",
    },
    links: {
      about: "About us",
      contact: "Contact",
      careers: "Careers",
      intl: "International delivery",
      delays: "Lead times & zones",
      packaging: "Packaging & restrictions",
      cgu: "Terms of use",
      privacy: "Privacy",
      cookies: "Cookies",
      track: "Track a parcel",
      faq: "Tracking FAQ",
      claims: "Claims",
    },
  },
  parcel: {
    deliveredTitle: "Parcel delivered successfully",
    deliveredDetail: "Your parcel was delivered on 6 October 2026 to the recipient.",
    inTransitTitle: "Parcel out for delivery",
    inTransitDetail: "Your parcel is on the delivery network. Expected within 24–48 hours.",
    processingTitle: "Parcel being prepared",
    processingDetail:
      "Your shipment is registered and will be handed to our logistics network shortly.",
    exceptionTitle: "Issue with your parcel",
    exceptionDetail:
      "An incident was reported. Our team will contact you or update tracking within 24 hours.",
    destination: "Urban area — international network",
    events: [
      { label: "Parcel collected", location: "Regional logistics hub" },
      { label: "Arrived at sorting centre", location: "National platform" },
      { label: "Arrived at local agency", location: "Distribution depot" },
      { label: "Out for delivery", location: "Local route" },
      { label: "Delivered", location: "Recipient address" },
    ],
  },
  legal: {
    back: "← Tracking home",
    pages: {
      "qui-sommes-nous": {
        title: "About us",
        paragraphs: [
          "PRO SAT operates a parcel transport and delivery network to 190+ destinations.",
          "This platform may include demonstration data.",
        ],
      },
      contact: {
        title: "Contact",
        paragraphs: [
          "Customer service available 7 days a week.",
          "Email: support@pro-sat.com",
          "Average response time: 24 business hours.",
        ],
      },
      carrieres: {
        title: "Careers",
        paragraphs: ["Job openings will be published at commercial launch."],
      },
      livraison: {
        title: "International delivery",
        paragraphs: [
          "Delivery to most territories covered by our partner network.",
          "Each parcel has a tracking number and email notifications.",
        ],
      },
      delais: {
        title: "Lead times & zones",
        paragraphs: ["Standard: 5–12 days depending on destination.", "Express: 2–5 days."],
      },
      emballage: {
        title: "Packaging & restrictions",
        paragraphs: ["Prohibited: hazardous materials, weapons, illegal contents."],
      },
      cgu: {
        title: "Terms of use",
        paragraphs: ["Using the tracking service means you accept these terms."],
      },
      confidentialite: {
        title: "Privacy",
        paragraphs: ["Tracking data is processed for the service and transactional emails."],
      },
      cookies: {
        title: "Cookies",
        paragraphs: ["Strictly necessary cookies for the tracking site."],
      },
      faq: {
        title: "Tracking FAQ",
        paragraphs: ["Tracking number: see shipment confirmation email."],
      },
      reclamations: {
        title: "Claims",
        paragraphs: ["Contact support with your tracking number to open a case."],
      },
    },
  },
};

export default en;
