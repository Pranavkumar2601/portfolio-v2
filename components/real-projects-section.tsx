"use client";

import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Code,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Add type annotations for destructured props
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  variant?: string;
}

const Button = ({
  children,
  onClick,
  className,
  style,
  variant,
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`${className} inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`}
    style={style}
  >
    {children}
  </button>
);

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

const realProjects = [
  {
    id: 1,
    title: "MasterSound E-Commerce Platform",
    subtitle: " Full‑Stack E‑Commerce Platform",
    description:
      "Full-featured e-commerce website built with Angular, featuring product listings, shopping cart system, and seamless checkout process. Includes comprehensive user management and order processing capabilities.",
    longDescription:
      "Developed an Angular-based E-Commerce website with product listings, content routing for seamless navigation between sections, and a functional shopping cart system. Implemented a comprehensive checkout process allowing users to review their cart, enter shipping details, and complete purchases.",
    image: "/mastersound.png",
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
    period: "June 2025 - July 2025",
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
    // live: "https://beyond-boundary-demo.vercel.app",
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
    id: 3,
    title: process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio Website",
    subtitle: "Personal Portfolio with 3D elements",
    description:
      "My personal portfolio website to showcase my skills and projects, built with Next.js and Framer Motion for smooth animations.",
    longDescription:
      "This portfolio is a testament to modern web development practices, featuring a clean design, responsive layout, and interactive 3D elements to create a memorable user experience. It's deployed on Vercel for optimal performance and availability.",
    image: "/portfolio.png",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    github: process.env.NEXT_PUBLIC_GITHUB + "/portfolio-v2",
    live: "https://pranav26.netlify.app/",
    category: "Web Development",
    period: "July 2025 - Present",
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

export default function RealProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % realProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + realProjects.length) % realProjects.length
    );
  };

  // Define the carousel item transformations
  const carouselVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 3,
      opacity: 1,
      rotateY: 0,
    },
    left: {
      x: "-50%",
      scale: 0.7,
      zIndex: 2,
      opacity: 0.5,
      rotateY: 45,
    },
    right: {
      x: "50%",
      scale: 0.7,
      zIndex: 1,
      opacity: 0.5,
      rotateY: -45,
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
      zIndex: 0,
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at top, ${modernColors.primary}, ${modernColors.background})`,
      }}
    >
      {/* Fallback for AnimatedBackground */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50" />

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            style={{ color: modernColors.text }}
          >
            Featured{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${modernColors.danger}, ${modernColors.warning})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <div
            className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6 sm:mb-8"
            style={{
              background: `linear-gradient(90deg, ${modernColors.danger}, ${modernColors.warning})`,
            }}
          />
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: modernColors.muted }}
          >
            Real-world projects showcasing my expertise in machine learning, web
            development, and full-stack solutions.
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div
          className="relative w-full max-w-6xl h-[650px] sm:h-[600px] flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence initial={false}>
            {realProjects.map((project, index) => {
              let variant = "hidden";
              if (index === activeIndex) {
                variant = "center";
              } else if (
                index ===
                (activeIndex - 1 + realProjects.length) % realProjects.length
              ) {
                variant = "left";
              } else if (index === (activeIndex + 1) % realProjects.length) {
                variant = "right";
              }

              return (
                <motion.div
                  key={project.id}
                  variants={carouselVariants}
                  initial="hidden"
                  animate={variant}
                  exit="hidden"
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute w-full max-w-4xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card
                    className="border-2 backdrop-blur-xl overflow-hidden transition-all duration-300 w-full"
                    style={{
                      backgroundColor: `${modernColors.surface}E6`,
                      borderColor: project.color,
                      boxShadow: `0 20px 60px ${project.color}20`,
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col xl:flex-row h-full">
                        {/* Project Image/Visual */}
                        <div className="xl:w-2/5 relative overflow-hidden h-64 sm:h-80 xl:h-auto">
                          <div
                            className="h-full relative"
                            style={{
                              background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                            }}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                              onError={(e) => {
                                e.currentTarget.src = `https://placehold.co/600x400/0A0A0F/E2E8F0?text=Image+Not+Found`;
                              }}
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <div className="text-center p-6 sm:p-8">
                                <project.icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 text-white" />
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold opacity-60 text-white">
                                  {project.category === "Machine Learning"
                                    ? "ML"
                                    : "WEB"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                            style={{
                              backgroundColor: `${project.color}20`,
                              color: project.color,
                              border: `1px solid ${project.color}40`,
                            }}
                          >
                            {project.status}
                          </div>
                          <div
                            className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                            style={{
                              backgroundColor: `${modernColors.warning}20`,
                              color: modernColors.warning,
                              border: `1px solid ${modernColors.warning}40`,
                            }}
                          >
                            {project.complexity}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="xl:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                              <div>
                                <h3
                                  className="text-xl sm:text-2xl font-bold mb-1"
                                  style={{ color: modernColors.text }}
                                >
                                  {project.title}
                                </h3>
                                <p
                                  className="text-base sm:text-lg font-medium"
                                  style={{ color: project.color }}
                                >
                                  {project.subtitle}
                                </p>
                              </div>
                              <div
                                className="flex items-center space-x-2 text-xs sm:text-sm"
                                style={{ color: modernColors.muted }}
                              >
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>{project.period}</span>
                              </div>
                            </div>
                            <p
                              className="text-sm sm:text-base leading-relaxed mb-4"
                              style={{ color: modernColors.muted }}
                            >
                              {project.description}
                            </p>
                            <div className="mb-6">
                              <h4
                                className="text-sm font-semibold mb-3"
                                style={{ color: modernColors.text }}
                              >
                                Technologies Used:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies
                                  .slice(0, 7)
                                  .map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full"
                                      style={{
                                        backgroundColor: `${modernColors.primary}80`,
                                        color: modernColors.text,
                                        border: `1px solid ${modernColors.muted}20`,
                                      }}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                {project.technologies.length > 7 && (
                                  <span
                                    className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full"
                                    style={{
                                      backgroundColor: `${modernColors.primary}80`,
                                      color: modernColors.text,
                                      border: `1px solid ${modernColors.muted}20`,
                                    }}
                                  >
                                    ...
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
                            {project.live && (
                              <Button
                                className="flex-1 font-semibold transition-all duration-300 text-sm sm:text-base"
                                style={{
                                  backgroundColor: project.color,
                                  color: "white",
                                  border: "none",
                                }}
                                onClick={() =>
                                  window.open(project.live, "_blank")
                                }
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              className="flex-1 font-semibold transition-all duration-300 bg-transparent text-sm sm:text-base"
                              style={{
                                borderColor: project.color,
                                color: project.color,
                                backgroundColor: "transparent",
                              }}
                              onClick={() =>
                                window.open(project.github, "_blank")
                              }
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-8 z-10">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/70 transition-colors text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            {realProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-6 bg-white" : "bg-slate-500"
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-slate-700/50 hover:bg-slate-600/70 transition-colors text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-12 sm:mt-16"
        >
          <p
            className="text-base sm:text-lg"
            style={{ color: modernColors.muted }}
          >
            Want to see more projects? Check out my{" "}
            <a
              href={process.env.NEXT_PUBLIC_GITHUB + "?tab=repositories"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline transition-colors duration-300"
              style={{ color: modernColors.danger }}
            >
              GitHub profile
            </a>{" "}
            for additional projects and contributions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
