import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { TEAM } from "@/data/team";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership Team — Soft Bridge Ltd" },
      { name: "description", content: "Meet the leadership team behind Soft Bridge Ltd — directors and managers across strategy, technology, sales and operations." },
      { property: "og:title", content: "Leadership Team — Soft Bridge Ltd" },
      { property: "og:description", content: "Meet the professionals behind Soft Bridge Ltd." },
      { property: "og:url", content: "https://softbridgeltd.co.uk/leadership" },
    ],
    links: [{ rel: "canonical", href: "https://softbridgeltd.co.uk/leadership" }],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <PageShell
      eyebrow="Leadership Team"
      title="Leadership Team"
      description="Meet the professionals behind Soft Bridge Ltd."
    >
      <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        Soft Bridge Ltd is led by a multidisciplinary team with expertise in business consulting, technology, software development, sales and operational management. Our team works together to help clients improve performance, implement technology solutions and achieve sustainable growth.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {TEAM.map((m) => (
          <article key={m.slug} className="card-elevated card-elevated-hover">
            <div className="flex items-start gap-5">
              <div
                className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-xl font-display text-xl font-bold text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
                aria-hidden
              >
                {m.initials}
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy">{m.name}</h2>
                <p className="text-sm font-semibold text-primary">{m.position}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">Areas of Expertise</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {m.expertise.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-navy">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-surface p-8 md:p-10">
        <h2 className="text-xl font-bold text-navy md:text-2xl">Work with our team</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Whether you have a strategic, technology, commercial or operational question, our leadership team is available to discuss how Soft Bridge Ltd can support your business.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md"
          style={{ background: "var(--gradient-primary)" }}
        >
          Contact Leadership <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </PageShell>
  );
}
