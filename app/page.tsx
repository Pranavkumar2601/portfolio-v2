"use client";

import SmoothDualTrackNavigation from "@/components/smooth-dual-track-navigation";
import AnimatedBackground from "@/components/animated-background";
import EducationSection from "@/components/education-section";
import RealProjectsSection from "@/components/real-projects-section";
import ResearchSection from "@/components/research-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/skills-section";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { modernColors } from "@/data/education";

export default function Portfolio() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Pranav_Resume.pdf";
    link.download = "Pranav_Resume.pdf";
    link.click();
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE}`;
  };

  const handleLinkedInClick = () => {
    window.open(
      process.env.NEXT_PUBLIC_LINKEDIN,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGitHubClick = () => {
    window.open(
      process.env.NEXT_PUBLIC_GITHUB,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: modernColors.background }}
    >
      <SmoothDualTrackNavigation />

      <main className="relative z-10">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
        >
          <AnimatedBackground
            sectionColor={modernColors.accent}
            variant="home"
          />

          <div className="container mx-auto text-center relative z-10 lg:ml-20 xl:ml-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <div className="relative inline-block">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-50"
                  style={{
                    background: `linear-gradient(45deg, ${modernColors.accent}, ${modernColors.secondary})`,
                  }}
                />
                <div
                  className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full p-1"
                  style={{
                    background: `linear-gradient(45deg, ${modernColors.accent}, ${modernColors.secondary})`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundColor: modernColors.surface,
                    }}
                  >
                    <Image
                      src="/me2.webp"
                      alt="Pranav Kumar"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 sm:border-4 flex items-center justify-center"
                  style={{
                    backgroundColor: modernColors.success,
                    borderColor: modernColors.surface,
                    color: modernColors.background,
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="text-xs sm:text-sm font-bold">✓</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
                <span style={{ color: modernColors.text }}>Hi, I'm </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{
                    background: `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.secondary})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className="block sm:inline"
                >
                  {process.env.NEXT_PUBLIC_OWNER_NAME || "Pranav Kumar"}
                </motion.span>
              </h1>

              <div className="space-y-3 sm:space-y-4">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium"
                  style={{ color: modernColors.muted }}
                >
                  Software Engineer & FreeLancer
                </h2>
                <div
                  className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-sm sm:text-base lg:text-lg"
                  style={{ color: modernColors.text }}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Bangalore, India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-center sm:text-left">
                      Available for opportunities
                    </span>
                  </div>
                </div>
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
                  style={{ color: modernColors.muted }}
                >
                  I am driven by a passion for continuous learning and
                  innovation, with a clear goal to build impactful products that
                  solve real-world problems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 mt-8 sm:mt-12 px-4 sm:px-0"
            >
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, ${modernColors.accent}, ${modernColors.secondary})`,
                  boxShadow: `0 0 20px ${modernColors.accent}70`,
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleEmailClick}
                className="font-semibold transition-all duration-300"
                style={{
                  color: modernColors.accent,
                  borderColor: modernColors.accent,
                  backgroundColor: "transparent",
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Say Hello
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGitHubClick}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: `${modernColors.surface}80`,
                  color: modernColors.text,
                }}
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLinkedInClick}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: `${modernColors.surface}80`,
                  color: "#0A66C2",
                }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePhoneClick}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: `${modernColors.surface}80`,
                  color: modernColors.success,
                }}
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 sm:mt-20"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="flex justify-center"
              >
                <ArrowDown
                  className="w-6 h-6 opacity-50"
                  style={{ color: modernColors.muted }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* All Other Sections - Now Clean and Organized */}
        <AboutSection />
        <SkillsSection />
        <Services />
        <EducationSection />
        <ExperienceSection />
        <RealProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>
    </div>
  );
}
