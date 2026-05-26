# ResumeForge AI

[![Live Demo](https://img.shields.io/badge/demo-live-22c55e?style=flat-square)](https://resume-builder-tau-ochre.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/github-source-181717?style=flat-square&logo=github)](https://github.com/Lucky-Joshi/resume-builder.git)

**ResumeForge** is an AI-powered resume tailoring tool that analyzes your resume against a job description and produces an ATS-optimized version with keyword density, match scoring, skill gap analysis, and an optional cover letter.

Built with **Next.js 16**, **TypeScript**, **TailwindCSS v4**, **Framer Motion**, and the **Gemini 2.5 Flash** API.

---

## Features

- **📄 Resume Parsing** — Upload PDF, DOCX, or TXT resumes. Extracts structured data (experience, education, skills, projects, etc.).
- **🔍 Job Description Analysis** — Extracts required/preferred skills, responsibilities, experience level, and industry keywords.
- **⚡ AI-Powered Rewriting** — Tailors your resume to the job description — rewrites bullet points with action verbs, prioritizes relevant skills, and optimizes for ATS parsing.
- **📊 ATS Match Scoring** — Scores your resume across skills, experience, education, keywords, and seniority alignment. Identifies missing skills and suggest improvements.
- **💌 Cover Letter Generation** — Optionally generates a personalized cover letter based on your tailored resume and the job description.
- **🖨️ PDF Export** — Opens a print-to-PDF dialog with a clean, ATS-friendly formatted resume.

---

## Built With

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TailwindCSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://motion.dev/) | Animations |
| [Gemini 2.5 Flash](https://ai.google.dev/gemini-api/docs) | AI inference (resume parsing, analysis, rewriting, scoring, cover letters) |
| [pdf-parse](https://www.npmjs.com/package/pdf-parse) | PDF text extraction |
| [mammoth](https://github.com/mwilliamson/mammoth.js) | DOCX text extraction |
| [Lucide React](https://lucide.dev/) | Icons |

---

## How It Works

1. **Upload** your resume (PDF / DOCX / TXT).
2. **Paste** a job description.
3. The app sends both to the Gemini API for:
   - Resume structure extraction
   - Job description analysis (skills, keywords, seniority)
   - Resume rewriting (tailored for the job)
   - Match scoring (overall + sub-scores + keyword density)
   - Optional cover letter generation
4. **Review** your optimized resume, match score, skill gap analysis, and cover letter.
5. **Download** as PDF (browser print-to-PDF).

---

## Getting Started

### Prerequisites

- Node.js 20+
- A Google Gemini API key

### Setup

```bash
git clone https://github.com/Lucky-Joshi/resume-builder.git
cd resume-builder
npm install
```

Create a `.env` file in the project root:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── ai/
│   └── prompts.ts              # Gemini system prompts
├── app/
│   ├── api/
│   │   ├── analyze-jd/         # Job description analysis endpoint
│   │   ├── customize-resume/   # Resume rewriting endpoint
│   │   ├── generate-cover-letter/
│   │   ├── match-score/        # ATS scoring endpoint
│   │   └── parse-resume/       # Resume upload & parsing endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Main dashboard (3-step UI)
├── components/
│   ├── ui/                     # shadcn-style primitives
│   ├── CoverLetter.tsx
│   ├── Header.tsx
│   ├── JobDescriptionInput.tsx
│   ├── MatchScore.tsx
│   ├── ResumePreview.tsx
│   └── ResumeUpload.tsx
├── lib/
│   ├── ats-optimizer.ts        # Keyword density, action verbs, skill prioritization
│   ├── gemini.ts               # Gemini API client
│   ├── generate-pdf-html.ts    # HTML-to-PDF generation
│   └── resume-parser.ts        # PDF/DOCX/TXT parsing
└── types/
    └── resume.ts               # TypeScript interfaces
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/parse-resume` | POST | Upload a resume file → returns structured `ResumeData` |
| `/api/analyze-jd` | POST | Send job description text → returns `JobAnalysis` |
| `/api/customize-resume` | POST | Rewrite resume against JD analysis → returns optimized `ResumeData` |
| `/api/match-score` | POST | Score resume fit → returns `MatchScore` |
| `/api/generate-cover-letter` | POST | Generate cover letter → returns markdown text |

---

## Deployment

Deploy to Vercel with zero configuration (no database required):

```bash
npx vercel
```

Set the `GEMINI_API_KEY` environment variable in your Vercel project settings.

---

## License

[MIT](LICENSE)
