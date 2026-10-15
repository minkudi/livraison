import type { ServiceIconId } from "@/components/relais/icons/LogisticsIcons";

export type Dictionary = {
  meta: { title: string; description: string };
  brand: { name: string; nameAccent: string };
  topbar: string;
  nav: {
    home: string;
    services: string;
    network: string;
    track: string;
    trackShort: string;
  };
  hero: {
    badge1: string;
    badge2: string;
    title: string;
    titleEm: string;
    titleRest: string;
    subtitle: string;
    searchTitle: string;
    searchHint: string;
    searchHelp: string;
  };
  search: {
    label: string;
    placeholder: string;
    submit: string;
    searching: string;
    checkMsg1: string;
    checkMsg2: string;
    checkMsg3: string;
  };
  stats: { value: string; suffix: string; label: string }[];
  services: {
    tag: string;
    title: string;
    subtitle: string;
    items: { icon: ServiceIconId; title: string; text: string }[];
  };
  how: {
    tag: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  cta: { title: string; text: string; button: string };
  demos: { delivered: string; inTransit: string; email: string };
  tracking: {
    back: string;
    backHome: string;
    newSearch: string;
    pageTitle: string;
    pageHint: string;
    missing: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundDemo: string;
    currentStatus: string;
    history: string;
    trackingNumber: string;
    estimated: string;
    destination: string;
  };
  emailPreview: {
    title: string;
    subtitle: string;
    delivered: string;
    inTransit: string;
    updateSubject: string;
    hello: string;
    cta: string;
    footer: string;
  };
  footer: {
    about: string;
    copyright: string;
    support: string;
    cols: { company: string; delivery: string; legal: string; help: string };
    links: Record<string, string>;
  };
  parcel: {
    deliveredTitle: string;
    deliveredDetail: string;
    inTransitTitle: string;
    inTransitDetail: string;
    processingTitle: string;
    processingDetail: string;
    exceptionTitle: string;
    exceptionDetail: string;
    destination: string;
    events: { label: string; location: string }[];
  };
  legal: {
    back: string;
    pages: Record<string, { title: string; paragraphs: string[] }>;
  };
};
