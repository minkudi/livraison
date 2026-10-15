import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/admin-auth";
import { listParcels } from "@/lib/parcel-db";
import { STATUS_LABELS_FR } from "@/lib/parcel-status";
import type { ParcelStatus } from "@/lib/admin-order-spec";

export const instant = false;

export default async function AdminDashboardPage() {
  if (!(await requireAdminSession())) redirect("/admin/login");

  const parcels = await listParcels();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0B1A33]">Colis</h1>
          <p className="mt-1 text-sm text-[#5b7c9a]">{parcels.length} envoi(s) enregistré(s)</p>
        </div>
        <Link
          href="/admin/parcels/new"
          className="rounded-xl bg-[#C8973E] px-4 py-2.5 text-sm font-bold text-[#0B1A33]"
        >
          + Nouveau colis
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-xs uppercase tracking-wide text-[#5b7c9a]">
            <tr>
              <th className="px-4 py-3 font-semibold">N° suivi</th>
              <th className="px-4 py-3 font-semibold">E-mail</th>
              <th className="px-4 py-3 font-semibold">Statut</th>
              <th className="px-4 py-3 font-semibold">Notif.</th>
              <th className="px-4 py-3 font-semibold">Mis à jour</th>
            </tr>
          </thead>
          <tbody>
            {parcels.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-[#5b7c9a]">
                  Aucun colis — créez-en un pour alimenter le suivi public.
                </td>
              </tr>
            ) : (
              parcels.map((p) => (
                <tr key={p.id} className="border-b border-[#E2E8F0] last:border-0">
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/parcels/${p.id}`}
                      className="font-mono font-bold text-[#0B1A33] hover:underline"
                    >
                      {p.trackingNumber}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{p.recipientEmail}</td>
                  <td className="px-4 py-3">
                    {STATUS_LABELS_FR[p.status as ParcelStatus] ?? p.status}
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs">
                      {p.notificationLocale.toUpperCase()}
                      {p.autoNotify ? " · auto" : ""}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#5b7c9a]">
                    {p.updatedAt.toLocaleString("fr-FR")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
