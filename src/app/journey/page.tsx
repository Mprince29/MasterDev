import type { Metadata } from "next";
import JourneyPageClient from "./JourneyPageClient";

export const metadata: Metadata = {
  title: "Journey | Master Prince — AI Engineer & Full Stack Developer",
  description:
    "Master Prince's education and career timeline — from B.Tech CSE (AI) at Jamia Hamdard to building production AI systems at M37 Labs, Delhi.",
  alternates: { canonical: "/journey" },
  openGraph: {
    title: "Journey | Master Prince",
    description: "Master Prince's education and career timeline in AI and full-stack development.",
    url: "/journey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey | Master Prince",
    description: "Master Prince's education and career timeline in AI and full-stack development.",
  },
};

export default function JourneyPage() {
  return <JourneyPageClient />;
}
