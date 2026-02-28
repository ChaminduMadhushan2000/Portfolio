"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 text-center"
    >
      <span className="mb-4 inline-block rounded-full border border-border-strong dark:border-purple-400/30 bg-primary/5 dark:bg-purple-900/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary dark:text-purple-300">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-text-primary dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary dark:text-gray-200 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
