import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShieldCheck, Globe2, Cpu, TrendingUp, Handshake } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/leadership", label: "Leadership" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/international-expansion", label: "International" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
            <span className="font-display text-base font-bold text-primary-foreground">S</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold text-navy">Soft Bridge</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Ltd</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-navy bg-muted" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md"
            style={{ background: "var(--gradient-primary)" }}
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-white/85" style={{ background: "var(--gradient-navy)" }}>
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                <span className="font-display text-base font-bold text-white">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-bold text-white">Soft Bridge Ltd</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/60">UK Registered</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Consulting, technology and digital transformation partner for modern businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/about", "About"],
                ["/services", "Services"],
                ["/industries", "Industries"],
                ["/leadership", "Leadership"],
                ["/case-studies", "Case Studies"],
                ["/international-expansion", "International Expansion"],
                ["/how-we-work", "How We Work"],
                ["/business-model", "Business Model"],
                ["/company-information", "Company Information"],
                ["/compliance", "Compliance"],
                ["/careers", "Careers"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/privacy-policy", "Privacy Policy"],
                ["/terms", "Terms & Conditions"],
                ["/refund-policy", "Refund Policy"],
                ["/cookie-policy", "Cookie Policy"],
                ["/disclaimer", "Disclaimer"],
                ["/data-protection", "Data Protection"],
                ["/acceptable-use", "Acceptable Use"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Registered Office</h4>
            <address className="mt-4 not-italic text-sm leading-relaxed text-white/70">
              <strong className="block text-white">SOFT BRIDGE LTD</strong>
              5 Brayford Square<br />
              London E1 0SG<br />
              United Kingdom<br />
              <span className="mt-2 block">Company No: 561070</span>
              <span className="block">Registered in England and Wales</span>
              <a href="tel:+447414233666" className="mt-3 block text-white hover:underline">
                +44 7414 23366
              </a>
              <a href="mailto:info@softbridgeltd.co.uk" className="mt-1 block text-white hover:underline">
                info@softbridgeltd.co.uk
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Soft Bridge Ltd. All rights reserved.</p>
          <p>Registered in England and Wales — Company Number 561070</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-page py-12 sm:py-16 md:py-24">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-5xl lg:text-6xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}

const TRUST = [
  { icon: ShieldCheck, label: "UK Registered Company" },
  { icon: Globe2, label: "International Consulting Services" },
  { icon: Cpu, label: "Technology & Software Solutions" },
  { icon: TrendingUp, label: "Business Transformation Expertise" },
  { icon: Handshake, label: "Long-Term Client Partnerships" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page py-6">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
          {TRUST.map((t) => (
            <li key={t.label} className="flex items-center gap-2.5 text-xs font-medium text-navy">
              <t.icon className="h-4 w-4 flex-shrink-0 text-primary" />
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

