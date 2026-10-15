import { redirect } from "next/navigation";
import { AdminParcelForm } from "@/components/admin/AdminParcelForm";
import { requireAdminSession } from "@/lib/admin-auth";

export const instant = false;

export default async function AdminNewParcelPage() {
  if (!(await requireAdminSession())) redirect("/admin/login");

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#0B1A33]">Nouveau colis</h1>
      <p className="mt-2 text-sm text-[#5b7c9a]">
        La langue choisie s&apos;applique aux e-mails client, indépendamment du site public.
      </p>
      <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <AdminParcelForm mode="create" />
      </div>
    </div>
  );
}
