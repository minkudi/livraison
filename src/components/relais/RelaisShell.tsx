import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function RelaisShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
