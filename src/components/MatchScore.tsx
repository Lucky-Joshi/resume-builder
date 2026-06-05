"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, XCircle, Lightbulb, TrendingUp } from "lucide-react";
import { SkeletonATSScore } from "@/components/ui/skeletons";
import type { MatchScore } from "@/types/resume";

interface MatchScoreProps {
  score: MatchScore | null;
  isLoading: boolean;
}

function ScoreCircle({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18" cy="18" r="15.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-zinc-200 dark:text-zinc-800"
          />
          <circle
            cx="18" cy="18" r="15.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${value * 0.97} 100`}
            className={
              value >= 80
                ? "text-green-600 dark:text-green-400"
                : value >= 60
                ? "text-amber-500 dark:text-amber-400"
                : "text-red-600 dark:text-red-400"
            }
            strokeLinecap="round"
          />
        </svg>
        <span className="text-lg font-bold">{value}%</span>
      </div>
      <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide">{label}</span>
    </div>
  );
}

export default function MatchScoreDisplay({ score, isLoading }: MatchScoreProps) {
  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <SkeletonATSScore />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!score) return null;

  const variant = score.overallMatch >= 80 ? "success" : score.overallMatch >= 60 ? "warning" : "danger";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Match Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-zinc-200 dark:border-zinc-700">
              <span className="text-3xl font-bold">{score.overallMatch}%</span>
            </div>
            <p className="text-sm font-medium">Overall Match</p>
            <Progress value={score.overallMatch} variant={variant} className="h-2 w-full max-w-xs" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <ScoreCircle value={score.skillsMatch} label="Skills" />
            <ScoreCircle value={score.experienceMatch} label="Experience" />
            <ScoreCircle value={score.educationMatch} label="Education" />
            <ScoreCircle value={score.keywordsMatch} label="Keywords" />
            <ScoreCircle value={score.seniorityAlignment} label="Seniority" />
            <ScoreCircle value={score.keywordDensity.keywordCoverage} label="Coverage" />
          </div>

          <Separator />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h4 className="flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-4 w-4" />
                Strong Matches
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {score.strongMatches.map((skill) => (
                  <Badge key={skill} variant="success">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="flex items-center gap-1 text-sm font-semibold text-red-600 dark:text-red-400">
                <XCircle className="h-4 w-4" />
                Missing Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {score.missingSkills.map((skill) => (
                  <Badge key={skill} variant="destructive">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="flex items-center gap-1 text-sm font-semibold">
              <Lightbulb className="h-4 w-4" />
              Suggestions
            </h4>
            <ul className="space-y-1">
              {score.suggestedImprovements.map((improvement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
