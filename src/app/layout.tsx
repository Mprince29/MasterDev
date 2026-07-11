import type { Metadata, Viewport } from "next"
import { Newsreader } from "next/font/google"
import { ChatWidget } from "@/components/ChatWidget"
import { Navbar } from "@/components/Navbar"
import "./globals.css"


const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  themeColor: "#F3F1EC",
  width: "device-width",
  initialScale: 1,
}

const SITE_URL = "https://master-dev-pi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Master Prince | Full Stack Developer & Applied AI Engineer",
  description:
    "Master Prince builds fast web apps, backend systems, and practical AI workflows for teams that need useful software without unnecessary complexity.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "AI Developer",
    "Applied AI Engineer",
    "Software Developer",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Freelance Developer Delhi",
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
    title: "Master Prince | Full Stack Developer & Applied AI Engineer",
    description:
      "Fast web apps, backend systems, and practical AI workflows built with clarity.",
    url: SITE_URL,
    siteName: "Prince Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Prince | Full Stack Developer & Applied AI Engineer",
    description: "Building practical AI systems and full-stack web applications.",
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Master Prince",
  url: SITE_URL,
  jobTitle: "Full Stack Developer & Applied AI Engineer",
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
    <html lang="en" className={`scroll-smooth bg-[var(--bg)] ${newsreader.variable}`} data-scroll-behavior="smooth">
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
