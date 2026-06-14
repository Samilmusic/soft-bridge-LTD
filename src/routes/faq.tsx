import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Soft Bridge Ltd" },
      { name: "description", content: "Answers to common questions about Soft Bridge Ltd consulting, software development, automation, marketing, expansion, pricing and support." },
      { property: "og:title", content: "Frequently Asked Questions — Soft Bridge Ltd" },
      { property: "og:description", content: "Common questions about our services, delivery model and engagement process." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "What services does Soft Bridge Ltd provide?", a: "We deliver business consulting, technology consulting, software development, AI & automation, digital solutions, digital marketing and enterprise systems implementation." },
  { q: "Who do you typically work with?", a: "We work with startups, SMEs, established businesses and enterprise organizations across multiple industries and geographies." },
  { q: "How does a consulting engagement start?", a: "Engagements begin with a discovery conversation to understand your goals, constraints and current state. We then propose a scoped approach with clear deliverables." },
  { q: "How long do software projects typically take?", a: "Timelines depend on scope and complexity. Smaller engagements may complete in a few weeks; larger platform builds typically span several months across defined phases." },
  { q: "What technology stacks do you work with?", a: "We work with modern, widely-supported technologies selected to fit the project. Stacks are chosen based on scalability, maintainability and team capability." },
  { q: "Do you build custom software or use existing platforms?", a: "Both. We often combine custom development with proven platforms to achieve the right balance of fit, speed and total cost of ownership." },
  { q: "What does an automation project look like?", a: "We assess workflows, identify high-value automation opportunities, design the solution and implement it with the appropriate tools and integrations." },
  { q: "How do you approach CRM and ERP implementations?", a: "We start from business process design, then configure platforms, migrate data, integrate systems and support adoption with structured change management." },
  { q: "What is included in your digital marketing services?", a: "SEO, paid advertising, lead generation, marketing automation, conversion optimization and ongoing performance marketing." },
  { q: "Can you support international expansion?", a: "Yes. We provide strategic advisory for market entry, corporate structuring guidance, licensing advisory and operational launch support as consulting services." },
  { q: "Are you an immigration or visa agency?", a: "No. We are a consulting and technology company. International expansion services are provided as strategic advisory only." },
  { q: "How is pricing structured?", a: "Pricing is engagement-specific and may be fixed-fee, milestone-based, time-and-materials or retainer, depending on scope and engagement type." },
  { q: "Do you offer ongoing support?", a: "Yes. Many engagements include ongoing support, optimization and continuous improvement under structured arrangements." },
  { q: "How do you handle confidentiality?", a: "All client information is treated as confidential. Engagements are governed by formal agreements that include confidentiality and data handling obligations." },
  { q: "Where is Soft Bridge Ltd based?", a: "Soft Bridge Ltd is a UK registered company with its registered office in London, serving clients internationally." },
  { q: "How do you ensure project delivery quality?", a: "Through structured delivery practices, clear milestones, senior oversight and regular client review cycles built into every engagement." },
  { q: "Can you work with our existing systems and teams?", a: "Yes. Most engagements involve integrating with existing platforms and collaborating closely with internal teams." },
  { q: "What industries do you serve?", a: "Technology, professional services, healthcare, hospitality, retail, manufacturing, real estate, trading, consulting firms, enterprises and startups." },
  { q: "Do you sign NDAs before discussing projects?", a: "Yes. We are happy to sign a mutual NDA before discussing sensitive project details." },
  { q: "How do I begin a conversation?", a: "Use the contact form on our website or email info@softbridgeltd.co.uk and we will respond promptly to schedule a consultation." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell eyebrow="FAQ" title="Frequently Asked Questions" description="Answers to common questions about our consulting, technology and digital transformation services.">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-navy md:text-base">{f.q}</span>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
