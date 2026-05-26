import type { ResumeData } from "@/types/resume";

export async function parseResumeFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();

  if (file.name.endsWith(".pdf")) {
    return parsePDF(buffer);
  } else if (file.name.endsWith(".docx")) {
    return parseDOCX(buffer);
  } else if (file.name.endsWith(".txt")) {
    return new TextDecoder().decode(buffer);
  } else {
    throw new Error("Unsupported file format. Please upload PDF, DOCX, or TXT.");
  }
}

async function parsePDF(buffer: ArrayBuffer): Promise<string> {
  const pdfParse = (await import("pdf-parse/lib/pdf-parse.js")).default;

  const data = await pdfParse(Buffer.from(buffer));
  return data.text || "";
}

async function parseDOCX(buffer: ArrayBuffer): Promise<string> {
  const mammoth = await import("mammoth");

  const result = await mammoth.extractRawText({ buffer: Buffer.from(buffer) });
  return result.value;
}

export function extractTextFromFile(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/\f/g, "\n")
    .trim();
}

export function validateResumeData(data: ResumeData): string[] {
  const warnings: string[] = [];

  if (!data.name) warnings.push("Candidate name not found");
  if (!data.email) warnings.push("Email address not found");
  if (!data.phone) warnings.push("Phone number not found");
  if (!data.skills?.length) warnings.push("No skills detected");
  if (!data.experience?.length) warnings.push("No work experience found");
  if (!data.education?.length) warnings.push("No education entries found");

  return warnings;
}
