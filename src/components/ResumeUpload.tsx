"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResumeUploadProps {
  onFileSelected: (file: File) => void;
  onFileRemoved: () => void;
  selectedFile: File | null;
  isLoading?: boolean;
}

export default function ResumeUpload({ onFileSelected, onFileRemoved, selectedFile, isLoading }: ResumeUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isValidFile = (file: File) => {
    const validTypes = [".pdf", ".docx", ".txt"];
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    return validTypes.includes(ext);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file && isValidFile(file)) {
      onFileSelected(file);
    }
  }, [onFileSelected]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && isValidFile(file)) {
      onFileSelected(file);
    }
  }, [onFileSelected]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  if (selectedFile) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="truncate text-sm font-medium">{selectedFile.name}</p>
          <p className="text-xs text-zinc-500">{formatFileSize(selectedFile.size)}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onFileRemoved} disabled={isLoading}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors",
        isDragging
          ? "border-zinc-900 bg-zinc-50 dark:border-zinc-50 dark:bg-zinc-900"
          : "border-zinc-300 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600"
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx,.txt"
        className="hidden"
        onChange={handleFileSelect}
      />
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <Upload className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium">Drop your resume here</p>
        <p className="text-xs text-zinc-500">PDF, DOCX, or TXT up to 10MB</p>
      </div>
    </div>
  );
}
