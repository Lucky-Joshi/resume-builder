import { NextRequest } from "next/server";
import { parseResumeFile } from "@/lib/resume-parser";
import { extractJsonFromResponse } from "@/lib/gemini";
import { EXTRACT_RESUME_SYSTEM_PROMPT } from "@/ai/prompts";
import type { ResumeData } from "@/types/resume";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    const text = await parseResumeFile(file);

    const resumeData = await extractJsonFromResponse<ResumeData>(
      EXTRACT_RESUME_SYSTEM_PROMPT,
      `Extract structured data from this resume:\n\n${text}`
    );

    return Response.json({ resumeData, rawText: text });
  } catch (error) {
    console.error("Parse resume error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to parse resume" },
      { status: 500 }
    );
  }
}
