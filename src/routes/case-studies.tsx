import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Calendar, Globe2, Building2 } from "lucide-react";

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

type Case = {
  tag: string;
  title: string;
  industry: string;
  region: string;
  duration: string;
  challenge: string;
  solution: string;
  implementation: string;
  outcome: string;
};

const cases: Case[] = [
  {
    tag: "Automation",
    title: "Business Process Automation",
    industry: "Professional Services",
    region: "United Kingdom",
    duration: "Approx. 4 months",
    challenge: "A professional services firm relied on manual coordination across email, spreadsheets and shared drives, creating delays and inconsistent client handoffs.",
    solution: "We mapped the end-to-end workflow, identified high-value automation opportunities and designed an integrated process layer connecting their existing tools.",
    implementation: "Phased rollout of automated routing, notifications, document generation and status tracking with role-based dashboards for operations and leadership.",
    outcome: "Reduced manual administration, improved workflow efficiency and clearer visibility across active engagements.",
  },
  {
    tag: "CRM",
    title: "CRM Implementation",
    industry: "Business Services",
    region: "United Kingdom & Europe",
    duration: "Approx. 5 months",
    challenge: "A growing services business had fragmented customer data across disconnected tools, limiting account visibility and sales performance.",
    solution: "We selected and configured a CRM aligned to their sales motion, defined pipelines, automations and integrations with marketing and finance systems.",
    implementation: "Data migration, custom objects, sales playbooks, training and adoption support delivered in a structured multi-phase rollout.",
    outcome: "Improved lead tracking, better reporting visibility and a unified customer view across the commercial team.",
  },
  {
    tag: "Portals",
    title: "Customer Portal Development",
    industry: "Service Operations",
    region: "United Kingdom",
    duration: "Approx. 6 months",
    challenge: "Customers had no self-service channel, generating high support volume and slowing response times.",
    solution: "We designed and built a secure customer portal for account management, document access, request tracking and communication.",
    implementation: "Custom web application with role-based access, integrated with internal systems and supported by a clear support workflow.",
    outcome: "Improved customer response times and reduced inbound support load, with a foundation for further self-service expansion.",
  },
  {
    tag: "Operations",
    title: "Operational Efficiency Improvement",
    industry: "Multi-Location Operations",
    region: "United Kingdom",
    duration: "Approx. 3 months",
    challenge: "A multi-location business struggled with inconsistent operating procedures and limited visibility into performance.",
    solution: "We led an operational assessment, standardised core processes and deployed a reporting layer for cross-location visibility.",
    implementation: "Process documentation, system consolidation, KPI definition and management dashboards rolled out to operations leadership.",
    outcome: "Operational improvements across locations with better reporting visibility and faster issue resolution.",
  },
  {
    tag: "Transformation",
    title: "Digital Transformation Programme",
    industry: "Established Enterprise",
    region: "United Kingdom & International",
    duration: "Approx. 9 months",
    challenge: "An established organisation operated on legacy systems that limited agility, integration and customer experience.",
    solution: "We delivered a phased digital transformation roadmap covering platform modernisation, integration architecture and change enablement.",
    implementation: "Multi-stream programme spanning platform replatforming, data unification, automation and capability uplift for internal teams.",
    outcome: "A modernised technology foundation, improved workflow efficiency and reduced operational friction across the business.",
  },
  {
    tag: "Marketing",
    title: "Marketing Performance Optimisation",
    industry: "B2B Services",
    region: "United Kingdom & Europe",
    duration: "Approx. 4 months",
    challenge: "Paid acquisition and content efforts were not converting consistently, with limited visibility into channel performance.",
    solution: "We restructured tracking, audited campaigns and rebuilt the conversion funnel with clear attribution and testing discipline.",
    implementation: "Analytics setup, landing page rebuilds, campaign restructuring and an ongoing performance review cadence with the marketing team.",
    outcome: "Improved lead tracking, better reporting visibility and a repeatable framework for ongoing optimisation.",
  },
];

function CaseStudiesPage() {
  return (
    <PageShell eyebrow="Case Studies" title="Selected engagements and outcomes" description="A snapshot of how we work with clients across consulting, technology and digital transformation. Each engagement is anchored in commercial outcomes.">
      <p className="mb-8 max-w-3xl rounded-lg bg-primary/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        Client names and identifying details are withheld to honour confidentiality obligations. Outcomes describe operational improvements observed during and after each engagement.
      </p>
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

            <div className="mt-5 grid gap-3 rounded-xl border border-border bg-surface p-4 sm:grid-cols-3">
              <Meta icon={Building2} label="Industry" value={c.industry} />
              <Meta icon={Globe2} label="Country / Region" value={c.region} />
              <Meta icon={Calendar} label="Project Duration" value={c.duration} />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                ["Client Challenge", c.challenge],
                ["Solution Delivered", c.solution],
                ["Implementation Process", c.implementation],
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

function Meta({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-navy">{value}</p>
      </div>
    </div>
  );
}
