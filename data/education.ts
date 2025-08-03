import { GraduationCap } from "lucide-react";

export interface EducationData {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  grade: string;
  specialization: string;
  achievements: string[];
  coursework: string[];
  projects: string[];
  color: string;
  icon: any;
}

export interface CertificationData {
  id: number;
  title: string;
  issuer: string;
  date: string;
  status: "Completed" | "In Progress";
  color: string;
}

export const modernColors = {
  background: "#0A0A0F",
  surface: "#1A1A2E",
  primary: "#16213E",
  accent: "#00D4FF",
  secondary: "#8B5CF6",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  text: "#E2E8F0",
  muted: "#64748B",
};

export const educationData: EducationData[] = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "PES University",
    location: "Bangalore, India",
    duration: "2022 - 2024",
    gpa: "7.79/10.0",
    grade: "First Class with Distinction",
    specialization: "Software Engineering & Machine Learning",
    achievements: [
      "Distinction Award for Academic Excellence",
      "Published Research in International Journal",
      "Active participation in coding competitions",
    ],
    coursework: [
      "Advanced Data Structures & Algorithms",
      "Machine Learning & AI",
      "Database Management Systems",
      "Software Engineering",
      "Web Technologies",
      "Cloud Computing",
      "Research Methodology",
    ],
    projects: [
      "Beyond The Boundary - Cricket Analytics ML System",
      "E-Commerce Platform using Angular",
    ],
    color: modernColors.accent,
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Previous Institution",
    location: "India",
    duration: "2019 - 2022",
    gpa: "7.0/10.0",
    grade: "First Class",
    specialization: "Computer Science & Programming",
    achievements: [
      "Consistent Academic Performance",
      "Programming Competition Participant",
      "Volunteer for Tech Events",
    ],
    coursework: [
      "Programming Fundamentals (C, Java, Python)",
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Development",
    ],
    projects: [
      "Library Management System",
      "Student Information System",
      "Basic E-commerce Website",
    ],
    color: modernColors.success,
    icon: GraduationCap,
  },
];

export const certifications: CertificationData[] = [
  {
    id: 1,
    title: "Certificate of Paper Publication",
    issuer: "SPRINGER",
    date: "2024",
    status: "In Progress",
    color: modernColors.warning,
  },
  {
    id: 2,
    title: "Selenium WebDriver with Python",
    issuer: "SCALAR",
    date: "2024",
    status: "Completed",
    color: modernColors.secondary,
  },
  {
    id: 3,
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2021",
    status: "Completed",
    color: modernColors.accent,
  },
];
