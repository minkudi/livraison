import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { ProSatLogo } from "@/components/prosat/ProSatLogo";
import { getAdminSession } from "@/lib/admin-auth";
import "@/app/globals.css";

export const instant = false;

export default async function AdminLoginPage() {
  if (await getAdminSession()) redirect("/admin");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <ProSatLogo href="/fr/preview" />
      <h1 className="mt-6 text-xl font-extrabold text-[#0B1A33]">Connexion admin</h1>
      <p className="mt-2 max-w-sm text-center text-sm text-[#5b7c9a]">
        Compte unique configuré via les variables d&apos;environnement.
      </p>
      <div className="mt-8 w-full max-w-sm rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <AdminLoginForm />
      </div>
    </main>
  );
}
