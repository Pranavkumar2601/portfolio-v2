"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

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

interface AnimatedBackgroundProps {
  sectionColor?: string;
  variant?:
    | "home"
    | "about"
    | "skills"
    | "projects"
    | "experience"
    | "contact"
    | "education"
    | "research";
}

export default function AnimatedBackground({
  sectionColor = modernColors.accent,
  variant = "home",
}: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variantElements = useMemo(() => {
    // Use deterministic positions for initial render to prevent hydration mismatch
    const getDeterministicPosition = (index: number, base: number = 25) => {
      return base + ((index * 15) % 70);
    };

    switch (variant) {
      case "home":
        return (
          <>
            {/* Reduced number of floating orbs for better performance */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute rounded-full blur-xl opacity-20 will-change-transform"
                style={{
                  background: `radial-gradient(circle, ${sectionColor}, transparent)`,
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${getDeterministicPosition(i, 20)}%`,
                  top: `${getDeterministicPosition(i, 30)}%`,
                }}
                animate={
                  isClient
                    ? {
                        x: [0, 50, -25, 0],
                        y: [0, -50, 25, 0],
                        scale: [1, 1.1, 0.9, 1],
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }
                    : {}
                }
                transition={{
                  duration: 8 + i * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </>
        );

      case "projects":
        return (
          <>
            {/* Reduced geometric shapes */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`geo-${i}`}
                className="absolute opacity-10 will-change-transform"
                style={{
                  left: `${getDeterministicPosition(i, 30)}%`,
                  top: `${getDeterministicPosition(i, 40)}%`,
                }}
                animate={
                  isClient
                    ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }
                    : {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }
                }
                transition={{
                  duration: 12 + i * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: i * 1,
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <polygon
                    points="30,5 55,20 55,40 30,55 5,40 5,20"
                    fill="none"
                    stroke={sectionColor}
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            ))}
          </>
        );

      case "skills":
        return (
          <>
            {/* Reduced code particles */}
            {[...Array(10)].map((_, i) => {
              const symbols = ["</>", "{}", "[]", "()"];
              const symbol = symbols[i % symbols.length];
              return (
                <motion.div
                  key={`code-${i}`}
                  className="absolute text-xs font-mono opacity-20 will-change-transform"
                  style={{
                    color: sectionColor,
                    left: `${getDeterministicPosition(i, 10)}%`,
                    top: `${getDeterministicPosition(i, 20)}%`,
                  }}
                  animate={
                    isClient
                      ? {
                          y: [0, -30, 0],
                          opacity: [0.2, 0.4, 0.2],
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }
                      : {
                          y: [0, -30, 0],
                          opacity: [0.2, 0.4, 0.2],
                        }
                  }
                  transition={{
                    duration: 2 + (i % 3),
                    repeat: Number.POSITIVE_INFINITY,
                    delay: (i % 2) * 0.5,
                  }}
                >
                  {symbol}
                </motion.div>
              );
            })}
          </>
        );

      default:
        return (
          <>
            {/* Reduced default particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full opacity-30 will-change-transform"
                style={{
                  backgroundColor: sectionColor,
                  left: `${getDeterministicPosition(i, 15)}%`,
                  top: `${getDeterministicPosition(i, 25)}%`,
                }}
                animate={
                  isClient
                    ? {
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }
                    : {
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }
                }
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: (i % 2) * 0.5,
                }}
              />
            ))}
          </>
        );
    }
  }, [variant, sectionColor, isClient]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${modernColors.primary}40 0%, ${modernColors.background} 50%, ${modernColors.surface}20 100%)`,
        }}
      />

      {/* Optimized Mouse Follow Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 will-change-transform"
        style={{
          background: `radial-gradient(circle, ${sectionColor}, transparent)`,
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Variant-specific Elements */}
      {variantElements}

      {/* Simplified Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${sectionColor} 1px, transparent 1px), linear-gradient(90deg, ${sectionColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
