"use client";

import { motion } from "framer-motion";
import React, { lazy, Suspense, FC, ReactNode, HTMLAttributes } from "react";
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  Cpu,
  Code,
  Users,
  LucideProps,
} from "lucide-react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
interface AnimatedBackgroundProps {
  sectionColor: string;
  variant?: "about" | "other";
}

const Card: FC<CardProps> = ({ children, className = "", style, ...props }) => (
  <div
    className={`${className} rounded-lg border bg-card text-card-foreground shadow-sm`}
    style={style}
    {...props}
  >
    {children}
  </div>
);

const CardContent: FC<CardContentProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`${className} p-6`} {...props}>
    {children}
  </div>
);

// Mock AnimatedBackground component, assuming it handles its own internal styles
const AnimatedBackground: FC<AnimatedBackgroundProps> = ({
  sectionColor,
  variant,
}) => {
  const styles = `
    @keyframes moveGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradient {
      background-size: 400% 400%;
      animation: moveGradient 15s ease infinite;
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: -2s; }
    .animation-delay-4000 { animation-delay: -4s; }
  `;

  return (
    <>
      <style>{styles}</style>
      <div
        className="absolute inset-0 w-full h-full opacity-30 z-0 animate-gradient"
        style={{
          background: `linear-gradient(45deg, ${sectionColor}20, ${sectionColor}40, ${sectionColor}20)`,
        }}
      ></div>
      {/* Specific blob animations for 'about' variant, or general if not specified */}
      {variant === "about" && (
        <>
          <div
            className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            style={{ backgroundColor: sectionColor }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            style={{ backgroundColor: sectionColor }}
          ></div>
        </>
      )}
    </>
  );
};

const modernColors = {
  background: "#020617", // Dark blue-gray, consistent with previous sections
  surface: "#0f172a",
  primary: "#1e293b",
  accent: "#38bdf8",
  secondary: "#818cf8",
  success: "#4ade80", // Green for GPA and some experience highlights
  warning: "#F59E0B",
  danger: "#EF4444",
  text: "#E2E8F0",
  muted: "#94a3b8",
};

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Confendential",
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

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden font-inter"
    >
      {/* Removed Suspense block with AnimatedBackground and its fallback */}
      {/* Removed the AnimatedBackground component import and usage */}

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            style={{ color: modernColors.text }}
          >
            Professional{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${modernColors.success}, ${modernColors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </h2>
          <div
            className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6 sm:mb-8"
            style={{
              background: `linear-gradient(90deg, ${modernColors.success}, ${modernColors.accent})`,
            }}
          />
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: modernColors.muted }}
          >
            Hands-on experience in full-stack development, AI model training,
            and enterprise application engineering.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 transform sm:-translate-x-1/2" // Added transform for precise centering on desktop
            style={{
              background: `linear-gradient(to bottom, ${modernColors.surface}, ${modernColors.success}, ${modernColors.surface})`,
            }}
          ></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 flex items-center w-full relative" // Added relative for absolute positioning of dot
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute z-10 flex items-center justify-center w-8 h-8 rounded-full -translate-y-1/2 ${
                  // Added -translate-y-1/2 for vertical centering
                  index % 2 === 0
                    ? "left-0 sm:left-1/2 -translate-x-1/2" // Left edge for mobile, center for desktop
                    : "left-0 sm:left-1/2 -translate-x-1/2" // Same for both, will be adjusted by card positioning
                }`}
                style={{
                  backgroundColor: exp.color,
                  border: `4px solid ${modernColors.surface}`,
                }}
              >
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div
                className={`w-full sm:w-5/12 ${
                  index % 2 === 0
                    ? "ml-auto pr-0 sm:pr-8 sm:pl-0" // Push to right on desktop, add padding-right
                    : "mr-auto pl-0 sm:pl-8 sm:pr-0" // Push to left on desktop, add padding-left
                } pl-12 sm:pl-0`} // Add padding-left for mobile to clear dot
              >
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="border-2 backdrop-blur-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                    style={{
                      backgroundColor: `${modernColors.surface}E6`,
                      borderColor: exp.color,
                      boxShadow: `0 10px 40px ${exp.color}1A`,
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <exp.icon
                          className="w-6 h-6"
                          style={{ color: exp.color }}
                        />
                        <h3
                          className="text-xl font-bold"
                          style={{ color: modernColors.text }}
                        >
                          {exp.title}
                        </h3>
                      </div>

                      <div className="mb-4 space-y-2 text-sm">
                        <div
                          className="flex items-center"
                          style={{ color: modernColors.muted }}
                        >
                          <Building className="w-4 h-4 mr-2" /> {exp.company}
                        </div>
                        <div
                          className="flex items-center"
                          style={{ color: modernColors.muted }}
                        >
                          <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                        </div>
                        <div
                          className="flex items-center"
                          style={{ color: modernColors.muted }}
                        >
                          <Calendar className="w-4 h-4 mr-2" /> {exp.duration}
                        </div>
                      </div>

                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: modernColors.muted }}
                      >
                        {exp.description}
                      </p>

                      <div>
                        <h4
                          className="text-xs font-semibold mb-2"
                          style={{ color: modernColors.text }}
                        >
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-medium rounded-full"
                              style={{
                                backgroundColor: `${exp.color}20`,
                                color: exp.color,
                                border: `1px solid ${exp.color}30`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
