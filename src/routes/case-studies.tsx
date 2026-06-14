import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Soft Bridge Ltd" },
      { name: "description", content: "Selected engagements across automation, CRM, customer portals, operational efficiency, digital transformation and marketing performance." },
      { property: "og:title", content: "Case Studies — Soft Bridge Ltd" },
      { property: "og:description", content: "Outcomes from real consulting and technology engagements." },
    ],
  }),
  component: CaseStudiesPage,
});

type Case = { tag: string; title: string; challenge: string; solution: string; implementation: string; outcome: string };

const cases: Case[] = [
  {
    tag: "Automation",
    title: "Business Process Automation",
    challenge: "A professional services firm relied on manual coordination across email, spreadsheets and shared drives, creating delays and inconsistent client handoffs.",
    solution: "We mapped the end-to-end workflow, identified high-value automation opportunities and designed an integrated process layer connecting their existing tools.",
    implementation: "Phased rollout of automated routing, notifications, document generation and status tracking with role-based dashboards for operations and leadership.",
    outcome: "Operational time on routine coordination reduced significantly, with consistent SLAs and clearer visibility across active engagements.",
  },
  {
    tag: "CRM",
    title: "CRM Implementation",
    challenge: "A growing services business had fragmented customer data across disconnected tools, limiting account visibility and sales performance.",
    solution: "We selected and configured a CRM aligned to their sales motion, defined pipelines, automations and integrations with marketing and finance systems.",
    implementation: "Data migration, custom objects, sales playbooks, training and adoption support delivered in a structured multi-phase rollout.",
    outcome: "Unified customer view, faster pipeline cycles and improved forecasting accuracy across the commercial team.",
  },
  {
    tag: "Portals",
    title: "Customer Portal Development",
    challenge: "Customers had no self-service channel, generating high support volume and slowing response times.",
    solution: "We designed and built a secure customer portal for account management, document access, request tracking and communication.",
    implementation: "Custom web application with role-based access, integrated with internal systems and supported by a clear support workflow.",
    outcome: "Reduced inbound support load, improved customer satisfaction and a foundation for future self-service expansion.",
  },
  {
    tag: "Operations",
    title: "Operational Efficiency Improvement",
    challenge: "A multi-location business struggled with inconsistent operating procedures and limited visibility into performance.",
    solution: "We led an operational assessment, standardized core processes and deployed a reporting layer for cross-location visibility.",
    implementation: "Process documentation, system consolidation, KPI definition and management dashboards rolled out to operations leadership.",
    outcome: "Standardized execution, faster issue resolution and a measurable lift in operational consistency across locations.",
  },
  {
    tag: "Transformation",
    title: "Digital Transformation Project",
    challenge: "An established organization operated on legacy systems that limited agility, integration and customer experience.",
    solution: "We delivered a phased digital transformation roadmap covering platform modernization, integration architecture and change enablement.",
    implementation: "Multi-stream programme spanning platform replatforming, data unification, automation and capability uplift for internal teams.",
    outcome: "Modernized technology foundation, reduced operational friction and a platform ready to support long-term growth.",
  },
  {
    tag: "Marketing",
    title: "Marketing Performance Optimization",
    challenge: "Paid acquisition and content efforts were not converting consistently, with limited visibility into channel performance.",
    solution: "We restructured tracking, audited campaigns and rebuilt the conversion funnel with clear attribution and testing discipline.",
    implementation: "Analytics setup, landing page rebuilds, campaign restructuring and an ongoing performance review cadence with the marketing team.",
    outcome: "Improved conversion efficiency, clearer channel ROI and a repeatable framework for ongoing optimization.",
  },
];

function CaseStudiesPage() {
  return (
    <PageShell eyebrow="Case Studies" title="Selected engagements and outcomes" description="A snapshot of how we work with clients across consulting, technology and digital transformation. Each engagement is anchored in commercial outcomes.">
      <div className="space-y-6">
        {cases.map((c, i) => (
          <article key={c.title} className="card-elevated card-elevated-hover">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {c.tag}
              </span>
              <span className="text-xs font-medium text-muted-foreground">Case Study {String(i + 1).padStart(2, "0")}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">{c.title}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                ["Client Challenge", c.challenge],
                ["Solution", c.solution],
                ["Implementation", c.implementation],
                ["Business Outcome", c.outcome],
              ].map(([h, b]) => (
                <div key={h}>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">{h}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
