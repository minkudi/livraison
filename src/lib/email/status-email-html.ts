import type { Dictionary } from "@/i18n/types";
import { getEventStates, type Parcel } from "@/lib/demo-parcel";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildStatusEmailHtml(parcel: Parcel, dict: Dictionary, trackUrl: string) {
  const states = getEventStates(parcel);
  const e = dict.emailPreview;

  const steps = parcel.events
    .map((ev, i) => {
      const state = states[i];
      const muted = state === "upcoming";
      const border =
        state === "done"
          ? "#0B1A33"
          : state === "current"
            ? "#C8973E"
            : "#E2E8F0";
      const bg = state === "done" ? "#0B1A33" : state === "current" ? "#ffffff" : "#F8FAFC";
      const color = state === "done" ? "#C8973E" : state === "current" ? "#C8973E" : "#94A3B8";
      const text = muted ? "#94A3B8" : "#2e4a66";
      return `
        <tr>
          <td style="padding:8px 12px 8px 0;vertical-align:top;">
            <span style="display:inline-block;width:32px;height:32px;border-radius:8px;border:2px solid ${border};background:${bg};color:${color};text-align:center;line-height:28px;font-size:14px;">●</span>
          </td>
          <td style="padding:8px 0;font-size:14px;color:${text};">
            <strong>${escapeHtml(ev.label)}</strong><br/>
            <span style="font-size:12px;">${escapeHtml(ev.location)} · ${escapeHtml(ev.at)}</span>
          </td>
        </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;background:#F8FAFC;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;">
  <div style="max-width:480px;margin:24px auto;background:#fff;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;">
    <div style="padding:16px 20px;border-bottom:1px solid #E2E8F0;">
      <p style="margin:0;font-size:14px;font-weight:800;color:#2e4a66;">${escapeHtml(dict.brand.name)}</p>
      <p style="margin:4px 0 0;font-size:12px;color:#5b7c9a;">${escapeHtml(e.updateSubject)}</p>
    </div>
    <div style="padding:20px;font-size:14px;color:#5b7c9a;">
      <p style="margin:0;">${escapeHtml(e.hello)}</p>
      <p style="margin:12px 0 4px;font-weight:600;color:#2e4a66;">${escapeHtml(parcel.statusTitle)}</p>
      <p style="margin:0 0 12px;">${escapeHtml(parcel.statusDetail)}</p>
      <p style="margin:0 0 16px;font-family:monospace;font-size:12px;">${escapeHtml(parcel.trackingNumber)}</p>
      <table role="presentation" style="width:100%;border-collapse:collapse;">${steps}</table>
      <p style="margin:24px 0 0;text-align:center;">
        <a href="${escapeHtml(trackUrl)}" style="display:inline-block;background:#0B1A33;color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:700;font-size:14px;">${escapeHtml(e.cta)}</a>
      </p>
      <p style="margin:20px 0 0;font-size:11px;color:#94A3B8;text-align:center;">${escapeHtml(e.footer)}</p>
    </div>
  </div>
</body>
</html>`;
}
