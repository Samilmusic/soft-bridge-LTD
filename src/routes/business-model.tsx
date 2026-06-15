import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Briefcase, Cpu, Code2, Database, Bot, Megaphone, RefreshCw, Headphones, TrendingUp, Wallet } from "lucide-react";

export const Route = createFileRoute("/business-model")({
  head: () => ({ meta: [
    { title: "How Soft Bridge Works — Business Model" },
    { name: "description", content: "How Soft Bridge Ltd generates revenue across consulting, software development, automation, marketing and long-term client engagements." },
    { property: "og:title", content: "How Soft Bridge Works — Business Model" },
    { property: "og:description", content: "Diversified revenue across consulting, technology and long-term partnerships." },
  ] }),
  component: BusinessModelPage,
});

const sources = [
  { icon: Briefcase, t: "Business Consulting Projects", d: "Scoped engagements covering strategy, operations and growth." },
  { icon: Cpu, t: "Technology Consulting", d: "IT strategy, architecture and transformation advisory." },
  { icon: Code2, t: "Software Development", d: "Custom software, SaaS platforms and business applications." },
  { icon: Database, t: "CRM & Portal Development", d: "Customer-facing systems and internal client portals." },
  { icon: Bot, t: "AI Automation Solutions", d: "Workflow automation, AI assistants and intelligent reporting." },
  { icon: Megaphone, t: "Digital Marketing Services", d: "SEO, paid acquisition and lead generation campaigns." },
  { icon: Headphones, t: "Enterprise Support Contracts", d: "Long-term support, maintenance and optimization." },
  { icon: TrendingUp, t: "Business Transformation Projects", d: "Operational, technology and growth transformation engagements." },
  { icon: RefreshCw, t: "Long-Term Retainer Agreements", d: "Recurring consulting and managed-service relationships." },
];

const ranges = [
  { t: "Consulting Projects", v: "£1,500 – £5,000" },
  { t: "Software Development Projects", v: "£5,000 – £30,000" },
  { t: "CRM & Automation Projects", v: "£3,000 – £25,000" },
  { t: "Monthly Retainers", v: "£750 – £5,000" },
  { t: "Enterprise Projects", v: "Custom quotation" },
];

function BusinessModelPage() {
  return (
    <PageShell
      eyebrow="Business Model"
      title="How Soft Bridge Works"
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

      <section className="mt-16">
        <div className="flex items-center gap-3">
          <Wallet className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Typical Engagement Ranges</h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Indicative pricing for the most common engagement types. Actual pricing depends on project scope, complexity, timelines and support requirements.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-surface text-xs font-semibold uppercase tracking-widest text-primary">
              <tr>
                <th className="px-4 py-3 sm:px-6 sm:py-4">Engagement Type</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4">Indicative Range (GBP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {ranges.map((r) => (
                <tr key={r.t}>
                  <td className="px-4 py-3 font-medium text-navy sm:px-6 sm:py-4">{r.t}</td>
                  <td className="px-4 py-3 font-semibold text-navy sm:px-6 sm:py-4">{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-lg bg-primary/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          Actual pricing depends on project scope, complexity, timelines and support requirements. All engagements are confirmed in a written proposal prior to commencement.
        </p>
      </section>
    </PageShell>
  );
}
