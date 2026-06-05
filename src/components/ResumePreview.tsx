"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Mail, Phone, Globe } from "lucide-react";
import { SkeletonResumePreview } from "@/components/ui/skeletons";
import type { ResumeData } from "@/types/resume";

interface ResumePreviewProps {
  resumeData: ResumeData | null;
  isLoading: boolean;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
      {children}
    </h3>
  );
}

export default function ResumePreview({ resumeData, isLoading }: ResumePreviewProps) {
  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <SkeletonResumePreview />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!resumeData) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Optimized Resume
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">{resumeData.name}</h2>
            <div className="mt-1 flex flex-wrap gap-3 text-sm text-zinc-500">
              {resumeData.email && (
                <span className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5" /> {resumeData.email}
                </span>
              )}
              {resumeData.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" /> {resumeData.phone}
                </span>
              )}
              {resumeData.linkedin && (
                <span className="flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" /> {resumeData.linkedin}
                </span>
              )}
            </div>
          </div>

          {resumeData.summary && (
            <>
              <Separator />
              <div>
                <SectionTitle>Professional Summary</SectionTitle>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {resumeData.summary}
                </p>
              </div>
            </>
          )}

          <Separator />
          <div>
            <SectionTitle>Skills</SectionTitle>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {resumeData.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          {resumeData.experience.length > 0 && (
            <>
              <Separator />
              <div>
                <SectionTitle>Experience</SectionTitle>
                <div className="mt-3 space-y-4">
                  {resumeData.experience.map((exp, i) => (
                    <div key={i}>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold">{exp.title}</p>
                          <p className="text-sm text-zinc-500">{exp.company}</p>
                        </div>
                        <p className="shrink-0 text-xs text-zinc-400">
                          {exp.startDate} - {exp.endDate}
                        </p>
                      </div>
                      {exp.highlights.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                              <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {resumeData.projects.length > 0 && (
            <>
              <Separator />
              <div>
                <SectionTitle>Projects</SectionTitle>
                <div className="mt-3 space-y-3">
                  {resumeData.projects.map((project, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{project.name}</p>
                        {project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-[10px]">{tech}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {resumeData.education.length > 0 && (
            <>
              <Separator />
              <div>
                <SectionTitle>Education</SectionTitle>
                <div className="mt-3 space-y-2">
                  {resumeData.education.map((edu, i) => (
                    <div key={i} className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold">{edu.institution}</p>
                        <p className="text-sm text-zinc-500">{edu.degree} in {edu.field}</p>
                      </div>
                      <div className="shrink-0 text-right text-xs text-zinc-400">
                        <p>{edu.startDate} - {edu.endDate}</p>
                        {edu.gpa && <p>GPA: {edu.gpa}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {resumeData.certifications.length > 0 && (
            <>
              <Separator />
              <div>
                <SectionTitle>Certifications</SectionTitle>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {resumeData.certifications.map((cert) => (
                    <Badge key={cert} variant="outline">{cert}</Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
