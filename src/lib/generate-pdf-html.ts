import type { ResumeData } from "@/types/resume";

export function generateResumeHTML(data: ResumeData): string {
  const skillTags = data.skills.map(s => `<span class="skill">${escapeHtml(s)}</span>`).join("");

  const experienceHTML = data.experience.map(exp => `
    <div class="section-item">
      <div class="item-header">
        <div>
          <div class="item-title">${escapeHtml(exp.title)}</div>
          <div class="item-subtitle">${escapeHtml(exp.company)}</div>
        </div>
        <div class="item-dates">${escapeHtml(exp.startDate)} – ${escapeHtml(exp.endDate)}</div>
      </div>
      <ul class="bullet-list">
        ${exp.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  const projectsHTML = data.projects.map(proj => `
    <div class="section-item">
      <div class="item-header">
        <div class="item-title">${escapeHtml(proj.name)}</div>
        ${proj.technologies.length ? `<div class="tech-tags">${proj.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
      <div class="item-desc">${escapeHtml(proj.description)}</div>
    </div>
  `).join("");

  const educationHTML = data.education.map(edu => `
    <div class="section-item">
      <div class="item-header">
        <div>
          <div class="item-title">${escapeHtml(edu.institution)}</div>
          <div class="item-subtitle">${escapeHtml(edu.degree)} in ${escapeHtml(edu.field)}</div>
        </div>
        <div class="item-dates">${escapeHtml(edu.startDate)} – ${escapeHtml(edu.endDate)}${edu.gpa ? ` | GPA: ${escapeHtml(edu.gpa)}` : ""}</div>
      </div>
    </div>
  `).join("");

  const certHTML = data.certifications.length ? `
    <div class="skill-list">${data.certifications.map(c => `<span class="skill">${escapeHtml(c)}</span>`).join("")}</div>
  ` : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(data.name)} – Resume</title>
<style>
  @page { margin: 0.6in 0.75in; size: letter; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; font-size: 10.5pt; line-height: 1.45; color: #1a1a1a; max-width: 8in; margin: 0 auto; padding: 0.5in 0.75in; }
  .header { margin-bottom: 14pt; border-bottom: 1pt solid #d4d4d4; padding-bottom: 10pt; }
  .name { font-size: 20pt; font-weight: 700; letter-spacing: -0.3pt; }
  .contact { font-size: 9pt; color: #555; margin-top: 3pt; }
  .contact span { margin-right: 12pt; }
  .section { margin-bottom: 12pt; }
  .section-title { font-size: 10pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1pt; color: #333; margin-bottom: 5pt; border-bottom: 0.5pt solid #d4d4d4; padding-bottom: 2pt; }
  .summary-text { font-size: 10pt; color: #333; line-height: 1.5; }
  .skill-list { display: flex; flex-wrap: wrap; gap: 4pt; }
  .skill { background: #f0f0f0; padding: 1.5pt 7pt; border-radius: 3pt; font-size: 9pt; color: #333; }
  .section-item { margin-bottom: 8pt; }
  .item-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2pt; }
  .item-title { font-size: 10.5pt; font-weight: 600; }
  .item-subtitle { font-size: 9.5pt; color: #444; }
  .item-dates { font-size: 9pt; color: #777; white-space: nowrap; }
  .item-desc { font-size: 9.5pt; color: #444; margin-top: 1pt; }
  .bullet-list { list-style: none; margin-top: 2pt; }
  .bullet-list li { font-size: 9.5pt; color: #444; padding-left: 12pt; position: relative; margin-bottom: 1.5pt; }
  .bullet-list li::before { content: "•"; position: absolute; left: 3pt; color: #888; }
  .tech-tags { display: flex; flex-wrap: wrap; gap: 3pt; }
  .tech-tag { font-size: 8pt; color: #666; border: 0.5pt solid #ccc; padding: 0 5pt; border-radius: 2pt; }
  @media print { body { padding: 0; } }
</style>
</head>
<body>
  <div class="header">
    <div class="name">${escapeHtml(data.name)}</div>
    <div class="contact">
      ${data.email ? `<span>${escapeHtml(data.email)}</span>` : ""}
      ${data.phone ? `<span>${escapeHtml(data.phone)}</span>` : ""}
      ${data.linkedin ? `<span>${escapeHtml(data.linkedin)}</span>` : ""}
    </div>
  </div>

  ${data.summary ? `<div class="section"><div class="section-title">Professional Summary</div><div class="summary-text">${escapeHtml(data.summary)}</div></div>` : ""}

  ${data.skills.length ? `<div class="section"><div class="section-title">Skills</div><div class="skill-list">${skillTags}</div></div>` : ""}

  ${data.experience.length ? `<div class="section"><div class="section-title">Experience</div>${experienceHTML}</div>` : ""}

  ${data.projects.length ? `<div class="section"><div class="section-title">Projects</div>${projectsHTML}</div>` : ""}

  ${data.education.length ? `<div class="section"><div class="section-title">Education</div>${educationHTML}</div>` : ""}

  ${data.certifications.length ? `<div class="section"><div class="section-title">Certifications</div>${certHTML}</div>` : ""}
</body>
</html>`;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, c => map[c] || c);
}
