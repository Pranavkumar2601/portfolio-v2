"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import AnimatedBackground from "./animated-background";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "🌐",
    description:
      "Full-stack web applications with modern technologies and scalable architecture",
    shortDesc: "Modern web applications",
    features: [
      "React, Next.js, Vue.js Frontend Development",
      "Node.js, Express, Python Backend Solutions",
      "Database Design (MongoDB, PostgreSQL, MySQL)",
      "RESTful APIs & GraphQL Implementation",
      "Responsive & Mobile-First Design",
      "Performance Optimization & SEO",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "AWS",
    ],
    pricing: "₹15,000 minimum",
    timeline: "2-8 weeks",
    color: "#00D4FF",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 via-cyan-500/5 to-transparent",
  },
  {
    id: "app-development",
    title: "Mobile App Development",
    icon: "📱",
    description:
      "Cross-platform mobile applications for iOS and Android with native performance",
    shortDesc: "iOS & Android apps",
    features: [
      "React Native Cross-Platform Apps",
      "Native iOS & Android Development",
      "Flutter Development",
      "UI/UX Design & Prototyping",
      "App Store Optimization",
      "Push Notifications & Analytics",
      "Offline Functionality",
      "Third-party Integrations",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Expo",
      "Redux",
    ],
    pricing: "₹25,000 minimum",
    timeline: "3-12 weeks",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-500/10 via-indigo-500/5 to-transparent",
  },
  {
    id: "web-scraping",
    title: "Web Scraping & Data Extraction",
    icon: "🕷️",
    description:
      "Automated data collection and processing solutions with anti-detection capabilities",
    shortDesc: "Data extraction automation",
    features: [
      "Large-scale Data Extraction",
      "Real-time Monitoring Systems",
      "Anti-bot Detection Bypass",
      "Data Cleaning & Processing",
      "API Integration & Data Pipelines",
      "Scheduled Automation",
      "Custom Scrapers for Any Website",
      "Data Visualization & Reports",
    ],
    technologies: [
      "Python",
      "Scrapy",
      "Selenium",
      "BeautifulSoup",
      "Pandas",
      "Docker",
      "AWS",
    ],
    pricing: "₹8,000 minimum",
    timeline: "1-4 weeks",
    color: "#10B981",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 via-emerald-500/5 to-transparent",
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    icon: "🔗",
    description:
      "Robust APIs and seamless third-party integrations with enterprise-grade security",
    shortDesc: "Backend APIs & integrations",
    features: [
      "RESTful API Development",
      "GraphQL Implementation",
      "Microservices Architecture",
      "API Documentation (Swagger/OpenAPI)",
      "Authentication & Authorization",
      "Rate Limiting & Security",
      "Third-party API Integration",
      "Webhook Implementation",
    ],
    technologies: [
      "Node.js",
      "Express",
      "FastAPI",
      "Django",
      "GraphQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    pricing: "₹12,000 minimum",
    timeline: "1-6 weeks",
    color: "#F59E0B",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/10 via-orange-500/5 to-transparent",
  },
  {
    id: "ml-ai",
    title: "Machine Learning & AI",
    icon: "🤖",
    description:
      "AI-powered solutions and custom model training with deployment support",
    shortDesc: "AI/ML solutions",
    features: [
      "Custom ML Model Development",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Predictive Analytics",
      "Model Training & Fine-tuning",
      "MLOps & Model Deployment",
      "Data Pipeline Automation",
      "AI Integration into Applications",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Hugging Face",
      "Docker",
    ],
    pricing: "₹20,000 minimum",
    timeline: "3-10 weeks",
    color: "#EF4444",
    gradient: "from-red-500 to-pink-500",
    bgColor: "from-red-500/10 via-pink-500/5 to-transparent",
  },
  {
    id: "automation",
    title: "Process Automation",
    icon: "⚙️",
    description:
      "Streamline workflows with intelligent automation and reduce manual tasks by 90%",
    shortDesc: "Workflow automation",
    features: [
      "Business Process Automation",
      "Workflow Optimization",
      "Data Entry Automation",
      "Report Generation",
      "Email & Communication Automation",
      "Cloud Infrastructure Automation",
      "Testing Automation",
      "DevOps & CI/CD Pipelines",
    ],
    technologies: [
      "Python",
      "Selenium",
      "Docker",
      "Jenkins",
      "AWS",
      "GitHub Actions",
      "Terraform",
    ],
    pricing: "₹10,000 minimum",
    timeline: "1-5 weeks",
    color: "#6366F1",
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },
];

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const featureVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "-50px",
  });

  const toggleService = useCallback((serviceId) => {
    setActiveService((prev) => (prev === serviceId ? null : serviceId));
  }, []);

  const handleCardHover = useCallback((serviceId, isHovered) => {
    setHoveredCard(isHovered ? serviceId : null);
  }, []);

  const scrollToProjects = useCallback((e) => {
    e.stopPropagation();
    const projectSelectors = [
      "#projects",
      ".projects-section",
      '[data-section="projects"]',
      'section[id*="project"]',
      ".project-section",
    ];

    let projectsElement = null;
    for (const selector of projectSelectors) {
      projectsElement = document.querySelector(selector);
      if (projectsElement) break;
    }

    if (projectsElement) {
      projectsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <AnimatedBackground variant="projects" sectionColor="#00D4FF" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#00D4FF]/20 to-[#00B8E6]/20 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-sm sm:text-base font-semibold mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              ✨ Professional Software Solutions
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <motion.span
                className="block mb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                My{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-[#00D4FF] via-[#00B8E6] to-[#0EA5E9] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Services
              </motion.span>
            </h1>
            <motion.p
              className="text-gray-400 text-lg sm:text-xl lg:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transforming ideas into powerful digital solutions with
              cutting-edge technology
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative"
              onHoverStart={() => handleCardHover(service.id, true)}
              onHoverEnd={() => handleCardHover(service.id, false)}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl lg:rounded-3xl p-6 sm:p-7 lg:p-8 h-full transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  borderColor:
                    hoveredCard === service.id || activeService === service.id
                      ? `${service.color}60`
                      : undefined,
                  boxShadow:
                    hoveredCard === service.id || activeService === service.id
                      ? `0 0 40px ${service.color}20, 0 20px 60px rgba(0,0,0,0.3)`
                      : "0 10px 30px rgba(0,0,0,0.2)",
                }}
                onClick={() => toggleService(service.id)}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor}`}
                  animate={{
                    opacity:
                      hoveredCard === service.id || activeService === service.id
                        ? 1
                        : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Floating Particles Effect */}
                {(hoveredCard === service.id ||
                  activeService === service.id) && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ backgroundColor: service.color }}
                        animate={{
                          x: [0, Math.random() * 300],
                          y: [0, Math.random() * 200],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        initial={{
                          x: Math.random() * 300,
                          y: Math.random() * 200,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Service Header */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-5">
                    <motion.span
                      className="text-3xl sm:text-4xl lg:text-5xl filter drop-shadow-lg flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: activeService === service.id ? 180 : 0,
                        color:
                          activeService === service.id ||
                          hoveredCard === service.id
                            ? service.color
                            : "#9CA3AF",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl sm:text-3xl font-light flex-shrink-0 mt-1"
                    >
                      ↓
                    </motion.div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base lg:text-lg line-clamp-3">
                    {service.description}
                  </p>

                  {/* Enhanced Pricing & Timeline */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs text-gray-500 mb-2 font-medium">
                        Starting From
                      </p>
                      <p
                        className="text-base sm:text-lg font-bold"
                        style={{ color: service.color }}
                      >
                        {service.pricing}
                      </p>
                    </motion.div>
                    <motion.div
                      className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs text-gray-500 mb-2 font-medium">
                        Timeline
                      </p>
                      <p className="text-base sm:text-lg font-bold text-white">
                        {service.timeline}
                      </p>
                    </motion.div>
                  </div>

                  {/* Enhanced Technologies Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800/70 backdrop-blur-sm text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700/50 hover:border-gray-600/70 transition-all duration-200"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: `${service.color}15`,
                          borderColor: `${service.color}40`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-3 py-1.5 bg-gradient-to-r from-gray-800/70 to-gray-700/70 text-gray-400 text-xs sm:text-sm rounded-full">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Expanded Content */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-gray-700/50 mt-4">
                        <div className="mb-6">
                          <h4 className="text-white font-bold mb-4 flex items-center text-lg sm:text-xl">
                            <motion.span
                              className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                              style={{ backgroundColor: service.color }}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            What's Included
                          </h4>
                          <div className="grid gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                custom={featureIndex}
                                variants={featureVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex items-start text-sm sm:text-base text-gray-400 p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-800/50 transition-all duration-200"
                              >
                                <motion.span
                                  className="mr-3 mt-1 flex-shrink-0 text-lg"
                                  style={{ color: service.color }}
                                  whileHover={{ scale: 1.2 }}
                                >
                                  ✓
                                </motion.span>
                                <span className="leading-relaxed">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          onClick={scrollToProjects}
                          className="w-full py-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 hover:from-gray-700/80 hover:to-gray-600/80 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-gray-500/70 backdrop-blur-sm"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: `0 10px 30px ${service.color}20`,
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex items-center justify-center gap-2">
                            View My Work
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        ></motion.div>
      </div>
    </section>
  );
}
