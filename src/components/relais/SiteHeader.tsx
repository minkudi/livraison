"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProSatLogo } from "@/components/prosat/ProSatLogo";
import { useDictionary, useLocalizedPath, useLocale } from "@/i18n/LocaleContext";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { TopBar } from "./TopBar";

export function SiteHeader() {
  const dict = useDictionary();
  const locale = useLocale();
  const pathname = usePathname();
  const home = `/${locale}`;
  const network = `/${locale}#reseau`;
  const track = useLocalizedPath("/suivi");
  const onHome = pathname === home;

  function sectionLinks() {
    return (
      <>
        <Link href={network} className="nav-link flex h-11 items-center">{dict.nav.network}</Link>
      </>
    );
  }

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full bg-white px-3 py-2 shadow-[0_12px_40px_rgba(11,26,51,0.08)] sm:px-5">
        <ProSatLogo href={home} />
        <nav className="hidden items-center gap-1 md:flex" aria-label={dict.nav.label}>
          <Link href={home} className="nav-link flex h-11 items-center" aria-current={onHome ? "page" : undefined}>
            {dict.nav.home}
          </Link>
          {sectionLinks()}
        </nav>
        <div className="flex items-center gap-2">
          <details className="relative md:hidden">
            <summary className="flex h-11 cursor-pointer list-none items-center rounded-full border border-g200 px-3 text-xs font-bold text-heading marker:content-none [&::-webkit-details-marker]:hidden">
              {dict.nav.menu}
            </summary>
            <nav className="absolute right-0 z-20 mt-2 min-w-40 rounded-2xl border border-g200 bg-white p-1 shadow-md" aria-label={dict.nav.label}>
              <Link href={home} className="nav-link flex h-11 items-center" aria-current={onHome ? "page" : undefined}>
                {dict.nav.home}
              </Link>
              {sectionLinks()}
            </nav>
          </details>
          <LocaleSwitcher />
          <Link href={track} className="flex h-11 items-center rounded-full bg-gold px-4 text-xs font-semibold text-navy hover:bg-gold-lt">
            <span className="hidden md:inline">{dict.nav.track}</span>
            <span className="md:hidden">{dict.nav.trackShort}</span>
          </Link>
        </div>
      </header>
    </div>
  );
}
