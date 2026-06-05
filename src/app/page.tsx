"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, BarChart3, Download, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { staggerChildren: 0.12 },
};

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-50">
              <FileText className="h-4 w-4 text-zinc-50 dark:text-zinc-900" />
            </div>
            <span className="text-lg font-bold tracking-tight">ResumeForge</span>
            <span className="hidden rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 sm:inline-flex">
              AI
            </span>
          </div>
          <div className="ml-auto">
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
            >
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--amber-300)/0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,hsl(var(--amber-500)/0.08),transparent_60%)]" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                <Sparkles className="h-3 w-3 text-amber-500" />
                Powered by Google Gemini AI
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Tailor Your Resume to{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Every Job
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-xl">
                Upload your resume, paste any job description, and let AI rewrite it into an ATS-optimized
                version with match scoring, keyword analysis, and a cover letter.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/dashboard"
                  className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto gap-2")}
                >
                  Start Tailoring Free <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto")}
                >
                  How It Works
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <motion.div {...fadeIn} className="mb-14 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built to Beat ATS Filters
              </h2>
              <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                Everything you need to land more interviews.
              </p>
            </motion.div>
            <motion.div {...stagger} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Sparkles,
                  title: "AI Rewriting",
                  desc: "Rescopes bullet points to match the job description. Action verbs, keyword density, all automated.",
                },
                {
                  icon: BarChart3,
                  title: "Match Scoring",
                  desc: "See exactly how well your resume fits — skills, experience, education, and keyword coverage.",
                },
                {
                  icon: CheckCircle,
                  title: "Skill Gap Analysis",
                  desc: "Identifies missing keywords and suggests skills to add for a better ATS match.",
                },
                {
                  icon: Download,
                  title: "PDF Export",
                  desc: "Download a clean, ATS-friendly PDF with one click. Print-to-PDF, no formatting issues.",
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                  }}
                  className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <motion.div {...fadeIn} className="mb-14 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Three Steps to a Better Resume
              </h2>
              <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                No signup, no credit card. Just upload, paste, and optimize.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { step: "01", title: "Upload Resume", desc: "PDF, DOCX, or plain text. Your data stays private — we never store your resume." },
                { step: "02", title: "Paste Job Description", desc: "Copy-paste any job posting. Our AI extracts skills, requirements, and keywords." },
                { step: "03", title: "Get Optimized Results", desc: "Review your tailored resume, match score, skill gaps, and optional cover letter. Download as PDF." },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  {...fadeIn}
                  className="relative rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
                >
                  <span className="mb-4 block text-4xl font-bold text-zinc-200 dark:text-zinc-800">
                    {item.step}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <motion.div {...fadeIn} className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Land More Interviews?
              </h2>
              <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                No account needed. Start tailoring your resume in seconds.
              </p>
              <div className="mt-8">
                <Link
                  href="/dashboard"
                  className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto gap-2")}
                >
                  Optimize Your Resume Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-400 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4">
          ResumeForge AI — Smart Resume Tailoring
        </div>
      </footer>
    </div>
  );
}
