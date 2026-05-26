export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: string[];
}

export interface JobAnalysis {
  title: string;
  company: string;
  requiredSkills: string[];
  preferredSkills: string[];
  responsibilities: string[];
  experienceLevel: string;
  education: string;
  industryKeywords: string[];
  summary: string;
}

export interface MatchScore {
  overallMatch: number;
  skillsMatch: number;
  experienceMatch: number;
  educationMatch: number;
  keywordsMatch: number;
  seniorityAlignment: number;
  missingSkills: string[];
  strongMatches: string[];
  suggestedImprovements: string[];
  keywordDensity: {
    totalKeywords: number;
    matchedKeywords: number;
    keywordCoverage: number;
  };
}

export interface ResumeVersion {
  id: string;
  name: string;
  resumeData: ResumeData;
  jobTitle: string;
  company: string;
  matchScore: number;
  createdAt: string;
}

export interface GenerationResult {
  resumeData: ResumeData;
  matchScore: MatchScore;
  coverLetter?: string;
}
