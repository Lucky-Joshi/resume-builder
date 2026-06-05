import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalSection {
  id: string;
  title: string;
}

interface LegalTemplateProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  children: React.ReactNode;
}

export default function LegalTemplate({
  title,
  lastUpdated,
  sections,
  children,
}: LegalTemplateProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Mobile TOC */}
      <nav className="mb-10 rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 lg:hidden">
        <h2 className="mb-4 text-sm font-semibold text-zinc-300">Contents</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:flex lg:gap-16">
        {/* Desktop Sidebar */}
        <nav className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <h1 className="text-lg font-bold text-white">{title}</h1>
            <p className="mt-1 text-xs text-zinc-500">Last updated: {lastUpdated}</p>
            <ul className="mt-6 space-y-2.5 border-l border-white/[0.06] pl-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="min-w-0 flex-1">
          <div className="mb-10 hidden lg:block">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-10">{children}</div>

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
      </div>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id}>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-400">{children}</div>
    </section>
  );
}

export { Section };
