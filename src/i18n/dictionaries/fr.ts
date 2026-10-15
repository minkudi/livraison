import type { Dictionary } from "../types";

const fr: Dictionary = {
  meta: {
    title: "PRO SAT — Suivi de colis",
    description: "Suivez vos colis dans le monde entier avec PRO SAT.",
  },
  brand: { name: "PRO SAT", nameAccent: "SAT" },
  topbar:
    "Réseau international — +120 plateformes logistiques — Livraison standard ou express",
  nav: {
    home: "Accueil",
    services: "Services",
    network: "Notre réseau",
    track: "Suivre un colis",
    trackShort: "Suivi",
  },
  hero: {
    badge1: "Opérationnel 24/7",
    badge2: "Réseau mondial",
    title: "Livraison de colis",
    titleEm: "fiable",
    titleRest: "partout dans le monde",
    subtitle:
      "Suivi en temps réel, notifications à chaque étape et remise sécurisée via notre chaîne logistique internationale.",
    searchTitle: "Suivre mon colis",
    searchHint: "Entrez votre numéro de suivi international",
    searchHelp: "Le numéro figure dans l'e-mail de confirmation d'expédition",
  },
  search: {
    label: "Numéro de suivi",
    placeholder: "Numéro de suivi",
    submit: "Rechercher mon colis",
    searching: "Recherche en cours…",
    checkMsg1: "Connexion au réseau logistique…",
    checkMsg2: "Interrogation des hubs…",
    checkMsg3: "Mise à jour du trajet…",
  },
  stats: [
    { value: "2.4", suffix: "M", label: "Colis livrés en 2025" },
    { value: "98.2", suffix: "%", label: "Taux de livraison réussie" },
    { value: "190", suffix: "+", label: "Destinations couvertes" },
    { value: "4.6", suffix: "/5", label: "Satisfaction client" },
  ],
  services: {
    tag: "Nos services",
    title: "Une logistique complète et intégrée",
    subtitle: "De la prise en charge à la remise, un seul numéro de suivi.",
    items: [
      {
        icon: "parcel",
        title: "Collecte et prise en charge",
        text: "Enregistrement sous 24 h dans nos hubs partenaires et intégration à la chaîne logistique.",
      },
      {
        icon: "radar",
        title: "Suivi en temps réel",
        text: "Chaque scan est visible sur la plateforme : entrepôt, tri, distribution, livraison.",
      },
      {
        icon: "van",
        title: "Livraison au destinataire",
        text: "Remise à l'adresse indiquée avec preuve de statut et historique horodaté.",
      },
      {
        icon: "shield",
        title: "Colis assurés",
        text: "Couverture transport standard ; options renforcées selon la nature de l'envoi.",
      },
      {
        icon: "mail",
        title: "Alertes par e-mail",
        text: "Une notification transactionnelle à chaque changement de statut — pas de spam.",
      },
      {
        icon: "globe",
        title: "International",
        text: "Réseau étendu sur tous les continents via plateformes régionales et partenaires.",
      },
    ],
  },
  how: {
    tag: "Comment ça marche",
    title: "Le parcours de votre colis",
    steps: [
      { title: "Prise en charge", text: "Collecte et numéro de suivi unique dans le système." },
      { title: "Centre de tri", text: "Orientation vers la zone géographique de destination." },
      { title: "Acheminement", text: "Transit par hubs régionaux jusqu'au dépôt local." },
      { title: "Livraison", text: "Remise au destinataire et clôture du dossier." },
    ],
  },
  cta: {
    title: "Vous avez un colis à suivre ?",
    text: "Consultez l'état de votre livraison en temps réel.",
    button: "Accéder au suivi",
  },
  demos: {
    delivered: "Démo — colis livré",
    inTransit: "Démo — en livraison",
    email: "Démo — e-mail",
  },
  tracking: {
    back: "← Retour",
    backHome: "Retour à l'accueil",
    newSearch: "← Nouvelle recherche",
    pageTitle: "Suivre un colis",
    pageHint: "Saisissez votre numéro de suivi international.",
    missing: "Veuillez saisir un numéro de suivi.",
    notFoundTitle: "Colis introuvable",
    notFoundText: "Aucun colis associé au numéro",
    notFoundDemo: "Démo :",
    currentStatus: "État actuel",
    history: "Historique détaillé",
    trackingNumber: "Numéro de suivi",
    estimated: "Livraison estimée",
    destination: "Destination",
  },
  emailPreview: {
    title: "Aperçu e-mail transactionnel",
    subtitle:
      "Étapes passées cochées, étape en cours en surbrillance, suivantes grisées — sans visuels marketing superflus.",
    delivered: "Livré",
    inTransit: "En livraison",
    updateSubject: "Mise à jour de livraison",
    hello: "Bonjour,",
    cta: "Voir le suivi détaillé",
    footer: "E-mail transactionnel · une notification par changement de statut",
  },
  footer: {
    about:
      "Réseau de livraison de colis vers plus de 190 destinations. Suivi en temps réel, notifications par e-mail à chaque étape.",
    copyright: "© 2026 PRO SAT — Tous droits réservés.",
    support: "Service client 7j/7",
    cols: {
      company: "Entreprise",
      delivery: "Livraison",
      legal: "Légal",
      help: "Aide",
    },
    links: {
      about: "Qui sommes-nous",
      contact: "Contact",
      careers: "Carrières",
      intl: "Livraison internationale",
      delays: "Délais & zones",
      packaging: "Emballage & restrictions",
      cgu: "Conditions générales",
      privacy: "Confidentialité",
      cookies: "Cookies",
      track: "Suivre un colis",
      faq: "FAQ suivi",
      claims: "Réclamations",
    },
  },
  parcel: {
    deliveredTitle: "Colis livré avec succès",
    deliveredDetail: "Votre colis a été remis le 6 octobre 2026 au destinataire.",
    inTransitTitle: "Colis en cours de livraison",
    inTransitDetail:
      "Votre colis est sur le réseau de distribution. Livraison prévue sous 24 à 48 h.",
    processingTitle: "Colis en préparation",
    processingDetail:
      "Votre envoi est enregistré et sera pris en charge sous peu par notre réseau logistique.",
    exceptionTitle: "Anomalie sur votre colis",
    exceptionDetail:
      "Un incident a été signalé. Notre équipe vous contactera ou mettra à jour le suivi sous 24 h.",
    destination: "Zone urbaine — réseau international",
    events: [
      { label: "Colis pris en charge", location: "Hub logistique régional" },
      { label: "Arrivée au centre de tri", location: "Plateforme nationale" },
      { label: "Arrivée en agence locale", location: "Dépôt de distribution" },
      { label: "Colis en cours de livraison", location: "Tournée locale" },
      { label: "Colis livré", location: "Adresse du destinataire" },
    ],
  },
  legal: {
    back: "← Accueil suivi",
    pages: {
      "qui-sommes-nous": {
        title: "Qui sommes-nous",
        paragraphs: [
          "PRO SAT opère un réseau de transport et de distribution de colis vers plus de 190 destinations.",
          "Les informations affichées sur cette plateforme peuvent inclure des données de démonstration.",
        ],
      },
      contact: {
        title: "Contact",
        paragraphs: [
          "Service client disponible 7 jours sur 7.",
          "E-mail : support@pro-sat.com",
          "Délai de réponse moyen : 24 h ouvrées.",
        ],
      },
      carrieres: {
        title: "Carrières",
        paragraphs: ["Les offres d'emploi seront publiées lors du lancement commercial."],
      },
      livraison: {
        title: "Livraison internationale",
        paragraphs: [
          "Livraison vers la plupart des territoires couverts par notre réseau partenaire.",
          "Chaque colis dispose d'un numéro de suivi et de notifications par e-mail.",
        ],
      },
      delais: {
        title: "Délais & zones",
        paragraphs: [
          "Standard : 5 à 12 jours selon la destination.",
          "Express : 2 à 5 jours selon la destination.",
        ],
      },
      emballage: {
        title: "Emballage & restrictions",
        paragraphs: [
          "Interdits : matières dangereuses, armes, contenus illicites.",
          "L'expéditeur est responsable de l'emballage et de la déclaration.",
        ],
      },
      cgu: {
        title: "Conditions générales",
        paragraphs: [
          "L'utilisation du service de suivi implique l'acceptation des présentes conditions.",
        ],
      },
      confidentialite: {
        title: "Confidentialité",
        paragraphs: [
          "Les données de suivi sont traitées pour le service et les notifications transactionnelles.",
        ],
      },
      cookies: {
        title: "Cookies",
        paragraphs: ["Cookies strictement nécessaires au fonctionnement du site de suivi."],
      },
      faq: {
        title: "FAQ suivi",
        paragraphs: [
          "Numéro de suivi : voir l'e-mail de confirmation d'expédition.",
          "Désabonnement des e-mails : lien en bas de chaque notification.",
        ],
      },
      reclamations: {
        title: "Réclamations",
        paragraphs: ["Contactez le support avec votre numéro de suivi pour ouvrir un dossier."],
      },
    },
  },
};

export default fr;
