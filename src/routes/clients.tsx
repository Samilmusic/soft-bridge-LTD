import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { CLIENTS } from "@/data/clients";
import { CheckCircle2, MapPin, Building2, ArrowRight, Handshake } from "lucide-react";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Partnerships — Soft Bridge Ltd" },
      { name: "description", content: "Active client engagements and partnerships where Soft Bridge Ltd delivers consulting, CRM, AI automation and digital transformation services." },
      { property: "og:title", content: "Clients & Partnerships — Soft Bridge Ltd" },
      { property: "og:description", content: "Overview of Soft Bridge Ltd's active commercial client engagements across the United Kingdom." },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <PageShell
      eyebrow="Clients & Partnerships"
      title="Selected Clients & Partnerships"
      description="Active commercial engagements where Soft Bridge Ltd delivers consulting, technology, CRM, AI automation and digital transformation services to UK businesses."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {CLIENTS.map((c) => (
          <article key={c.slug} className="card-elevated card-elevated-hover">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-xl font-bold text-navy">{c.name}</h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{c.industry}</p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {c.status}
              </span>
            </div>

            <dl className="mt-5 grid grid-cols-1 gap-3 rounded-lg border border-border bg-surface p-4 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Location</dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-navy"><MapPin className="h-3.5 w-3.5 text-primary" />{c.location}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Partnership Since</dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-navy"><Building2 className="h-3.5 w-3.5 text-primary" />{c.partnershipStart}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Project Status</dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-navy"><Handshake className="h-3.5 w-3.5 text-primary" />Active</dd>
              </div>
            </dl>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy">Service Categories Provided</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {c.services.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-surface p-6">
        <p className="text-xs italic text-muted-foreground">
          Client information displayed with permission for portfolio and business reference purposes. All engagements listed reflect active commercial relationships maintained by Soft Bridge Ltd (Company No. 17276108), registered in England and Wales. This page is provided for transparency and compliance review by financial institutions, payment providers and corporate partners.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Become a Soft Bridge client</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Talk to our team about consulting, CRM, automation or digital transformation for your organization.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          Book Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </PageShell>
  );
}
