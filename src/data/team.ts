export type TeamMember = {
  slug: string;
  name: string;
  position: string;
  initials: string;
  bio: string;
  expertise: string[];
  contactFor: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "rodrigo-jr",
    name: "Rodrigo Jr",
    position: "Director",
    initials: "RJ",
    bio: "Rodrigo Jr serves as Director of Soft Bridge Ltd and oversees strategic planning, business operations, client relationships and long-term company growth. He works closely with clients and partners to ensure the successful delivery of consulting, technology and business solutions.",
    expertise: [
      "Business Strategy",
      "Corporate Operations",
      "Client Relations",
      "Business Development",
      "International Business Advisory",
    ],
    contactFor: "General Business Enquiries",
  },
  {
    slug: "samil",
    name: "Samil",
    position: "IT Manager",
    initials: "SM",
    bio: "Samil leads the technology division of Soft Bridge Ltd and oversees software development, digital transformation, automation solutions and technical implementation projects. He works directly with clients to design scalable technology systems that improve efficiency and support business growth.",
    expertise: [
      "Software Development",
      "Digital Transformation",
      "AI & Automation",
      "CRM Systems",
      "Technology Consulting",
      "Business Systems",
    ],
    contactFor: "Technology Enquiries",
  },
  {
    slug: "ali",
    name: "Ali",
    position: "Sales Manager",
    initials: "AL",
    bio: "Ali manages business development and client engagement activities. He works closely with prospective and existing clients to understand requirements and coordinate the delivery of consulting, software and business services.",
    expertise: [
      "Business Development",
      "Sales Operations",
      "Account Management",
      "Customer Relations",
      "Lead Generation",
    ],
    contactFor: "Sales Enquiries",
  },
  {
    slug: "marlon",
    name: "Marlon",
    position: "Accounting & Administration",
    initials: "MR",
    bio: "Marlon oversees accounting support, administrative coordination and internal operational processes. He assists in maintaining efficient workflows and supporting company compliance and record management.",
    expertise: [
      "Accounting Administration",
      "Financial Coordination",
      "Business Operations",
      "Administrative Support",
      "Compliance Support",
    ],
    contactFor: "Accounts & Administration",
  },
];
