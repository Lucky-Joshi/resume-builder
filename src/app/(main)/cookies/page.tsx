import type { Metadata } from "next";
import LegalTemplate, { Section } from "@/components/legal-template";

export const metadata: Metadata = {
  title: "Cookie Policy | ResumeForge AI",
  description:
    "ResumeForge AI uses only essential cookies required for security, session management, and application functionality.",
};

const sections = [
  { id: "what-are-cookies", title: "What Are Cookies" },
  { id: "cookies-we-use", title: "Cookies We Use" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "managing-cookies", title: "Managing Cookies" },
  { id: "policy-updates", title: "Updates to This Policy" },
];

export default function CookiesPage() {
  return (
    <LegalTemplate title="Cookie Policy" lastUpdated="June 5, 2026" sections={sections}>
      <Section id="what-are-cookies" title="What Are Cookies">
        <p>
          Cookies are small text files that websites place on your device
          (computer, tablet, or mobile phone) when you visit. They are widely
          used to make websites function efficiently, enhance security, and
          provide information to website owners about site performance.
        </p>
        <p>
          Cookies may be &ldquo;session cookies&rdquo; (which are deleted when you close
          your browser) or &ldquo;persistent cookies&rdquo; (which remain on your device for
          a set period or until you delete them).
        </p>
        <p>
          This Cookie Policy explains what cookies ResumeForge AI uses, why we
          use them, and how you can manage your cookie preferences.
        </p>
      </Section>

      <Section id="cookies-we-use" title="Cookies We Use">
        <p>
          ResumeForge AI uses only essential cookies necessary for the basic
          operation, security, and functionality of our platform.
        </p>

        <h3 className="mt-6 font-medium text-zinc-300">Essential / Strictly Necessary Cookies</h3>
        <p className="mt-2">
          These cookies are required for the platform to function properly and
          cannot be disabled. They enable:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Session Management:</strong> Maintaining your session state
            as you navigate between pages and upload files. Without these
            cookies, the platform would not be able to process your requests.
          </li>
          <li>
            <strong>Security:</strong> Protecting against unauthorized access,
            cross-site request forgery (CSRF) attacks, and other security
            threats. These cookies help ensure that requests made to our servers
            are legitimate and originate from your browser.
          </li>
          <li>
            <strong>Application Functionality:</strong> Enabling core platform
            features such as file uploads, API communication, and real-time
            content generation.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Load balancing and
            request routing to ensure efficient delivery of platform resources.
          </li>
        </ul>

        <h3 className="mt-6 font-medium text-zinc-300">Advertising / Tracking Cookies</h3>
        <p className="mt-2">
          <strong>
            ResumeForge AI does not currently use advertising cookies,
            behavioral tracking cookies, or any cookies for marketing purposes.
          </strong>
        </p>
        <p>
          We do not track your browsing activity across other websites, build
          interest profiles, or serve targeted advertisements based on your
          behavior.
        </p>

        <h3 className="mt-6 font-medium text-zinc-300">Analytics Cookies</h3>
        <p className="mt-2">
          ResumeForge AI does not currently deploy analytics cookies or
          third-party analytics scripts that collect personal browsing data. If
          we implement analytics in the future to understand aggregate usage
          patterns and improve the platform, we will update this Cookie Policy
          and provide you with appropriate notice.
        </p>
      </Section>

      <Section id="third-party-services" title="Third-Party Services">
        <p>
          ResumeForge AI integrates with Google&rsquo;s Gemini API to provide AI
          processing capabilities. Google may set their own cookies or use
          similar technologies when interacting with their services, in
          accordance with their own privacy and cookie policies.
        </p>
        <p>
          Additionally, our hosting and infrastructure providers may use cookies
          or similar technologies for operational purposes, including load
          balancing, security monitoring, and content delivery optimization.
        </p>
        <p>
          We do not have direct control over cookies placed by third-party
          services integrated into or used by our platform. We encourage you to
          review the cookie and privacy policies of these third parties for more
          detailed information.
        </p>
      </Section>

      <Section id="managing-cookies" title="Managing Cookies">
        <p>
          Most web browsers allow you to control cookies through their settings.
          You can typically:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>View and delete cookies stored on your device</li>
          <li>Block cookies from specific websites</li>
          <li>Block all cookies by default</li>
          <li>Set preferences for when cookies are stored</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        <p>
          Please note that blocking essential cookies may affect the
          functionality of ResumeForge AI. If you disable essential cookies,
          certain features of the platform, including file uploads and AI
          processing, may not work correctly.
        </p>
        <p className="mt-4">
          For instructions on managing cookies in your specific browser, visit
          the relevant support page:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/kb/delete-cookies-remove-info-websites-stored"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
      </Section>

      <Section id="policy-updates" title="Updates to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our use of cookies, legal requirements, or operational needs. When
          we make changes, we will update the &ldquo;Last updated&rdquo; date at the top of
          this page.
        </p>
        <p>
          We encourage you to review this Cookie Policy periodically to stay
          informed about how we use cookies and similar technologies. Your
          continued use of ResumeForge AI after changes are posted constitutes
          acceptance of the updated policy.
        </p>
      </Section>
    </LegalTemplate>
  );
}
