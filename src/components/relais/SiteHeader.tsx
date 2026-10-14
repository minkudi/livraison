"use client";

import Link from "next/link";
import { ProSatLogo } from "@/components/prosat/ProSatLogo";
import { useDictionary, useLocalizedPath, useLocale } from "@/i18n/LocaleContext";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { TopBar } from "./TopBar";

export function SiteHeader() {
  const dict = useDictionary();
  const locale = useLocale();
  const home = `/${locale}/preview`;
  const services = `/${locale}/preview#services`;
  const network = `/${locale}/preview#reseau`;
  const track = useLocalizedPath("/suivi");

  return (
    <div className="sticky top-0 z-50">
      <TopBar text={dict.topbar} />
      <header className="border-b border-g200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
          <ProSatLogo href={home} />
          <nav className="hidden items-center gap-1 md:flex">
            <Link href={home} className="nav-link">{dict.nav.home}</Link>
            <Link href={services} className="nav-link">{dict.nav.services}</Link>
            <Link href={network} className="nav-link">{dict.nav.network}</Link>
            <Link href={track} className="ml-1 rounded-lg bg-navy px-5 py-2 text-[13px] font-semibold text-white hover:bg-navy-2">
              {dict.nav.track}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <Link href={track} className="rounded-lg bg-navy px-3 py-2 text-xs font-bold text-white md:hidden">
              {dict.nav.trackShort}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
