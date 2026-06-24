import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Building2, Handshake } from "lucide-react";
import { CLIENTS } from "@/data/clients";

export function ClientsSection() {
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow"><Handshake className="h-3.5 w-3.5" /> Clients & Partnerships</span>
          <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Selected Clients &amp; Partnerships</h2>
          <p className="mt-4 text-muted-foreground">
            Active commercial engagements where Soft Bridge Ltd delivers consulting, technology and digital transformation services.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CLIENTS.map((c) => (
            <article
              key={c.slug}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-10 transition-opacity group-hover:opacity-20" style={{ background: "var(--gradient-primary)" }} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                      <c.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold text-navy sm:text-xl">{c.name}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{c.industry}</p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {c.status}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {c.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> Since {c.partnershipStart}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy">Services Delivered</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {c.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs italic text-muted-foreground">
          Client information displayed with permission for portfolio and business reference purposes.
        </p>

        <div className="mt-8">
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all clients &amp; partnerships <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
