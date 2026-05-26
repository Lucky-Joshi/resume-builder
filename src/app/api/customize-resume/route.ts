import { NextRequest } from "next/server";
import { extractJsonFromResponse } from "@/lib/gemini";
import { CUSTOMIZE_RESUME_SYSTEM_PROMPT } from "@/ai/prompts";
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

    const userPrompt = `Original Resume (JSON):
${JSON.stringify(resumeData, null, 2)}

Job Description Analysis (JSON):
${JSON.stringify(jobAnalysis, null, 2)}

Rewrite this resume to optimize for the job description. Return ONLY valid JSON.`;

    const optimized = await extractJsonFromResponse<ResumeData>(
      CUSTOMIZE_RESUME_SYSTEM_PROMPT,
      userPrompt
    );

    return Response.json({ resumeData: optimized });
  } catch (error) {
    console.error("Customize resume error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to customize resume" },
      { status: 500 }
    );
  }
}
