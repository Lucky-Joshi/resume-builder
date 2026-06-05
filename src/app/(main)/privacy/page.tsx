import type { Metadata } from "next";
import Link from "next/link";
import LegalTemplate, { Section } from "@/components/legal-template";

export const metadata: Metadata = {
  title: "Privacy Policy | ResumeForge AI",
  description:
    "ResumeForge AI processes uploaded resumes and job descriptions temporarily. We do not maintain a permanent database of user documents or sell your data.",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-process", title: "Information We Process" },
  { id: "how-resume-processing-works", title: "How Resume Processing Works" },
  { id: "ai-processing-providers", title: "AI Processing Providers" },
  { id: "data-storage", title: "Data Storage" },
  { id: "technical-information", title: "Technical Information" },
  { id: "data-security", title: "Data Security" },
  { id: "user-rights", title: "User Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "policy-updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Information" },
];

export default function PrivacyPage() {
  return (
    <LegalTemplate title="Privacy Policy" lastUpdated="June 5, 2026" sections={sections}>
      <Section id="introduction" title="Introduction">
        <p>
          ResumeForge AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, process,
          and handle information when you use our resume optimization platform.
        </p>
        <p>
          ResumeForge AI is designed with a privacy-first architecture. We do
          not require user registration, we do not maintain a permanent database
          of uploaded resumes, and we do not sell your personal information.
        </p>
        <p>
          By using ResumeForge AI, you acknowledge the practices described in
          this policy. If you do not agree with any part of this policy, please
          discontinue use of our service.
        </p>
      </Section>

      <Section id="information-we-process" title="Information We Process">
        <p>
          ResumeForge AI processes only the information you voluntarily provide
          to use our service. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Resume Files:</strong> Documents you upload in PDF, DOCX, or
            TXT format containing your professional history, skills, education,
            and experience.
          </li>
          <li>
            <strong>Job Descriptions:</strong> Text content you paste or enter
            describing a position you wish to target with your application
            materials.
          </li>
          <li>
            <strong>Application-Related Content:</strong> Any additional
            information you choose to provide during your session to customize
            or improve generated outputs.
          </li>
        </ul>
        <p>
          We do not collect names, email addresses, phone numbers, or any other
          personally identifiable information beyond what you voluntarily
          include in uploaded documents.
        </p>
      </Section>

      <Section id="how-resume-processing-works" title="How Resume Processing Works">
        <p>
          When you use ResumeForge AI, your content is processed in a temporary
          manner to generate the requested outputs:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5">
          <li>
            Your uploaded resume file is parsed to extract structured data such
            as work history, skills, education, and certifications.
          </li>
          <li>
            Your provided job description is analyzed to identify required
            qualifications, preferred skills, industry keywords, and role
            requirements.
          </li>
          <li>
            Our AI systems process the extracted information to generate an
            optimized resume, match score analysis, skill gap assessment, and
            optional cover letter.
          </li>
          <li>
            The generated outputs are displayed to you in real time within your
            browser. You may download them as PDF or copy the content directly.
          </li>
        </ol>
        <p>
          Files are processed in memory during your active session. Once you
          leave the page or close your browser, uploaded content is discarded
          and is not retrievable.
        </p>
      </Section>

      <Section id="ai-processing-providers" title="AI Processing Providers">
        <p>
          ResumeForge AI may utilize Google&rsquo;s Gemini AI services to analyze and
          process user-provided content for the sole purpose of generating
          requested outputs. When you submit a resume or job description,
          relevant text is transmitted to Google&rsquo;s servers for AI inference.
        </p>
        <p>
          Google processes this data in accordance with their own privacy
          policies and applicable data protection agreements. Our integration is
          configured to minimize data retention, and we do not instruct Google
          to store your content beyond what is necessary to fulfill the
          processing request.
        </p>
        <p>
          We do not sell, rent, or share your personal information with any
          third party for advertising, marketing, or profiling purposes. Your
          content is processed solely for the purpose of delivering the service
          you requested.
        </p>
      </Section>

      <Section id="data-storage" title="Data Storage">
        <p>
          <strong>
            We do not maintain a permanent database of uploaded resumes, job
            descriptions, or generated outputs.
          </strong>
        </p>
        <p>
          We are not in the business of storing personal career information.
          Our platform processes documents temporarily and does not retain them
          beyond the duration necessary to complete your request.
        </p>
        <p>
          ResumeForge AI does not have user accounts, resume libraries, version
          histories, or any long-term storage mechanism for user-provided
          content. Each session is ephemeral and independent. There is no
          mechanism to retrieve or access content from a previous session.
        </p>
      </Section>

      <Section id="technical-information" title="Technical Information">
        <p>
          As with most websites and web applications, standard technical
          information may be collected automatically when you access ResumeForge
          AI. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Browser Information:</strong> Browser type, version, and
            language preferences.
          </li>
          <li>
            <strong>Device Information:</strong> Operating system, device type,
            and screen resolution.
          </li>
          <li>
            <strong>Request Logs:</strong> IP addresses, request timestamps,
            requested pages, and referring URLs.
          </li>
          <li>
            <strong>Error Logs:</strong> Diagnostic information when errors
            occur, used for debugging and improving the platform.
          </li>
          <li>
            <strong>Security Logs:</strong> Access logs maintained to detect
            and prevent abuse, unauthorized access, or malicious activity.
          </li>
          <li>
            <strong>Usage Analytics (if implemented):</strong> Aggregated,
            anonymized usage patterns to improve platform performance and user
            experience.
          </li>
        </ul>
        <p>
          This technical information is used for operational purposes, security
          monitoring, performance optimization, and platform improvement. It is
          not used to identify individual users or build user profiles.
        </p>
      </Section>

      <Section id="data-security" title="Data Security">
        <p>
          We implement industry-standard security measures to protect your
          information during transmission and processing, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Encrypted communications via HTTPS/TLS for all data transfers</li>
          <li>Secure API connections to AI service providers</li>
          <li>Minimal data retention practices by design</li>
          <li>No permanent storage of uploaded documents</li>
          <li>Session-isolated processing architecture</li>
        </ul>
        <p>
          However, no method of electronic transmission or storage is
          completely secure. While we strive to protect your information using
          commercially acceptable means, we cannot guarantee absolute security.
        </p>
      </Section>

      <Section id="user-rights" title="User Rights">
        <p>
          Depending on your jurisdiction, you may have the following rights
          regarding your personal information:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Right to Access:</strong> Request information about what
            data we process and how it is handled.
          </li>
          <li>
            <strong>Right to Deletion:</strong> Request removal of any data
            associated with your session. Contact us using the information
            below.
          </li>
          <li>
            <strong>Right to Object:</strong> Object to the processing of your
            data for specific purposes, including AI processing.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> Request a copy of your
            data in a commonly used, machine-readable format.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Withdraw consent at any
            time by discontinuing use of the platform.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the
          information in the Contact section below. We will respond to your
          request within the timeframe required by applicable law.
        </p>
      </Section>

      <Section id="childrens-privacy" title="Children's Privacy">
        <p>
          ResumeForge AI is not intended for use by individuals under the age of
          16. We do not knowingly collect or process personal information from
          children. If you are a parent or guardian and believe a child has
          provided us with personal information, please contact us immediately
          so that we can take appropriate action.
        </p>
      </Section>

      <Section id="policy-updates" title="Policy Updates">
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, legal requirements, or operational needs. When we
          make changes, we will update the &ldquo;Last updated&rdquo; date at the top of
          this page.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically to stay
          informed about how we are protecting your information. Your continued
          use of ResumeForge AI after any changes constitutes acceptance of the
          updated policy.
        </p>
      </Section>

      <Section id="contact" title="Contact Information">
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or our data practices, please contact us:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Email: privacy@resumeforge.ai</li>
          <li>
            Web: <Link href="/" className="text-amber-400 hover:underline">www.resumeforge.ai</Link>
          </li>
          <li>Response Time: We will respond within 30 days of your request.</li>
        </ul>
      </Section>
    </LegalTemplate>
  );
}
