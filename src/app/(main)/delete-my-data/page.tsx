import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete My Data | ResumeForge AI",
  description:
    "ResumeForge AI is designed not to permanently store uploaded resumes or job descriptions. Learn about our privacy-first data handling and how to request deletion.",
};

const faqItems = [
  {
    q: "Do you store my resume?",
    a: "No. Uploaded resumes are processed temporarily in memory during your active session and are not maintained in a permanent database. Once you leave or close the page, the uploaded content is discarded and cannot be retrieved.",
  },
  {
    q: "Do you keep generated resumes?",
    a: "No permanent storage is maintained for generated outputs. Optimized resumes, cover letters, and match scores are displayed to you in real time and are not stored on our servers after your session ends.",
  },
  {
    q: "Do you sell my information?",
    a: "No. We do not sell, rent, or share your personal information with third parties for advertising, marketing, or any commercial purposes. Your content is processed solely to generate the requested outputs.",
  },
  {
    q: "Do you have a database of user profiles?",
    a: "No. ResumeForge AI does not require user registration and does not maintain a database of user profiles, accounts, or personal information. There is no mechanism to identify or track individual users across sessions.",
  },
  {
    q: "What about server logs?",
    a: "Standard server logs may capture technical information such as IP addresses, browser types, and request timestamps for operational security and debugging purposes. These logs do not contain the content of your uploaded documents.",
  },
  {
    q: "Can you delete my data if I request it?",
    a: "Yes. Because we do not maintain permanent storage of uploaded content, there is generally no retained user data requiring deletion. However, if you believe any information remains associated with your session, contact us and we will investigate promptly.",
  },
];

export default function DeleteMyDataPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Prominent Notice */}
      <div className="rounded-2xl border border-green-500/20 bg-gradient-to-b from-green-500/[0.06] to-transparent p-6 sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
          <Shield className="h-6 w-6 text-green-400" />
        </div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Delete My Data
        </h1>
        <p className="mt-2 text-zinc-400">
          Request removal of your personal information from our systems.
        </p>
      </div>

      {/* Architecture Explanation */}
      <div className="mt-10 space-y-8">
        <div className="rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">
            Privacy-First Architecture
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            ResumeForge AI is designed with a privacy-first architecture. Our
            platform processes documents temporarily and does not maintain a
            permanent database of uploaded content. This means:
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <div>
                <h3 className="text-sm font-medium text-zinc-200">No Resume Storage</h3>
                <p className="text-sm text-zinc-500">
                  Uploaded resumes are processed temporarily and are not
                  maintained in a permanent database. Each session is
                  independent and ephemeral.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <div>
                <h3 className="text-sm font-medium text-zinc-200">No User Profiles</h3>
                <p className="text-sm text-zinc-500">
                  We do not require user registration and do not maintain a
                  database of user accounts, profiles, or personal information.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <div>
                <h3 className="text-sm font-medium text-zinc-200">No Resume History</h3>
                <p className="text-sm text-zinc-500">
                  We do not store history of your activity, maintain version
                  archives, or retain generated outputs after your session ends.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <div>
                <h3 className="text-sm font-medium text-zinc-200">No Data Selling</h3>
                <p className="text-sm text-zinc-500">
                  We do not sell, rent, or share your personal information with
                  third parties for advertising, marketing, or profiling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className="rounded-xl border border-white/[0.06] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">
            What This Means for You
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Because ResumeForge AI does not permanently store your uploaded
            resumes, job descriptions, or generated outputs, there is generally
            no retained user content requiring deletion. Most user content is
            automatically removed after processing is complete and your session
            ends.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            If you believe any information remains associated with your session
            or would like confirmation that your data has been fully cleared,
            please contact us using the information below. We will respond
            promptly to investigate and address your request.
          </p>
        </div>

        {/* FAQ */}
        <div className="rounded-xl border border-white/[0.06] p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-amber-400" />
            <h2 className="text-lg font-semibold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-medium text-zinc-200">{item.q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">
            Contact Us to Confirm Deletion
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            To request confirmation that your data has been removed, or if you
            have any questions about how your information is handled, please
            reach out:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <span className="text-zinc-500">Email:</span>{" "}
              <a href="mailto:privacy@resumeforge.ai" className="text-amber-400 hover:underline">
                privacy@resumeforge.ai
              </a>
            </li>
            <li>
              <span className="text-zinc-500">Subject Line:</span> Data Deletion
              Request
            </li>
            <li>
              <span className="text-zinc-500">Response Time:</span> We will
              respond within 30 days.
            </li>
          </ul>
        </div>

        {/* Rights */}
        <div className="rounded-xl border border-white/[0.06] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">
            Your Rights Under GDPR / CCPA
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Depending on your location, you may have rights under the General
            Data Protection Regulation (GDPR) or the California Consumer Privacy
            Act (CCPA), including:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
            <li>
              The right to know what personal information is collected and
              processed
            </li>
            <li>
              The right to request deletion of your personal information
            </li>
            <li>
              The right to opt out of the sale of your personal information
            </li>
            <li>
              The right to non-discrimination for exercising your privacy rights
            </li>
            <li>
              The right to lodge a complaint with a supervisory authority
            </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            ResumeForge AI does not sell personal information. To exercise your
            privacy rights or request data deletion, contact us at{" "}
            <a href="mailto:privacy@resumeforge.ai" className="text-amber-400 hover:underline">
              privacy@resumeforge.ai
            </a>
            .
          </p>
        </div>
      </div>

      {/* Legal Navigation */}
      <div className="mt-16 border-t border-white/[0.06] pt-8">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
          <Link href="/privacy" className="transition-colors hover:text-zinc-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-zinc-300">
            Terms & Conditions
          </Link>
          <Link href="/disclaimer" className="transition-colors hover:text-zinc-300">
            Disclaimer
          </Link>
          <Link href="/cookies" className="transition-colors hover:text-zinc-300">
            Cookie Policy
          </Link>
          <Link href="/delete-my-data" className="transition-colors hover:text-zinc-300">
            Delete My Data
          </Link>
        </div>
      </div>
    </div>
  );
}
