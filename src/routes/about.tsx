import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ShieldCheck, Lightbulb, Award, Zap, Handshake, Heart, Cpu, Globe2, Users, Building2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Soft Bridge Ltd" },
      { name: "description", content: "Soft Bridge Ltd is a UK registered consulting and technology company helping organizations improve performance and scale through software, automation and digital transformation." },
      { property: "og:title", content: "About Soft Bridge Ltd" },
      { property: "og:description", content: "UK consulting and technology partner for businesses worldwide." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, t: "Integrity", d: "Honest, transparent engagement at every stage." },
  { icon: Lightbulb, t: "Innovation", d: "Modern thinking applied to operational realities." },
  { icon: Award, t: "Professionalism", d: "Senior-led delivery with rigorous standards." },
  { icon: Zap, t: "Efficiency", d: "Outcomes prioritized over activity." },
  { icon: Handshake, t: "Long-Term Partnerships", d: "Sustainable relationships, not transactions." },
  { icon: Heart, t: "Customer Success", d: "Your business outcomes define our success." },
];

const reasons = [
  { icon: Award, t: "Strategic Expertise", d: "Senior consultants experienced across industries and geographies." },
  { icon: Cpu, t: "Technology Excellence", d: "Modern, secure, scalable systems engineered for the long term." },
  { icon: Users, t: "Business-Focused Solutions", d: "Commercial outcomes anchor every technical decision." },
  { icon: Globe2, t: "International Perspective", d: "Cross-border experience supporting global expansion." },
  { icon: Building2, t: "Reliable Support", d: "Accountable partnership through every engagement phase." },
];

function AboutPage() {
  return (
    <PageShell eyebrow="About Us" title="About Soft Bridge Ltd" description="A UK registered consulting and technology company helping organizations improve performance through business consulting, software development, digital transformation and automation solutions.">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-navy">Soft Bridge Ltd</strong> is a UK registered consulting and technology company helping organizations improve performance through business consulting, software development, digital transformation and automation solutions.
          </p>
          <p>
            Our mission is to help businesses build stronger operational foundations, improve efficiency and implement scalable technology systems that support sustainable growth.
          </p>
          <p>
            We work with organizations across multiple industries to design, develop and implement practical business solutions that create measurable long-term value. From early-stage startups to established enterprises, our engagements are anchored in clarity, accountability and outcomes.
          </p>
        </div>
        <aside className="card-elevated h-fit space-y-4">
          <h3 className="text-lg font-bold text-navy">Registered Information</h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Legal Name</dt>
              <dd className="font-medium text-navy">Soft Bridge Ltd</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Company Number</dt>
              <dd className="font-medium text-navy">[INSERT COMPANY NUMBER]</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Jurisdiction</dt>
              <dd className="font-medium text-navy">England and Wales</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Registered Office</dt>
              <dd className="font-medium text-navy">5 Brayford Square, London E1 0SG, United Kingdom</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="font-medium text-navy">info@softbridgeltd.co.uk</dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="mt-20">
        <span className="eyebrow">Core Values</span>
        <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">What we stand for</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="card-elevated card-elevated-hover">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <span className="eyebrow">Why Clients Choose Us</span>
        <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">A partner you can build with</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="rounded-xl border border-border bg-surface p-6">
              <r.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-bold text-navy">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
