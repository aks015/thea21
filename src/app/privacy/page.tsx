import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/layout/LegalPage";
import { brand } from "@/constants/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${brand.name}`,
  description: `How ${brand.name} collects, uses and protects your information.`,
};

// NOTE: This is a sensible template tailored to a web design & development
// studio. Get it reviewed by a legal professional before relying on it.
const LAST_UPDATED = "June 2026";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p className="text-sm leading-relaxed text-fg/60">
        {brand.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects
        your privacy. This Privacy Policy explains what information we collect
        when you use our website, how we use it, and the choices you have. By
        using this site you agree to the practices described below.
      </p>

      <LegalSection n={1} title="Information We Collect">
        <p>
          <strong className="text-fg/80">Information you provide.</strong> When
          you submit our contact form, we collect the details you enter — your
          name, business name, email address, phone number, budget range and
          your message.
        </p>
        <p>
          <strong className="text-fg/80">Information collected
          automatically.</strong> Like most websites, we collect basic usage
          data such as pages visited, device and browser type, referring page
          and approximate location, through cookies and analytics tools.
        </p>
      </LegalSection>

      <LegalSection n={2} title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <p>
          • Respond to your enquiries and provide quotes;
          <br />• Deliver, maintain and improve our services and website;
          <br />• Communicate with you about your project;
          <br />• Understand how visitors use our site and measure our marketing;
          <br />• Comply with legal obligations.
        </p>
      </LegalSection>

      <LegalSection n={3} title="Cookies &amp; Analytics">
        <p>
          We use cookies and similar technologies, including Google Analytics
          and the Meta (Facebook) Pixel, to understand traffic and measure the
          performance of our advertising. You can control or disable cookies
          through your browser settings; some features may not work as intended
          if you do.
        </p>
      </LegalSection>

      <LegalSection n={4} title="WhatsApp &amp; Messaging">
        <p>
          Our contact form can open WhatsApp with your details pre-filled so you
          can send your enquiry to us. Any message you send through WhatsApp is
          also handled in accordance with WhatsApp&apos;s and Meta&apos;s own
          privacy policies.
        </p>
      </LegalSection>

      <LegalSection n={5} title="How We Share Information">
        <p>
          We do not sell or rent your personal information. We may share it only
          with trusted service providers who help us run our website and
          business (for example, hosting and analytics providers), or where
          required by law.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Data Retention">
        <p>
          We keep your information only for as long as necessary to fulfil the
          purposes described in this policy or to comply with our legal
          obligations, after which it is deleted or anonymised.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Your Rights">
        <p>
          You may request access to, correction of, or deletion of the personal
          information we hold about you. To make a request, email us at{" "}
          <a
            href={`mailto:${brand.email}`}
            className="text-accent-soft hover:underline"
          >
            {brand.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection n={8} title="Data Security">
        <p>
          We take reasonable measures to protect your information. However, no
          method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Third-Party Links">
        <p>
          Our site may link to external websites we do not control. We are not
          responsible for the privacy practices or content of those sites.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Children's Privacy">
        <p>
          Our services are intended for businesses and adults. We do not
          knowingly collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date above reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Contact Us">
        <p>
          Questions about this policy? Email{" "}
          <a
            href={`mailto:${brand.email}`}
            className="text-accent-soft hover:underline"
          >
            {brand.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
