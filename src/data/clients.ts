import { ShoppingBag, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Client = {
  slug: string;
  name: string;
  location: string;
  industry: string;
  description: string;
  services: string[];
  status: "Active Client";
  partnershipStart: string;
  icon: LucideIcon;
};

export const CLIENTS: Client[] = [
  {
    slug: "lotus-market-ltd",
    name: "Lotus Market LTD",
    location: "United Kingdom",
    industry: "Retail & Commerce",
    description:
      "Soft Bridge LTD provides ongoing business consulting, CRM implementation, digital transformation support, website development, and growth strategy services for Lotus Market LTD.",
    services: [
      "CRM Systems",
      "Business Consulting",
      "Website Development",
      "Marketing Support",
      "Process Automation",
    ],
    status: "Active Client",
    partnershipStart: "2024",
    icon: ShoppingBag,
  },
  {
    slug: "radunity-ltd",
    name: "RADUNITY LTD",
    location: "Leeds, United Kingdom",
    industry: "Business Services",
    description:
      "Soft Bridge LTD provides digital transformation consulting, AI automation, lead management systems, website support, and operational process optimization services for RADUNITY LTD.",
    services: [
      "AI Automation",
      "CRM Management",
      "Lead Generation Systems",
      "Website Maintenance",
      "Business Process Consulting",
    ],
    status: "Active Client",
    partnershipStart: "2024",
    icon: Briefcase,
  },
];
