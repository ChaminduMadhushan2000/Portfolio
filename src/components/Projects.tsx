"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Cloud-Native Microservices App",
    description:
      "Built a containerized microservices architecture with MERN stack, Nginx reverse proxy, Terraform IaC for AWS provisioning, and fully automated CI/CD pipelines with GitHub Actions for zero-downtime deployments.",
    tags: ["AWS EC2", "Terraform", "Docker", "Nginx", "GitHub Actions", "React", "Node.js"],
    gradient: "from-indigo-500/10 to-cyan-500/10",
    emoji: "\u{2601}\u{FE0F}",
    github: "https://github.com/ChaminduMadhushan2000/Microservices-Architecture_Weather-app-",
  },
  {
    title: "End-to-End MLOps Pipeline on AWS",
    description:
      "Fully automated MLOps pipeline for wine quality prediction featuring FastAPI model serving, MLflow experiment tracking, DVC data versioning, Docker containerization, and CI/CT/CD with GitHub Actions on AWS.",
    tags: ["Python", "FastAPI", "Docker", "AWS S3", "MLflow", "DVC", "GitHub Actions"],
    gradient: "from-purple-500/10 to-pink-500/10",
    emoji: "\u{1F9EA}",
    github: "https://github.com/ChaminduMadhushan2000/Wine-Quality-Estimater_MLOps",
  },
  {
    title: "Containerized E-Commerce Platform",
    description:
      "Developed a full-stack e-commerce application containerized with Docker and deployed on AWS. Automated build, test, and deployment workflows using GitHub Actions with ECR image registry.",
    tags: ["Docker", "GitHub Actions", "AWS EC2", "AWS ECR", "AWS VPC"],
    gradient: "from-amber-500/10 to-rose-500/10",
    emoji: "\u{1F6D2}",
    github: "https://github.com/ChaminduMadhushan2000/nova-commerce",
  },
  {
    title: "ToDo App — AWS App Runner Serverless",
    description:
      "A clean and responsive task management app deployed serverlessly on AWS App Runner. Docker images pushed to ECR and auto-deployed via GitHub Actions CI/CD pipelines for instant scaling.",
    tags: ["JavaScript", "Docker", "GitHub Actions", "AWS App Runner", "AWS ECR", "Serverless"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    emoji: "\u{1F680}",
    github: "https://github.com/ChaminduMadhushan2000/ToDo_App",
  },
  {
    title: "Smart Travel Scout — AI Travel Recommendations",
    description:
      "Full-stack Next.js app with Google Gemini API integration that intelligently matches user queries to travel packages. Uses Zod validation to prevent AI hallucinations and ensure recommendations stay grounded to inventory. Engineered constraint-based matching for price, tags, and location with graceful empty states.",
    tags: ["Next.js", "Google Gemini API", "Zod", "TypeScript", "Vercel", "AI"],
    gradient: "from-sky-500/10 to-indigo-500/10",
    emoji: "\u{2708}\u{FE0F}",
    github: "https://github.com/ChaminduMadhushan2000/smart_travel_scout",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          subtitle="Cloud-native applications, MLOps pipelines, and DevOps automation showcasing real-world engineering."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass-card-strong group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                {/* Emoji Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {project.emoji}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-strong bg-white/50 px-3 py-1 text-[11px] font-medium text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 hover:underline"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
