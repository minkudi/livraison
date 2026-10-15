import Link from "next/link";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { ProSatLogo } from "@/components/prosat/ProSatLogo";
import "@/app/globals.css";

export const metadata = {
  title: "PRO SAT — Administration",
};

export default function AdminSecureLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#2e4a66]">
      <header className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/admin" className="flex items-center gap-3 no-underline">
            <ProSatLogo asLink={false} />
            <span className="text-sm font-extrabold text-[#0B1A33]">Administration</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/admin/parcels/new" className="text-sm font-bold text-[#0B1A33]">
              Nouveau colis
            </Link>
            <AdminLogoutButton />
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
    </div>
  );
}
