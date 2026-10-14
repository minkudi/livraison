import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconParcel({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 4v16M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconRadar({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 12L16 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconVan({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="2" y="9" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M14 10h6l2 2v5h-8v-7z" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="6" cy="18" r="2" fill="currentColor" />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconShield({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconMail({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconGlobe({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconWarehouse({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M4 10l8-5 8 5v9H4v-9z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 19v-6h6v6" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconSortHub({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="4" y="4" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <rect x="4" y="14" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <rect x="13" y="14" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconDepot({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M3 11h18v8H3z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 11V7h10v4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 19v-3h4v3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconRoute({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M5 18c0-3 2-5 5-5h4c2 0 3-1 3-3s-1-3-3-3H9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="5" cy="18" r="2" fill="currentColor" />
      <circle cx="19" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconDelivered({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M4 10l8-6 8 6v9H4v-9z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 16l2 2 4-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export type TimelineIconId = "pickup" | "sort" | "depot" | "out_for_delivery" | "delivered";

export function TimelineStepIcon({ id, className }: { id: TimelineIconId; className?: string }) {
  const cn = className ?? "h-5 w-5";
  switch (id) {
    case "pickup":
      return <IconWarehouse className={cn} />;
    case "sort":
      return <IconSortHub className={cn} />;
    case "depot":
      return <IconDepot className={cn} />;
    case "out_for_delivery":
      return <IconVan className={cn} />;
    case "delivered":
      return <IconDelivered className={cn} />;
  }
}

export type ServiceIconId = "parcel" | "radar" | "van" | "shield" | "mail" | "globe";

export function ServiceIcon({ id, className }: { id: ServiceIconId; className?: string }) {
  const cn = className ?? "h-6 w-6";
  switch (id) {
    case "parcel":
      return <IconParcel className={cn} />;
    case "radar":
      return <IconRadar className={cn} />;
    case "van":
      return <IconVan className={cn} />;
    case "shield":
      return <IconShield className={cn} />;
    case "mail":
      return <IconMail className={cn} />;
    case "globe":
      return <IconGlobe className={cn} />;
  }
}
