import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LSection } from "@/components/legal-page";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({ meta: [
    { title: "Cookie Policy — Soft Bridge Ltd" },
    { name: "description", content: "How Soft Bridge Ltd uses cookies and similar technologies on its website." },
  ] }),
  component: () => (
    <LegalPage title="Cookie Policy" description="How we use cookies and similar technologies on our website.">
      <p>This Cookie Policy explains how Soft Bridge Ltd uses cookies and similar technologies on our website. By continuing to use our website you consent to the use of cookies as described below, except where consent is required for non-essential cookies.</p>

      <LSection title="1. What Are Cookies">
        <p>Cookies are small text files placed on your device to help websites function, improve user experience and provide analytics or marketing capabilities.</p>
      </LSection>

      <LSection title="2. Essential Cookies">
        <p>Essential cookies are required for the website to function correctly, such as maintaining session state and security. These cookies do not require consent.</p>
      </LSection>

      <LSection title="3. Analytics Cookies">
        <p>Analytics cookies help us understand how visitors use our website so we can improve performance and content. Where required, these cookies are only set with your consent.</p>
      </LSection>

      <LSection title="4. Marketing Cookies">
        <p>Marketing cookies are used to measure advertising performance and, where applicable, deliver more relevant communications. These cookies are only set with your consent.</p>
      </LSection>

      <LSection title="5. Managing Cookies">
        <p>You can manage your cookie preferences through our cookie banner where available, and through your browser settings. Disabling certain cookies may affect website functionality.</p>
      </LSection>

      <LSection title="6. Consent">
        <p>By accepting our cookie banner or continuing to use the website with consent settings enabled, you provide consent for non-essential cookies. You can withdraw consent at any time by adjusting your settings.</p>
      </LSection>

      <LSection title="7. Contact">
        <p>For questions about our use of cookies, contact info@softbridgeltd.co.uk.</p>
      </LSection>
    </LegalPage>
  ),
});
