import type { Metadata, Viewport } from "next"
import { ChatWidget } from "@/components/ChatWidget"
import { Navbar } from "@/components/Navbar"
import "./globals.css"

export const viewport: Viewport = {
  themeColor: "#f5f1ea",
  width: "device-width",
  initialScale: 1,
}

const SITE_URL = "https://master-dev-pi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Master Prince | Lead Engineer",
  description:
    "Master Prince is a Lead Engineer at Sujho AI building production AI systems across LLM agents, RAG, document AI, and reliable backend infrastructure.",
  keywords: [
    "Lead Engineer",
    "LLM Agents",
    "AI Developer",
    "Document AI",
    "Software Developer",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Lead Engineer Delhi NCR",
  ],
  authors: [{ name: "Master Prince", url: SITE_URL }],
  creator: "Master Prince",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Master Prince | Lead Engineer",
    description:
      "Production AI systems, LLM agents, RAG pipelines, and reliable backend infrastructure built end-to-end.",
    url: SITE_URL,
    siteName: "Prince Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Prince | Lead Engineer",
    description: "Building production AI systems across LLM agents, RAG, document AI, and local inference.",
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Master Prince",
  url: SITE_URL,
  jobTitle: "Lead Engineer",
  address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  sameAs: [
    "https://github.com/Mprince29",
    "https://www.linkedin.com/in/master-prince-83609b257/",
    "https://x.com/Mprince_28",
  ],
  knowsAbout: [
    "Full Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Next.js",
    "FastAPI",
    "Python",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-[var(--bg)]" data-scroll-behavior="smooth">
      <body className="antialiased overflow-x-hidden min-h-screen text-[var(--text)] font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen w-full flex flex-col pt-24 pb-0 px-4 sm:px-8 md:px-12">
          {children}
        </main>
        <ChatWidget />
      </body>
    </html>
  )
}
