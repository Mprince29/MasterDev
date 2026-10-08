"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { askStream } from "@/lib/api";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

function AssistantMessage({ text }: { text: string }) {
  const normalized = text.replace(/\r\n/g, "\n").trim();
  const sections = normalized.split(/\s*•\s*/);

  if (sections.length === 1) {
    return <span className="whitespace-pre-wrap break-words">{normalized}</span>;
  }

  const intro = sections[0].trim();
  const bullets = sections.slice(1).map((bullet) => bullet.trim()).filter(Boolean);

  return (
    <div className="space-y-2 break-words">
      {intro && <p>{intro}</p>}
      <ul className="list-disc space-y-1.5 pl-4 marker:text-[var(--accent)]">
        {bullets.map((bullet, index) => <li key={`${bullet}-${index}`}>{bullet}</li>)}
      </ul>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q || streaming) return;
    setQuestion("");
    setMessages((prev) => [...prev, { role: "user", text: q }, { role: "assistant", text: "" }]);
    setStreaming(true);
    try {
      for await (const chunk of askStream(q)) {
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "assistant", text: next[next.length - 1].text + chunk };
          return next;
        });
      }
    } catch (err) {
      const detail = err instanceof Error ? err.message : "Something went wrong.";
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { role: "assistant", text: `Sorry, I couldn't answer that. ${detail}` };
        return next;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-4 h-[min(30rem,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[24rem] bg-[var(--surface)] border border-[var(--line)] rounded-3xl shadow-[0_20px_40px_-15px_rgba(55,42,31,0.14)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)]/50 bg-[var(--surface)]/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-semibold text-[var(--text)] tracking-tight">AI Assistant</p>
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--line)]/50 transition-colors">
              <X size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center mt-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-soft)] border border-[var(--line)] flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="text-[var(--text-soft)]" size={20} />
                </div>
                <p className="text-sm text-[var(--text-soft)] px-4 leading-relaxed">
                  Ask me anything about Prince&apos;s projects, skills, or experience.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-[13px] rounded-2xl px-4 py-2.5 max-w-[88%] leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-[var(--accent)] text-white shadow-sm rounded-br-sm"
                    : "bg-[var(--bg-soft)] text-[var(--text)] border border-[var(--line)]/50 rounded-bl-sm"
                }`}
              >
                {m.text ? (m.role === "assistant" ? <AssistantMessage text={m.text} /> : <span className="whitespace-pre-wrap break-words">{m.text}</span>) : (streaming && i === messages.length - 1 ? (
                  <span className="flex items-center gap-1 h-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                ) : "")}
              </div>
            ))}
          </div>

          <form onSubmit={handleAsk} className="flex items-center gap-2 p-4 bg-[var(--surface)]/50 border-t border-[var(--line)]/50">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your message..."
              maxLength={500}
              className="flex-1 px-4 py-2.5 rounded-full border border-[var(--line)] bg-[var(--bg)] text-[13px] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--text)]/20 transition-shadow placeholder:text-[var(--text-muted)]"
            />
            <button
              type="submit"
              disabled={streaming || !question.trim()}
              className="p-2.5 rounded-full bg-[var(--accent)] text-white disabled:opacity-50 hover:scale-105 transition-transform active:scale-95"
            >
              <Send size={16} className={question.trim() ? "translate-x-0.5 -translate-y-0.5 transition-transform" : ""} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative w-14 h-14 rounded-full bg-[var(--accent)] text-white shadow-[0_8px_30px_rgba(55,42,31,0.22)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Open chat"
      >
        <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 group-hover:animate-ping" />
        {open ? <X size={22} className="relative z-10" /> : <MessageCircle size={22} className="relative z-10" />}
      </button>
    </div>
  );
}
