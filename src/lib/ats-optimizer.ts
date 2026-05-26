export const ATS_KEYWORDS = [
  "achieved", "implemented", "developed", "managed", "led",
  "created", "designed", "optimized", "improved", "delivered",
  "established", "generated", "increased", "reduced", "resolved",
  "spearheaded", "streamlined", "strengthened", "transformed", "accelerated",
];

export function calculateKeywordDensity(text: string, keywords: string[]): number {
  const lowerText = text.toLowerCase();
  let matchCount = 0;

  for (const keyword of keywords) {
    const regex = new RegExp(keyword.toLowerCase(), "g");
    const matches = lowerText.match(regex);
    if (matches) matchCount += matches.length;
  }

  const totalWords = text.split(/\s+/).length;
  return totalWords > 0 ? (matchCount / totalWords) * 100 : 0;
}

export function optimizeBulletPoint(bullet: string): string {
  const actionVerbs = [
    { pattern: /^built/i, replacement: "Developed and built" },
    { pattern: /^made/i, replacement: "Created" },
    { pattern: /^helped/i, replacement: "Facilitated" },
    { pattern: /^worked on/i, replacement: "Engineered" },
    { pattern: /^did/i, replacement: "Executed" },
    { pattern: /^was responsible for/i, replacement: "Led" },
    { pattern: /^handled/i, replacement: "Managed" },
    { pattern: /^took care of/i, replacement: "Administered" },
  ];

  let optimized = bullet.trim();
  if (!optimized) return bullet;

  for (const { pattern, replacement } of actionVerbs) {
    if (pattern.test(optimized)) {
      optimized = optimized.replace(pattern, replacement);
      break;
    }
  }

  if (!/^[A-Z]/.test(optimized)) {
    optimized = optimized.charAt(0).toUpperCase() + optimized.slice(1);
  }

  return optimized;
}

export function prioritizeSkills(
  resumeSkills: string[],
  jdRequiredSkills: string[],
  jdPreferredSkills: string[] = []
): string[] {
  const allJDSkills = [...new Set([...jdRequiredSkills, ...jdPreferredSkills].map(s => s.toLowerCase()))];

  const matched = resumeSkills.filter(s => allJDSkills.includes(s.toLowerCase()));
  const unmatched = resumeSkills.filter(s => !allJDSkills.includes(s.toLowerCase()));

  return [...matched.sort(), ...unmatched];
}

export function getActionVerbSuggestion(verb: string): string {
  const suggestions: Record<string, string[]> = {
    built: ["Developed", "Architected", "Engineered", "Constructed"],
    made: ["Created", "Produced", "Authored", "Formulated"],
    helped: ["Facilitated", "Supported", "Contributed to", "Aided"],
    worked: ["Collaborated", "Engineered", "Contributed"],
    did: ["Executed", "Performed", "Conducted", "Achieved"],
    fixed: ["Resolved", "Debugged", "Patched", "Rectified"],
    improved: ["Optimized", "Enhanced", "Upgraded", "Refined"],
    used: ["Leveraged", "Utilized", "Applied", "Employed"],
    wrote: ["Authored", "Implemented", "Coded", "Developed"],
    led: ["Spearheaded", "Directed", "Orchestrated", "Championed"],
  };

  for (const [key, values] of Object.entries(suggestions)) {
    if (verb.toLowerCase().startsWith(key)) {
      return values[0];
    }
  }

  return verb.charAt(0).toUpperCase() + verb.slice(1);
}
