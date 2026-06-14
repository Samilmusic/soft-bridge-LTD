import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LSection } from "@/components/legal-page";

export const Route = createFileRoute("/acceptable-use")({
  head: () => ({ meta: [
    { title: "Acceptable Use Policy — Soft Bridge Ltd" },
    { name: "description", content: "Acceptable Use Policy governing the use of the Soft Bridge Ltd website and services." },
  ] }),
  component: () => (
    <LegalPage title="Acceptable Use Policy" description="Rules governing acceptable use of our website and services.">
      <p>This Acceptable Use Policy sets out the terms under which you may use the Soft Bridge Ltd website and services. By using our website or services, you agree to comply with this policy.</p>

      <LSection title="1. Permitted Use">
        <p>You may use our website and services for lawful purposes consistent with these terms. You must not use them in any way that breaches applicable laws or regulations.</p>
      </LSection>
      <LSection title="2. Prohibited Activities">
        <p>You must not: (a) attempt to gain unauthorized access to our systems or data; (b) introduce viruses, malware or other harmful code; (c) interfere with the operation or security of our website or services; (d) use our website to send unsolicited communications, spam or harassment; (e) infringe intellectual property or other rights of any party; or (f) misrepresent your identity or affiliation.</p>
      </LSection>
      <LSection title="3. User Content">
        <p>You are responsible for any content you submit through our website or services. Such content must not be unlawful, defamatory, infringing, obscene or otherwise objectionable.</p>
      </LSection>
      <LSection title="4. Suspension">
        <p>We reserve the right to suspend or terminate access to our website or services where we reasonably believe this policy has been breached.</p>
      </LSection>
      <LSection title="5. Reporting Misuse">
        <p>Report any suspected misuse to info@softbridgeltd.co.uk.</p>
      </LSection>
      <LSection title="6. Changes">
        <p>We may update this policy from time to time. Continued use of our website or services constitutes acceptance of the updated policy.</p>
      </LSection>
    </LegalPage>
  ),
});
