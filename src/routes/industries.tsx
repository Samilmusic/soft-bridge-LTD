import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import {
  Cpu, Briefcase, Stethoscope, UtensilsCrossed, ShoppingBag, Factory,
  Building, Users, Truck, Wrench, Building2, Rocket,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Soft Bridge Ltd" },
      { name: "description", content: "Soft Bridge serves technology, professional services, healthcare, hospitality, retail, manufacturing, real estate, trading and enterprise organizations." },
      { property: "og:title", content: "Industries We Serve — Soft Bridge Ltd" },
      { property: "og:description", content: "Cross-industry consulting and technology delivery." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Cpu, t: "Technology Companies", d: "Product engineering, platform scaling and go-to-market acceleration." },
  { icon: Briefcase, t: "Professional Services Firms", d: "Practice management, client portals and operational efficiency." },
  { icon: Stethoscope, t: "Healthcare Organizations", d: "Secure platforms, patient engagement and operational workflows." },
  { icon: UtensilsCrossed, t: "Hospitality Businesses", d: "Booking, guest experience and back-of-house automation." },
  { icon: ShoppingBag, t: "Retail Companies", d: "Commerce, inventory and customer experience platforms." },
  { icon: Factory, t: "Manufacturing Businesses", d: "Process digitization, reporting and supply chain visibility." },
  { icon: Building, t: "Real Estate Companies", d: "Portfolio, transaction and client management systems." },
  { icon: Users, t: "Consulting Firms", d: "Engagement delivery, knowledge management and reporting." },
  { icon: Truck, t: "Trading Companies", d: "Operations, partner portals and cross-border workflows." },
  { icon: Wrench, t: "Service-Based Businesses", d: "Scheduling, customer portals and recurring billing." },
  { icon: Building2, t: "Enterprise Organizations", d: "Large-scale transformation, CRM and ERP implementation." },
  { icon: Rocket, t: "Startups", d: "MVPs, scalable architecture and growth infrastructure." },
];

function IndustriesPage() {
  return (
    <PageShell eyebrow="Industries" title="Cross-industry experience that translates" description="We bring proven consulting and technology capability to a wide range of sectors — adapting our approach to the realities of your business model.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <article key={i.t} className="card-elevated card-elevated-hover">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10">
              <i.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
