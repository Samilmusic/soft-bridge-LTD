import type { ReactNode } from "react";
import { PageShell } from "./page-shell";

export function LegalPage({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <PageShell eyebrow="Legal" title={title} description={description}>
      <article className="prose-legal mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted-foreground">
        <p className="text-xs uppercase tracking-widest text-primary">Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>
        {children}
      </article>
    </PageShell>
  );
}

export function LSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-navy md:text-2xl">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
