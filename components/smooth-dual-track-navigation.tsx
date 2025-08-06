"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  GraduationCap,
  Briefcase,
  FolderOpen,
  FileText,
  Mail,
  Code,
  ChevronRight,
  Settings, // Services icon
} from "lucide-react";

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

// Updated navigation items with Services
const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "services", label: "Services", icon: Settings },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "research", label: "Research", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function EnhancedSmoothDualTrackNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Fixed section detection algorithm
      const sections = navigationItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = window.scrollY + rect.top;
            const elementBottom = elementTop + rect.height;

            return {
              id: item.id,
              element,
              top: elementTop,
              bottom: elementBottom,
              height: rect.height,
            };
          }
          return null;
        })
        .filter(Boolean);

      if (sections.length === 0) return;

      // Use a smaller offset for better detection
      const scrollOffset = scrollY + window.innerHeight * 0.3; // Use 30% of viewport
      let currentSection = "home";

      // Find which section we're currently in
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (!section) continue;

        const { id, top, bottom } = section;

        // Check if we're within this section's boundaries
        if (scrollOffset >= top && scrollOffset < bottom) {
          currentSection = id;
          break;
        }

        // Handle the last section specially
        if (i === sections.length - 1 && scrollOffset >= top) {
          currentSection = id;
          break;
        }

        // Handle case where we're between sections
        const nextSection = sections[i + 1];
        if (
          nextSection &&
          scrollOffset >= top &&
          scrollOffset < nextSection.top
        ) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    // Add a small delay to allow for smooth scrolling
    const debouncedHandleScroll = () => {
      setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [isClient]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = window.innerWidth < 1024 ? 80 : 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      // Force update active section after scrolling
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    }
    setIsMenuOpen(false);
  };

  if (!isClient) return null;

  return (
    <>
      {/* Desktop Navigation - Fixed positioning to prevent cutoff */}
      <motion.nav
        className="fixed top-[20%] left-4 z-50 hidden lg:block" // Moved higher up to prevent cutoff
        style={{ maxHeight: "calc(100vh - 200px)" }} // Ensure it fits in viewport
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="relative overflow-hidden rounded-3xl backdrop-blur-xl border"
          style={{
            backgroundColor: `${modernColors.surface}90`,
            borderColor: `${modernColors.primary}50`,
            boxShadow: `0 20px 60px ${modernColors.background}80, 0 0 0 1px ${modernColors.accent}20`,
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glass effect overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-10"
            style={{
              background: `linear-gradient(135deg, ${modernColors.accent}30, ${modernColors.secondary}20, transparent)`,
            }}
          />

          {/* Vertical navigation layout with better spacing */}
          <div className="relative p-2 space-y-1 max-h-[calc(80vh)] overflow-y-auto custom-scrollbar">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative group w-full flex items-center justify-center p-3 rounded-2xl transition-all duration-300 overflow-hidden"
                  style={{
                    color: isActive
                      ? modernColors.background
                      : modernColors.text,
                    minWidth: "52px",
                    minHeight: "52px",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active/Hover background */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.secondary})`
                            : `${modernColors.primary}60`,
                          boxShadow: isActive
                            ? `0 0 30px ${modernColors.accent}40`
                            : "none",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  <Icon className="w-5 h-5 relative z-10" />

                  {/* Enhanced Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="absolute left-full ml-4 px-4 py-3 rounded-xl whitespace-nowrap pointer-events-none overflow-hidden"
                        style={{
                          backgroundColor: `${modernColors.surface}95`,
                          color: modernColors.text,
                          boxShadow: `0 10px 40px ${modernColors.background}60, 0 0 0 1px ${modernColors.accent}30`,
                          backdropFilter: "blur(20px)",
                        }}
                        initial={{ opacity: 0, x: -20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-r opacity-10 rounded-xl"
                          style={{
                            background: `linear-gradient(90deg, ${modernColors.accent}, ${modernColors.secondary})`,
                          }}
                        />
                        <div className="relative flex items-center space-x-2">
                          <span className="text-sm font-semibold">
                            {item.label}
                          </span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 rounded-full"
                      style={{ backgroundColor: modernColors.accent }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative overflow-hidden backdrop-blur-xl border-b"
          style={{
            backgroundColor: isScrolled
              ? `${modernColors.surface}95`
              : `${modernColors.surface}80`,
            borderColor: `${modernColors.primary}40`,
          }}
          animate={{
            boxShadow: isScrolled
              ? `0 10px 30px ${modernColors.background}50`
              : "none",
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              background: `linear-gradient(90deg, ${modernColors.accent}20, ${modernColors.secondary}20, transparent)`,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="relative flex items-center justify-between px-4 py-3">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.secondary})`,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Code className="w-3 h-3 text-white" />
              </motion.div>

              <motion.h1
                className="text-lg font-bold"
                style={{
                  background: `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Portfolio
              </motion.h1>
            </motion.div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: isMenuOpen
                  ? `${modernColors.accent}20`
                  : "transparent",
                color: modernColors.text,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: `${modernColors.accent}10`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 lg:hidden backdrop-blur-sm"
              style={{ backgroundColor: `${modernColors.background}90` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 lg:hidden overflow-hidden"
              style={{
                backgroundColor: `${modernColors.surface}95`,
                borderLeft: `1px solid ${modernColors.primary}40`,
                backdropFilter: "blur(20px)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background: `linear-gradient(180deg, ${modernColors.accent}, ${modernColors.secondary}, transparent)`,
                }}
              />

              <div className="relative h-full overflow-y-auto">
                <div
                  className="px-6 py-6 border-b"
                  style={{ borderColor: `${modernColors.primary}30` }}
                >
                  <motion.h2
                    className="text-2xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Navigation
                  </motion.h2>
                </div>

                <div className="px-4 py-4 space-y-1">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full group relative overflow-hidden flex items-center space-x-4 p-3 text-left rounded-2xl transition-all duration-300"
                        style={{
                          color: isActive
                            ? modernColors.accent
                            : modernColors.text,
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.04 + 0.1,
                          duration: 0.3,
                        }}
                        whileHover={{
                          x: 8,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(135deg, ${modernColors.accent}10, ${modernColors.secondary}05)`,
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 rounded-full"
                            style={{ backgroundColor: modernColors.accent }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}

                        <motion.div
                          className="relative z-10 p-2 rounded-xl"
                          style={{
                            backgroundColor: isActive
                              ? `${modernColors.accent}15`
                              : "transparent",
                          }}
                          whileHover={{
                            backgroundColor: `${modernColors.accent}10`,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>

                        <div className="relative z-10 flex-1">
                          <span className="text-base font-semibold">
                            {item.label}
                          </span>
                        </div>

                        <motion.div
                          className="relative z-10 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight
                            className="w-5 h-5"
                            style={{ color: modernColors.accent }}
                          />
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="h-8" />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden sm:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          scale: isScrolled ? 1 : 0.8,
          rotate: scrollProgress * 3.6,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative w-16 h-16 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div
            className="absolute inset-0 rounded-full backdrop-blur-xl border"
            style={{
              backgroundColor: `${modernColors.surface}80`,
              borderColor: `${modernColors.primary}40`,
              boxShadow: `0 8px 32px ${modernColors.background}50`,
            }}
          />

          <svg
            className="w-16 h-16 transform -rotate-90 absolute inset-0"
            viewBox="0 0 36 36"
          >
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={`${modernColors.primary}60`}
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={modernColors.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{
                strokeDasharray: "100, 100",
                strokeDashoffset: 100 - scrollProgress,
                transition: "stroke-dashoffset 0.1s ease-out",
                filter: `drop-shadow(0 0 6px ${modernColors.accent}40)`,
              }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <Home className="w-5 h-5" style={{ color: modernColors.accent }} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
