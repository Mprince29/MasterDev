import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
})


export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Prince | Full Stack Developer & AI Engineer",
  description:
    "Prince is a Full Stack Developer and AI Engineer based in Delhi, building production-ready Applied AI systems, multi-agent workflows, and highly optimized web applications.",
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
    "Freelance Web Developer Delhi",
  ],
  authors: [{ name: "Prince" }],
  creator: "Prince",
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
    title: "Prince | Full Stack Developer & AI Engineer",
    description:
      "Prince is a Full Stack Developer and AI Engineer based in Delhi, building production-ready Applied AI systems, multi-agent workflows, and highly optimized web applications.",
    url: "https://master-dev-pi.vercel.app",
    siteName: "Prince Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince | Full Stack Developer & AI Engineer",
    description: "Building production-grade AI systems and full-stack web applications.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} scroll-smooth bg-[#000000]`}
    >
      <body className="bg-[rgba(0,0,0,0.85)] text-[#f8f8f2] font-mono antialiased overflow-x-hidden min-h-screen pb-16">
        {/* Global terminal grid background and base layer */}
        <div className="terminal-grid-bg" />

        <Navbar />
        <div className="pt-12"> {/* Space for Mac Title Bar */}
          {children}
        </div>
      </body>
    </html>
  )
}
