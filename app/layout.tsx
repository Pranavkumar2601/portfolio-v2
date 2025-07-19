import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Kumar - Portfolio",
  description:
    "MCA Graduate & Software Engineer specializing in Machine Learning and Full-Stack Development",
  keywords: [
    "Pranav Kumar",
    "Portfolio",
    "Software Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Pranav Kumar" }],
  creator: "Pranav Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranav26.netlify.app/",
    title: "Pranav Kumar - Portfolio",
    description:
      "MCA Graduate & Software Engineer specializing in Machine Learning and Full-Stack Development",
    siteName: "Pranav Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Kumar - Portfolio",
    description:
      "MCA Graduate & Software Engineer specializing in Machine Learning and Full-Stack Development",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
