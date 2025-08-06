"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  TrendingUp,
  Award,
  Target,
  Activity,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from "@/data/skills";
import { modernColors } from "@/data/education";
import AnimatedBackground from "@/components/animated-background";

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleCategory = useCallback((category) => {
    setExpandedCategories((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(category)) {
        newExpanded.delete(category);
      } else {
        newExpanded.add(category);
      }
      return newExpanded;
    });
  }, []);

  const skillFilters = [
    { id: "all", label: "All Skills", icon: Target },
    { id: "development", label: "Development", icon: Code },
    { id: "database", label: "Database", icon: Database },
    { id: "languages", label: "Languages", icon: Zap },
    { id: "mlFrameworks", label: "AI/ML", icon: Brain },
  ];

  const getCategoryIcon = (category) => {
    const icons = {
      development: Code,
      database: Database,
      languages: Zap,
      mlFrameworks: Brain,
    };
    return icons[category] || Code;
  };

  const getCategoryColor = (category) => {
    const colors = {
      development: "#00D4FF",
      database: "#10B981",
      languages: "#8B5CF6",
      mlFrameworks: "#EF4444",
    };
    return colors[category] || modernColors.accent;
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      development: "from-blue-500/20 via-cyan-500/10 to-transparent",
      database: "from-emerald-500/20 via-green-500/10 to-transparent",
      languages: "from-purple-500/20 via-violet-500/10 to-transparent",
      mlFrameworks: "from-red-500/20 via-pink-500/10 to-transparent",
    };
    return gradients[category] || "from-blue-500/20 to-transparent";
  };

  const getCategoryTitle = (category) => {
    const titles = {
      development: "Development",
      database: "Database",
      languages: "Languages",
      mlFrameworks: "AI/ML Frameworks",
    };
    return titles[category] || category;
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      development: "Full-stack web development and modern frameworks",
      database: "Data storage, management, and analytics solutions",
      languages: "Programming languages and core technologies",
      mlFrameworks: "Machine learning and AI development tools",
    };
    return descriptions[category] || "Technical expertise and tools";
  };

  const filteredSkills = useMemo(() => {
    if (activeFilter === "all") return skillsData;
    return skillsData.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  const totalSkills = useMemo(() => {
    return skillsData.reduce(
      (total, category) => total + category.skills.length,
      0
    );
  }, []);

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

      {/* Enhanced Gradient Overlays with Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20"
          style={{
            background: `radial-gradient(ellipse at top right, ${modernColors.secondary}40, transparent)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-15"
          style={{
            background: `radial-gradient(ellipse at bottom left, ${modernColors.accent}35, transparent)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              backgroundColor:
                i % 2 === 0 ? modernColors.secondary : modernColors.accent,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Stats Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-8 py-4 rounded-full backdrop-blur-md border mb-8 group cursor-pointer"
            style={{
              backgroundColor: `${modernColors.surface}80`,
              borderColor: `${modernColors.secondary}50`,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: `${modernColors.surface}90`,
              borderColor: `${modernColors.secondary}70`,
            }}
          >
            <Trophy
              className="w-6 h-6 mr-3"
              style={{ color: modernColors.secondary }}
            />
            <span
              className="text-lg font-bold tracking-wide"
              style={{ color: modernColors.text }}
            >
              {totalSkills}+ Technologies
            </span>
            <motion.div
              className="ml-3"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles
                className="w-5 h-5"
                style={{ color: modernColors.accent }}
              />
            </motion.div>
          </motion.div>

          {/* Main Title with Enhanced Animation */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              style={{ color: modernColors.text }}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Skills &
            </motion.span>
            <br />
            <motion.span
              className="relative inline-block"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.span>
          </motion.h2>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed font-light mb-10"
            style={{ color: modernColors.muted }}
          >
            A comprehensive arsenal of{" "}
            <motion.span
              style={{ color: modernColors.accent }}
              whileHover={{ color: modernColors.secondary }}
              className="cursor-pointer"
            >
              cutting-edge technologies
            </motion.span>{" "}
            and{" "}
            <motion.span
              style={{ color: modernColors.warning }}
              whileHover={{ color: modernColors.secondary }}
              className="cursor-pointer"
            >
              innovative frameworks
            </motion.span>
          </motion.p>

          {/* Enhanced Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {skillFilters.map((filter, index) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;

              return (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className="group flex items-center px-6 py-3 rounded-full backdrop-blur-sm border-2 transition-all duration-300 font-semibold text-sm sm:text-base"
                  style={{
                    backgroundColor: isActive
                      ? `${modernColors.secondary}20`
                      : `${modernColors.surface}60`,
                    borderColor: isActive
                      ? modernColors.secondary
                      : `${modernColors.muted}30`,
                    color: isActive
                      ? modernColors.secondary
                      : modernColors.muted,
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${modernColors.secondary}25`,
                    borderColor: modernColors.secondary,
                    color: modernColors.secondary,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>{filter.label}</span>
                  {isActive && (
                    <motion.span
                      className="ml-2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: modernColors.secondary }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8"
          >
            {filteredSkills.map((category, categoryIndex) => {
              const Icon = getCategoryIcon(category.category);
              const color = getCategoryColor(category.category);
              const gradient = getCategoryGradient(category.category);
              const title = getCategoryTitle(category.category);
              const description = getCategoryDescription(category.category);
              const isHovered = hoveredCategory === category.category;
              const isExpanded = expandedCategories.has(category.category);

              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: categoryIndex * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  onMouseEnter={() => setHoveredCategory(category.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="group"
                >
                  <motion.div
                    whileHover={{
                      y: -12,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Card
                      className="border-2 backdrop-blur-xl overflow-hidden transition-all duration-500 relative group cursor-pointer"
                      style={{
                        backgroundColor: isHovered
                          ? `${modernColors.surface}F5`
                          : `${modernColors.surface}E5`,
                        borderColor: isHovered
                          ? color
                          : `${modernColors.muted}30`,
                        boxShadow: isHovered
                          ? `0 25px 80px ${color}30, 0 0 0 1px ${color}20`
                          : `0 10px 30px ${modernColors.background}40`,
                        minHeight: "450px",
                        height: isExpanded ? "auto" : "450px",
                      }}
                    >
                      {/* Animated Background Pattern */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Floating Particles */}
                      <AnimatePresence>
                        {isHovered && (
                          <div className="absolute inset-0 overflow-hidden rounded-xl">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{ backgroundColor: color }}
                                initial={{
                                  x: Math.random() * 300,
                                  y: Math.random() * 400,
                                  opacity: 0,
                                }}
                                animate={{
                                  x: Math.random() * 300,
                                  y: Math.random() * 400,
                                  opacity: [0, 1, 0],
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                  duration: 2 + Math.random() * 2,
                                  repeat: Infinity,
                                  delay: Math.random(),
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </AnimatePresence>

                      <CardContent className="p-6 sm:p-7 relative z-10 h-full flex flex-col">
                        {/* Enhanced Category Header */}
                        <motion.div
                          className="flex items-center space-x-4 mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                        >
                          <motion.div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden"
                            style={{
                              backgroundColor: `${color}15`,
                              border: `2px solid ${color}30`,
                            }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: `${color}25`,
                              borderColor: `${color}50`,
                            }}
                          >
                            <Icon
                              className="w-7 h-7 relative z-10"
                              style={{ color }}
                            />
                            {isHovered && (
                              <motion.div
                                className="absolute inset-0 rounded-2xl"
                                style={{ backgroundColor: `${color}10` }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <h3
                              className="text-xl font-bold truncate group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300"
                              style={{ color: modernColors.text }}
                            >
                              {title}
                            </h3>
                            <div className="flex items-center space-x-3 mt-2">
                              <span
                                className="text-sm font-semibold"
                                style={{ color }}
                              >
                                {category.skills.length} skills
                              </span>
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <Activity
                                  className="w-4 h-4"
                                  style={{ color: modernColors.muted }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Skills List with Enhanced Interactions */}
                        <div className="flex-1 flex flex-col">
                          <motion.div
                            className="grid grid-cols-1 gap-2 flex-1 overflow-y-auto max-h-[280px] pr-2"
                            style={{
                              scrollbarWidth: "thin",
                              scrollbarColor: `${modernColors.muted}50 transparent`,
                            }}
                          >
                            <AnimatePresence>
                              {category.skills
                                .slice(
                                  0,
                                  isExpanded ? category.skills.length : 6
                                )
                                .map((skill, skillIndex) => (
                                  <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                    transition={{
                                      delay: skillIndex * 0.05,
                                      duration: 0.3,
                                    }}
                                    whileHover={{ scale: 1.03, x: 6 }}
                                    onMouseEnter={() =>
                                      setHoveredSkill(
                                        `${category.category}-${skill}`
                                      )
                                    }
                                    onMouseLeave={() => setHoveredSkill(null)}
                                  >
                                    <div
                                      className="px-4 py-3 text-sm font-medium rounded-xl border transition-all duration-300 text-center cursor-pointer group relative overflow-hidden"
                                      style={{
                                        backgroundColor:
                                          hoveredSkill ===
                                          `${category.category}-${skill}`
                                            ? `${color}20`
                                            : isHovered
                                            ? `${color}12`
                                            : `${modernColors.surface}60`,
                                        borderColor:
                                          hoveredSkill ===
                                          `${category.category}-${skill}`
                                            ? `${color}60`
                                            : isHovered
                                            ? `${color}30`
                                            : `${modernColors.muted}20`,
                                        color:
                                          hoveredSkill ===
                                            `${category.category}-${skill}` ||
                                          isHovered
                                            ? color
                                            : modernColors.text,
                                      }}
                                    >
                                      {/* Skill shimmer effect */}
                                      {hoveredSkill ===
                                        `${category.category}-${skill}` && (
                                        <motion.div
                                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                          animate={{ x: [-100, 200] }}
                                          transition={{
                                            duration: 0.6,
                                            ease: "easeInOut",
                                          }}
                                        />
                                      )}

                                      <div className="flex items-center justify-center space-x-2 relative z-10">
                                        <span className="font-semibold">
                                          {skill}
                                        </span>
                                        <motion.div
                                          animate={{
                                            opacity:
                                              hoveredSkill ===
                                              `${category.category}-${skill}`
                                                ? 1
                                                : 0,
                                            scale:
                                              hoveredSkill ===
                                              `${category.category}-${skill}`
                                                ? 1
                                                : 0.5,
                                          }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          <Star
                                            className="w-3 h-3"
                                            style={{ color }}
                                          />
                                        </motion.div>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                            </AnimatePresence>
                          </motion.div>

                          {/* Enhanced Show More/Less Button */}
                          {category.skills.length > 6 && (
                            <motion.button
                              onClick={() => toggleCategory(category.category)}
                              className="mt-5 px-5 py-3 text-sm font-bold rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
                              style={{
                                backgroundColor: isExpanded
                                  ? `${color}20`
                                  : `${modernColors.surface}80`,
                                borderColor: isExpanded
                                  ? `${color}50`
                                  : `${modernColors.muted}30`,
                                color: isExpanded ? color : modernColors.muted,
                              }}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: `${color}25`,
                                borderColor: `${color}60`,
                                color: color,
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                animate={{
                                  rotateY: isExpanded ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {isExpanded ? (
                                  <EyeOff className="w-4 h-4" />
                                ) : (
                                  <Eye className="w-4 h-4" />
                                )}
                              </motion.div>
                              <span>
                                {isExpanded
                                  ? "Show Less"
                                  : `Show ${category.skills.length - 6} More`}
                              </span>
                              <motion.div
                                animate={{
                                  rotate: isExpanded ? 180 : 0,
                                  y: isExpanded ? 0 : [0, -2, 0],
                                }}
                                transition={{
                                  rotate: { duration: 0.3 },
                                  y: { duration: 1, repeat: Infinity },
                                }}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </motion.div>
                            </motion.button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20 sm:mt-24"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="p-8 sm:p-10 rounded-3xl backdrop-blur-xl border relative overflow-hidden group cursor-pointer"
              style={{
                backgroundColor: `${modernColors.surface}70`,
                borderColor: `${modernColors.secondary}30`,
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: `${modernColors.surface}80`,
                borderColor: `${modernColors.secondary}50`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, ${modernColors.secondary}30 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${modernColors.accent}25 0%, transparent 50%)`,
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Brain
                      className="w-8 h-8"
                      style={{ color: modernColors.secondary }}
                    />
                  </motion.div>
                  <h3
                    className="text-2xl sm:text-3xl font-black"
                    style={{ color: modernColors.text }}
                  >
                    Always Evolving
                  </h3>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp
                      className="w-6 h-6"
                      style={{ color: modernColors.accent }}
                    />
                  </motion.div>
                </div>

                <p
                  className="text-lg sm:text-xl leading-relaxed mb-6"
                  style={{ color: modernColors.muted }}
                >
                  Technology evolves at lightning speed, and so do I. These
                  skills represent my current expertise, but I'm constantly
                  exploring new frontiers and expanding my technological
                  horizons.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {["Continuous Learning", "Innovation", "Adaptation"].map(
                    (trait, index) => (
                      <motion.span
                        key={trait}
                        className="px-4 py-2 rounded-full text-sm font-semibold border"
                        style={{
                          backgroundColor: `${modernColors.accent}15`,
                          borderColor: `${modernColors.accent}30`,
                          color: modernColors.accent,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: `${modernColors.accent}25`,
                        }}
                      >
                        {trait}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
