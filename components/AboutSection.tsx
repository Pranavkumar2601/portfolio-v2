import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react"; // Assuming usage of lucide-react for icons

// --- Placeholder Components & Types ---
// These are mockups of components/variables you likely have in your project.
// Replace them with your actual imports.

const modernColors = {
  primary: "#3b82f6",
  secondary: "#8b5cf6",
  accent: "#ec4899",
  text: "#e5e7eb",
  muted: "#9ca3af",
  surface: "#1f2937",
  background: "#111827",
  success: "#22c55e",
};

// A simple placeholder for your AnimatedBackground component
const AnimatedBackground = ({
  sectionColor,
  variant,
}: {
  sectionColor: string;
  variant: string;
}) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle, ${sectionColor}33 0%, transparent 70%)`,
      zIndex: 0,
    }}
    data-variant={variant}
  />
);

// Simple placeholders for your Card components
const Card = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={className} style={style}>
    {children}
  </div>
);

const CardContent = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={className} style={style}>
    {children}
  </div>
);

// --- Main Component ---

interface AboutSectionProps {
  // You can pass props here if needed, e.g., for colors or content
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const aboutParagraphs = [
    "I hold a Master of Computer Applications (MCA) from PES University, Bangalore, where I graduated with a 7.79/10.0 GPA and received distinction awards for academic excellence. My curriculum provided a robust grounding in algorithms, data structures, and software engineering principles, and instilled in me a deep appreciation for continual learning and innovation.",
    "My skill set encompasses full‑stack web development, machine learning, and cloud computing. I’ve designed and delivered end‑to‑end solutions using Python, React, Angular, and AWS, among other technologies. In addition, I’ve contributed to published research in sports analytics—applying predictive modeling to optimize player selection—which underscores my commitment to data‑driven decision‑making.",
    "Beyond code, I’m an avid gamer and sci‑fi enthusiast—interests that fuel my creativity and problem‑solving mindset. I thrive on translating complex challenges into intuitive digital experiences, and I approach every freelance engagement with curiosity, clear communication, and a dedication to delivering tangible value.",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
      style={{ background: modernColors.background }} // Added a base background for context
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
            {aboutParagraphs.map((text, index) => (
              <motion.p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-justify"
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ once: false, amount: 0.8 }} // Trigger when 80% is visible
                animate={{
                  color:
                    activeIndex === index
                      ? modernColors.text
                      : modernColors.muted,
                  opacity: activeIndex === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {text}
              </motion.p>
            ))}

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
              className="border-2 backdrop-blur-sm rounded-lg"
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
  );
};

export default AboutSection;
