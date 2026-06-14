import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, TrustStrip } from "@/components/site-layout";
import {
  ArrowRight, Briefcase, Cpu, Code2, Bot, Globe2, TrendingUp, Building2,
  ShieldCheck, Users, Award, Clock, CheckCircle2, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soft Bridge Ltd — Consulting, Technology & Digital Transformation" },
      { name: "description", content: "UK consulting and technology partner delivering software development, automation and digital transformation for businesses worldwide." },
      { property: "og:title", content: "Soft Bridge Ltd — Consulting & Digital Transformation" },
      { property: "og:description", content: "Helping organizations improve performance through consulting, software development and strategic growth solutions." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Briefcase, title: "Business Consulting", desc: "Strategy, operational improvement and growth consulting for measurable outcomes." },
  { icon: Cpu, title: "Technology Consulting", desc: "IT strategy, systems architecture and infrastructure planning aligned to business goals." },
  { icon: Code2, title: "Software Development", desc: "Custom software, SaaS platforms, CRM and ERP solutions built for scale." },
  { icon: Bot, title: "AI & Automation", desc: "Workflow automation, AI assistants and intelligent reporting that compounds efficiency." },
  { icon: Globe2, title: "Digital Solutions", desc: "Corporate websites, customer portals, booking and membership platforms." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "SEO, paid acquisition, lead generation and conversion optimization." },
];

const trustItems = [
  "UK Registered Company", "International Clients", "Enterprise Solutions",
  "Technology Experts", "Business Consultants", "Long-Term Partnerships",
];

const industries = [
  "Technology", "Professional Services", "Healthcare", "Hospitality",
  "Retail", "Manufacturing", "Real Estate", "Consulting Firms",
  "Trading Companies", "Service Businesses", "Enterprises", "Startups",
];

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.18 0.05 260) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <div className="container-page relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> UK Consulting & Technology</span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-navy md:text-5xl lg:text-6xl">
                Technology, Consulting & Digital Transformation For Modern Businesses
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Helping organizations improve performance through consulting, software development, automation, digital transformation and strategic growth solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-muted"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {trustItems.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card-elevated relative overflow-hidden p-8 shadow-lg" style={{ boxShadow: "var(--shadow-lg)" }}>
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20" style={{ background: "var(--gradient-primary)" }} />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Enterprise Capability</p>
                  <div className="mt-5 space-y-4">
                    {[
                      { k: "Consulting Engagements", v: "Strategy → Delivery" },
                      { k: "Technology Stack", v: "Modern & Scalable" },
                      { k: "Delivery Model", v: "Agile, Outcome-Driven" },
                      { k: "Client Engagements", v: "Long-Term Partnerships" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                        <span className="text-sm text-muted-foreground">{r.k}</span>
                        <span className="text-sm font-semibold text-navy">{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* SERVICES */}
        <section className="section-y">
          <div className="container-page">
            <div className="max-w-2xl">
              <span className="eyebrow">What We Do</span>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Services built for serious operators</h2>
              <p className="mt-4 text-muted-foreground">
                End-to-end consulting and engineering capability across strategy, software, automation and growth.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="card-elevated card-elevated-hover">
                  <div className="grid h-11 w-11 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Explore all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="section-y bg-surface">
          <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Why Soft Bridge</span>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">A consulting and technology partner — not a vendor.</h2>
              <p className="mt-4 text-muted-foreground">
                We combine strategic expertise with hands-on engineering to deliver outcomes that compound. From operational improvement to large-scale digital transformation, we design solutions that scale with you.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Award, t: "Strategic Expertise", d: "Senior consultants with multi-industry experience." },
                  { icon: Cpu, t: "Technology Excellence", d: "Modern architectures, secure delivery, measurable performance." },
                  { icon: Users, t: "Business-Focused Solutions", d: "Every engagement is anchored in commercial outcomes." },
                  { icon: Globe2, t: "International Perspective", d: "Cross-border experience supporting global growth." },
                  { icon: ShieldCheck, t: "Reliable Support", d: "Long-term partnership model built on accountability." },
                ].map((x) => (
                  <div key={x.t} className="flex gap-4">
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-primary/10">
                      <x.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{x.t}</h4>
                      <p className="text-sm text-muted-foreground">{x.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Industries Served", v: "12+" },
                { k: "Service Practices", v: "7" },
                { k: "Delivery Model", v: "Agile" },
                { k: "Partnership Focus", v: "Long-Term" },
              ].map((s) => (
                <div key={s.k} className="card-elevated text-center">
                  <p className="font-display text-4xl font-bold text-navy">{s.v}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section-y">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="eyebrow"><Building2 className="h-3.5 w-3.5" /> Industries</span>
                <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Industry experience that translates</h2>
              </div>
              <Link to="/industries" className="text-sm font-semibold text-primary hover:underline">View all →</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {industries.map((i) => (
                <div key={i} className="rounded-lg border border-border bg-card px-4 py-4 text-sm font-medium text-navy transition-colors hover:border-primary/40 hover:bg-surface">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-y">
          <div className="container-page">
            <div className="overflow-hidden rounded-2xl p-10 md:p-14 lg:p-16" style={{ background: "var(--gradient-navy)" }}>
              <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                    <Clock className="h-3.5 w-3.5" /> Start the conversation
                  </span>
                  <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                    Ready to improve performance and scale with confidence?
                  </h2>
                  <p className="mt-4 max-w-xl text-white/75">
                    Book a consultation with our team to discuss your operational, technology or expansion goals.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-white/90">
                    Book Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
