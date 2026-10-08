"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      await submitContact({
        name,
        email,
        message,
        source_page: typeof window !== "undefined" ? window.location.pathname : "/",
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your message. Please try again or email me directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="soft-card p-6 flex items-start gap-3">
        <CheckCircle2 className="text-[var(--accent-dark)] shrink-0 mt-0.5" size={20} />
        <div>
          <p className="text-sm font-semibold text-[var(--text)]">Message sent</p>
          <p className="text-sm text-[var(--text-soft)] mt-1">
            Thanks for reaching out — I&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="soft-card p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[var(--text)] mb-1.5">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[var(--text)] mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[var(--text)] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-red-600">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors text-sm font-semibold shadow-[0_10px_30px_rgba(151,63,47,0.14)] disabled:opacity-60"
      >
        <Send size={16} />
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
