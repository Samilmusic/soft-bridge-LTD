import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LSection } from "@/components/legal-page";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [
    { title: "Disclaimer — Soft Bridge Ltd" },
    { name: "description", content: "Website disclaimer for Soft Bridge Ltd." },
  ] }),
  component: () => (
    <LegalPage title="Website Disclaimer" description="Important information about the use of this website and its content.">
      <LSection title="1. General Information">
        <p>The information provided on this website by Soft Bridge Ltd is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information.</p>
      </LSection>
      <LSection title="2. Not Professional Advice">
        <p>Information on this website does not constitute legal, financial, tax, accounting, investment or other professional advice. You should not rely solely on the content of this website to make business or personal decisions and should seek appropriate professional advice for your specific circumstances.</p>
      </LSection>
      <LSection title="3. External Links">
        <p>This website may contain links to third-party websites. We do not endorse, guarantee or assume responsibility for the content, accuracy or practices of any third-party websites linked from our website.</p>
      </LSection>
      <LSection title="4. Limitation of Liability">
        <p>To the maximum extent permitted by law, Soft Bridge Ltd shall not be liable for any loss or damage of any kind arising from the use of, or reliance on, the content of this website.</p>
      </LSection>
      <LSection title="5. Changes">
        <p>We reserve the right to modify the content of this website at any time without prior notice.</p>
      </LSection>
      <LSection title="6. Contact">
        <p>For questions about this disclaimer, contact info@softbridgeltd.co.uk.</p>
      </LSection>
    </LegalPage>
  ),
});
