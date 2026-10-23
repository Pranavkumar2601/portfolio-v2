import { Code, Cpu, Users } from "lucide-react";
import { modernColors } from "./education";

export interface ExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  color: string;
  icon: any;
}

export const experienceData: ExperienceData[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "LTM",
    location: "Bengaluru, India",
    duration: "Dec 2024 - Oct 2026",
    description: `• Contributed to the development and maintenance of enterprise-scale healthcare software for a global medical technology client, with a focus on application reliability and system quality.

• Analyzed requirements, broke down assigned stories into actionable tasks, and implemented feature enhancements aligned with business and technical requirements.
• Investigated complex application issues, performed root-cause analysis, and implemented fixes to improve system stability, reliability, and maintainability.
• Took ownership of assigned stories and defects throughout the development lifecycle, from requirements analysis and implementation through validation and resolution.
• Collaborated with cross-functional teams to troubleshoot issues, validate solutions, perform regression testing, and support successful software releases.
• Contributed to code reviews, refactoring, technical problem-solving, and continuous improvement while following engineering best practices and Agile development processes.
• Worked across .NET Core, Angular, RxJS, C#, and MS SQL Server to deliver reliable application features and resolve production issues.`,
    technologies: [
      ".NET Core",
      "Git",
      "Jfrog Artifactory",
      "Jenkins",
      "SonarQube",
      "Postman",
      "Angular",
      "C#",
      "MS SQL Server",
      "Agile",
    ],
    color: modernColors.accent,
    icon: Code,
  },
  {
    id: 2,
    title: "Remote AI Model Training Expert",
    company: "Outlier.ai",
    location: "Remote",
    duration: "Oct 2024 - Dec 2024",
    description:
      "Collaborated remotely with an AI solutions provider to enhance model performance and accuracy. Responsibilities included curating and labeling datasets, designing evaluation criteria, conducting systematic error analysis, and providing actionable feedback to data scientists to refine training pipelines.",
    technologies: [
      "AI/ML",
      "Data Curation",
      "Data Labeling",
      "Error Analysis",
      "Python",
      "Feedback Loop",
    ],
    color: modernColors.secondary,
    icon: Cpu,
  },
  {
    id: 3,
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    duration: "Jan 2025 - July 2025",
    description:
      "Partnered with diverse clients to architect and deliver custom web solutions—ranging from e‑commerce platforms to interactive dashboards—using React or Angular on the front end, Node.js/Express with MySQL on the back end, and AWS (S3, CloudFront) for secure asset delivery. Implemented JWT‑based authentication, optimized image pipelines via presigned URLs, and maintained clear documentation and on‑time delivery.",
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "Express",
      "MySQL",
      "AWS S3",
      "JWT",
      "Full-Stack",
    ],
    color: modernColors.success,
    icon: Users,
  },
];
