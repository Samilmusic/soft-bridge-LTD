import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LSection } from "@/components/legal-page";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [
    { title: "Refund Policy — Soft Bridge Ltd" },
    { name: "description", content: "Refund Policy for consulting, software development and digital services provided by Soft Bridge Ltd." },
  ] }),
  component: () => (
    <LegalPage title="Refund Policy" description="How refunds are handled across our consulting and technology services.">
      <p>This Refund Policy applies to services provided by Soft Bridge Ltd. By engaging our services, you agree to the terms of this policy in addition to our Terms and Conditions.</p>

      <LSection title="1. Consulting Services">
        <p>Consulting services are generally non-refundable once delivered. Where consulting time has been booked and delivered, fees are due in full regardless of the outcome of subsequent business decisions.</p>
      </LSection>

      <LSection title="2. Project-Based Services">
        <p>Project-based engagements may qualify for partial refunds depending on the stage of the project at the point of cancellation. Refunds, where applicable, will be calculated based on work completed, resources allocated and irrecoverable costs incurred.</p>
      </LSection>

      <LSection title="3. Custom Software Development">
        <p>Custom software development work already completed is non-refundable. Where deliverables have been produced or development resources have been engaged, fees for completed work and committed resources are due in full.</p>
      </LSection>

      <LSection title="4. Digital Marketing Services">
        <p>Digital marketing services are non-refundable once campaigns have been launched, due to ad spend, platform commitments and the operational nature of marketing delivery.</p>
      </LSection>

      <LSection title="5. Process for Requesting a Refund">
        <p>Refund requests must be submitted in writing to info@softbridgeltd.co.uk with the engagement reference and grounds for the request. We will review and respond within a reasonable timeframe.</p>
      </LSection>

      <LSection title="6. Statutory Rights">
        <p>This policy does not affect any statutory rights that apply under applicable law.</p>
      </LSection>
    </LegalPage>
  ),
});
