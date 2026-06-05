"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight, Menu, X, Sparkles, FileText, BarChart3, CheckCircle2,
  Download, Target, Brain, Shield, Search, Mail, Layers, ChevronDown,
  Upload, FileSearch, Zap, Printer, CheckCircle, XCircle, ArrowUpRight, Award, TrendingUp,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

/* ───────── Animation variants ───────── */

const easeOut = [0.25, 0.1, 0.25, 1] as const;
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const lineReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: easeOut, delay: i * 0.12 },
  }),
};

/* ───────── Hooks ───────── */

function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReduced;
}

function useAnimatedCounter(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

function useInViewOnce(margin: `${number}px` | `${number}%` = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ───────── Background effects ───────── */

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />
      <motion.div
        className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/8"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(120px)" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-amber-500/5"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(120px)" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 h-[300px] w-[300px] rounded-full bg-amber-600/4"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(100px)" }}
      />
    </div>
  );
}

function SectionHeader({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <Badge variant="outline" className="mb-4 border-amber-500/20 text-amber-400">
        {badge}
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-zinc-400">{subtitle}</p>}
    </motion.div>
  );
}

/* ───────── Data ───────── */

const SECTION_IDS = {
  features: "features",
  howItWorks: "how-it-works",
  faq: "faq",
} as const;

const NAV_LINKS = [
  { label: "Features", href: `#${SECTION_IDS.features}` },
  { label: "How It Works", href: `#${SECTION_IDS.howItWorks}` },
  { label: "FAQ", href: `#${SECTION_IDS.faq}` },
];

const TRUST_ITEMS = [
  { label: "ATS Friendly", icon: Shield },
  { label: "AI Powered", icon: Brain },
  { label: "Resume Optimization", icon: TrendingUp },
  { label: "PDF Export", icon: Printer },
  { label: "Job Specific", icon: Target },
];

const FEATURES = [
  { icon: Search, title: "ATS Optimization", description: "Improve keyword matching and recruiter visibility." },
  { icon: FileText, title: "AI Resume Tailoring", description: "Customize your resume for every role." },
  { icon: BarChart3, title: "Match Score Analysis", description: "Understand exactly how well your resume matches a job." },
  { icon: CheckCircle2, title: "Missing Skills Detection", description: "Identify gaps before applying." },
  { icon: Mail, title: "Cover Letter Generation", description: "Generate personalized cover letters instantly." },
  { icon: Layers, title: "Multiple Resume Versions", description: "Maintain separate resumes for different career paths." },
];

const STEPS = [
  { icon: Upload, title: "Upload Resume", description: "Upload your existing resume in PDF, DOCX, or TXT format." },
  { icon: FileSearch, title: "Add Job Description", description: "Paste the job posting you want to target." },
  { icon: Zap, title: "AI Analysis", description: "Our AI analyzes and optimizes your resume for ATS compatibility." },
  { icon: Download, title: "Download Optimized Resume", description: "Export your tailored resume as a polished PDF." },
];

const FAQ_ITEMS = [
  { q: "How does ATS optimization work?", a: "ATS (Applicant Tracking System) optimization ensures your resume contains the right keywords, formatting, and structure to pass automated screening. Our AI analyzes the job description and rewrites your resume to maximize keyword density while maintaining natural language." },
  { q: "Is my data private and secure?", a: "Yes. We process your resume and job description in real-time and do not store any personal data on our servers. Your information is used only for the current session and is never shared with third parties." },
  { q: "What file formats are supported?", a: "We support PDF, DOCX, and plain text (TXT) files for resume uploads. For job descriptions, you can paste any text content directly." },
  { q: "How accurate is the AI analysis?", a: "Our AI uses Google's Gemini models to analyze resumes with high accuracy. While no tool guarantees 100%, users typically see significant improvement in their match scores and interview callback rates." },
  { q: "Can I download my resume as a PDF?", a: "Yes. Your optimized resume can be downloaded as a print-ready PDF with proper ATS-friendly formatting and typography." },
];

/* ───────── Components ───────── */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.header
      initial={prefersReduced ? {} : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: easeOut }}
      className="fixed top-0 right-0 left-0 z-50"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
            <FileText className="h-4 w-4 text-black" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">ResumeForge AI</span>
        </motion.div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="hidden items-center gap-3 md:flex"
        >
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ size: "sm" }),
              "group gap-1.5 bg-amber-500 text-black transition-all duration-200 hover:bg-amber-400 active:scale-[0.98]"
            )}
          >
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <button
          className="relative z-50 flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-4 gap-2 bg-amber-500 text-black hover:bg-amber-400"
                )}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.header>
  );
}

