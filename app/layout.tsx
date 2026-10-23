import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Keep the global stylesheet loaded while avoiding TypeScript module resolution
// errors when CSS declarations are unavailable in the project configuration.
require("./globals.css");

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://pranav26.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pranav Kumar | Software Engineer",
  description:
    "Software Engineer building enterprise applications, API-driven products, cloud solutions, and applied machine learning systems with C#, .NET Core, Python, and AWS.",
  keywords: [
    "Pranav Kumar",
    "Software Engineer",
    "Software Development",
    "Enterprise Application Development",
    "C#",
    ".NET Core",
    "Python",
    "RESTful APIs",
    "SQL",
    "PostgreSQL",
    "FastAPI",
    "Docker",
    "AWS",
    "Machine Learning",
    "Cloud Technologies",
  ],
  authors: [{ name: "Pranav Kumar", url: SITE_URL }],
  creator: "Pranav Kumar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Pranav Kumar | Software Engineer",
    description:
      "Software Engineer delivering reliable enterprise software, scalable APIs, cloud deployments, and ML-powered applications.",
    siteName: "Pranav Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Kumar | Software Engineer",
    description:
      "Software Engineer across enterprise systems, APIs, cloud, and applied machine learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
