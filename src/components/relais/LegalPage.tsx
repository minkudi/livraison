import Link from "next/link";
import { RelaisShell } from "./RelaisShell";

export function LegalPage({
  title,
  backHref,
  backLabel,
  children,
}: {
  title: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}) {
  return (
    <RelaisShell>
      <main className="content mx-auto max-w-3xl flex-1 px-4 py-10 sm:px-8 sm:py-14">
        <Link href={backHref} className="text-sm font-semibold text-navy hover:underline">
          {backLabel}
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold text-heading">{title}</h1>
        <div className="prose-relais mt-8 space-y-4 text-sm leading-relaxed text-denim">{children}</div>
      </main>
    </RelaisShell>
  );
}
