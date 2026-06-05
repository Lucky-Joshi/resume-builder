import Link from "next/link";
import Header from "@/components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[11px] text-zinc-400 dark:text-zinc-600">
            <Link href="/privacy" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400">
              Terms
            </Link>
            <Link href="/disclaimer" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400">
              Disclaimer
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400">
              Cookies
            </Link>
            <Link href="/delete-my-data" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400">
              Delete My Data
            </Link>
          </div>
          <p className="mt-2 text-center text-[11px] text-zinc-300 dark:text-zinc-700">
            AI Engine: Google Gemini
          </p>
        </div>
      </footer>
    </div>
  );
}
