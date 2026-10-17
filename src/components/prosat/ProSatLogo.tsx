import Link from "next/link";

/** Marque PRO SAT — pictogram satellite + flux (sans camion / colis générique) */
export function ProSatLogo({
  href = "/",
  inverted = false,
  asLink = true,
}: {
  href?: string;
  inverted?: boolean;
  /** false when the logo sits inside another link (avoids nested &lt;a&gt;) */
  asLink?: boolean;
}) {
  const className = `inline-flex items-center gap-3 no-underline ${inverted ? "text-white" : ""}`;

  const content = (
    <>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          inverted ? "bg-white/10 ring-1 ring-white/15" : "bg-navy ring-1 ring-navy"
        }`}
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
          <circle cx="16" cy="20" r="3" fill={inverted ? "#E0B866" : "#8B5CF6"} />
          <path
            d="M16 20V8M16 8l4 2M16 8l-4 2"
            stroke={inverted ? "#fff" : "#831843"}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M8 12c2-3 5-4 8-4s6 1 8 4"
            stroke={inverted ? "#E0B866" : "#8B5CF6"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 16c3-5 7-7 10-7s7 2 10 7"
            stroke={inverted ? "rgba(255,255,255,0.45)" : "#F9A8D4"}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
            inverted ? "text-[#d5deea]" : "text-denim"
          }`}
        >
          PRO
        </span>
        <span
          className={`text-xl font-extrabold tracking-tight ${
            inverted ? "text-white" : "text-heading"
          }`}
        >
          SAT
        </span>
      </span>
    </>
  );

  if (!asLink) {
    return <span className={className}>{content}</span>;
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
