"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText } from "lucide-react";

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  onFileUpload?: (file: File) => void;
  isLoading?: boolean;
}

export default function JobDescriptionInput({
  value,
  onChange,
  onFileUpload,
  isLoading,
}: JobDescriptionInputProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onFileUpload) return;

    if (file.name.endsWith(".txt") || file.name.endsWith(".pdf")) {
      setFileName(file.name);
      onFileUpload(file);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Job Description</label>
        <label className="cursor-pointer">
          <input type="file" accept=".txt,.pdf" className="hidden" onChange={handleFile} />
          <span className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50">
            <Upload className="h-3 w-3" />
            Upload JD
          </span>
        </label>
      </div>
      <Textarea
        placeholder="Paste the job description here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[180px] resize-y"
        disabled={isLoading}
      />
      {fileName && (
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <FileText className="h-3 w-3" />
          {fileName}
        </div>
      )}
    </div>
  );
}
