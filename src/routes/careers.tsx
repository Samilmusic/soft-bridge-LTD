import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";
import { z } from "zod";
import { Briefcase, Code2, ClipboardList, Megaphone, BarChart3, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [
    { title: "Careers — Soft Bridge Ltd" },
    { name: "description", content: "Join Soft Bridge Ltd. We are always interested in hearing from talented consultants, developers, project managers, marketing specialists and business analysts." },
    { property: "og:title", content: "Careers — Soft Bridge Ltd" },
    { property: "og:description", content: "Build your career with a UK consulting and technology company." },
  ] }),
  component: CareersPage,
});

const roles = [
  { icon: Briefcase, t: "Consultants", d: "Business, technology and transformation consultants across industries." },
  { icon: Code2, t: "Developers", d: "Full-stack, backend and platform engineers building production systems." },
  { icon: ClipboardList, t: "Project Managers", d: "Delivery leads managing scope, quality and client relationships." },
  { icon: Megaphone, t: "Marketing Specialists", d: "Performance marketers, SEO and lead generation specialists." },
  { icon: BarChart3, t: "Business Analysts", d: "Analysts translating business needs into technology and operating models." },
];

const schema = z.object({
  fullName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(40).optional(),
  role: z.string().trim().min(1, "Select a role").max(80),
  experience: z.string().trim().max(40).optional(),
  linkedin: z.string().trim().max(255).optional(),
  cvLink: z.string().trim().max(500).optional(),
  message: z.string().trim().min(1, "Please share a short message").max(2000),
});

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <PageShell
      eyebrow="Careers"
      title="Build your career with Soft Bridge Ltd"
      description="We are always interested in hearing from talented professionals who want to do meaningful work for serious clients."
    >
      <section>
        <h2 className="text-2xl font-bold text-navy md:text-3xl">Roles we hire for</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <article key={r.t} className="card-elevated card-elevated-hover">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-base font-bold text-navy">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="card-elevated">
            <h2 className="text-xl font-bold text-navy md:text-2xl">Submit your CV</h2>
            <p className="mt-2 text-sm text-muted-foreground">Tell us about yourself and the role that interests you. We'll review and respond if there is a fit.</p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center py-12 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">Application received</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">Thank you for your interest. We'll be in touch if your profile matches a current or upcoming opportunity.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full Name" name="fullName" required error={errors.fullName} />
                  <Field label="Email" name="email" type="email" required error={errors.email} />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  <SelectField label="Role" name="role" options={roles.map(r => r.t).concat(["Other"])} error={errors.role} />
                  <SelectField label="Experience" name="experience" options={["0–2 years", "3–5 years", "6–9 years", "10+ years"]} error={errors.experience} />
                  <Field label="LinkedIn (optional)" name="linkedin" error={errors.linkedin} />
                </div>
                <Field label="CV / Portfolio link" name="cvLink" placeholder="https://…" error={errors.cvLink} />
                <TextAreaField label="Short message" name="message" required error={errors.message} />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md md:w-auto"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>

          <aside className="card-elevated h-fit">
            <h3 className="text-lg font-bold text-navy">Why join us</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                "Senior-led, outcome-focused engagements",
                "Diverse client portfolio across industries",
                "Modern technology and consulting practices",
                "Long-term partnership culture",
                "International exposure",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-primary/5 px-4 py-3 text-xs text-muted-foreground">
              Prefer email? Send your CV to <a className="font-semibold text-primary" href="mailto:info@softbridgeltd.co.uk">info@softbridgeltd.co.uk</a>.
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required, error, placeholder }: { label: string; name: string; type?: string; required?: boolean; error?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}{required && <span className="text-destructive"> *</span>}</span>
      <input type={type} name={name} required={required} placeholder={placeholder}
        className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}</span>
      <select name={name} defaultValue=""
        className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
function TextAreaField({ label, name, required, error }: { label: string; name: string; required?: boolean; error?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}{required && <span className="text-destructive"> *</span>}</span>
      <textarea name={name} required={required} rows={5}
        className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
