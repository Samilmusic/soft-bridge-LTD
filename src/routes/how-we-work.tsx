import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MessageSquare, ClipboardCheck, FileText, Hammer, Rocket, Headphones } from "lucide-react";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({ meta: [
    { title: "How We Work — Soft Bridge Ltd" },
    { name: "description", content: "Our six-stage engagement process: discovery, assessment, proposal, development, delivery and ongoing support." },
    { property: "og:title", content: "How We Work — Soft Bridge Ltd" },
    { property: "og:description", content: "A structured, outcome-focused engagement process." },
  ] }),
  component: HowWeWorkPage,
});

const steps = [
  { icon: MessageSquare, t: "Discovery & Consultation", d: "We start with a structured conversation to understand your goals, context, constraints and definition of success." },
  { icon: ClipboardCheck, t: "Business Assessment", d: "We assess current state, identify opportunities and define the most effective approach for your business." },
  { icon: FileText, t: "Proposal & Planning", d: "We deliver a clear proposal covering scope, deliverables, timelines, pricing and governance." },
  { icon: Hammer, t: "Development & Implementation", d: "Our team executes the engagement with senior oversight, regular reviews and transparent progress reporting." },
  { icon: Rocket, t: "Delivery & Deployment", d: "We deploy deliverables with quality assurance, change management and structured handover." },
  { icon: Headphones, t: "Ongoing Support", d: "Where required, we continue to support, optimize and evolve the solution under a long-term partnership." },
];

function HowWeWorkPage() {
  return (
    <PageShell
      eyebrow="How We Work"
      title="Our Engagement Process"
      description="A structured six-stage process that turns business goals into measurable outcomes."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
        {steps.map((s, i) => (
          <li key={s.t} className="relative">
            <span className="absolute -left-[34px] grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-primary-foreground md:-left-[54px]" style={{ background: "var(--gradient-primary)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="card-elevated card-elevated-hover">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
