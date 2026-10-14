import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export async function POST(request: Request) {
  const form = await request.formData();
  const raw = form.get("tracking_number");
  const tracking = typeof raw === "string" ? raw.trim() : "";
  const localeRaw = form.get("locale");
  const locale = typeof localeRaw === "string" && isLocale(localeRaw) ? localeRaw : defaultLocale;

  if (!tracking) {
    return NextResponse.redirect(new URL(`/${locale}/suivi?error=missing`, request.url), 302);
  }
  return NextResponse.redirect(
    new URL(`/${locale}/suivi/${encodeURIComponent(tracking)}`, request.url),
    302,
  );
}
