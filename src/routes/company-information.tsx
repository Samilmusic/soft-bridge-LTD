import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Building2, Hash, MapPin, Globe, Mail, Scale, Briefcase } from "lucide-react";

export const Route = createFileRoute("/company-information")({
  head: () => ({ meta: [
    { title: "Company Information — Soft Bridge Ltd" },
    { name: "description", content: "Official company information for Soft Bridge Ltd — UK registered consulting and technology company." },
    { property: "og:title", content: "Company Information — Soft Bridge Ltd" },
    { property: "og:description", content: "Verified registered details for Soft Bridge Ltd." },
  ] }),
  component: CompanyInformation,
});

const rows = [
  { icon: Building2, label: "Company Name", value: "SOFT BRIDGE LTD" },
  { icon: Hash, label: "Company Number", value: "561070" },
  { icon: Scale, label: "Registered In", value: "England and Wales" },
  { icon: MapPin, label: "Registered Office", value: "5 Brayford Square, London E1 0SG, United Kingdom" },
  { icon: Globe, label: "Website", value: "https://softbridgeltd.co.uk" },
  { icon: Mail, label: "Email", value: "info@softbridgeltd.co.uk" },
];

const activities = [
  "Information Technology Consultancy",
  "Software Development",
  "Advertising & Digital Marketing",
  "Management Consultancy",
];

function CompanyInformation() {
  return (
    <PageShell
      eyebrow="Company Information"
      title="Official Company Information"
      description="Verified registered details for Soft Bridge Ltd, a UK registered consulting and technology company."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="card-elevated overflow-hidden p-0">
          <div className="border-b border-border bg-surface px-6 py-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Registered Details</h2>
          </div>
          <dl className="divide-y divide-border">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[auto_1fr] items-start gap-4 px-6 py-5 md:grid-cols-[auto_180px_1fr]">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10">
                  <r.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <dt className="text-sm font-medium text-muted-foreground md:self-center">{r.label}</dt>
                <dd className="col-span-2 text-sm font-semibold text-navy md:col-span-1 md:self-center">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="card-elevated h-fit">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-navy">Business Activities</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {activities.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-navy">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg bg-primary/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            Soft Bridge Ltd is registered in England and Wales and complies with UK corporate, tax and data protection obligations applicable to its business.
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
