"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          subtitle="Have an opportunity, idea, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-text-primary dark:text-white">
              Get in Touch
            </h3>
            <p className="mt-4 text-base leading-relaxed text-text-secondary dark:text-gray-200">
              I&apos;m currently open to software engineering and cloud/DevOps
              roles. Whether you have an exciting project or a full-time
              opportunity, feel free to reach out.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  label: "Email",
                  value: "chamindumadhushan2000@gmail.com",
                  emoji: "\u{1F4E7}",
                },
                {
                  label: "Phone",
                  value: "+94 76 372 8648",
                  emoji: "\u{1F4F1}",
                },
                {
                  label: "Location",
                  value: "Homagama, Colombo, Sri Lanka",
                  emoji: "\u{1F4CD}",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
                    {item.emoji}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary dark:text-gray-200">{item.label}</p>
                    <p className="text-sm font-medium text-text-primary dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/ChaminduMadhushan2000",
                  svg: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/chamindu-madhushan/",
                  svg: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong dark:border-slate-600/25 text-text-secondary dark:text-gray-200 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-strong rounded-3xl p-8 sm:p-10"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border-strong bg-white/50 dark:bg-slate-800/60 dark:border-slate-600/25 px-4 py-3 text-sm text-text-primary dark:text-white outline-none transition-all duration-200 placeholder:text-text-secondary/50 dark:placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border-strong bg-white/50 dark:bg-slate-800/60 dark:border-slate-600/25 px-4 py-3 text-sm text-text-primary dark:text-white outline-none transition-all duration-200 placeholder:text-text-secondary/50 dark:placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-border-strong bg-white/50 dark:bg-slate-800/60 dark:border-slate-600/25 px-4 py-3 text-sm text-text-primary dark:text-white outline-none transition-all duration-200 placeholder:text-text-secondary/50 dark:placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gradient w-full rounded-xl px-6 py-3.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent! \u{2713}"
                  : status === "error"
                  ? "Failed \u{2014} Try Again"
                  : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
