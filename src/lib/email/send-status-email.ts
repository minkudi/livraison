import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { ParcelStatus } from "@/lib/admin-order-spec";
import { mapDbParcelToUi, logEmailAttempt, type ParcelWithRelations } from "@/lib/parcel-db";
import { buildStatusEmailHtml } from "@/lib/email/status-email-html";
import { sendSmtpMail } from "@/lib/email/smtp";

function appUrl() {
  return process.env.APP_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
}

export async function sendParcelStatusEmail(row: NonNullable<ParcelWithRelations>) {
  const locale = row.notificationLocale as Locale;
  const dict = getDictionary(locale);
  const parcel = mapDbParcelToUi(row, locale);
  const trackUrl = `${appUrl()}/${locale}/suivi/${encodeURIComponent(row.trackingNumber)}`;
  const html = buildStatusEmailHtml(parcel, dict, trackUrl);
  const subject = `${dict.emailPreview.updateSubject} — ${row.trackingNumber}`;
  const to = row.recipientEmail;

  try {
    const { messageId } = await sendSmtpMail({ to, subject, html });
    await logEmailAttempt(row.id, locale, row.status, {
      success: true,
      providerId: messageId,
    });
    return { ok: true, id: messageId };
  } catch (err) {
    const message = err instanceof Error ? err.message : "send failed";
    await logEmailAttempt(row.id, locale, row.status, { success: false, error: message });
    return { ok: false, error: message };
  }
}

export async function maybeAutoNotifyAfterStatus(
  row: NonNullable<ParcelWithRelations>,
  previousStatus: ParcelStatus,
) {
  if (!row.autoNotify) return null;
  if (row.status === previousStatus) return null;
  return sendParcelStatusEmail(row);
}
