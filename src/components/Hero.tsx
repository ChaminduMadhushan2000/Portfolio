"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28"
    >
      {/* Mesh gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-400/20 blur-[150px]" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-pink-400/20 blur-[150px]" />
        <div className="absolute left-1/2 top-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-300/15 blur-[120px]" />
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 w-full max-w-4xl mx-4 md:mx-auto px-8 py-14 text-center sm:px-14"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold leading-tight tracking-tight text-text-primary dark:text-white sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Chamindu
          </span>
          <br />
          <span className="text-text-secondary dark:text-white">Madhushan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary dark:text-gray-200 sm:text-lg"
        >
          Software Engineer &middot; AWS Certified Cloud Practitioner &middot;
          MERN Stack Developer &amp; DevOps Enthusiast
        </motion.p>

        {/* Hint card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mx-auto mt-8 max-w-lg rounded-2xl border border-dashed border-border-strong bg-white/30 dark:bg-slate-700/30 dark:border-slate-500/25 px-6 py-4 backdrop-blur-sm"
        >
          <p className="text-xs leading-relaxed text-text-secondary dark:text-gray-200 sm:text-sm">
            &#x1F393; BICT (Hons) undergrad at University of Sri Jayewardenepura &middot;
            Building scalable cloud-native apps with Docker, Kubernetes &amp; Terraform
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium shadow-lg shadow-primary/20"
          >
            View My Work
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/50 dark:bg-slate-700/50 dark:border-gray-600 px-8 py-3.5 text-sm font-medium text-text-primary dark:text-white backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/80 dark:hover:bg-slate-600/60 dark:hover:border-indigo-400/40 hover:shadow-lg"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/50 dark:bg-slate-700/50 dark:border-gray-600 px-8 py-3.5 text-sm font-medium text-text-primary dark:text-white backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/80 dark:hover:bg-slate-600/60 dark:hover:border-indigo-400/40 hover:shadow-lg"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/ChaminduMadhushan2000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text-secondary transition-all hover:border-primary/40 hover:text-primary hover:bg-primary/5 dark:border-slate-500/30 dark:text-slate-400 dark:hover:text-indigo-300 dark:hover:border-indigo-400/40"
            aria-label="GitHub"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/chamindu-madhushan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text-secondary transition-all hover:border-primary/40 hover:text-primary hover:bg-primary/5 dark:border-slate-500/30 dark:text-slate-400 dark:hover:text-indigo-300 dark:hover:border-indigo-400/40"
            aria-label="LinkedIn"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
