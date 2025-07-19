"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Home, User, GraduationCap, Code, Briefcase, Mail, FileText, Award } from "lucide-react"

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
}

const sections = [
  { id: "home", label: "Home", icon: Home, color: modernColors.accent },
  { id: "about", label: "About", icon: User, color: modernColors.secondary },
  { id: "education", label: "Education", icon: GraduationCap, color: modernColors.success },
  { id: "skills", label: "Skills", icon: Code, color: modernColors.warning },
  { id: "projects", label: "Projects", icon: Briefcase, color: modernColors.danger },
  { id: "research", label: "Research", icon: FileText, color: modernColors.secondary },
  { id: "experience", label: "Experience", icon: Award, color: modernColors.success },
  { id: "contact", label: "Contact", icon: Mail, color: "#EC4899" },
]

export default function SmoothDualTrackNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const { scrollYProgress } = useScroll()

  const trainPosition = useTransform(scrollYProgress, [0, 1], [0, (sections.length - 1) * 80])

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY < lastScrollY || scrollY < 100)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    const observerOptions = {
      threshold: 0.6,
      rootMargin: "-20% 0px -20% 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.nav
      className="fixed left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Railway Track Background */}
      <div className="relative">
        {/* Main Track */}
        <div
          className="absolute left-6 top-0 w-1 rounded-full"
          style={{
            height: `${sections.length * 80}px`,
            background: `linear-gradient(to bottom, ${modernColors.muted}40, ${modernColors.primary})`,
          }}
        />

        {/* Secondary Track */}
        <div
          className="absolute left-8 top-0 w-0.5 rounded-full"
          style={{
            height: `${sections.length * 80}px`,
            background: `linear-gradient(to bottom, ${modernColors.muted}20, ${modernColors.primary}60)`,
          }}
        />

        {/* Animated Train */}
        <motion.div
          className="absolute left-4 w-6 h-6 rounded-full border-2 shadow-lg backdrop-blur-sm"
          style={{
            y: trainPosition,
            backgroundColor: sections.find((s) => s.id === activeSection)?.color || modernColors.accent,
            borderColor: modernColors.surface,
            boxShadow: `0 0 20px ${sections.find((s) => s.id === activeSection)?.color || modernColors.accent}40`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <motion.div
            className="absolute inset-1 rounded-full"
            style={{
              backgroundColor: sections.find((s) => s.id === activeSection)?.color || modernColors.accent,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Navigation Stations */}
        <div className="relative space-y-4">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id
            const Icon = section.icon

            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: isActive ? `${section.color}20` : "transparent",
                  border: `1px solid ${isActive ? section.color : "transparent"}`,
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Station Marker */}
                <div
                  className="w-4 h-4 rounded-full border-2 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? section.color : modernColors.surface,
                    borderColor: isActive ? section.color : modernColors.muted,
                    boxShadow: isActive ? `0 0 15px ${section.color}40` : "none",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? `${section.color}30` : `${modernColors.surface}80`,
                    border: `1px solid ${isActive ? section.color : modernColors.muted}40`,
                  }}
                >
                  <Icon
                    className="w-4 h-4 transition-colors duration-300"
                    style={{ color: isActive ? section.color : modernColors.muted }}
                  />
                </div>

                {/* Label */}
                <motion.span
                  className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block"
                  style={{ color: isActive ? section.color : modernColors.text }}
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {section.label}
                </motion.span>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -right-2 w-1 h-8 rounded-full"
                    style={{ backgroundColor: section.color }}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover Tooltip for Mobile */}
                <div
                  className="absolute left-full ml-2 px-2 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none lg:hidden"
                  style={{
                    backgroundColor: `${modernColors.surface}E6`,
                    color: modernColors.text,
                    border: `1px solid ${modernColors.muted}40`,
                  }}
                >
                  {section.label}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="absolute -right-4 top-0 w-1 rounded-full"
          style={{
            height: `${sections.length * 80}px`,
            backgroundColor: `${modernColors.muted}20`,
          }}
        >
          <motion.div
            className="w-full rounded-full"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              backgroundColor: sections.find((s) => s.id === activeSection)?.color || modernColors.accent,
            }}
          />
        </motion.div>
      </div>
    </motion.nav>
  )
}
