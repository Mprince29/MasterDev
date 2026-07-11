import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

// Placeholder page with no real content yet — noindex until posts exist,
// so Google doesn't index a thin "coming soon" page under this URL.
export const metadata: Metadata = {
  title: "Blog | Master Prince",
  description: "Writing on AI engineering and full-stack development — coming soon.",
  alternates: { canonical: "/blog" },
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
