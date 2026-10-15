import { redirect } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";

export default async function LegacyPreviewHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) redirect("/");
  redirect(`/${raw as Locale}`);
}
