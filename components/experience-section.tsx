"use client";

import { motion } from "framer-motion";
import React from "react";
import { Briefcase, Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { experienceData } from "@/data/experience";
import { modernColors } from "@/data/education";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden font-inter"
      style={{ backgroundColor: modernColors.background }}
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            style={{ color: modernColors.text }}
          >
            Professional{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${modernColors.success}, ${modernColors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </h2>
          <div
            className="w-16 sm:w-20 lg:w-24 h-1 rounded-full mx-auto mb-6 sm:mb-8"
            style={{
              background: `linear-gradient(90deg, ${modernColors.success}, ${modernColors.accent})`,
            }}
          />
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: modernColors.muted }}
          >
            Hands-on experience in full-stack development, AI model training,
            and enterprise application engineering.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 transform sm:-translate-x-1/2"
            style={{
              background: `linear-gradient(to bottom, ${modernColors.surface}, ${modernColors.success}, ${modernColors.surface})`,
            }}
          ></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 flex items-center w-full relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute z-10 flex items-center justify-center w-8 h-8 rounded-full -translate-y-1/2 ${
                  index % 2 === 0
                    ? "left-0 sm:left-1/2 -translate-x-1/2"
                    : "left-0 sm:left-1/2 -translate-x-1/2"
                }`}
                style={{
                  backgroundColor: exp.color,
                  border: `4px solid ${modernColors.surface}`,
                }}
              >
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div
                className={`w-full sm:w-5/12 ${
                  index % 2 === 0
                    ? "ml-auto pr-0 sm:pr-8 sm:pl-0"
                    : "mr-auto pl-0 sm:pl-8 sm:pr-0"
                } pl-12 sm:pl-0`}
              >
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="border-2 backdrop-blur-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                    style={{
                      backgroundColor: `${modernColors.surface}E6`,
                      borderColor: exp.color,
                      boxShadow: `0 10px 40px ${exp.color}1A`,
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <exp.icon
                          className="w-6 h-6"
                          style={{ color: exp.color }}
                        />
                        <h3
                          className="text-xl font-bold"
                          style={{ color: modernColors.text }}
                        >
                          {exp.title}
                        </h3>
                      </div>

                      <div className="mb-4 space-y-2 text-sm">
                        <div
                          className="flex items-center"
                          style={{ color: modernColors.muted }}
                        >
                          <Building className="w-4 h-4 mr-2" /> {exp.company}
                        </div>
                        <div
                          className="flex items-center"
                          style={{ color: modernColors.muted }}
                        >
                          <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                        </div>
                        <div
                          className="flex items-center"
                          style={{ color: modernColors.muted }}
                        >
                          <Calendar className="w-4 h-4 mr-2" /> {exp.duration}
                        </div>
                      </div>

                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: modernColors.muted }}
                      >
                        {exp.description}
                      </p>

                      <div>
                        <h4
                          className="text-xs font-semibold mb-2"
                          style={{ color: modernColors.text }}
                        >
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-medium rounded-full"
                              style={{
                                backgroundColor: `${exp.color}20`,
                                color: exp.color,
                                border: `1px solid ${exp.color}30`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
