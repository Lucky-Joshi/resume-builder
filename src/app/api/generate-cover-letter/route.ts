import { NextRequest } from "next/server";
import { callGemini } from "@/lib/gemini";
import { COVER_LETTER_SYSTEM_PROMPT } from "@/ai/prompts";
import type { ResumeData, JobAnalysis } from "@/types/resume";

export async function POST(request: NextRequest) {
  try {
    const { resumeData, jobAnalysis } = await request.json() as {
      resumeData: ResumeData;
      jobAnalysis: JobAnalysis;
    };

    if (!resumeData || !jobAnalysis) {
      return Response.json({ error: "Missing resume data or job analysis" }, { status: 400 });
    }

    const userPrompt = `Resume:
${JSON.stringify(resumeData, null, 2)}

Job Description Analysis:
${JSON.stringify(jobAnalysis, null, 2)}

Write a personalized cover letter for this position. Return only the letter text.`;

    const coverLetter = await callGemini(COVER_LETTER_SYSTEM_PROMPT, userPrompt);

    return Response.json({ coverLetter });
  } catch (error) {
    console.error("Cover letter error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to generate cover letter" },
      { status: 500 }
    );
  }
}
