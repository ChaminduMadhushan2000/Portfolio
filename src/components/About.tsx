"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "BICT (Hons) in Software Technology",
    school: "University of Sri Jayewardenepura — Faculty of Technology",
    period: "July 2023 — Present",
    emoji: "\u{1F393}",
  },
  {
    degree: "G.C.E. Advanced Level — Engineering Technology",
    school: "3A Passes · Island Rank: 24",
    period: "August 2021",
    emoji: "\u{1F3C6}",
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner (CLF-C02)", org: "Amazon Web Services" },
  { name: "LFS101: Introduction to Linux", org: "Linux Foundation" },
  { name: "Python 3: Beginner to Advanced", org: "Udemy" },
  { name: "Fundamentals of MLOps", org: "KodeKloud" },
];

export default function About() {
  return (
    <section id="about" className="section-tinted relative py-32 px-6">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Engineer. Builder. Problem Solver."
          subtitle="Bridging elegant software design with robust cloud infrastructure."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Summary + Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="glass-card-strong rounded-3xl p-8 space-y-5 text-base leading-relaxed text-text-secondary dark:text-gray-200 sm:text-lg">
              <p>
                I&apos;m <span className="font-semibold text-text-primary dark:text-white">Chamindu Madhushan</span>, a
                4th-year BICT (Hons) undergraduate with hands-on experience in full-stack web
                development using the <strong className="text-text-primary dark:text-white">MERN stack</strong>. As an{" "}
                <strong className="text-text-primary dark:text-white">AWS Certified Cloud Practitioner</strong>, I bring
                a strong foundation in software engineering, RESTful API design, and CI/CD automation.
              </p>
              <p>
                My experience spans Docker, Kubernetes, Terraform, and cloud platforms. I&apos;m
                passionate about building scalable, cloud-native applications with Java, Spring Boot,
                and modern DevOps practices that ship code reliably and fast.
              </p>
            </div>

            {/* Education */}
            <div className="glass-card-strong rounded-3xl p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-200">
                Education
              </h3>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="mt-0.5 text-xl">{edu.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-text-primary dark:text-white">{edu.degree}</p>
                      <p className="mt-0.5 text-xs text-text-secondary dark:text-gray-200">{edu.school}</p>
                      <p className="mt-0.5 text-xs font-medium text-primary/70">{edu.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Certifications */}
            <div className="glass-card-strong rounded-3xl p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-secondary dark:text-gray-200">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-border-strong hover:bg-white/30 dark:hover:bg-slate-700/30 dark:hover:border-slate-500/20"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs">
                      &#x2705;
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary dark:text-white group-hover:text-primary transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-xs text-text-secondary dark:text-gray-200">{cert.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
