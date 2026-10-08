import type { Metadata } from "next";
import ProjectPageClient from "./ProjectPageClient";

export const metadata: Metadata = {
  title: "Projects | Master Prince — Lead Engineer",
  description:
    "AI systems, backend platforms, and full-stack projects built by Master Prince — including multi-agent workflows, RAG, document AI, and fine-tuned local LLMs.",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "Projects | Master Prince",
    description:
      "AI systems, backend platforms, and full-stack projects built by Master Prince.",
    url: "/project",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Master Prince",
    description: "AI systems, backend platforms, and full-stack projects built by Master Prince.",
  },
};

export default function ProjectPage() {
  return <ProjectPageClient />;
}
