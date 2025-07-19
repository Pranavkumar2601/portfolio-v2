"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Award, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { lazy, Suspense } from "react";

const AnimatedBackground = lazy(() => import("./animated-background"));

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

const researchData = [
  {
    id: 1,
    title:
      "Beyond The Boundary: Cricket Player Selection Using Performance Analytics",
    journal: "International Journal of Computer Applications-Springer",
    volume: "",
    date: "November 2024",
    doi: "N/A",
    authors: ["Pranav Kumar", "MS. Samyuktha B"],
    abstract:
      "This research presents a comprehensive machine learning approach to optimize cricket player selection through advanced performance analytics. The study leverages historical player data, statistical analysis, and predictive modeling to provide data-driven recommendations for team composition and player substitutions during matches.",
    keywords: [
      "Machine Learning",
      "Sports Analytics",
      "Cricket",
      "Performance Analysis",
      "Data Mining",
    ],
    methodology: [
      "Data Collection from multiple cricket databases",
      "Feature Engineering and Statistical Analysis",
      "Machine Learning Model Development (Random Forest, KNN, Decision Trees)",
      "Performance Evaluation and Validation",
      "Real-time Recommendation System Implementation",
    ],
    results: [
      "Achieved 87% accuracy in player performance prediction",
      "Reduced team selection time by 60%",
      "Improved match outcome prediction by 23%",
      "Successfully deployed on AWS EC2 with real-time capabilities",
    ],
    impact: "High",
    citations: "N/A",
    downloads: "N/A",
    color: modernColors.secondary,
  },
];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
    >
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-slate-800" />
        }
      >
        <AnimatedBackground
          sectionColor={modernColors.secondary}
          variant="research"
        />
      </Suspense>

      <div className="container mx-auto relative z-10 lg:ml-20 xl:ml-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            style={{ color: modernColors.text }}
          >
            Research &{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${modernColors.secondary}, ${modernColors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Publications
            </span>
          </h2>
          <div
            className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6 sm:mb-8"
            style={{
              background: `linear-gradient(90deg, ${modernColors.secondary}, ${modernColors.accent})`,
            }}
          />
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: modernColors.muted }}
          >
            Published research contributions in the field of sports analytics
            and machine learning
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {researchData.map((research, index) => (
            <motion.div
              key={research.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card
                className="border-2 backdrop-blur-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor: `${modernColors.surface}E6`,
                  borderColor: research.color,
                  boxShadow: `0 20px 60px ${research.color}20`,
                }}
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <FileText
                          className="w-6 h-6"
                          style={{ color: research.color }}
                        />
                        <span
                          className="px-3 py-1 text-xs font-semibold rounded-full"
                          style={{
                            backgroundColor: `${research.color}20`,
                            color: research.color,
                            border: `1px solid ${research.color}40`,
                          }}
                        >
                          Published Research
                        </span>
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-2"
                        style={{ color: modernColors.text }}
                      >
                        {research.title}
                      </h3>
                      <p
                        className="text-base sm:text-lg font-medium mb-2"
                        style={{ color: research.color }}
                      >
                        {research.journal}
                      </p>
                      <div
                        className="flex flex-wrap items-center gap-4 text-sm"
                        style={{ color: modernColors.muted }}
                      >
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{research.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4" />
                          <span>{research.volume}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{research.citations} citations</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 lg:text-right">
                      <div className="text-center lg:text-right">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: research.color }}
                        >
                          {research.citations}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: modernColors.muted }}
                        >
                          Citations
                        </div>
                      </div>
                      <div className="text-center lg:text-right">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: modernColors.success }}
                        >
                          {research.downloads}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: modernColors.muted }}
                        >
                          Downloads
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Authors */}
                  <div className="mb-6">
                    <h4
                      className="text-sm font-semibold mb-2"
                      style={{ color: modernColors.text }}
                    >
                      Authors:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {research.authors.map((author, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{
                            backgroundColor: `${modernColors.primary}80`,
                            color: modernColors.text,
                            border: `1px solid ${modernColors.muted}20`,
                          }}
                        >
                          {author}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="mb-6">
                    <h4
                      className="text-sm font-semibold mb-3"
                      style={{ color: modernColors.text }}
                    >
                      Abstract:
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: modernColors.muted }}
                    >
                      {research.abstract}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="mb-6">
                    <h4
                      className="text-sm font-semibold mb-3"
                      style={{ color: modernColors.text }}
                    >
                      Keywords:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {research.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-2 py-1 text-xs font-medium rounded-md"
                          style={{
                            backgroundColor: `${research.color}20`,
                            color: research.color,
                            border: `1px solid ${research.color}40`,
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Methodology & Results Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Methodology */}
                    <div>
                      <h4
                        className="text-sm font-semibold mb-3"
                        style={{ color: modernColors.text }}
                      >
                        Methodology:
                      </h4>
                      <ul className="space-y-2">
                        {research.methodology.map((method, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm"
                            style={{ color: modernColors.muted }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                              style={{ backgroundColor: research.color }}
                            />
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4
                        className="text-sm font-semibold mb-3"
                        style={{ color: modernColors.text }}
                      >
                        Key Results:
                      </h4>
                      <ul className="space-y-2">
                        {research.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm"
                            style={{ color: modernColors.muted }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                              style={{ backgroundColor: modernColors.success }}
                            />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* DOI and Action Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-700">
                    <div
                      className="text-sm"
                      style={{ color: modernColors.muted }}
                    >
                      <strong>DOI:</strong> {research.doi}
                    </div>
                    <Button
                      className="font-semibold transition-all duration-300"
                      style={{
                        backgroundColor: research.color,
                        color: "white",
                        border: "none",
                      }}
                      onClick={() =>
                        window.open(`https://doi.org/${research.doi}`, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Research Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-12 sm:mt-16"
        >
          <p
            className="text-base sm:text-lg"
            style={{ color: modernColors.muted }}
          >
            Interested in collaboration or have questions about my research?{" "}
            <a
              href="mailto:pranavsingh9471@gmail.com"
              className="font-semibold hover:underline transition-colors duration-300"
              style={{ color: modernColors.secondary }}
            >
              Get in touch
            </a>{" "}
            to discuss potential opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
