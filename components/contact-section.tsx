"use client";

import React, {
  useState,
  useEffect,
  FC,
  FormEvent,
  ChangeEvent,
  ReactNode,
  HTMLAttributes,
} from "react";
import { motion } from "framer-motion";
import {
  LucideProps,
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertTriangle,
  Loader,
} from "lucide-react";

// Type Definitions for Mock Components
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
}
interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

// Mock Components (Typed for TSX)
const Card: FC<CardProps> = ({ children, className = "", ...props }) => (
  <div
    className={`bg-card text-card-foreground rounded-2xl border ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent: FC<CardContentProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const Button: FC<ButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input: FC<InputProps> = ({ className = "", ...props }) => (
  <input
    suppressHydrationWarning={true}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Textarea: FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea
    suppressHydrationWarning={true}
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Type definitions for data structures
interface ContactInfo {
  icon: React.ElementType<LucideProps>;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType<LucideProps>;
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

// A modern, sleek color palette
const modernColors = {
  background: "#020617",
  surface: "#0f172a",
  primary: "#1e293b",
  accent: "#38bdf8",
  secondary: "#818cf8",
  text: "#e2e8f0",
  muted: "#94a3b8",
};

const App: FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Pranav Kumar",
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
            setTimeout(() => setFormStatus("idle"), 5000);
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
      value: "pranavsingh9471@gmail.com",
      href: "mailto:pranavsingh9471@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9955388960",
      href: "tel:+919955388960",
    },
    { icon: MapPin, label: "Location", value: "Bangalore, India", href: "#" },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Pranavkumar2601",
      color: modernColors.text,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pranav-kumar-279a741a0",
      color: "#0A66C2",
    },
  ];

  const styles = `
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-4000 { animation-delay: -4s; }
    `;

  return (
    <>
      <style>{styles}</style>
      <section
        id="contact"
        className="min-h-screen w-full flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: modernColors.background }}
      >
        <div
          className="absolute top-0 -left-4 w-72 h-72 sm:w-96 sm:h-96 rounded-full filter blur-3xl opacity-30 sm:opacity-40 animate-blob"
          style={{ background: modernColors.secondary }}
        ></div>
        <div
          className="absolute bottom-0 -right-4 w-72 h-72 sm:w-96 sm:h-96 rounded-full filter blur-3xl opacity-30 sm:opacity-40 animate-blob animation-delay-4000"
          style={{ background: modernColors.accent }}
        ></div>

        <div className="container mx-auto relative z-10">
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
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
          </motion.div>

          <Card
            className="max-w-6xl mx-auto border-2 backdrop-blur-xl overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: `${modernColors.surface}BF`,
              borderColor: modernColors.primary,
              boxShadow: `0 20px 60px ${modernColors.background}90`,
            }}
          >
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div
                  className="p-6 sm:p-8 md:border-r-2"
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
                          style={{ backgroundColor: `${modernColors.primary}` }}
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

                  <div className="flex space-x-4">
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
                </div>

                <div className="p-6 sm:p-8">
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    noValidate
                  >
                    <Input
                      required
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: modernColors.primary,
                        borderColor: modernColors.primary,
                        color: modernColors.text,
                      }}
                      className="focus:border-sky-400 focus:ring-sky-400"
                    />
                    <Input
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: modernColors.primary,
                        borderColor: modernColors.primary,
                        color: modernColors.text,
                      }}
                      className="focus:border-sky-400 focus:ring-sky-400"
                    />
                    <Textarea
                      required
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: modernColors.primary,
                        borderColor: modernColors.primary,
                        color: modernColors.text,
                      }}
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
                  </motion.form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default App;
