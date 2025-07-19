"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  Cpu,
  Code,
  Users,
} from "lucide-react";
import { lazy, Suspense } from "react";

// Mock components for Card as its definition is not provided.
// In a real application, you would import these from your UI library (e.g., shadcn/ui).
const Card = ({ children, className, style }) => (
  <div
    className={`${className} rounded-lg border bg-card text-card-foreground shadow-sm`}
    style={style}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`${className} p-6`}>{children}</div>
);

// Lazy load the animated background for better performance
// Since the component is not available, I'll use a fallback gradient.
const AnimatedBackground = lazy(() => import("./animated-background"));

const modernColors = {
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
    company: "AI Innovators",
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
    >
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-slate-900" />
        }
      >
        {/* The AnimatedBackground component is not defined, so a fallback is used. */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top, ${modernColors.primary}, ${modernColors.background})`,
          }}
        />
      </Suspense>

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
            className="absolute left-4 sm:left-1/2 top-5 h-full w-0.5"
            style={{
              background: `linear-gradient(to bottom, ${modernColors.surface}, ${modernColors.success}, ${modernColors.surface})`,
            }}
          ></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`hidden sm:block w-5/12 ${
                  index % 2 !== 0 ? "order-1" : "order-3"
                }`}
              ></div>

              {/* Timeline Dot */}
              <div className="z-10 flex items-center order-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: exp.color,
                    border: `4px solid ${modernColors.surface}`,
                  }}
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="w-full sm:w-5/12 order-3 sm:order-1">
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
