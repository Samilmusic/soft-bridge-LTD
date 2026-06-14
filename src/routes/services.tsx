import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Briefcase, Cpu, Code2, Bot, Globe2, TrendingUp, Building2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Soft Bridge Ltd" },
      { name: "description", content: "Business consulting, technology consulting, software development, AI & automation, digital solutions, digital marketing and enterprise systems." },
      { property: "og:title", content: "Services — Soft Bridge Ltd" },
      { property: "og:description", content: "End-to-end consulting and engineering capability for modern businesses." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Briefcase, title: "Business Consulting", items: ["Business Strategy", "Operational Improvement", "Growth Consulting", "Business Process Optimization", "Performance Analysis", "Organizational Efficiency"] },
  { icon: Cpu, title: "Technology Consulting", items: ["IT Strategy", "Digital Transformation", "Systems Architecture", "Technology Planning", "Infrastructure Consulting", "Technology Audits"] },
  { icon: Code2, title: "Software Development", items: ["Custom Software", "SaaS Platforms", "CRM Systems", "ERP Solutions", "Business Applications", "Customer Portals", "Management Platforms"] },
  { icon: Bot, title: "AI & Automation", items: ["Business Automation", "AI Assistants", "Workflow Automation", "Knowledge Systems", "Reporting Automation", "Operational Intelligence"] },
  { icon: Globe2, title: "Digital Solutions", items: ["Corporate Websites", "Web Applications", "Customer Portals", "Booking Systems", "Membership Platforms", "Business Dashboards"] },
  { icon: TrendingUp, title: "Digital Marketing", items: ["SEO", "Paid Advertising", "Lead Generation", "Marketing Automation", "Conversion Optimization", "Performance Marketing"] },
  { icon: Building2, title: "Enterprise Solutions", items: ["CRM Implementation", "Business Management Systems", "Reporting Platforms", "Operational Dashboards", "Customer Experience Platforms", "Internal Process Systems"] },
];

function ServicesPage() {
  return (
    <PageShell eyebrow="Our Services" title="Consulting and technology services that deliver outcomes" description="Seven integrated practices, one accountable partner. We help organizations strengthen operations, modernize technology and accelerate growth.">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, idx) => (
          <article key={s.title} className="card-elevated card-elevated-hover">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">0{idx + 1}</p>
                <h2 className="mt-1 text-xl font-bold text-navy">{s.title}</h2>
              </div>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Need a tailored engagement?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Most of our work blends multiple practices. Tell us about your goals and we'll scope the right approach.
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
