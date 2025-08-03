"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Zap,
  Star,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Trophy,
  Eye,
  EyeOff,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from "@/data/skills";
import { modernColors } from "@/data/education";
import AnimatedBackground from "@/components/animated-background";

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "development":
        return Code;
      case "database":
        return Database;
      case "languages":
        return Zap;
      case "mlFrameworks":
        return Brain;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return modernColors.accent;
      case "database":
        return modernColors.success;
      case "languages":
        return modernColors.secondary;
      case "mlFrameworks":
        return modernColors.warning;
      default:
        return modernColors.accent;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "development":
        return "Development";
      case "database":
        return "Database";
      case "languages":
        return "Languages";
      case "mlFrameworks":
        return "ML Frameworks";
      default:
        return category;
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "development":
        return "Full-stack web development and modern frameworks";
      case "database":
        return "Data storage, management, and analytics solutions";
      case "languages":
        return "Programming languages and core technologies";
      case "mlFrameworks":
        return "Machine learning and AI development tools";
      default:
        return "Technical expertise and tools";
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: modernColors.background }}
    >
      <AnimatedBackground
        sectionColor={modernColors.secondary}
        variant="skills"
      />

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20"
          style={{
            background: `radial-gradient(ellipse at top right, ${modernColors.secondary}30, transparent)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-15"
          style={{
            background: `radial-gradient(ellipse at bottom left, ${modernColors.accent}25, transparent)`,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: ${modernColors.surface}30;
            border-radius: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: ${modernColors.muted}50;
            border-radius: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: ${modernColors.muted}80;
          }
        `}</style>
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 sm:mb-24"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-md border mb-8"
            style={{
              backgroundColor: `${modernColors.surface}70`,
              borderColor: `${modernColors.secondary}50`,
              color: modernColors.secondary,
            }}
          >
            <Trophy className="w-5 h-5 mr-3" />
            <span className="text-sm font-semibold tracking-wide">
              Technical Expertise
            </span>
            <Sparkles className="w-4 h-4 ml-2" />
          </motion.div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            <span style={{ color: modernColors.text }}>Skills &</span>
            <br />
            <span
              className="relative inline-block"
              style={{
                background: `linear-gradient(135deg, ${modernColors.secondary}, ${modernColors.accent}, ${modernColors.warning})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Technologies
              <motion.div
                className="absolute -bottom-2 left-0 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${modernColors.secondary}, ${modernColors.accent})`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: modernColors.muted }}
          >
            A comprehensive toolkit spanning{" "}
            <span style={{ color: modernColors.accent }}>
              full-stack development
            </span>
            ,{" "}
            <span style={{ color: modernColors.warning }}>
              machine learning
            </span>
            , and{" "}
            <span style={{ color: modernColors.secondary }}>
              modern technologies
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skillsData.map((category, categoryIndex) => {
            const Icon = getCategoryIcon(category.category);
            const color = getCategoryColor(category.category);
            const title = getCategoryTitle(category.category);
            const description = getCategoryDescription(category.category);
            const isHovered = hoveredCategory === category.category;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: categoryIndex * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredCategory(category.category)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <Card
                    className="border-2 backdrop-blur-xl overflow-hidden transition-all duration-300 relative"
                    style={{
                      backgroundColor: isHovered
                        ? `${modernColors.surface}F0`
                        : `${modernColors.surface}E0`,
                      borderColor: isHovered
                        ? color
                        : `${modernColors.muted}30`,
                      boxShadow: isHovered
                        ? `0 20px 60px ${color}25`
                        : `0 8px 25px ${modernColors.background}30`,
                      minHeight: "400px",
                      height: expandedCategories.has(category.category)
                        ? "auto"
                        : "400px",
                      maxHeight: expandedCategories.has(category.category)
                        ? "none"
                        : "400px",
                    }}
                  >
                    {/* Simplified Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="absolute top-0 right-0 w-20 h-20 rounded-full transform translate-x-4 -translate-y-4"
                        style={{ backgroundColor: color }}
                      />
                    </div>

                    <CardContent className="p-6 relative z-10 h-full flex flex-col">
                      {/* Category Header */}
                      <div className="flex items-center space-x-3 mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{
                            backgroundColor: `${color}15`,
                            border: `2px solid ${color}30`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-lg font-bold truncate"
                            style={{ color: modernColors.text }}
                          >
                            {title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span
                              className="text-xs font-medium"
                              style={{ color: modernColors.muted }}
                            >
                              {category.skills.length} technologies
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Skills List - Interactive with Show More */}
                      <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-1 gap-2 flex-1 overflow-y-auto max-h-[280px] pr-2 custom-scrollbar">
                          <AnimatePresence>
                            {category.skills
                              .slice(
                                0,
                                expandedCategories.has(category.category)
                                  ? category.skills.length
                                  : 8
                              )
                              .map((skill, skillIndex) => (
                                <motion.div
                                  key={skill}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{
                                    delay: skillIndex * 0.05,
                                    duration: 0.3,
                                  }}
                                  whileHover={{ scale: 1.02, x: 4 }}
                                >
                                  <div
                                    className="px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 text-center cursor-default group"
                                    style={{
                                      backgroundColor: isHovered
                                        ? `${color}12`
                                        : `${modernColors.primary}08`,
                                      borderColor: isHovered
                                        ? `${color}30`
                                        : `${modernColors.muted}15`,
                                      color: isHovered
                                        ? color
                                        : modernColors.text,
                                    }}
                                  >
                                    <div className="flex items-center justify-center space-x-2">
                                      <span>{skill}</span>
                                      <Star
                                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        style={{
                                          color: isHovered
                                            ? color
                                            : modernColors.primary,
                                        }}
                                      />
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                          </AnimatePresence>
                        </div>

                        {/* Show More/Less Button */}
                        {category.skills.length > 5 && (
                          <motion.button
                            onClick={() => toggleCategory(category.category)}
                            className="mt-4 px-4 py-2 text-sm font-semibold rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-2 group"
                            style={{
                              backgroundColor: expandedCategories.has(
                                category.category
                              )
                                ? `${color}15`
                                : `${modernColors.muted}10`,
                              borderColor: expandedCategories.has(
                                category.category
                              )
                                ? `${color}40`
                                : `${modernColors.muted}30`,
                              color: expandedCategories.has(category.category)
                                ? color
                                : modernColors.muted,
                            }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: `${color}20`,
                              borderColor: `${color}50`,
                              color: color,
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {expandedCategories.has(category.category) ? (
                              <>
                                <EyeOff className="w-4 h-4" />
                                <span>Show Less</span>
                                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                              </>
                            ) : (
                              <>
                                <Eye className="w-4 h-4" />
                                <span>+{category.skills.length - 5} More</span>
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                              </>
                            )}
                          </motion.button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Simplified Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <div
              className="p-8 rounded-3xl backdrop-blur-xl border"
              style={{
                backgroundColor: `${modernColors.surface}60`,
                borderColor: `${modernColors.secondary}30`,
              }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Brain
                  className="w-6 h-6"
                  style={{ color: modernColors.secondary }}
                />
                <h3
                  className="text-2xl font-bold"
                  style={{ color: modernColors.text }}
                >
                  Always Learning
                </h3>
              </div>

              <p
                className="text-base leading-relaxed"
                style={{ color: modernColors.muted }}
              >
                Technology evolves rapidly, and so do I. These skills represent
                my current expertise, but I'm constantly exploring new
                technologies and expanding my capabilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
