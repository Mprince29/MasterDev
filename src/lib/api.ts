const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export function isApiConfigured(): boolean {
  return API_URL.length > 0;
}

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  if (!API_URL) {
    throw new ApiError(0, "API URL is not configured");
  }
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new ApiError(res.status, detail || res.statusText);
  }
  return res;
}

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
  const res = await apiFetch("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return res.json();
}

// ---------- Projects ----------

export interface ApiProject {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  highlight: string;
  github: string | null;
  video_url: string | null;
  image: string | null;
  live_url: string | null;
  featured: boolean;
  is_legacy: boolean;
  is_case_study: boolean;
  sort_order: number;
}

export async function fetchProjects(): Promise<ApiProject[]> {
  const res = await apiFetch("/projects");
  return res.json();
}

// ---------- Events ----------

export interface EventPayload {
  event_type: string;
  page: string;
  target_id?: string;
}

export function trackEvent(payload: EventPayload): void {
  if (!API_URL) return;
  fetch(`${API_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // best-effort telemetry, ignore failures
  });
}

// ---------- AI demo (streaming) ----------

export async function* askStream(question: string): AsyncGenerator<string> {
  if (!API_URL) {
    throw new ApiError(0, "API URL is not configured");
  }
  const res = await fetch(`${API_URL}/ai-demo/ask/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  if (!res.ok || !res.body) {
    const detail = await res.text().catch(() => "");
    throw new ApiError(res.status, detail || res.statusText);
  }
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    yield decoder.decode(value, { stream: true });
  }
}

// ---------- Activity ----------

export interface ActivityDay {
  date: string;
  count: number;
}

export interface ActivityResponse {
  days: ActivityDay[];
  total: number;
}

export async function fetchActivity(source: "github" | "leetcode"): Promise<ActivityResponse> {
  const res = await apiFetch(`/activity/${source}`);
  return res.json();
}
