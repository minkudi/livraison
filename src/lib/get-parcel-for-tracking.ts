import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Parcel } from "@/lib/demo-parcel";
import { getParcelByTracking, mapDbParcelToUi } from "@/lib/parcel-db";
import { getDemoParcels } from "@/lib/get-demo-parcels";

export async function getParcelForTracking(
  tracking: string,
  locale: Locale,
): Promise<Parcel | null> {
  const decoded = decodeURIComponent(tracking).trim();
  if (!decoded) return null;

  try {
    const row = await getParcelByTracking(decoded);
    if (row) return mapDbParcelToUi(row, locale);
  } catch {
    // DB not configured yet — fall through to demo parcels
  }

  const dict = getDictionary(locale);
  const { delivered, inTransit } = getDemoParcels(dict);
  const demos: Record<string, Parcel> = {
    [delivered.trackingNumber]: delivered,
    [inTransit.trackingNumber]: inTransit,
  };
  return demos[decoded] ?? null;
}
