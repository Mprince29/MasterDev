import "./consoleErrorFilter";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts with custom CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for SEO and browser title
export const metadata: Metadata = {
  title: "Prince | Developer Portfolio",
  description: "The interactive portfolio of Prince – Developer & Product Thinker.",
};

// Root layout applied across all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative overflow-x-hidden`}
      >
        {/* Background radial glow effect */}
        <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-blue-500 blur-[200px] opacity-20"></div>
        </div>

        {/* Page wrapper */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          {/* Optional footer or nav could go here */}
        </div>
      </body>
    </html>
  );
}
