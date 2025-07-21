"use client";

import SmoothDualTrackNavigation from "@/components/smooth-dual-track-navigation";
import AnimatedBackground from "@/components/animated-background";
import EducationSection from "@/components/education-section";
import RealProjectsSection from "@/components/real-projects-section";
import ResearchSection from "@/components/research-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
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
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

// Real skills data from resume
const skillsData = {
  development: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Flask",
    "Angular",
    ".Net",
    "React",
    "Node",
    "Next",
  ],
  database: ["SQL", "MySQL", "PostgreSQL", "AWS RDS"],
  languages: ["Python", "C", "Java", "C#", "Typescript"],
  mlFrameworks: [
    "Numpy",
    "Pandas",
    "Scikit-learn",
    "Seaborn",
    "Random Forest",
    "KNN",
    "Decision Tree",
    "Matplotlib",
  ],
  others: [
    "Machine learning",
    "Agile Methodology",
    "Git",
    "Prompt Engineering",
  ],
};

export default function Portfolio() {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement("a");
    link.href = "/Pranav_Resume.pdf"; // Using the uploaded resume image
    link.download = "Pranav_Resume.pdf";
    link.click();
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:pranavsingh9471@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919955388960";
  };

  const handleLinkedInClick = () => {
    window.open("www.linkedin.com/in/pranav-kumar-279a741a0", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Pranavkumar2601", "_blank");
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
                  Pranav Kumar
                </motion.span>
              </h1>

              <div className="space-y-3 sm:space-y-4">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium"
                  style={{ color: modernColors.muted }}
                >
                  MCA Graduate & Software Engineer
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
                  MCA graduate from PES University, Bangalore, with specialized
                  expertise in machine learning, full‑stack web development, and
                  applied research. I am dedicated to delivering high‑quality,
                  scalable, data‑driven digital solutions that solve complex
                  challenges and drive measurable results for my clients.
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
                className="text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                style={{
                  background: `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.secondary})`,
                  border: "none",
                }}
              >
                <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-semibold transition-all duration-300 hover:shadow-xl bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                style={{
                  borderColor: modernColors.accent,
                  color: modernColors.accent,
                  backgroundColor: "transparent",
                }}
              >
                View My Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-12 sm:mb-16 px-4 sm:px-0"
            >
              {[
                { icon: Github, onClick: handleGitHubClick, label: "GitHub" },
                {
                  icon: Linkedin,
                  onClick: handleLinkedInClick,
                  label: "LinkedIn",
                },
                { icon: Mail, onClick: handleEmailClick, label: "Email" },
                { icon: Phone, onClick: handlePhoneClick, label: "Phone" },
              ].map(({ icon: Icon, onClick, label }) => (
                <motion.button
                  key={label}
                  onClick={onClick}
                  className="p-3 sm:p-4 rounded-full border-2 transition-all duration-300 hover:shadow-2xl"
                  style={{
                    borderColor: modernColors.muted,
                    backgroundColor: `${modernColors.surface}80`,
                    color: modernColors.text,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    borderColor: modernColors.accent,
                    backgroundColor: `${modernColors.accent}20`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
              className="pt-4 sm:pt-8"
            >
              <ArrowDown
                className="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
                style={{ color: modernColors.accent }}
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
        >
          <AnimatedBackground
            sectionColor={modernColors.secondary}
            variant="about"
          />

          <div className="container mx-auto relative z-10 lg:ml-20 xl:ml-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                style={{ color: modernColors.text }}
              >
                About{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${modernColors.secondary}, ${modernColors.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Me
                </span>
              </h2>
              <div
                className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6 sm:mb-8"
                style={{
                  background: `linear-gradient(90deg, ${modernColors.secondary}, ${modernColors.accent})`,
                }}
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6 order-2 lg:order-1"
              >
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: modernColors.muted }}
                >
                  I hold a Master of Computer Applications (MCA) from PES
                  University, Bangalore, where I graduated with a 7.79/10.0 GPA
                  and received distinction awards for academic excellence. My
                  curriculum provided a robust grounding in algorithms, data
                  structures, and software engineering principles, and instilled
                  in me a deep appreciation for continual learning and
                  innovation.
                </p>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: modernColors.muted }}
                >
                  My skill set encompasses full‑stack web development, machine
                  learning, and cloud computing. I’ve designed and delivered
                  end‑to‑end solutions using Python, React, Angular, and AWS,
                  among other technologies. In addition, I’ve contributed to
                  published research in sports analytics—applying predictive
                  modeling to optimize player selection—which underscores my
                  commitment to data‑driven decision‑making.
                </p>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: modernColors.muted }}
                >
                  Beyond code, I’m an avid gamer and sci‑fi enthusiast—interests
                  that fuel my creativity and problem‑solving mindset. I thrive
                  on translating complex challenges into intuitive digital
                  experiences, and I approach every freelance engagement with
                  curiosity, clear communication, and a dedication to delivering
                  tangible value.
                </p>

                <div
                  className="flex items-center space-x-4 pt-4"
                  style={{ color: modernColors.text }}
                >
                  <MapPin className="w-5 h-5" />
                  <span className="text-base sm:text-lg">
                    Based in Bangalore, India
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 order-1 lg:order-2"
              >
                <Card
                  className="border-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${modernColors.surface}80`,
                    borderColor: modernColors.secondary,
                  }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-4"
                      style={{ color: modernColors.text }}
                    >
                      Quick Facts
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.muted }}
                        >
                          Education:
                        </span>
                        <span
                          className="text-sm sm:text-base text-right"
                          style={{ color: modernColors.text }}
                        >
                          MCA, PES University
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.muted }}
                        >
                          GPA:
                        </span>
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.success }}
                        >
                          7.79/10.0
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.muted }}
                        >
                          Research:
                        </span>
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.text }}
                        >
                          Published Author
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.muted }}
                        >
                          Experience:
                        </span>
                        <span
                          className="text-sm sm:text-base text-right"
                          style={{ color: modernColors.text }}
                        >
                          ML & Full-Stack
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.muted }}
                        >
                          Location:
                        </span>
                        <span
                          className="text-sm sm:text-base"
                          style={{ color: modernColors.text }}
                        >
                          Bangalore, India
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <EducationSection />

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
        >
          <AnimatedBackground
            sectionColor={modernColors.warning}
            variant="skills"
          />

          <div className="container mx-auto relative z-10 lg:ml-20 xl:ml-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                style={{ color: modernColors.text }}
              >
                Skills &{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${modernColors.warning}, ${modernColors.danger})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Technologies
                </span>
              </h2>
              <div
                className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6 sm:mb-8"
                style={{
                  background: `linear-gradient(90deg, ${modernColors.warning}, ${modernColors.danger})`,
                }}
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {Object.entries(skillsData).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    className="h-full border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                    style={{
                      backgroundColor: `${modernColors.surface}80`,
                      borderColor: modernColors.warning,
                    }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <h3
                        className="text-lg sm:text-xl font-semibold mb-4 capitalize"
                        style={{ color: modernColors.text }}
                      >
                        {category.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full"
                            style={{
                              backgroundColor: `${modernColors.warning}20`,
                              color: modernColors.warning,
                              border: `1px solid ${modernColors.warning}40`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <RealProjectsSection />

        {/* Research Section */}
        <ResearchSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}
