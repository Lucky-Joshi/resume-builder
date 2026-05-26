import { NextRequest } from "next/server";
import { extractJsonFromResponse } from "@/lib/gemini";
import { MATCH_SCORE_SYSTEM_PROMPT } from "@/ai/prompts";
import type { ResumeData, JobAnalysis, MatchScore } from "@/types/resume";

export async function POST(request: NextRequest) {
  try {
    const { resumeData, jobAnalysis } = await request.json() as {
      resumeData: ResumeData;
      jobAnalysis: JobAnalysis;
    };

    if (!resumeData || !jobAnalysis) {
      return Response.json({ error: "Missing resume data or job analysis" }, { status: 400 });
    }

    const userPrompt = `Resume (JSON):
${JSON.stringify(resumeData, null, 2)}

Job Description Analysis (JSON):
${JSON.stringify(jobAnalysis, null, 2)}

Calculate the match score between this resume and job description. Return ONLY valid JSON.`;

    const matchScore = await extractJsonFromResponse<MatchScore>(
      MATCH_SCORE_SYSTEM_PROMPT,
      userPrompt
    );

    return Response.json({ matchScore });
  } catch (error) {
    console.error("Match score error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to calculate match score" },
      { status: 500 }
    );
  }
}
