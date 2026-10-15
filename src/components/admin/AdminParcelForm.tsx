"use client";

import type { ParcelStatus } from "@/lib/admin-order-spec";
import { locales, type Locale } from "@/i18n/config";
import { STATUS_LABELS_FR } from "@/lib/parcel-status";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LOCALE_LABELS: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
};

type CreateProps = { mode: "create" };
type EditProps = {
  mode: "edit";
  parcelId: string;
  initial: {
    recipientEmail: string;
    notificationLocale: Locale;
    destination: string;
    estimatedDelivery: string;
    autoNotify: boolean;
    statusTitle: string;
    statusDetail: string;
    status: ParcelStatus;
  };
};

export function AdminParcelForm(props: CreateProps | EditProps) {
  const router = useRouter();
  const isEdit = props.mode === "edit";
  const initial = isEdit ? props.initial : null;

  const [recipientEmail, setRecipientEmail] = useState(initial?.recipientEmail ?? "");
  const [notificationLocale, setNotificationLocale] = useState<Locale>(
    initial?.notificationLocale ?? "fr",
  );
  const [destination, setDestination] = useState(initial?.destination ?? "");
  const [estimatedDelivery, setEstimatedDelivery] = useState(initial?.estimatedDelivery ?? "");
  const [autoNotify, setAutoNotify] = useState(initial?.autoNotify ?? false);
  const [statusTitle, setStatusTitle] = useState(initial?.statusTitle ?? "");
  const [statusDetail, setStatusDetail] = useState(initial?.statusDetail ?? "");
  const [status, setStatus] = useState<ParcelStatus>(initial?.status ?? "processing");
  const [sendEmail, setSendEmail] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = isEdit
      ? {
          recipientEmail,
          notificationLocale,
          destination,
          estimatedDelivery,
          autoNotify,
          statusTitle,
          statusDetail,
        }
      : {
          recipientEmail,
          notificationLocale,
          destination,
          estimatedDelivery,
          autoNotify,
          status,
          sendEmail,
        };

    const url = isEdit ? `/api/admin/parcels/${props.parcelId}` : "/api/admin/parcels";
    const method = isEdit ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Enregistrement impossible");
      return;
    }

    if (isEdit) {
      router.refresh();
      return;
    }

    const id = data.parcel?.id;
    if (id) router.push(`/admin/parcels/${id}`);
    else router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
            E-mail destinataire
          </label>
          <input
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
            Langue des e-mails
          </label>
          <select
            className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm"
            value={notificationLocale}
            onChange={(e) => setNotificationLocale(e.target.value as Locale)}
          >
            {locales.map((l) => (
              <option key={l} value={l}>
                {LOCALE_LABELS[l]}
              </option>
            ))}
          </select>
        </div>
        {!isEdit ? (
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
              Statut initial
            </label>
            <select
              className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value as ParcelStatus)}
            >
              {(Object.keys(STATUS_LABELS_FR) as ParcelStatus[]).map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABELS_FR[s]}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
            Destination (affichage suivi)
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
            Livraison estimée
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm"
            placeholder="2026-10-20"
            value={estimatedDelivery}
            onChange={(e) => setEstimatedDelivery(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 text-sm text-[#2e4a66]">
            <input
              type="checkbox"
              checked={autoNotify}
              onChange={(e) => setAutoNotify(e.target.checked)}
            />
            Notification auto à chaque changement de statut
          </label>
        </div>
        {isEdit ? (
          <>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
                Titre statut (suivi + e-mail)
              </label>
              <input
                className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm"
                value={statusTitle}
                onChange={(e) => setStatusTitle(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
                Détail statut
              </label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm"
                value={statusDetail}
                onChange={(e) => setStatusDetail(e.target.value)}
              />
            </div>
          </>
        ) : (
          <div className="sm:col-span-2">
            <label className="flex items-center gap-2 text-sm text-[#2e4a66]">
              <input
                type="checkbox"
                checked={sendEmail}
                onChange={(e) => setSendEmail(e.target.checked)}
              />
              Envoyer l’e-mail de notification après création
            </label>
          </div>
        )}
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[#0B1A33] px-6 py-3 text-sm font-bold text-white disabled:opacity-60"
      >
        {loading ? "Enregistrement…" : isEdit ? "Enregistrer" : "Créer le colis"}
      </button>
    </form>
  );
}
