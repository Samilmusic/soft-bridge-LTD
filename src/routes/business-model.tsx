import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Briefcase, Cpu, Code2, Database, Bot, Megaphone, RefreshCw, Headphones, Settings, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/business-model")({
  head: () => ({ meta: [
    { title: "Business Model — Soft Bridge Ltd" },
    { name: "description", content: "How Soft Bridge Ltd generates revenue across consulting, software development, automation, marketing and long-term client engagements." },
    { property: "og:title", content: "Business Model — Soft Bridge Ltd" },
    { property: "og:description", content: "Diversified revenue across consulting, technology and long-term partnerships." },
  ] }),
  component: BusinessModelPage,
});

const sources = [
  { icon: Briefcase, t: "Business Consulting Projects", d: "Scoped engagements covering strategy, operations and growth." },
  { icon: Cpu, t: "Technology Consulting", d: "IT strategy, architecture and transformation advisory." },
  { icon: Code2, t: "Software Development Projects", d: "Custom software, SaaS platforms and business applications." },
  { icon: Database, t: "CRM & Client Portal Development", d: "Customer-facing systems and internal client portals." },
  { icon: Bot, t: "AI Automation Solutions", d: "Workflow automation, AI assistants and intelligent reporting." },
  { icon: Megaphone, t: "Digital Marketing Services", d: "SEO, paid acquisition and lead generation campaigns." },
  { icon: RefreshCw, t: "Monthly Retainer Agreements", d: "Recurring consulting and managed-service engagements." },
  { icon: Headphones, t: "Enterprise Support Contracts", d: "Long-term support, maintenance and optimization." },
  { icon: Settings, t: "Custom Business Systems", d: "Bespoke management systems and operational dashboards." },
  { icon: TrendingUp, t: "Operational Improvement Projects", d: "Performance, process and efficiency engagements." },
];

function BusinessModelPage() {
  return (
    <PageShell
      eyebrow="Business Model"
      title="How Soft Bridge Ltd Generates Revenue"
      description="A diversified consulting and technology revenue model combining project-based engagements with long-term client partnerships."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-elevated">
          <h3 className="text-lg font-bold text-navy">Project-Based Engagements</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Fixed-scope consulting, software development and digital transformation projects with defined deliverables, milestones and pricing. Suited to clients with a specific outcome to achieve within a defined timeframe.
          </p>
        </div>
        <div className="card-elevated">
          <h3 className="text-lg font-bold text-navy">Long-Term Partnerships</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Monthly retainers, enterprise support contracts and managed-service relationships providing ongoing consulting, technology operations and continuous improvement. Designed for clients who want a dependable long-term partner.
          </p>
        </div>
      </div>

      <section className="mt-16">
        <span className="eyebrow">Revenue Sources</span>
        <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Diversified revenue across services</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Soft Bridge Ltd operates multiple professional revenue streams across consulting, technology and managed services.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((s) => (
            <div key={s.t} className="card-elevated card-elevated-hover">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-base font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
