import { Code, Brain } from "lucide-react";
import { modernColors } from "./education";

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: string;
  period: string;
  features: string[];
  color: string;
  icon: any;
  status: "Completed" | "Ongoing";
  complexity: "Beginner" | "Intermediate" | "Advanced";
}

export const realProjects: ProjectData[] = [
  {
    id: 1,
    title: "MasterSound E-Commerce Platform",
    subtitle: "Full‑Stack E‑Commerce Platform",
    description:
      "Full-featured e-commerce website built with React, featuring product listings, shopping cart system, and seamless checkout process. Includes comprehensive user management and order processing capabilities.",
    longDescription:
      "Developed a React-based E-Commerce website with product listings, content routing for seamless navigation between sections, and a functional shopping cart system. Implemented a comprehensive checkout process allowing users to review their cart, enter shipping details, and complete purchases.",
    image: "/mastersound.webp",
    technologies: [
      "React/Vite",
      "TypeScript",
      "HTML",
      "Tailwind CSS",
      "MySQL",
      "Node.js",
      "Express",
      "AWS S3",
      "CloudFront",
    ],
    github: process.env.NEXT_PUBLIC_GITHUB + "/mastersound",
    live: "https://anritvox.com/",
    category: "Full Stack",
    period: "June 2024 - July 2024",
    features: [
      "Product Catalog Management",
      "E-warranty Management",
      "User Authentication",
      "Order Processing",
      "Responsive Design",
    ],
    color: modernColors.danger,
    icon: Code,
    status: "Completed",
    complexity: "Intermediate",
  },
  {
    id: 2,
    title: "SmartPaisa",
    subtitle: "Smart Automated Transaction Management",
    description:
      "A comprehensive Flutter application that automatically processes SMS transactions, categorizes expenses, and provides intelligent financial insights with beautiful, responsive UI design.",
    longDescription:
      "Designed and built a secure, offline-first personal finance application that automatically parses bank SMS for transaction data, intelligently categorizes expenses using AI with manual overrides, and delivers real-time multi-account analytics. Features include responsive UI with theme detection, interactive trend visualizations, and exportable reports, all optimized for performance and user experience.",
    image: "/smartpaisa.webp",
    technologies: [
      "Flutter",
      "Dart",
      "Native Android",
      "Android Studio",
      "SQLite",
    ],
    github: process.env.NEXT_PUBLIC_GITHUB + "/SmartPaisa",
    category: "Android Development",
    period: "July 2024 - Present",
    features: [
      "Auto Transaction Detection",
      "Smart Categorization",
      "Automatic SMS Processing",
      "Real-time Synchronization",
      "Offline-First Architecture",
      "Advanced Analytics & Reports",
    ],
    color: modernColors.warning,
    icon: Code,
    status: "Ongoing",
    complexity: "Intermediate",
  },
  {
    id: 3,
    title: "Beyond The Boundary",
    subtitle: "Cricket Player Selection Using Performance Analytics",
    description:
      "Advanced machine learning project that optimizes cricket player selection using comprehensive performance analytics. Features data collection, preprocessing, machine learning models, and real-time recommendations with an intuitive user interface.",
    longDescription:
      "Leveraged advanced algorithms to identify patterns in historical player performance data, enabling the model to make precise predictions and recommendations for player substitutions during cricket matches. Implemented a user-friendly interface that enables team coaches or managers to input current player performance details and get opposing team information during cricket match.",
    image: "/BB.png",
    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "AWS",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
    ],
    github: process.env.NEXT_PUBLIC_GITHUB + "/BeyondTheBoundary",
    category: "Machine Learning",
    period: "Nov 2023 - April 2024",
    features: [
      "Data Collection & Preprocessing",
      "ML Model Development",
      "Real-time Recommendations",
      "User-friendly Interface",
      "AWS EC2 Deployment",
    ],
    color: modernColors.success,
    icon: Brain,
    status: "Completed",
    complexity: "Advanced",
  },
  {
    id: 4,
    title: process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio Website",
    subtitle: "Personal Portfolio with 3D elements",
    description:
      "My personal portfolio website to showcase my skills and projects, built with Next.js and Framer Motion for smooth animations.",
    longDescription:
      "This portfolio is a testament to modern web development practices, featuring a clean design, responsive layout, and interactive 3D elements to create a memorable user experience. It's deployed on Vercel for optimal performance and availability.",
    image: "/portfolio.webp",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    github: process.env.NEXT_PUBLIC_GITHUB + "/portfolio-v2",
    live: "https://pranav26.netlify.app/",
    category: "Web Development",
    period: "July 2024 - Present",
    features: [
      "3D Carousel",
      "Smooth Animations",
      "Responsive Design",
      "Contact Form",
    ],
    color: modernColors.secondary,
    icon: Code,
    status: "Completed",
    complexity: "Intermediate",
  },
];
