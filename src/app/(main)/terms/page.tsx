import type { Metadata } from "next";
import Link from "next/link";
import LegalTemplate, { Section } from "@/components/legal-template";

export const metadata: Metadata = {
  title: "Terms & Conditions | ResumeForge AI",
  description:
    "Terms governing the use of ResumeForge AI. By using our platform, you agree to these terms for AI-powered resume optimization services.",
};

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "service-description", title: "Description of Service" },
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "prohibited-uses", title: "Prohibited Uses" },
  { id: "ai-generated-content", title: "AI Generated Content" },
  { id: "no-employment-guarantee", title: "No Employment Guarantee" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "service-availability", title: "Service Availability" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsPage() {
  return (
    <LegalTemplate title="Terms & Conditions" lastUpdated="June 5, 2026" sections={sections}>
      <Section id="acceptance" title="Acceptance of Terms">
        <p>
          By accessing or using ResumeForge AI (&ldquo;the Service&rdquo;), you acknowledge
          that you have read, understood, and agree to be bound by these Terms &
          Conditions. If you do not agree with any part of these terms, you may
          not use the Service.
        </p>
        <p>
          These terms constitute a legally binding agreement between you
          (&ldquo;User&rdquo;) and ResumeForge AI governing your use of the platform,
          including all features, content, and AI-powered processing
          capabilities.
        </p>
      </Section>

      <Section id="service-description" title="Description of Service">
        <p>
          ResumeForge AI is an AI-powered resume optimization platform that
          provides the following capabilities:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Resume parsing and structured data extraction from uploaded documents</li>
          <li>Job description analysis including skill identification, keyword extraction, and requirements parsing</li>
          <li>AI-powered resume rewriting and ATS optimization</li>
          <li>Match score calculation comparing resume content against job requirements</li>
          <li>Skill gap analysis identifying missing qualifications</li>
          <li>Optional cover letter generation</li>
          <li>Browser-based PDF export of optimized documents</li>
        </ul>
        <p>
          The Service generates suggestions, analyses, and optimized content
          using artificial intelligence. All outputs are provided as assistance
          tools and should be reviewed by the user before any professional use.
        </p>
      </Section>

      <Section id="user-responsibilities" title="User Responsibilities">
        <p>As a user of ResumeForge AI, you agree to the following:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Content Ownership:</strong> You may upload only documents
            and content that you own, have created, or have explicit legal
            permission to use and process.
          </li>
          <li>
            <strong>Accuracy of Information:</strong> You are responsible for
            the accuracy of all information you provide. AI-generated content
            based on inaccurate inputs will produce correspondingly inaccurate
            outputs.
          </li>
          <li>
            <strong>Review of AI Outputs:</strong> You must review, verify, and
            edit all AI-generated content before submitting it to employers,
            recruiters, or using it in any professional or official capacity.
            You bear full responsibility for the final content you submit.
          </li>
          <li>
            <strong>Compliance with Laws:</strong> You agree to use the Service
            in compliance with all applicable local, state, national, and
            international laws and regulations.
          </li>
        </ul>
      </Section>

      <Section id="prohibited-uses" title="Prohibited Uses">
        <p>You agree not to use ResumeForge AI for any of the following:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Illegal Activities:</strong> Any purpose that violates
            applicable laws or regulations, including fraud, identity theft, or
            misrepresentation.
          </li>
          <li>
            <strong>Fraudulent Applications:</strong> Creating or submitting
            applications containing false, misleading, or fabricated
            qualifications, credentials, or experience.
          </li>
          <li>
            <strong>Copyright Infringement:</strong> Uploading documents or
            content that infringes upon the intellectual property rights of
            others.
          </li>
          <li>
            <strong>Malicious Content:</strong> Uploading files containing
            viruses, malware, trojans, or any other harmful code that could
            damage, disrupt, or compromise the platform or other systems.
          </li>
          <li>
            <strong>System Abuse:</strong> Attempting to probe, scan, or
            penetrate the security of the platform, its infrastructure, or
            connected systems.
          </li>
          <li>
            <strong>Automated Access:</strong> Using bots, scrapers, or other
            automated tools to access the Service without express written
            permission.
          </li>
        </ul>
      </Section>

      <Section id="ai-generated-content" title="AI Generated Content">
        <p>
          <strong>
            AI-generated content may contain inaccuracies and should always be
            independently reviewed.
          </strong>
        </p>
        <p>
          ResumeForge AI uses artificial intelligence models, including
          Google&rsquo;s Gemini API, to generate resume content, analyses, and
          recommendations. These models have limitations:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            AI-generated text may contain factual inaccuracies, hallucinations,
            or outdated information.
          </li>
          <li>
            The AI may misinterpret or incorrectly reformat your original
            content.
          </li>
          <li>
            Generated content may not reflect industry-specific terminology
            appropriate for your field.
          </li>
          <li>
            The AI does not have knowledge of specific employer requirements or
            internal hiring practices.
          </li>
        </ul>
        <p>
          You are solely responsible for verifying the accuracy,
          appropriateness, and truthfulness of all content generated by the
          Service before submitting applications or using the content in any
          professional context.
        </p>
      </Section>

      <Section id="no-employment-guarantee" title="No Employment Guarantee">
        <p>
          <strong>
            ResumeForge AI does not guarantee interviews, job offers, employment
            outcomes, recruiter responses, or ATS success.
          </strong>
        </p>
        <p>
          Resume optimization is one factor among many in the hiring process.
          The Service provides tools to assist with resume preparation, but we
          make no representations or warranties regarding:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Whether your resume will pass any specific Applicant Tracking System
          </li>
          <li>The number or quality of interview invitations you may receive</li>
          <li>Any employment offer, hiring decision, or career outcome</li>
          <li>
            The competitiveness of your resume in any particular job market or
            industry
          </li>
          <li>Recruiter or employer response to your application materials</li>
        </ul>
        <p>
          Hiring outcomes depend on numerous factors beyond our control,
          including your qualifications, interview performance, market
          conditions, employer preferences, and competition.
        </p>
      </Section>

      <Section id="intellectual-property" title="Intellectual Property">
        <p>
          <strong>Platform IP:</strong> The ResumeForge AI platform, including
          its design, code, algorithms, branding, trade dress, and proprietary
          technology, is owned by ResumeForge AI and protected by applicable
          intellectual property laws. You may not reproduce, distribute, modify,
          or create derivative works of the platform without express written
          permission.
        </p>
        <p>
          <strong>User Content:</strong> You retain all ownership rights to the
          original content you upload. We claim no ownership over your resumes,
          job descriptions, or other user-provided content.
        </p>
        <p>
          <strong>Generated Outputs:</strong> AI-generated outputs produced by
          the Service are provided for your personal, non-commercial use in
          connection with your job search activities.
        </p>
      </Section>

      <Section id="limitation-of-liability" title="Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, ResumeForge AI and
          its operators, affiliates, and service providers shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising from or related to your use of the Service.
        </p>
        <p>
          This limitation of liability applies to all claims, whether based on
          warranty, contract, tort (including negligence), or any other legal
          theory, and includes but is not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Damages for lost employment opportunities or career prospects</li>
          <li>Damages resulting from rejected applications or failed interviews</li>
          <li>Costs of obtaining substitute services</li>
          <li>Loss of data, content, or session information</li>
          <li>Any claims arising from AI-generated content inaccuracies</li>
        </ul>
        <p>
          Our total liability for any claims arising under these terms shall not
          exceed the amount paid by you, if any, for accessing the Service. The
          Service is provided free of charge, and as such, your remedy is
          limited to discontinuing use.
        </p>
      </Section>

      <Section id="service-availability" title="Service Availability">
        <p>
          We strive to maintain high availability of the ResumeForge AI
          platform, but we do not guarantee uninterrupted, error-free, or
          continuous operation. The Service may be temporarily unavailable due
          to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Scheduled maintenance and platform upgrades</li>
          <li>Technical issues with third-party AI service providers</li>
          <li>Network infrastructure failures or internet disruptions</li>
          <li>Security incidents or emergency patches</li>
          <li>Factors beyond our reasonable control, including acts of God</li>
        </ul>
        <p>
          We are not liable to users or any third party for any modification,
          suspension, or discontinuation of the Service.
        </p>
      </Section>

      <Section id="changes-to-terms" title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms & Conditions at any time.
          Changes will be effective immediately upon posting to this page. We
          will update the &ldquo;Last updated&rdquo; date to reflect the effective date of
          changes.
        </p>
        <p>
          Your continued use of ResumeForge AI after changes are posted
          constitutes your acceptance of the modified terms. If you do not agree
          with any changes, you should discontinue use of the Service.
        </p>
      </Section>

      <Section id="governing-law" title="Governing Law">
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of the jurisdiction in which ResumeForge AI
          operates, without regard to its conflict of law provisions.
        </p>
        <p>
          Any disputes arising from or relating to these terms or your use of
          the Service shall be resolved through binding arbitration or in the
          courts of the applicable jurisdiction, as determined by applicable
          law. You agree to submit to the personal jurisdiction of such courts
          for any such disputes.
        </p>
      </Section>

      <Section id="contact" title="Contact Information">
        <p>
          For questions, concerns, or inquiries regarding these Terms &
          Conditions, please contact us:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Email: legal@resumeforge.ai</li>
          <li>
            Web: <Link href="/" className="text-amber-400 hover:underline">www.resumeforge.ai</Link>
          </li>
        </ul>
      </Section>
    </LegalTemplate>
  );
}
