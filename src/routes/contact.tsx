import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";
import { Mail, MapPin, Building2, CheckCircle2, Phone } from "lucide-react";
import { z } from "zod";
import { TEAM } from "@/data/team";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Soft Bridge Ltd" },
      { name: "description", content: "Contact Soft Bridge Ltd for consulting, software development and digital transformation enquiries. Email info@softbridgeltd.co.uk." },
      { property: "og:title", content: "Contact Soft Bridge Ltd" },
      { property: "og:description", content: "Start a conversation with our consulting and technology team." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  company: z.string().trim().max(150).optional(),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(40).optional(),
  service: z.string().trim().max(120).optional(),
  description: z.string().trim().min(1, "Please describe your project").max(2000),
  preferredContact: z.string().trim().max(40).optional(),
});

const services = [
  "Business Consulting", "Technology Consulting", "Software Development",
  "AI & Automation", "Digital Solutions", "Digital Marketing",
  "Enterprise Solutions", "International Expansion", "Other",
];

function ContactPage() {
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
    <PageShell eyebrow="Contact" title="Contact Soft Bridge Ltd" description="Tell us about your consulting, technology or expansion goals — our team will respond promptly.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="card-elevated">
          {submitted ? (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-navy">Thank you</h2>
              <p className="mt-2 max-w-md text-muted-foreground">Your enquiry has been received. A member of our team will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" name="fullName" required error={errors.fullName} />
                <Field label="Company Name" name="company" error={errors.company} />
                <Field label="Email Address" name="email" type="email" required error={errors.email} />
                <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <SelectField label="Service Required" name="service" options={services} error={errors.service} />
                <SelectField label="Preferred Contact Method" name="preferredContact" options={["Email", "Phone", "Video Call"]} error={errors.preferredContact} />
              </div>
              <TextAreaField label="Project Description" name="description" required error={errors.description} />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md md:w-auto"
                style={{ background: "var(--gradient-primary)" }}
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="card-elevated">
            <h3 className="text-lg font-bold text-navy">Business Information</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3">
                <Building2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-navy">{COMPANY.name}</p>
                  <p className="text-muted-foreground">Company Number: {COMPANY.number}</p>
                  <p className="text-muted-foreground">Registered in {COMPANY.jurisdiction}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-navy">Registered Office</p>
                  <p className="text-muted-foreground">{COMPANY.address.line1}<br />{COMPANY.address.city} {COMPANY.address.postcode}<br />{COMPANY.address.country}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href={`tel:${COMPANY.phoneTel}`} className="font-semibold text-navy hover:text-primary">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href={`mailto:${COMPANY.email}`} className="font-semibold text-navy hover:text-primary">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          <div className="card-elevated">
            <h3 className="text-lg font-bold text-navy">How can we help?</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["General Enquiries", "Consultation Requests", "Partnership Opportunities", "Project Discussions"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <span className="eyebrow">Leadership Contacts</span>
        <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">Direct enquiry routing</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Enquiries received via our contact form are routed to the appropriate member of the leadership team.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.slug} className="card-elevated">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{m.contactFor}</p>
              <h3 className="mt-3 text-base font-bold text-navy">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.position}</p>
              <a
                href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(m.contactFor + " — Attn: " + m.name)}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
              >
                <Mail className="h-3.5 w-3.5" /> Send Enquiry
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}{required && <span className="text-destructive"> *</span>}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
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
      <textarea
        name={name}
        required={required}
        rows={6}
        className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
