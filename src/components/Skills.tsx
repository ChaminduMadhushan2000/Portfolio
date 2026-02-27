"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    emoji: "\u{1F4BB}",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    emoji: "\u{2699}\u{FE0F}",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Spring Boot", "FastAPI"],
  },
  {
    title: "Cloud Platforms",
    emoji: "\u{2601}\u{FE0F}",
    skills: ["AWS EC2", "AWS S3", "AWS ECR", "AWS ECS", "AWS Fargate", "AWS App Runner", "AWS VPC", "Azure"],
  },
  {
    title: "Containers & Orchestration",
    emoji: "\u{1F433}",
    skills: ["Docker", "Kubernetes", "AWS ECS", "AWS Fargate"],
  },
  {
    title: "CI/CD & IaC",
    emoji: "\u{1F680}",
    skills: ["GitHub Actions", "Jenkins", "Terraform", "MLflow", "DVC"],
  },
  {
    title: "Databases & Tools",
    emoji: "\u{1F5C4}\u{FE0F}",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Linux", "Bash", "Nginx", "Postman", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          subtitle="A curated toolkit spanning full-stack development, cloud platforms, and DevOps automation."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: catIdx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card-strong group rounded-3xl p-7 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl transition-all duration-300 group-hover:scale-110">
                  {category.emoji}
                </div>
                <h3 className="text-sm font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + skillIdx * 0.03,
                    }}
                    className="rounded-full border border-border-strong bg-white/60 px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
