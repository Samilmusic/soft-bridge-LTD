import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — Soft Bridge Ltd" },
    { name: "description", content: "How Soft Bridge Ltd collects, uses and protects personal data in line with UK GDPR." },
  ] }),
  component: () => (
    <LegalPage title="Privacy Policy" description="How we collect, use and protect personal data in line with UK GDPR.">
      <p>This Privacy Policy explains how Soft Bridge Ltd ("we", "us", "our") collects, uses, stores and protects personal data when you interact with our website, services and communications. We are committed to handling personal data lawfully, fairly and transparently in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

      <LSection title="1. Data Controller">
        <p>Soft Bridge Ltd is the data controller for personal data collected through this website and our services. Our registered office is 5 Brayford Square, London E1 0SG, United Kingdom. You can contact us at info@softbridgeltd.co.uk.</p>
      </LSection>

      <LSection title="2. Data We Collect">
        <p>We may collect: identity and contact information (name, company, email, phone), business enquiry information you provide, technical data (IP address, browser, device, usage analytics), cookie data, and any information you choose to share with us through forms or communications.</p>
      </LSection>

      <LSection title="3. How We Use Personal Data">
        <p>We process personal data to respond to enquiries, deliver services, manage client relationships, send service-related communications, improve our website, ensure security, comply with legal obligations, and — where you have consented — send marketing communications.</p>
      </LSection>

      <LSection title="4. Lawful Basis">
        <p>We rely on the following lawful bases: performance of a contract, legitimate interests (where these are not overridden by your rights), consent (for marketing and non-essential cookies), and legal obligation.</p>
      </LSection>

      <LSection title="5. Cookies">
        <p>Our website uses essential, analytics and (where consented) marketing cookies. Please refer to our Cookie Policy for full details and how to manage your preferences.</p>
      </LSection>

      <LSection title="6. Data Storage and Retention">
        <p>Personal data is stored on secure systems operated by us and trusted processors. We retain personal data only for as long as necessary for the purposes for which it was collected, including legal, accounting or reporting requirements.</p>
      </LSection>

      <LSection title="7. Data Security">
        <p>We implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, alteration or disclosure, including access controls, encryption in transit, secure infrastructure and staff confidentiality obligations.</p>
      </LSection>

      <LSection title="8. International Data Transfers">
        <p>Where personal data is transferred outside the UK, we ensure appropriate safeguards are in place such as adequacy decisions, Standard Contractual Clauses or equivalent mechanisms recognised under UK GDPR.</p>
      </LSection>

      <LSection title="9. Your Rights">
        <p>Under UK GDPR you have rights to access, rectify, erase, restrict or object to processing, data portability, and to withdraw consent at any time where processing is based on consent. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO).</p>
      </LSection>

      <LSection title="10. Marketing Communications">
        <p>We will only send marketing communications where you have consented or where there is a legitimate basis to do so. You can unsubscribe at any time using the link in our emails or by contacting us.</p>
      </LSection>

      <LSection title="11. Third-Party Processors">
        <p>We may use trusted third-party providers (such as hosting, analytics, communications and CRM platforms) who process personal data on our behalf under appropriate data processing agreements.</p>
      </LSection>

      <LSection title="12. Contact">
        <p>For privacy-related enquiries or to exercise your rights, contact us at info@softbridgeltd.co.uk or write to our registered office.</p>
      </LSection>
    </LegalPage>
  ),
});
