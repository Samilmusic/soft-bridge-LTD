import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ShieldCheck, Lock, FileLock2, Database, KeyRound, BadgeCheck, Scale, AlertTriangle } from "lucide-react";

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
  { icon: ShieldCheck, t: "Data Protection Commitment", d: "Personal data is processed lawfully, fairly and transparently across every engagement." },
  { icon: FileLock2, t: "UK GDPR Compliance", d: "Aligned with the UK General Data Protection Regulation and the Data Protection Act 2018." },
  { icon: Lock, t: "Client Confidentiality", d: "Strict confidentiality obligations apply across all engagements and personnel." },
  { icon: KeyRound, t: "Information Security", d: "Access controls, secure infrastructure and disciplined operational practices." },
  { icon: Database, t: "Secure Data Handling", d: "Data is collected, stored and transmitted using appropriate safeguards." },
  { icon: BadgeCheck, t: "Professional Standards", d: "Senior-led delivery, structured governance and clear accountability." },
  { icon: Scale, t: "Ethical Business Practices", d: "Integrity, honesty and transparency in every commercial relationship." },
  { icon: AlertTriangle, t: "Risk Management", d: "Proactive risk identification and mitigation built into delivery." },
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

      <div className="mt-12 rounded-2xl border border-border bg-surface p-8 md:p-10">
        <h2 className="text-xl font-bold text-navy md:text-2xl">Our Standard</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Soft Bridge Ltd operates to UK corporate standards and applies disciplined governance to every engagement. We continuously review our policies and practices to ensure they remain aligned with regulatory expectations and client requirements.
        </p>
      </div>
    </PageShell>
  );
}
