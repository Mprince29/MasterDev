// ---------- Contact ----------

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  source_page?: string;
}

export interface ContactResult {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    throw new Error(detail?.error || "Something went wrong sending your message.");
  }
  return res.json();
}

// ---------- Chat (streaming) ----------

export async function* askStream(question: string): AsyncGenerator<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  if (!res.ok || !res.body) {
    const detail = await res.text().catch(() => "");
    throw new Error(detail || "Something went wrong.");
  }
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    yield decoder.decode(value, { stream: true });
  }
}
