import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LSection } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms & Conditions — Soft Bridge Ltd" },
    { name: "description", content: "Terms and Conditions governing services provided by Soft Bridge Ltd." },
  ] }),
  component: () => (
    <LegalPage title="Terms & Conditions" description="Terms governing the use of our website and the services we provide.">
      <p>These Terms and Conditions govern the provision of services by Soft Bridge Ltd, a company registered in England and Wales, and use of our website. By engaging our services or using our website, you agree to these terms.</p>

      <LSection title="1. Scope of Services">
        <p>Soft Bridge Ltd provides consulting, software development, automation, digital marketing, digital solutions and related advisory services. The specific scope, deliverables, timelines and pricing for each engagement are defined in a separate proposal, statement of work or written agreement.</p>
      </LSection>

      <LSection title="2. Client Responsibilities">
        <p>Clients are responsible for providing timely access to information, decisions, approvals and personnel required for service delivery. Clients warrant that materials supplied to us do not infringe third-party rights and that they have authority to instruct the work.</p>
      </LSection>

      <LSection title="3. Payment Terms">
        <p>Fees, payment schedules and accepted payment methods are specified in the relevant proposal or agreement. Unless otherwise agreed in writing, invoices are payable within the timeframe stated on the invoice. Late payments may be subject to interest in accordance with applicable law.</p>
      </LSection>

      <LSection title="4. Project Delivery">
        <p>We will use reasonable skill and care to deliver services in accordance with agreed scope and timelines. Material changes to scope or timelines require written agreement and may affect fees and delivery dates.</p>
      </LSection>

      <LSection title="5. Intellectual Property">
        <p>Pre-existing intellectual property remains the property of its owner. Ownership of custom deliverables transfers to the client upon full payment, except for our pre-existing tools, frameworks and know-how, for which the client receives a non-exclusive licence to the extent necessary to use the deliverables.</p>
      </LSection>

      <LSection title="6. Confidentiality">
        <p>Each party agrees to keep confidential information of the other party confidential and use it only for the purposes of the engagement. These obligations survive termination.</p>
      </LSection>

      <LSection title="7. Liability Limitations">
        <p>To the maximum extent permitted by law, our total aggregate liability arising out of or in connection with an engagement shall not exceed the fees paid by the client to us for the specific engagement giving rise to the claim. We are not liable for indirect, consequential, special or loss-of-profit damages. Nothing in these terms limits liability that cannot lawfully be excluded.</p>
      </LSection>

      <LSection title="8. Termination">
        <p>Either party may terminate an engagement in accordance with the notice provisions in the relevant agreement, or immediately for material breach not remedied within a reasonable period. The client remains liable for fees and expenses incurred up to the effective date of termination.</p>
      </LSection>

      <LSection title="9. Governing Law">
        <p>These terms and any engagement are governed by the laws of England and Wales.</p>
      </LSection>

      <LSection title="10. Dispute Resolution">
        <p>The parties will first attempt to resolve disputes in good faith through discussion. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </LSection>

      <LSection title="11. Contact">
        <p>Soft Bridge Ltd, 5 Brayford Square, London E1 0SG, United Kingdom. Email: info@softbridgeltd.co.uk.</p>
      </LSection>
    </LegalPage>
  ),
});
