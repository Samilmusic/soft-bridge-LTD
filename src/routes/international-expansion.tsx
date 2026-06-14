import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Globe2, Building2, FileCheck, Rocket, Compass, TrendingUp, Network, Briefcase } from "lucide-react";

export const Route = createFileRoute("/international-expansion")({
  head: () => ({
    meta: [
      { title: "International Expansion — Soft Bridge Ltd" },
      { name: "description", content: "Advisory and consulting services supporting businesses entering new markets, including UAE setup advisory, market entry, structuring and operational launch." },
      { property: "og:title", content: "International Business Expansion Services" },
      { property: "og:description", content: "Strategic advisory for cross-border growth and market entry." },
    ],
  }),
  component: ExpansionPage,
});

const services = [
  { icon: Globe2, t: "UAE Business Setup Advisory", d: "Strategic advisory on entity options, jurisdictions and operational considerations for UAE market entry." },
  { icon: Compass, t: "Market Entry Consulting", d: "Market research, positioning and entry planning aligned to commercial objectives." },
  { icon: Building2, t: "Corporate Structuring Guidance", d: "Advisory on corporate structures suitable for international operations." },
  { icon: FileCheck, t: "Licensing Advisory", d: "Guidance on licensing pathways and regulatory considerations for chosen markets." },
  { icon: Rocket, t: "Operational Launch Support", d: "Practical support establishing operations, processes and systems in a new market." },
  { icon: TrendingUp, t: "Business Expansion Strategy", d: "Phased expansion plans grounded in operational realities and growth targets." },
  { icon: Network, t: "International Growth Consulting", d: "Ongoing consulting to support sustained international growth." },
  { icon: Briefcase, t: "Cross-Border Business Support", d: "Practical advisory on operating across jurisdictions efficiently." },
];

function ExpansionPage() {
  return (
    <PageShell
      eyebrow="International Expansion"
      title="International Business Expansion Services"
      description="Supporting companies entering new markets and establishing international business operations through strategic advisory and consulting."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.t} className="card-elevated card-elevated-hover">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-surface p-6 text-sm text-muted-foreground">
        <p>
          <strong className="text-navy">Important:</strong> Our international expansion offering is provided as strategic consulting and advisory services. Soft Bridge Ltd is not an immigration or visa services agency. Where regulatory, legal or immigration matters arise, we recommend engaging appropriately qualified local professionals.
        </p>
      </div>
    </PageShell>
  );
}
