import { NextRequest } from "next/server";
import { extractJsonFromResponse } from "@/lib/gemini";
import { ANALYZE_JD_SYSTEM_PROMPT } from "@/ai/prompts";
import type { JobAnalysis } from "@/types/resume";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return Response.json({ error: "No job description text provided" }, { status: 400 });
    }

    const analysis = await extractJsonFromResponse<JobAnalysis>(
      ANALYZE_JD_SYSTEM_PROMPT,
      `Analyze this job description:\n\n${text}`
    );

    return Response.json({ analysis });
  } catch (error) {
    console.error("Analyze JD error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to analyze job description" },
      { status: 500 }
    );
  }
}
