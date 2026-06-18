import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ShieldCheck, Lock, FileLock2, Database, KeyRound, BadgeCheck, Scale, AlertTriangle, Building2, Briefcase, FileText, XCircle } from "lucide-react";

export const Route = createFileRoute("/compliance")({
  head: () => ({ meta: [
    { title: "Compliance — Soft Bridge Ltd" },
    { name: "description", content: "Soft Bridge Ltd's commitments to data protection, UK GDPR, confidentiality, information security and ethical business practices." },
    { property: "og:title", content: "Compliance — Soft Bridge Ltd" },
    { property: "og:description", content: "Our compliance, security and professional standards commitments." },
  ] }),
  component: CompliancePage,
});

const items = [
  { icon: Building2, t: "UK Registered Company", d: "Registered in England and Wales (Company No. 17276108) and subject to UK corporate law." },
  { icon: Briefcase, t: "Professional Services Provider", d: "Operating as a consulting, technology and business advisory firm." },
  { icon: ShieldCheck, t: "Data Protection Commitment", d: "Personal data is processed lawfully, fairly and transparently across every engagement." },
  { icon: Lock, t: "Client Confidentiality", d: "Strict confidentiality obligations apply across all engagements and personnel." },
  { icon: Database, t: "Secure Data Handling", d: "Data is collected, stored and transmitted using appropriate technical safeguards." },
  { icon: BadgeCheck, t: "Professional Standards", d: "Senior-led delivery, structured governance and clear accountability." },
  { icon: FileText, t: "Transparent Invoicing", d: "Clear, itemised invoicing with documented scope and deliverables." },
  { icon: Scale, t: "Ethical Business Practices", d: "Integrity, honesty and transparency in every commercial relationship." },
  { icon: AlertTriangle, t: "Risk Management", d: "Proactive risk identification and mitigation built into delivery." },
  { icon: FileLock2, t: "UK GDPR Compliance", d: "Aligned with the UK General Data Protection Regulation and the Data Protection Act 2018." },
  { icon: KeyRound, t: "Information Security", d: "Access controls, secure infrastructure and disciplined operational practices." },
];

const excluded = [
  "No Financial Services",
  "No Cryptocurrency Services",
  "No Money Transfer Services",
  "No Investment Services",
  "No Payment Processing Services",
];

function CompliancePage() {
  return (
    <PageShell
      eyebrow="Compliance"
      title="Compliance, Security & Professional Standards"
      description="Our operational, data protection and ethical commitments to clients and stakeholders."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <article key={i.t} className="card-elevated card-elevated-hover">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10">
              <i.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 text-base font-bold text-navy">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <div className="flex items-center gap-3">
          <XCircle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Services We Do Not Provide</h2>
        </div>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Soft Bridge Ltd is a consulting and technology company. We do not operate as, and do not provide, regulated financial or payment services.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {excluded.map((e) => (
            <li key={e} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-navy">
              <XCircle className="h-4 w-4 flex-shrink-0 text-destructive" />
              {e}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 rounded-2xl border border-border bg-surface p-8 md:p-10">
        <h2 className="text-xl font-bold text-navy md:text-2xl">Our Standard</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Soft Bridge Ltd operates to UK corporate standards and applies disciplined governance to every engagement. We continuously review our policies and practices to ensure they remain aligned with regulatory expectations and client requirements.
        </p>
      </div>
    </PageShell>
  );
}
