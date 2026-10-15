"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Connexion impossible");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-sm space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
          Identifiant
        </label>
        <input
          className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0B1A33] outline-none ring-[#C8973E] focus:ring-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-[#5b7c9a]">
          Mot de passe
        </label>
        <input
          type="password"
          className="mt-1 w-full rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0B1A33] outline-none ring-[#C8973E] focus:ring-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </div>
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#0B1A33] py-3 text-sm font-bold text-white disabled:opacity-60"
      >
        {loading ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
