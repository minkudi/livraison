export function TopBar({ text }: { text: string }) {
  const parts = text.split(" — ");
  return (
    <div className="topbar bg-g100 py-1.5 text-center text-xs tracking-wide text-denim">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && " — "}
          {i === 1 ? <span className="font-semibold text-gold-ink">{part}</span> : part}
        </span>
      ))}
    </div>
  );
}
