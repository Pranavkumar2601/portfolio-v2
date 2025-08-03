"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  educationData,
  certifications,
  modernColors,
  type EducationData,
  type CertificationData,
} from "@/data/education";

export default function EducationSection() {
  const [rotation, setRotation] = useState(0);

  const numItems = certifications.length;
  const angleIncrement = 360 / numItems;
  const radius = 280;

  const handleNext = () => {
    setRotation(rotation - angleIncrement);
  };

  const handlePrev = () => {
    setRotation(rotation + angleIncrement);
  };

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden font-inter"
      style={{ backgroundColor: modernColors.background }}
    >
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
            Education &{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.success})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Qualifications
            </span>
          </h2>
          <div
            className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6 sm:mb-8"
            style={{
              background: `linear-gradient(90deg, ${modernColors.accent}, ${modernColors.success})`,
            }}
          />
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: modernColors.muted }}
          >
            Academic journey marked by excellence, research contributions, and
            continuous learning
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                    backgroundColor: `${modernColors.surface}80`,
                    borderColor: edu.color,
                    boxShadow: `0 20px 60px ${edu.color}20`,
                  }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                      {/* Left Column - Main Info */}
                      <div className="lg:w-2/3">
                        <div className="flex items-start space-x-4 mb-4">
                          <div
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${edu.color}20`,
                              border: `2px solid ${edu.color}`,
                            }}
                          >
                            <edu.icon
                              className="w-6 h-6 sm:w-8 sm:h-8"
                              style={{ color: edu.color }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3
                              className="text-xl sm:text-2xl font-bold mb-2"
                              style={{ color: modernColors.text }}
                            >
                              {edu.degree}
                            </h3>
                            <p
                              className="text-base sm:text-lg font-medium mb-2"
                              style={{ color: edu.color }}
                            >
                              {edu.institution}
                            </p>
                            <div
                              className="flex flex-wrap items-center gap-4 text-sm"
                              style={{ color: modernColors.muted }}
                            >
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* GPA and Grade */}
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div
                            className="px-4 py-2 rounded-lg"
                            style={{
                              backgroundColor: `${modernColors.success}20`,
                              border: `1px solid ${modernColors.success}40`,
                            }}
                          >
                            <div
                              className="text-sm"
                              style={{ color: modernColors.muted }}
                            >
                              GPA
                            </div>
                            <div
                              className="text-lg font-bold"
                              style={{ color: modernColors.success }}
                            >
                              {edu.gpa}
                            </div>
                          </div>
                          <div
                            className="px-4 py-2 rounded-lg"
                            style={{
                              backgroundColor: `${edu.color}20`,
                              border: `1px solid ${edu.color}40`,
                            }}
                          >
                            <div
                              className="text-sm"
                              style={{ color: modernColors.muted }}
                            >
                              Grade
                            </div>
                            <div
                              className="text-sm font-semibold"
                              style={{ color: edu.color }}
                            >
                              {edu.grade}
                            </div>
                          </div>
                        </div>

                        {/* Specialization */}
                        <div className="mb-6">
                          <h4
                            className="text-sm font-semibold mb-2"
                            style={{ color: modernColors.text }}
                          >
                            Specialization:
                          </h4>
                          <p
                            className="text-sm"
                            style={{ color: modernColors.muted }}
                          >
                            {edu.specialization}
                          </p>
                        </div>

                        {/* Coursework */}
                        <div className="mb-6">
                          <h4
                            className="text-sm font-semibold mb-3"
                            style={{ color: modernColors.text }}
                          >
                            Key Coursework:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-2 py-1 text-xs font-medium rounded-md"
                                style={{
                                  backgroundColor: `${modernColors.primary}80`,
                                  color: modernColors.text,
                                  border: `1px solid ${modernColors.muted}20`,
                                }}
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Achievements & Projects */}
                      <div className="lg:w-1/3 space-y-6">
                        {/* Achievements */}
                        <div>
                          <h4
                            className="text-sm font-semibold mb-3 flex items-center"
                            style={{ color: modernColors.text }}
                          >
                            <Award
                              className="w-4 h-4 mr-2"
                              style={{ color: edu.color }}
                            />
                            Achievements
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm"
                                style={{ color: modernColors.muted }}
                              >
                                <Star
                                  className="w-3 h-3 mr-2 mt-1 flex-shrink-0"
                                  style={{ color: edu.color }}
                                />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Major Projects */}
                        <div>
                          <h4
                            className="text-sm font-semibold mb-3"
                            style={{ color: modernColors.text }}
                          >
                            Major Projects:
                          </h4>
                          <ul className="space-y-2">
                            {edu.projects.map((project, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm"
                                style={{ color: modernColors.muted }}
                              >
                                <div
                                  className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                                  style={{ backgroundColor: edu.color }}
                                />
                                <span>{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Carousel Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
            style={{
              background: `linear-gradient(135deg, ${modernColors.accent}, ${modernColors.success})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
            }}
          >
            Certifications & Training
          </h3>
          <div
            className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6"
            style={{
              background: `linear-gradient(90deg, ${modernColors.accent}, ${modernColors.success})`,
            }}
          />

          {/* Carousel Scene Container */}
          <div
            className="relative w-full h-[300px] sm:h-[350px] mx-auto"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              className="absolute w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: rotation }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="absolute w-[240px] h-[280px] sm:w-[280px] sm:h-[320px] top-1/2 left-1/2 -mt-[140px] -ml-[120px] sm:-mt-[160px] sm:-ml-[140px]"
                  style={{
                    transform: `rotateY(${
                      index * angleIncrement
                    }deg) translateZ(${radius}px)`,
                  }}
                >
                  <Card
                    className="border-2 backdrop-blur-sm transition-all duration-300 h-full flex flex-col justify-center"
                    style={{
                      backgroundColor: `${modernColors.surface}80`,
                      borderColor: cert.color,
                      boxShadow: `0 0 30px ${cert.color}20`,
                    }}
                  >
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{
                          backgroundColor: `${cert.color}20`,
                          border: `2px solid ${cert.color}`,
                        }}
                      >
                        <Award
                          className="w-6 h-6"
                          style={{ color: cert.color }}
                        />
                      </div>
                      <h4
                        className="text-base sm:text-lg font-semibold mb-2"
                        style={{ color: modernColors.text }}
                      >
                        {cert.title}
                      </h4>
                      <p
                        className="text-sm mb-2"
                        style={{ color: modernColors.muted }}
                      >
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-xs">
                        <span style={{ color: modernColors.muted }}>
                          {cert.date}
                        </span>
                        <span
                          className="px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor:
                              cert.status === "Completed"
                                ? `${modernColors.success}20`
                                : `${modernColors.warning}20`,
                            color:
                              cert.status === "Completed"
                                ? modernColors.success
                                : modernColors.warning,
                          }}
                        >
                          {cert.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1, backgroundColor: modernColors.primary }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full transition-colors"
              style={{
                backgroundColor: `${modernColors.surface}90`,
                border: `1px solid ${modernColors.muted}40`,
                color: modernColors.text,
              }}
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1, backgroundColor: modernColors.primary }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full transition-colors"
              style={{
                backgroundColor: `${modernColors.surface}90`,
                border: `1px solid ${modernColors.muted}40`,
                color: modernColors.text,
              }}
              aria-label="Next certification"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
