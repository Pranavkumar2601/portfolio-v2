"use client";

import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertTriangle,
  Loader,
  MessageSquareText,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { modernColors } from "@/data/education";
import AnimatedBackground from "@/components/animated-background";

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
  color: string;
}

interface FormDataState {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [showContactForm, setShowContactForm] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Fix SSR hydration by ensuring client-side only code runs after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (!(window as any).emailjs) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.async = true;
      script.onload = () => {
        console.log("EmailJS loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load EmailJS");
        setFormStatus("error");
      };
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isClient]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
      return;
    }

    setFormStatus("sending");

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: process.env.NEXT_PUBLIC_OWNER_NAME || "Name",
      message: formData.message,
    };

    if ((window as any).emailjs) {
      (window as any).emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then(
          (response: any) => {
            console.log("SUCCESS!", response.status, response.text);
            setFormStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => {
              setFormStatus("idle");
              setShowContactForm(false);
            }, 5000);
          },
          (err: any) => {
            console.error("FAILED...", err);
            setFormStatus("error");
            setTimeout(() => setFormStatus("idle"), 5000);
          }
        );
    } else {
      console.error("EmailJS script has not loaded yet.");
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: process.env.NEXT_PUBLIC_EMAIL || "[email]",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: process.env.NEXT_PUBLIC_PHONE || "[phone]",
      href: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
    },
    { icon: MapPin, label: "Location", value: "Bangalore, India", href: "#" },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      label: "GitHub",
      href: process.env.NEXT_PUBLIC_GITHUB || "#",
      color: modernColors.text,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN || "#",
      color: "#0A66C2",
    },
  ];

  // Consistent styles object to prevent hydration mismatch
  const inputStyles = {
    backgroundColor: modernColors.primary,
    borderColor: modernColors.primary,
    color: modernColors.text,
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-inter"
    >
      <AnimatedBackground
        variant="contact"
        sectionColor={modernColors.secondary}
        className="opacity-50"
        animate={true}
        blur={2}
      />

      <div className="container mx-auto relative z-10 lg:ml-20 xl:ml-28">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: modernColors.text }}
          >
            Let's{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${modernColors.secondary}, ${modernColors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connect
            </span>
          </h2>
          <div
            className="w-24 h-1.5 mx-auto mb-6 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${modernColors.secondary}, ${modernColors.accent})`,
            }}
          />
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: modernColors.muted }}
          >
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </motion.div>

        <Card
          className="max-w-4xl mx-auto border-2 backdrop-blur-xl overflow-hidden transition-all duration-300 relative min-h-[550px]"
          style={{
            backgroundColor: `${modernColors.surface}BF`,
            borderColor: modernColors.primary,
            boxShadow: `0 20px 60px ${modernColors.background}90`,
          }}
        >
          <CardContent className="p-0 h-full">
            {!showContactForm ? (
              // Contact Information Side
              <div className="flex flex-col md:flex-row h-full w-full">
                <div
                  className="p-6 sm:p-8 md:border-r-2 flex-1 flex flex-col overflow-y-auto"
                  style={{ borderColor: modernColors.primary }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: modernColors.text }}
                    >
                      Get in Touch
                    </h3>
                    <p className="mb-8" style={{ color: modernColors.muted }}>
                      Find me on these platforms or send a message directly.
                    </p>
                  </motion.div>

                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center group"
                      >
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: modernColors.primary }}
                        >
                          <info.icon
                            className="w-6 h-6 transition-colors duration-300"
                            style={{ color: modernColors.accent }}
                          />
                        </div>
                        <div>
                          <p
                            className="text-sm"
                            style={{ color: modernColors.muted }}
                          >
                            {info.label}
                          </p>
                          <p
                            className="font-medium transition-colors duration-300 group-hover:text-white"
                            style={{ color: modernColors.text }}
                          >
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="flex space-x-4 mb-8">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4, scale: 1.1 }}
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: modernColors.primary,
                          color: social.color,
                        }}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <Button
                      onClick={() => setShowContactForm(true)}
                      className="w-full font-semibold text-white transition-all duration-300 hover:opacity-90"
                      style={{
                        background: `linear-gradient(90deg, ${modernColors.accent}, ${modernColors.secondary})`,
                        boxShadow: `0 4px 20px ${modernColors.accent}50`,
                      }}
                    >
                      <MessageSquareText className="w-5 h-5 mr-2" />
                      Send a Message
                    </Button>
                  </div>
                </div>

                <div
                  className="p-6 sm:p-8 flex-1 hidden md:flex items-center justify-center flex-col text-center cursor-pointer transition-colors duration-300 hover:bg-opacity-50"
                  onClick={() => setShowContactForm(true)}
                  style={{
                    backgroundColor: `${modernColors.primary}40`,
                    color: modernColors.muted,
                  }}
                >
                  <Send
                    className="w-16 h-16 mb-4"
                    style={{ color: modernColors.accent }}
                  />
                  <p className="max-w-xs text-lg">
                    Ready to start a conversation? Click here to send a message!
                  </p>
                </div>
              </div>
            ) : (
              // Contact Form Side
              <div className="flex flex-col md:flex-row h-full w-full">
                <div
                  className="p-6 sm:p-8 flex-1 hidden md:flex items-center justify-center flex-col text-center cursor-pointer transition-colors duration-300 hover:bg-opacity-50"
                  onClick={() => setShowContactForm(false)}
                  style={{
                    backgroundColor: `${modernColors.primary}40`,
                    color: modernColors.muted,
                  }}
                >
                  <Mail
                    className="w-16 h-16 mb-4"
                    style={{ color: modernColors.secondary }}
                  />
                  <p className="max-w-xs text-lg">
                    Want to see my contact info again? Click here to go back!
                  </p>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col overflow-y-auto justify-between">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col"
                    noValidate
                  >
                    <div>
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: modernColors.text }}
                      >
                        Send Me a Message
                      </h3>
                      <p className="mb-6" style={{ color: modernColors.muted }}>
                        I'd love to hear from you.
                      </p>
                    </div>

                    <Input
                      required
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="focus:border-sky-400 focus:ring-sky-400"
                    />

                    <Input
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="focus:border-sky-400 focus:ring-sky-400"
                    />

                    <Textarea
                      required
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      style={inputStyles}
                      className="focus:border-sky-400 focus:ring-sky-400 resize-none"
                    />

                    <Button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-60"
                      style={{
                        background: `linear-gradient(90deg, ${modernColors.secondary}, ${modernColors.accent})`,
                        boxShadow: `0 4px 20px ${modernColors.secondary}50`,
                      }}
                    >
                      {formStatus === "sending" && (
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                      )}
                      {formStatus === "idle" && (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {formStatus === "success" && (
                        <CheckCircle className="w-5 h-5 mr-2" />
                      )}
                      {formStatus === "error" && (
                        <AlertTriangle className="w-5 h-5 mr-2" />
                      )}

                      {formStatus === "idle" && "Send Message"}
                      {formStatus === "sending" && "Sending..."}
                      {formStatus === "success" && "Message Sent!"}
                      {formStatus === "error" && "Please fill all fields"}
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setShowContactForm(false)}
                      className="w-full mt-2 font-semibold transition-all duration-300 hover:opacity-90"
                      style={{ color: modernColors.muted }}
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Contact Info
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
