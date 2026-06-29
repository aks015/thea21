import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/layout/LegalPage";
import { brand } from "@/constants/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${brand.name}`,
  description: `The terms that govern your use of the ${brand.name} website and services.`,
};

// NOTE: This is a sensible template tailored to a web design & development
// studio. Get it reviewed by a legal professional before relying on it.
const LAST_UPDATED = "June 2026";

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p className="text-sm leading-relaxed text-fg/60">
        These Terms of Service (&quot;Terms&quot;) govern your use of the{" "}
        {brand.name} website and any services we provide. By accessing this site
        or engaging our services, you agree to these Terms.
      </p>

      <LegalSection n={1} title="Our Services">
        <p>
          {brand.name} provides web design, web development, web applications and
          related digital services. The designs shown in our &quot;Concept
          Showcase&quot; are original sample concepts created to demonstrate our
          capability and do not represent actual client engagements unless
          explicitly stated.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Quotes, Pricing &amp; Payment">
        <p>
          Every project is custom. Any figures or budget ranges shown on this
          site are indicative only and are not a binding offer. Pricing,
          payment terms and scope become binding only when agreed in writing in
          a separate project agreement.
        </p>
      </LegalSection>

      <LegalSection n={3} title="Project Delivery &amp; Revisions">
        <p>
          Timelines, deliverables and the number of revisions for any
          engagement are defined in the project agreement for that engagement.
          Timely client feedback and content are required to meet agreed
          timelines.
        </p>
      </LegalSection>

      <LegalSection n={4} title="Intellectual Property">
        <p>
          All content on this website — including text, graphics, logos and code
          — is owned by {brand.name} or its licensors and may not be copied or
          reused without permission. Ownership of work produced for a client
          transfers as set out in the relevant project agreement, typically on
          full payment.
        </p>
      </LegalSection>

      <LegalSection n={5} title="Client Responsibilities">
        <p>
          You agree to provide accurate information and the materials, access
          and approvals reasonably required for us to deliver the services, and
          to ensure you have the rights to any content you supply to us.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Third-Party Services">
        <p>
          Our work may rely on third-party platforms and tools (for example,
          hosting, analytics and payment providers). We are not responsible for
          the availability, performance or policies of those third parties.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Limitation of Liability">
        <p>
          This website is provided on an &quot;as is&quot; basis. To the maximum
          extent permitted by law, {brand.name} shall not be liable for any
          indirect, incidental or consequential damages arising from your use of
          this site.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Termination">
        <p>
          We may suspend or restrict access to the site at any time. Provisions
          relating to intellectual property and liability survive termination.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Governing Law">
        <p>
          These Terms are governed by the laws of India, and any disputes are
          subject to the exclusive jurisdiction of the courts of India.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. The &quot;Last
          updated&quot; date above reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Contact Us">
        <p>
          Questions about these Terms? Email{" "}
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
