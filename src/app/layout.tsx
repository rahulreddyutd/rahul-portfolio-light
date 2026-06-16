import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Reddy Puchakayala, AI Product Manager",
  description: "AI Product Manager building trustworthy AI systems for regulated industries, executive decision-making, and product strategy. Capital One, Optum, Multi-Agent Systems, AI Governance.",
  openGraph: {
    title: "Rahul Reddy Puchakayala, AI Product Manager",
    description: "Building AI systems that improve decisions, not just generate answers.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
