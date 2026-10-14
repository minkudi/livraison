import { CheckingScene } from "@/components/relais/CheckingScene";
import { RelaisShell } from "@/components/relais/RelaisShell";

export default function TrackingLoading() {
  return (
    <RelaisShell>
      <main className="mx-auto max-w-lg px-4 py-16">
        <CheckingScene />
      </main>
    </RelaisShell>
  );
}