function HeroSection() {
  const prefersReduced = useReducedMotion();
  const headline = "Tailor Your Resume for Every Job in Seconds";

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0a0a0b_0%,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 sm:pt-24 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="overflow-hidden">
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: easeOut }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Resume Optimization
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {prefersReduced ? (
                <>
                  Tailor Your Resume for{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Every Job
                  </span>{" "}
                  in Seconds
                </>
              ) : (
                headline.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    variants={lineReveal}
                    className="inline-block mr-[0.25em]"
                  >
                    {word === "Every" || word === "Job" ? (
                      <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))
              )}
            </h1>

            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.45, ease: easeOut }}
              className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl"
            >
              Upload your resume, paste a job description, and let AI create an
              ATS-optimized version designed to maximize interview opportunities.
            </motion.p>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.45, ease: easeOut }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group gap-2 bg-amber-500 text-black transition-all duration-200 hover:bg-amber-400 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] active:scale-[0.98]"
                )}
              >
                <span>Optimize My Resume</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`#${SECTION_IDS.howItWorks}`}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-white/10 text-white transition-all duration-200 hover:bg-white/5 active:scale-[0.98]"
                )}
              >
                View Demo <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="mt-12 flex items-center gap-6 text-sm text-zinc-500"
            >
              {["No signup required", "Free to use", "PDF export"].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOutExpo }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
              <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-zinc-500">resume-preview.pdf</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/5" />
                  <div className="mt-4 space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex gap-2">
                        <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/50" />
                        <div className="h-3 flex-1 rounded bg-white/5" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 h-px bg-white/5" />
                  <div className="space-y-2">
                    <div className="h-3 w-1/3 rounded bg-white/10" />
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Node.js", "Python"].map((skill) => (
                        <div key={skill} className="rounded-md bg-amber-500/15 px-2 py-1 text-[10px] text-amber-400">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: easeOut }}
                className="animate-float absolute -top-2 -right-4 w-44 rounded-xl border border-white/10 bg-zinc-900/90 p-4 backdrop-blur-xl sm:-right-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">ATS Match</span>
                  <Award className="h-3.5 w-3.5 text-amber-500" />
                </div>
                <div className="mt-2 text-2xl font-bold text-white">87%</div>
                <Progress value={87} variant="warning" className="mt-2" />
              </motion.div>

              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5, ease: easeOut }}
                className="animate-float-delayed absolute -bottom-4 -left-4 w-48 rounded-xl border border-white/10 bg-zinc-900/90 p-4 backdrop-blur-xl sm:-left-8"
              >
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Brain className="h-3.5 w-3.5" />
                  Skills matched
                </div>
                <div className="mt-1 flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-1 rounded-full bg-amber-500" style={{ opacity: i === 4 ? 0.4 : 1 }} />
                  ))}
                </div>
                <div className="mt-1 text-[10px] text-zinc-500">12 of 14 keywords matched</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const { ref, inView } = useInViewOnce();
  return (
    <section className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {TRUST_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-white/20 hover:text-white"
            >
              <item.icon className="h-4 w-4 text-amber-500" />
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id={SECTION_IDS.features} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader badge="Features" title="Built to Beat ATS Filters" subtitle="Everything you need to land more interviews." />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_40px_-8px_rgba(245,158,11,0.15)]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-colors duration-200 group-hover:bg-amber-500/20"
              >
                <feature.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id={SECTION_IDS.howItWorks} className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader badge="Process" title="How It Works" subtitle="Three simple steps to a better resume." />
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: easeOut }}
            className="absolute top-12 left-8 hidden h-[calc(100%-6rem)] w-px origin-top bg-gradient-to-b from-amber-500/40 via-white/10 to-transparent md:block"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="space-y-16 md:space-y-0"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative md:flex md:items-start md:gap-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:block md:w-16"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900">
                    <step.icon className="h-7 w-7 text-amber-500" />
                  </div>
                </motion.div>
                <div className="mt-4 pl-10 md:mt-0 md:flex-1 md:pl-0">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-sm font-bold text-amber-400 md:hidden">
                      {i + 1}
                    </div>
                    <span className="hidden text-sm text-amber-500 md:inline">Step {i + 1}</span>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ATSScoreSection() {
  const matchedSkills = ["React", "TypeScript", "Node.js"];
  const missingSkills = ["Docker", "AWS"];
  const { count, ref: countRef } = useAnimatedCounter(87);
  const { ref: progressRef } = useInViewOnce("-40px");

  const breakdownItems = [
    { label: "Skills Match", value: 82, variant: "warning" as const },
    { label: "Experience Match", value: 90, variant: "success" as const },
    { label: "Education Match", value: 100, variant: "success" as const },
    { label: "Keywords Match", value: 76, variant: "warning" as const },
  ];

  return (
    <section className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader badge="Score" title="See Your Match Score Instantly" subtitle="Understand exactly how your resume performs against any job description." />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scaleIn}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-sm text-zinc-400">ATS Match Score</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span ref={countRef} className="text-5xl font-bold text-white">{count}</span>
                  <span className="text-2xl text-zinc-500">%</span>
                </div>
              </div>
              <div className="relative flex h-24 w-24 items-center justify-center">
                <motion.svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                  <motion.circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.87 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: easeOutExpo }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                </motion.svg>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="absolute text-lg font-bold text-white"
                >
                  {count}%
                </motion.span>
              </div>
            </div>

            <div ref={progressRef} className="mb-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 text-sm font-medium text-zinc-300">Skills Breakdown</h4>
                {breakdownItems.map((item) => (
                  <div key={item.label} className="mb-3">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-zinc-400">{item.label}</span>
                      <span className="text-zinc-300">{item.value}%</span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
                      className="h-2 w-full origin-left rounded-full bg-zinc-800"
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.value}%`,
                          background: item.variant === "success"
                            ? "rgb(34 197 94)"
                            : item.variant === "warning"
                            ? "rgb(245 158 11)"
                            : "rgb(113 113 122)",
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + breakdownItems.indexOf(item) * 0.1, ease: easeOutExpo }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <h4 className="mb-3 text-sm font-medium text-zinc-300">Matched Skills</h4>
                  <div className="space-y-2">
                    {matchedSkills.map((skill) => (
                      <motion.div key={skill} variants={staggerItem} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <h4 className="mb-3 text-sm font-medium text-zinc-300">Missing Skills</h4>
                  <div className="space-y-2">
                    {missingSkills.map((skill) => (
                      <motion.div key={skill} variants={staggerItem} className="flex items-center gap-2 text-sm text-zinc-400">
                        <XCircle className="h-4 w-4 text-red-500" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
            >
              <h4 className="mb-2 text-sm font-medium text-zinc-300">Optimization Suggestions</h4>
              <ul className="space-y-1.5 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  Strong project alignment
                </li>
                <li className="flex items-center gap-2">
                  <ArrowUpRight className="h-3.5 w-3.5 text-amber-500" />
                  Better action verbs recommended
                </li>
                <li className="flex items-center gap-2">
                  <ArrowUpRight className="h-3.5 w-3.5 text-amber-500" />
                  Add Docker & AWS to skills
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader badge="Comparison" title="Before vs After" subtitle="See how AI transforms a generic bullet point into a compelling achievement." />
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideLeft}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8"
          >
            <Badge variant="secondary" className="mb-4 bg-red-500/10 text-red-400">Before</Badge>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-lg leading-relaxed text-zinc-400"
            >
              &ldquo;Built a React website.&rdquo;
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-4 flex items-center gap-2 text-sm text-red-400"
            >
              <XCircle className="h-4 w-4" />
              Weak description, no impact
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideRight}
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/[0.08] to-transparent p-8"
          >
            <Badge className="mb-4 bg-amber-500/20 text-amber-400">After</Badge>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-lg leading-relaxed text-white"
            >
              &ldquo;Developed and deployed a scalable React-based application
              improving workflow efficiency and user engagement.&rdquo;
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-4 flex items-center gap-2 text-sm text-green-400"
            >
              <CheckCircle className="h-4 w-4" />
              Action-driven, quantifiable impact
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={SECTION_IDS.faq} className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader badge="FAQ" title="Frequently Asked Questions" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="overflow-hidden rounded-xl border border-white/[0.06]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-white transition-colors duration-200 hover:bg-white/[0.02]"
              >
                {item.q}
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                >
                  <ChevronDown className="h-4 w-4 shrink-0 text-zinc-500" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/[0.06] px-6 py-4 text-sm leading-relaxed text-zinc-400">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="relative mx-auto max-w-3xl px-4 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Stop Sending Generic Resumes
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Create tailored, ATS-friendly resumes in seconds.
        </p>
        <motion.div
          className="mt-10"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group gap-2 bg-amber-500 text-black transition-all duration-200 hover:bg-amber-400 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] active:scale-[0.98]"
            )}
          >
            <span>Get Started Free</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
        <p className="mt-4 text-sm text-zinc-600">No credit card required. No signup needed.</p>
      </motion.div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
              <FileText className="h-4 w-4 text-black" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">ResumeForge AI</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <a href={`#${SECTION_IDS.features}`} className="transition-colors hover:text-white">Features</a>
            <a href={`#${SECTION_IDS.howItWorks}`} className="transition-colors hover:text-white">How It Works</a>
            <a href={`#${SECTION_IDS.faq}`} className="transition-colors hover:text-white">FAQ</a>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
            <Link href="/disclaimer" className="transition-colors hover:text-white">Disclaimer</Link>
            <Link href="/cookies" className="transition-colors hover:text-white">Cookies</Link>
            <Link href="/delete-my-data" className="transition-colors hover:text-white">Delete My Data</Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/5 pt-8 text-center md:flex-row md:justify-between">
          <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} ResumeForge AI. All rights reserved.</p>
          <p className="text-[11px] text-zinc-700">AI Engine: Google Gemini</p>
        </div>
      </div>
    </footer>
  );
}

/* ───────── Main ───────── */

export default function LandingPage() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className="bg-zinc-950 text-zinc-50">
        <Navbar />
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ATSScoreSection />
        <BeforeAfterSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 text-zinc-50">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ATSScoreSection />
      <BeforeAfterSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
