import type { Metadata, Viewport } from "next"
import { Inter, Newsreader } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", preload: true })
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

export const metadata: Metadata = {
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
  authors: [{ name: "Master Prince" }],
  creator: "Master Prince",
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
    url: "https://master-dev-pi.vercel.app",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth bg-[var(--bg)] ${inter.variable} ${newsreader.variable}`}>
      <body className="antialiased overflow-x-hidden min-h-screen text-[var(--text)] font-sans">
        <main className="min-h-screen flex flex-col items-center justify-center pt-12 pb-0 px-6 sm:px-12 md:px-24">
          <div className="w-full max-w-3xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
