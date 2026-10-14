export function TopBar({ text }: { text: string }) {
  const parts = text.split(" — ");
  return (
    <div className="topbar bg-navy py-1.5 text-center text-xs tracking-wide text-white/50">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && " — "}
          {i === 1 ? <span className="text-gold-lt">{part}</span> : part}
        </span>
      ))}
    </div>
  );
}
