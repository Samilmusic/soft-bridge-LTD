import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LSection } from "@/components/legal-page";

export const Route = createFileRoute("/data-protection")({
  head: () => ({ meta: [
    { title: "Data Protection Policy — Soft Bridge Ltd" },
    { name: "description", content: "Data Protection Policy of Soft Bridge Ltd aligned with UK GDPR principles." },
  ] }),
  component: () => (
    <LegalPage title="Data Protection Policy" description="Our commitments to lawful, fair and secure data processing under UK GDPR.">
      <p>Soft Bridge Ltd is committed to protecting personal data and ensuring it is processed in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

      <LSection title="1. Data Protection Principles">
        <p>We process personal data in line with the principles of lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; and accountability.</p>
      </LSection>
      <LSection title="2. Lawful Processing">
        <p>We only process personal data where we have a valid lawful basis, including contract performance, legitimate interests, legal obligation, or consent.</p>
      </LSection>
      <LSection title="3. Data Minimisation and Accuracy">
        <p>We collect only the personal data necessary for the purposes identified and take reasonable steps to keep it accurate and up to date.</p>
      </LSection>
      <LSection title="4. Security Measures">
        <p>We implement appropriate technical and organizational measures to protect personal data, including access controls, encryption in transit, secure infrastructure, vendor due diligence and staff confidentiality obligations.</p>
      </LSection>
      <LSection title="5. Retention">
        <p>Personal data is retained only for as long as necessary for the purposes for which it was collected and to meet legal, regulatory or contractual obligations.</p>
      </LSection>
      <LSection title="6. Data Subject Rights">
        <p>We respect the rights of data subjects, including the right of access, rectification, erasure, restriction, objection, data portability and the right to withdraw consent.</p>
      </LSection>
      <LSection title="7. Data Processors">
        <p>Where we engage third-party processors, we conduct due diligence and enter into appropriate data processing agreements that require equivalent data protection standards.</p>
      </LSection>
      <LSection title="8. International Transfers">
        <p>Transfers of personal data outside the UK are made only where appropriate safeguards are in place, in accordance with UK GDPR requirements.</p>
      </LSection>
      <LSection title="9. Breach Management">
        <p>We maintain procedures for identifying, assessing and responding to personal data breaches, including notification to the Information Commissioner's Office and affected individuals where required.</p>
      </LSection>
      <LSection title="10. Review">
        <p>This policy is reviewed regularly and updated to reflect changes in our processing activities and legal requirements.</p>
      </LSection>
      <LSection title="11. Contact">
        <p>For data protection queries, contact info@softbridgeltd.co.uk.</p>
      </LSection>
    </LegalPage>
  ),
});
