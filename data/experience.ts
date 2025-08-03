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
    company: "Confidential",
    location: "Bengaluru, India (Remote)",
    duration: "Dec 2024 - Present",
    description:
      "Trained and worked on enterprise applications using .NET Core, Angular, and Microsoft SQL Server. Key contributions included designing RESTful APIs in C#, building responsive UIs with Angular and RxJS, developing complex T‑SQL stored procedures, and integrating authentication and role‑based security within Agile sprints.",
    technologies: [
      ".NET Core",
      "Angular",
      "RxJS",
      "C#",
      "MS SQL Server",
      "T-SQL",
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
    duration: "Jan 2025 - Present",
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
