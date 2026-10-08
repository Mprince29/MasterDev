import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { hero } from "@/data/portfolio";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-IP rate limit. Resets on cold start — acceptable for a
// personal site; the goal is deterring casual abuse, not hard enforcement.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(req: NextRequest): Promise<Response> {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many messages sent — please try again in a minute." }, { status: 429 });
  }

  let body: { name?: string; email?: string; message?: string; source_page?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const sourcePage = (body.source_page ?? "/").trim().slice(0, 300);

  if (!name || name.length > 120 || !email || email.length > 254 || !EMAIL_RE.test(email) || !message || message.length > 5000) {
    return Response.json({ error: "Please fill in all fields correctly." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpAppPassword = process.env.SMTP_APP_PASSWORD;
  if (!smtpUser || !smtpAppPassword) {
    return Response.json({ error: "The contact form isn't configured yet — please email directly instead." }, { status: 503 });
  }

  const notifyEmail = process.env.NOTIFY_EMAIL || hero.email;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpAppPassword },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${smtpUser}>`,
      to: notifyEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\nPage: ${sourcePage}\n\n${message}`,
    });
  } catch {
    return Response.json({ error: "Failed to send message." }, { status: 502 });
  }

  return Response.json({
    id: crypto.randomUUID(),
    name,
    email,
    created_at: new Date().toISOString(),
  });
}
