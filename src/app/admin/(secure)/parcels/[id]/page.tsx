import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AdminParcelActions } from "@/components/admin/AdminParcelActions";
import { AdminParcelForm } from "@/components/admin/AdminParcelForm";
import type { ParcelStatus } from "@/lib/admin-order-spec";
import type { Locale } from "@/i18n/config";
import { requireAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { formatDateTimeAdmin, STATUS_LABELS_FR } from "@/lib/parcel-status";

export const instant = false;

export default async function AdminParcelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await requireAdminSession())) redirect("/admin/login");
  const { id } = await params;

  const parcel = await prisma.parcel.findUnique({
    where: { id },
    include: {
      events: { orderBy: { sortOrder: "asc" } },
      emailLogs: { orderBy: { createdAt: "desc" }, take: 15 },
    },
  });
  if (!parcel) notFound();

  const status = parcel.status as ParcelStatus;

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin" className="text-sm font-semibold text-[#0B1A33] hover:underline">
          ← Liste des colis
        </Link>
        <h1 className="mt-4 font-mono text-2xl font-extrabold text-[#0B1A33]">
          {parcel.trackingNumber}
        </h1>
        <p className="mt-1 text-sm text-[#5b7c9a]">
          Statut : <strong>{STATUS_LABELS_FR[status]}</strong> · Suivi public :{" "}
          <a
            className="font-semibold text-[#0B1A33] underline"
            href={`/fr/suivi/${encodeURIComponent(parcel.trackingNumber)}`}
            target="_blank"
            rel="noreferrer"
          >
            ouvrir
          </a>
        </p>
      </div>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#0B1A33]">Actions rapides</h2>
        <div className="mt-4">
          <AdminParcelActions
            parcelId={parcel.id}
            currentStatus={status}
            autoNotify={parcel.autoNotify}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#0B1A33]">Informations</h2>
        <div className="mt-4">
          <AdminParcelForm
            mode="edit"
            parcelId={parcel.id}
            initial={{
              recipientEmail: parcel.recipientEmail,
              notificationLocale: parcel.notificationLocale as Locale,
              destination: parcel.destination,
              estimatedDelivery: parcel.estimatedDelivery ?? "",
              autoNotify: parcel.autoNotify,
              statusTitle: parcel.statusTitle,
              statusDetail: parcel.statusDetail,
              status,
            }}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#0B1A33]">Journal e-mails</h2>
        {parcel.emailLogs.length === 0 ? (
          <p className="mt-4 text-sm text-[#5b7c9a]">Aucun envoi enregistré.</p>
        ) : (
          <ul className="mt-4 space-y-2 text-sm">
            {parcel.emailLogs.map((log) => (
              <li
                key={log.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2"
              >
                <span>
                  {formatDateTimeAdmin(log.createdAt)} · {log.locale} · {log.status}
                </span>
                <span className={log.success ? "font-bold text-green-700" : "font-bold text-red-600"}>
                  {log.success ? "OK" : log.error ?? "Échec"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
