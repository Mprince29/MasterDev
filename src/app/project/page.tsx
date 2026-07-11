import type { Metadata } from "next";
import ProjectPageClient from "./ProjectPageClient";

export const metadata: Metadata = {
  title: "Projects | Master Prince — AI Engineer & Full Stack Developer",
  description:
    "AI systems, recruitment platforms, and full-stack products built by Master Prince — including multi-agent workflow automation, NL-to-SQL search, and fine-tuned local LLMs.",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "Projects | Master Prince",
    description:
      "AI systems, recruitment platforms, and full-stack products built by Master Prince.",
    url: "/project",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Master Prince",
    description: "AI systems, recruitment platforms, and full-stack products built by Master Prince.",
  },
};

export default function ProjectPage() {
  return <ProjectPageClient />;
}
