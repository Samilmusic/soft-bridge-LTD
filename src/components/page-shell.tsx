import type { ReactNode } from "react";
import { SiteHeader, SiteFooter, PageHero } from "./site-layout";

export function PageShell({
  eyebrow, title, description, children,
}: { eyebrow?: string; title: string; description?: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PageHero eyebrow={eyebrow} title={title} description={description} />
        <div className="container-page section-y">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
