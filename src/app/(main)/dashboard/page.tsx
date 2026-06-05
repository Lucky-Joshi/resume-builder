"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeUpload from "@/components/ResumeUpload";
import JobDescriptionInput from "@/components/JobDescriptionInput";
import MatchScoreDisplay from "@/components/MatchScore";
import ResumePreview from "@/components/ResumePreview";
import CoverLetterDisplay from "@/components/CoverLetter";
import { SkeletonResumePreview, SkeletonATSScore, SkeletonCoverLetter, SkeletonCard } from "@/components/ui/skeletons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Download, Sparkles, Loader2, RefreshCw } from "lucide-react";
import type { ResumeData, JobAnalysis, MatchScore } from "@/types/resume";

type Step = "input" | "processing" | "result";

export default function Dashboard() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jdText, setJdText] = useState("");
  const [step, setStep] = useState<Step>("input");
  const [isProcessing, setIsProcessing] = useState(false);
  const [includeCoverLetter, setIncludeCoverLetter] = useState(true);

  const [jobAnalysis, setJobAnalysis] = useState<JobAnalysis | null>(null);
  const [optimizedResume, setOptimizedResume] = useState<ResumeData | null>(null);
  const [matchScore, setMatchScore] = useState<MatchScore | null>(null);
  const [coverLetter, setCoverLetter] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const [processingPhase, setProcessingPhase] = useState<string>("Analyzing Resume...");

  const canGenerate = resumeFile && jdText.trim().length > 20 && !isProcessing;

  const handleGenerate = useCallback(async () => {
    if (!resumeFile || !jdText.trim()) return;

    setIsProcessing(true);
    setError(null);
    setStep("processing");
    setProcessingPhase("Parsing Resume...");

    try {
      const resumeFormData = new FormData();
      resumeFormData.append("file", resumeFile);

      const parseRes = await fetch("/api/parse-resume", {
        method: "POST",
        body: resumeFormData,
      });

      if (!parseRes.ok) {
        const err = await parseRes.json();
        throw new Error(err.error || "Failed to parse resume");
      }

      const { resumeData: parsedData } = await parseRes.json();
      setProcessingPhase("Analyzing Job Description...");

      const jdRes = await fetch("/api/analyze-jd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: jdText }),
      });

      if (!jdRes.ok) {
        const err = await jdRes.json();
        throw new Error(err.error || "Failed to analyze job description");
      }

      const { analysis } = await jdRes.json();
      setJobAnalysis(analysis);
      setProcessingPhase("Optimizing Resume & Calculating Score...");

      const [customizeRes, scoreRes] = await Promise.all([
        fetch("/api/customize-resume", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resumeData: parsedData, jobAnalysis: analysis }),
        }),
        fetch("/api/match-score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resumeData: parsedData, jobAnalysis: analysis }),
        }),
      ]);

      if (!customizeRes.ok) {
        const err = await customizeRes.json();
        throw new Error(err.error || "Failed to customize resume");
      }

      if (!scoreRes.ok) {
        const err = await scoreRes.json();
        throw new Error(err.error || "Failed to calculate match score");
      }

      const { resumeData: customized } = await customizeRes.json();
      const { matchScore: score } = await scoreRes.json();

      setOptimizedResume(customized);
      setMatchScore(score);

      if (includeCoverLetter) {
        setProcessingPhase("Writing Cover Letter...");
        const clRes = await fetch("/api/generate-cover-letter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resumeData: customized, jobAnalysis: analysis }),
        });

        if (clRes.ok) {
          const { coverLetter: cl } = await clRes.json();
          setCoverLetter(cl);
        }
      }

      setStep("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStep("input");
    } finally {
      setIsProcessing(false);
    }
  }, [resumeFile, jdText, includeCoverLetter]);

  const handleDownloadPDF = async () => {
    if (!optimizedResume) return;
    setIsDownloading(true);
    try {
      const { generateResumeHTML } = await import("@/lib/generate-pdf-html");
      const html = generateResumeHTML(optimizedResume);
      const win = window.open("", "_blank");
      if (!win) return;
      win.document.write(html);
      win.document.close();
      setTimeout(() => { win.focus(); win.print(); setIsDownloading(false); }, 300);
    } catch {
      setIsDownloading(false);
    }
  };

  const handleReset = () => {
    setResumeFile(null);
    setJdText("");
    setStep("input");
    setJobAnalysis(null);
    setOptimizedResume(null);
    setMatchScore(null);
    setCoverLetter(null);
    setError(null);
  };

  return (
    <AnimatePresence mode="wait">
      {step === "input" && (
        <motion.div
          key="input"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI-Powered Resume Tailoring
            </h1>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Upload your resume, paste a job description, and get an ATS-optimized version in seconds.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>1. Upload Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <ResumeUpload
                  onFileSelected={setResumeFile}
                  onFileRemoved={() => setResumeFile(null)}
                  selectedFile={resumeFile}
                  isLoading={isProcessing}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <JobDescriptionInput
                  value={jdText}
                  onChange={setJdText}
                  isLoading={isProcessing}
                />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={includeCoverLetter}
                    onChange={(e) => setIncludeCoverLetter(e.target.checked)}
                    className="rounded border-zinc-300"
                  />
                  Generate cover letter
                </label>
                <Button
                  size="lg"
                  onClick={handleGenerate}
                  disabled={!canGenerate}
                  className="w-full sm:w-auto"
                >
                  {isProcessing ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing</>
                  ) : (
                    <><Wand2 className="mr-2 h-4 w-4" /> Generate Optimized Resume</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-red-900/50 bg-red-950/50 p-6"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                  <RefreshCw className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-300">Generation Failed</h3>
                  <p className="mt-1 text-sm text-red-400/80">{error}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGenerate}
                  className="border-red-900/50 text-red-300 hover:bg-red-950 hover:text-red-200"
                >
                  <RefreshCw className="mr-2 h-3.5 w-3.5" />
                  Try Again
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {step === "processing" && (
        <motion.div
          key="processing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-3 py-4">
            <div className="relative">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-800 border-t-amber-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-amber-500" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-white">Crafting Your Perfect Resume</h2>
              <motion.p
                key={processingPhase}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-1 text-sm text-zinc-400"
              >
                {processingPhase}
              </motion.p>
            </div>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.3s]" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.15s]" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-500" />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <SkeletonResumePreview />
              {includeCoverLetter && <SkeletonCoverLetter />}
            </div>
            <div className="space-y-6">
              <SkeletonATSScore />
              <SkeletonCard />
            </div>
          </div>
        </motion.div>
      )}

      {step === "result" && (
        <motion.div
          key="result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Your Optimized Resume</h2>
              <p className="text-sm text-zinc-500">
                {jobAnalysis?.title && `Tailored for ${jobAnalysis.title}`}
                {jobAnalysis?.company && ` at ${jobAnalysis.company}`}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleReset}>
                Start Over
              </Button>
              <Button onClick={handleDownloadPDF} disabled={!optimizedResume || isDownloading}>
                {isDownloading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Preparing PDF...</>
                ) : (
                  <><Download className="mr-2 h-4 w-4" /> Download PDF</>
                )}
              </Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <ResumePreview
                resumeData={optimizedResume}
                isLoading={false}
              />
              {coverLetter && (
                <CoverLetterDisplay
                  coverLetter={coverLetter}
                  isLoading={false}
                />
              )}
            </div>
            <div className="space-y-6">
              <MatchScoreDisplay
                score={matchScore}
                isLoading={false}
              />

              {matchScore && matchScore.missingSkills.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Sparkles className="h-4 w-4" />
                      Skill Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-zinc-500">
                      Consider adding these skills to improve your match:
                    </p>
                    <div className="mt-2 space-y-1">
                      {matchScore.missingSkills.slice(0, 5).map((skill) => (
                        <div
                          key={skill}
                          className="rounded-md bg-zinc-50 px-3 py-1.5 text-xs font-medium dark:bg-zinc-900"
                        >
                          + {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
