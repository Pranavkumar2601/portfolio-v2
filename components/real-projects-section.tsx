"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { realProjects } from "@/data/projects";
import { modernColors } from "@/data/education";
import AnimatedBackground from "@/components/animated-background";

export default function RealProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % realProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + realProjects.length) % realProjects.length
    );
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  const carouselVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 5,
      opacity: 1,
      rotateY: 0,
      filter: "blur(0px)",
    },
    left: {
      x: "-60%",
      scale: 0.75,
      zIndex: 3,
      opacity: 0.7,
      rotateY: 45,
      filter: "blur(2px)",
    },
    right: {
      x: "60%",
      scale: 0.75,
      zIndex: 3,
      opacity: 0.7,
      rotateY: -45,
      filter: "blur(2px)",
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
      zIndex: 1,
      filter: "blur(4px)",
    },
  };

  const mobileVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -20 : 20,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? -20 : 20,
    }),
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: modernColors.background }}
    >
      <AnimatedBackground
        sectionColor={modernColors.danger}
        variant="projects"
      />

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-1/3 opacity-30"
          style={{
            background: `radial-gradient(ellipse at top, ${modernColors.primary}20, transparent)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-full h-1/3 opacity-20"
          style={{
            background: `radial-gradient(ellipse at bottom right, ${modernColors.danger}15, transparent)`,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center max-w-7xl">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md border mb-6"
            style={{
              backgroundColor: `${modernColors.surface}60`,
              borderColor: `${modernColors.primary}40`,
              color: modernColors.primary,
            }}
          >
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Featured Work</span>
          </motion.div>

          <h2 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            <span style={{ color: modernColors.text }}>Real-World</span>
            <br />
            <span
              className="relative inline-block"
              style={{
                background: `linear-gradient(135deg, ${modernColors.danger}, ${modernColors.warning}, ${modernColors.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
              <motion.div
                className="absolute -bottom-2 left-0 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${modernColors.danger}, ${modernColors.warning})`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: modernColors.muted }}
          >
            Showcasing innovative solutions in{" "}
            <span style={{ color: modernColors.primary }}>
              machine learning
            </span>
            ,{" "}
            <span style={{ color: modernColors.danger }}>web development</span>,
            and{" "}
            <span style={{ color: modernColors.warning }}>
              full-stack engineering
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Desktop 3D Carousel */}
        <div className="hidden lg:block w-full">
          <div
            className="relative w-full h-[700px] flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            <AnimatePresence initial={false} custom={direction}>
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
                    key={`desktop-${project.id}`}
                    variants={carouselVariants}
                    initial="hidden"
                    animate={variant}
                    exit="hidden"
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      filter: { duration: 0.4 },
                    }}
                    className="absolute w-full max-w-6xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <ProjectCard
                      project={project}
                      activeIndex={activeIndex}
                      index={index}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Enhanced Mobile/Tablet Carousel */}
        <div className="lg:hidden w-full max-w-md sm:max-w-lg mx-auto">
          <div className="relative h-[650px] sm:h-[700px] overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={mobileVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 35 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                style={{ transformStyle: "preserve-3d" }}
              >
                <ProjectCard
                  project={realProjects[activeIndex]}
                  isMobile
                  activeIndex={activeIndex}
                  index={activeIndex}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center space-x-8 mt-12 z-20"
        >
          <motion.button
            onClick={handlePrev}
            className="group p-4 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: `${modernColors.surface}90`,
              borderColor: `${modernColors.primary}60`,
              color: modernColors.text,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: modernColors.primary,
              borderColor: modernColors.primary,
              color: modernColors.background,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </motion.button>

          {/* Enhanced Pagination Dots */}
          <div className="flex space-x-3">
            {realProjects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className="relative h-4 rounded-full transition-all duration-300 group"
                style={{
                  backgroundColor:
                    activeIndex === index
                      ? modernColors.primary
                      : `${modernColors.muted}40`,
                  width: activeIndex === index ? "32px" : "16px",
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to project ${index + 1}`}
              >
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${modernColors.primary}, ${modernColors.danger})`,
                    }}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="sr-only">{project.title}</span>
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            className="group p-4 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: `${modernColors.surface}90`,
              borderColor: `${modernColors.primary}60`,
              color: modernColors.text,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: modernColors.primary,
              borderColor: modernColors.primary,
              color: modernColors.background,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Enhanced Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl backdrop-blur-xl border"
              style={{
                backgroundColor: `${modernColors.surface}60`,
                borderColor: `${modernColors.primary}30`,
              }}
            >
              <Globe
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: modernColors.primary }}
              />
              <p
                className="text-lg sm:text-xl mb-6 leading-relaxed"
                style={{ color: modernColors.text }}
              >
                Interested in seeing more of my work?
              </p>
              <motion.a
                href={process.env.NEXT_PUBLIC_GITHUB + "?tab=repositories"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group"
                style={{
                  background: `linear-gradient(135deg, ${modernColors.danger}, ${modernColors.warning})`,
                  color: modernColors.background,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${modernColors.danger}30`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                Explore GitHub Portfolio
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced ProjectCard Component
function ProjectCard({
  project,
  isMobile = false,
  activeIndex,
  index,
}: {
  project: any;
  isMobile?: boolean;
  activeIndex: number;
  index: number;
}) {
  const isActive = activeIndex === index;

  return (
    <motion.div
      whileHover={
        !isMobile
          ? {
              y: -8,
              boxShadow: `0 25px 80px ${project.color}25`,
            }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      <Card
        className="border-2 backdrop-blur-2xl overflow-hidden transition-all duration-500 w-full h-full group"
        style={{
          backgroundColor: `${modernColors.surface}F0`,
          borderColor: isActive ? project.color : `${modernColors.muted}40`,
          boxShadow: isActive
            ? `0 25px 80px ${project.color}25, 0 0 0 1px ${project.color}30`
            : `0 10px 30px ${modernColors.background}20`,
          minHeight: isMobile ? "650px" : "600px",
        }}
      >
        <CardContent className="p-0 h-full">
          <div
            className={`flex ${
              isMobile ? "flex-col h-full" : "flex-col xl:flex-row h-full"
            }`}
          >
            {/* Enhanced Project Image */}
            <div
              className={`${
                isMobile ? "h-2/5" : "xl:w-2/5 h-72 sm:h-80 xl:h-auto"
              } relative overflow-hidden`}
            >
              <motion.div
                className="h-full relative"
                style={{
                  background: `linear-gradient(135deg, ${project.color}25, ${project.color}10, transparent)`,
                }}
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={
                    isMobile
                      ? "100vw"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  }
                  priority={isMobile || isActive}
                />

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-75">
                  <motion.div
                    className="text-center p-6"
                    initial={{ opacity: 0.8, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon
                        className={`${
                          isMobile ? "w-14 h-14" : "w-20 h-20"
                        } mx-auto mb-4 text-white drop-shadow-lg`}
                      />
                    </motion.div>
                    <div
                      className={`${
                        isMobile ? "text-3xl" : "text-5xl"
                      } font-black text-white drop-shadow-lg`}
                    >
                      {project.category === "Machine Learning"
                        ? "ML"
                        : project.category === "Android Development"
                        ? "ANDROID"
                        : "WEB"}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Status Badges */}
              <div className="absolute top-6 left-6 flex flex-col space-y-2">
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 py-2 text-sm font-bold rounded-2xl backdrop-blur-md border shadow-lg"
                  style={{
                    backgroundColor: `${project.color}90`,
                    color: "white",
                    borderColor: `${project.color}`,
                    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  {project.status}
                </motion.span>
              </div>

              <div className="absolute top-6 right-6 flex flex-col space-y-2">
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 py-2 text-sm font-bold rounded-2xl backdrop-blur-md border shadow-lg"
                  style={{
                    backgroundColor: `${modernColors.warning}90`,
                    color: "white",
                    borderColor: modernColors.warning,
                    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  <Zap className="w-4 h-4 inline mr-1" />
                  {project.complexity}
                </motion.span>
              </div>
            </div>

            {/* Enhanced Project Details */}
            <div
              className={`${
                isMobile ? "h-3/5 p-6" : "xl:w-3/5 p-8 sm:p-10"
              } flex flex-col justify-between`}
            >
              <div className="flex-1">
                {/* Project Header */}
                <div
                  className={`flex flex-col ${
                    isMobile
                      ? "mb-4"
                      : "sm:flex-row sm:items-start sm:justify-between mb-6"
                  } gap-3`}
                >
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className={`${
                        isMobile ? "text-2xl" : "text-3xl sm:text-4xl"
                      } font-black mb-2 leading-tight`}
                      style={{ color: modernColors.text }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={`${
                        isMobile ? "text-lg" : "text-xl sm:text-2xl"
                      } font-semibold`}
                      style={{ color: project.color }}
                    >
                      {project.subtitle}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl backdrop-blur-sm ${
                      isMobile ? "text-sm" : "text-sm sm:text-base"
                    }`}
                    style={{
                      backgroundColor: `${modernColors.muted}20`,
                      color: modernColors.muted,
                      border: `1px solid ${modernColors.muted}30`,
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{project.period}</span>
                  </motion.div>
                </div>

                {/* Project Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`${
                    isMobile ? "text-sm mb-5" : "text-base sm:text-lg mb-8"
                  } leading-relaxed font-medium`}
                  style={{ color: modernColors.muted }}
                >
                  {isMobile
                    ? project.description.substring(0, 140) + "..."
                    : project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={isMobile ? "mb-6" : "mb-8"}
                >
                  <h4
                    className="text-sm font-bold mb-4 tracking-wide uppercase"
                    style={{ color: modernColors.text }}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .slice(0, isMobile ? 5 : 8)
                      .map((tech: string, idx: number) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-2 text-sm font-semibold rounded-xl border-2 transition-all duration-200"
                          style={{
                            backgroundColor: `${modernColors.primary}15`,
                            color: modernColors.text,
                            borderColor: `${modernColors.primary}40`,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    {project.technologies.length > (isMobile ? 5 : 8) && (
                      <span
                        className="px-3 py-2 text-sm font-semibold rounded-xl border-2"
                        style={{
                          backgroundColor: `${modernColors.muted}15`,
                          color: modernColors.muted,
                          borderColor: `${modernColors.muted}40`,
                        }}
                      >
                        +{project.technologies.length - (isMobile ? 5 : 8)} more
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className={`flex ${
                  isMobile
                    ? "flex-col space-y-3"
                    : "flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                } mt-auto`}
              >
                {project.live && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      className={`w-full ${
                        isMobile ? "text-base py-3" : "text-lg py-4"
                      } font-bold transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl`}
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}E0)`,
                        color: "white",
                        border: "none",
                      }}
                      onClick={() =>
                        window.open(
                          project.live,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <ExternalLink
                        className={`${isMobile ? "w-5 h-5" : "w-5 h-5"} mr-3`}
                      />
                      View Live Demo
                    </Button>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className={`w-full ${
                      isMobile ? "text-base py-3" : "text-lg py-4"
                    } font-bold transition-all duration-300 rounded-2xl border-2 shadow-lg hover:shadow-xl`}
                    style={{
                      borderColor: project.color,
                      color: project.color,
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = project.color;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = project.color;
                    }}
                    onClick={() =>
                      window.open(
                        project.github,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <Github
                      className={`${isMobile ? "w-5 h-5" : "w-5 h-5"} mr-3`}
                    />
                    View Source Code
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
