"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Copy, Check } from "lucide-react";
import { SkeletonCoverLetter } from "@/components/ui/skeletons";
import { useState } from "react";

interface CoverLetterProps {
  coverLetter: string | null;
  isLoading: boolean;
}

export default function CoverLetterDisplay({ coverLetter, isLoading }: CoverLetterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (coverLetter) {
      await navigator.clipboard.writeText(coverLetter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
          <SkeletonCoverLetter />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!coverLetter) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Cover Letter
            </CardTitle>
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {copied ? (
                <><Check className="mr-1 h-3.5 w-3.5" /> Copied</>
              ) : (
                <><Copy className="mr-1 h-3.5 w-3.5" /> Copy</>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {coverLetter}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
