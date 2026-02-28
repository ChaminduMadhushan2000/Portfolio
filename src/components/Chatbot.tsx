"use client";

import { useState, useRef, useCallback, FormEvent, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Chamindu's AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, []);

  const sendMessage = useCallback(
    async (userInput: string) => {
      const trimmed = userInput.trim();
      if (!trimmed || loading) return;

      const userMsg: Message = { role: "user", content: trimmed };
      const updated = [...messages, userMsg];

      setMessages(updated);
      setInput("");
      setLoading(true);
      scrollToBottom();

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updated.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to get response");
        }

        const data = await res.json();
        const assistantMsg: Message = {
          role: "assistant",
          content: data.reply || "Sorry, I couldn't process that.",
        };

        setMessages((prev) => [...prev, assistantMsg]);
        scrollToBottom();
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Oops! Something went wrong. Please try again.",
          },
        ]);
        scrollToBottom();
      } finally {
        setLoading(false);
      }
    },
    [messages, loading, scrollToBottom]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating toggle button + persistent label */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Text bubble — always visible when chat is closed */}
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-white/50 dark:border-slate-600/30 bg-white/80 dark:bg-slate-800/90 px-4 py-2.5 shadow-lg shadow-indigo-500/10 backdrop-blur-xl"
            >
              <p className="whitespace-nowrap text-xs font-medium text-text-primary dark:text-white sm:text-sm">
                Hi, I am <span className="font-semibold text-primary">Chamindu&apos;s AI Assistant!</span>
              </p>
              {/* Tail arrow */}
              <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-white/50 dark:border-slate-600/30 bg-white/80 dark:bg-slate-800/90" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onClick={() => setOpen((o) => !o)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105 active:scale-95"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle chat"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="bot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Bot className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-3xl border border-white/40 dark:border-slate-600/25 bg-white/80 dark:bg-slate-800/95 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl sm:w-[24rem]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/40 dark:border-slate-600/20 bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm">
                &#x1F916;
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Chamindu&apos;s Assistant
                </p>
                <p className="text-[11px] text-white/70">Powered by Gemini AI</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                        : "border border-border-strong bg-white/60 dark:bg-slate-700/60 dark:border-slate-600/25 text-text-primary dark:text-gray-100"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl border border-border-strong bg-white/60 dark:bg-slate-700/60 dark:border-slate-600/25 px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-end gap-2 border-t border-white/40 dark:border-slate-600/25 bg-white/50 dark:bg-slate-800/70 px-4 py-3"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                rows={1}
                className="max-h-20 flex-1 resize-none rounded-xl border border-border-strong bg-white/60 dark:bg-slate-700/50 dark:border-slate-600/25 px-3 py-2.5 text-sm text-text-primary dark:text-white outline-none placeholder:text-text-secondary/50 dark:placeholder:text-gray-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white transition-all hover:shadow-lg disabled:opacity-40"
                aria-label="Send message"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
