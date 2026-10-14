"use client";

import Link from "next/link";
import { ProSatLogo } from "@/components/prosat/ProSatLogo";
import { useDictionary, useLocale } from "@/i18n/LocaleContext";

export function SiteFooter() {
  const dict = useDictionary();
  const locale = useLocale();
  const home = `/${locale}/preview`;
  const loc = (path: string) => `/${locale}${path}`;
  const l = dict.footer.links;

  const columns = [
    {
      title: dict.footer.cols.company,
      links: [
        { href: loc("/legal/qui-sommes-nous"), label: l.about },
        { href: loc("/legal/contact"), label: l.contact },
        { href: loc("/legal/carrieres"), label: l.careers },
      ],
    },
    {
      title: dict.footer.cols.delivery,
      links: [
        { href: loc("/legal/livraison"), label: l.intl },
        { href: loc("/legal/delais"), label: l.delays },
        { href: loc("/legal/emballage"), label: l.packaging },
      ],
    },
    {
      title: dict.footer.cols.legal,
      links: [
        { href: loc("/legal/cgu"), label: l.cgu },
        { href: loc("/legal/confidentialite"), label: l.privacy },
        { href: loc("/legal/cookies"), label: l.cookies },
      ],
    },
    {
      title: dict.footer.cols.help,
      links: [
        { href: loc("/suivi"), label: l.track },
        { href: loc("/legal/faq"), label: l.faq },
        { href: loc("/legal/reclamations"), label: l.claims },
      ],
    },
  ];

  return (
    <footer className="ftr mt-auto border-t border-g200 bg-navy text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <ProSatLogo href={home} inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{dict.footer.about}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-white/90">{col.title}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition hover:text-gold">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{dict.footer.copyright}</p>
          <p className="text-white/50">
            {dict.footer.support} ·{" "}
            <a href="mailto:support@pro-sat.com" className="hover:text-gold">support@pro-sat.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
