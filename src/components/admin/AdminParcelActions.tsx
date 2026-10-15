"use client";

import type { ParcelStatus } from "@/lib/admin-order-spec";
import { STATUS_LABELS_FR } from "@/lib/parcel-status";
import { useRouter } from "next/navigation";
import { useState } from "react";

const STATUSES: ParcelStatus[] = ["processing", "in_transit", "delivered", "exception"];

type Props = {
  parcelId: string;
  currentStatus: ParcelStatus;
  autoNotify: boolean;
};

export function AdminParcelActions({ parcelId, currentStatus, autoNotify }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function call(path: string, body?: object) {
    const res = await fetch(path, {
      method: "POST",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error ?? "Erreur");
    return data;
  }

  async function setStatus(status: ParcelStatus, sendEmail: boolean) {
    setBusy(sendEmail ? `mail-${status}` : status);
    setMessage(null);
    try {
      const data = await call(`/api/admin/parcels/${parcelId}/status`, {
        status,
        sendEmail,
        refreshCopy: true,
      });
      const email = data.email;
      if (sendEmail && email && !email.ok) {
        setMessage(`Statut mis à jour — e-mail : ${email.error}`);
      } else if (sendEmail && email?.ok) {
        setMessage("Statut mis à jour et e-mail envoyé.");
      } else if (!sendEmail && autoNotify && email?.ok) {
        setMessage("Statut mis à jour — notification automatique envoyée.");
      } else {
        setMessage("Statut mis à jour.");
      }
      router.refresh();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Erreur");
    } finally {
      setBusy(null);
    }
  }

  async function sendEmailOnly() {
    setBusy("send-only");
    setMessage(null);
    try {
      await call(`/api/admin/parcels/${parcelId}/send-email`);
      setMessage("E-mail de notification envoyé.");
      router.refresh();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Erreur");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
          Changer le statut
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              disabled={busy !== null || s === currentStatus}
              onClick={() => setStatus(s, false)}
              className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-bold text-[#0B1A33] disabled:opacity-50"
            >
              {busy === s ? "…" : STATUS_LABELS_FR[s]}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-[#5b7c9a]">
          Avec envoi e-mail immédiat (statut actuel après changement) :
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button
              key={`mail-${s}`}
              type="button"
              disabled={busy !== null}
              onClick={() => setStatus(s, true)}
              className="rounded-lg bg-[#0B1A33] px-3 py-2 text-xs font-bold text-white disabled:opacity-50"
            >
              {busy === `mail-${s}` ? "…" : `${STATUS_LABELS_FR[s]} + e-mail`}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          type="button"
          disabled={busy !== null}
          onClick={sendEmailOnly}
          className="rounded-xl border-2 border-[#C8973E] bg-white px-4 py-2.5 text-sm font-bold text-[#0B1A33] disabled:opacity-50"
        >
          {busy === "send-only" ? "Envoi…" : "Envoyer l’e-mail (statut actuel)"}
        </button>
      </div>

      {message ? <p className="text-sm font-medium text-[#2e4a66]">{message}</p> : null}
    </div>
  );
}
