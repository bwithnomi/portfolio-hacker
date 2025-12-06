"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TerminalCursor } from "../ui/TerminalCursor";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, XCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_rgr360e",
        "template_ye2wdym",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "G21sFppsA2kyHvOrV"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "Failed to send message. Please try again or contact me directly via email."
      );
      
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle=""
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <TerminalWindow title="contact.info">
          <div className="space-y-4">
            <div className="text-[#00cc33]">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">cat contact.info</span>
            </div>
            
            <div className="space-y-3 text-[#00cc33]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00ff41]" />
                <span className="text-[#00cc33]">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-[#00ff41] hover:text-[#00ffff] transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00ff41]" />
                <span className="text-[#00cc33]">Phone:</span>
                <a href={`tel:${personalInfo.phone}`} className="text-[#00ff41] hover:text-[#00ffff] transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#00ff41]" />
                <span className="text-[#00cc33]">Location:</span>
                <span className="text-[#00ff41]">{personalInfo.location}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#00ff41]/30">
              <div className="text-[#00cc33] text-xs mb-2">Social Links:</div>
              <div className="flex gap-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff41] hover:text-[#00ffff] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff41] hover:text-[#00ffff] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </TerminalWindow>

        {/* Contact Form */}
        <TerminalWindow title="send_message">
          <div className="space-y-4">
            <div className="text-[#00cc33]">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">send_email</span>{" "}
              <span className="text-[#00ffff]">--to "{personalInfo.email}"</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#00cc33] text-xs mb-1 font-mono">
                  --name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-3 py-2 bg-black border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#00cc33] text-xs mb-1 font-mono">
                  --email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-3 py-2 bg-black border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-[#00cc33] text-xs mb-1 font-mono">
                  --subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-3 py-2 bg-black border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] transition-colors"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-[#00cc33] text-xs mb-1 font-mono">
                  --message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-3 py-2 bg-black border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 border border-[#00ff41]/50 bg-[#00ff41]/10 flex items-center gap-2 text-[#00ff41] text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 border border-[#ff0000]/50 bg-[#ff0000]/10 flex items-center gap-2 text-[#ff0000] text-sm"
                >
                  <XCircle className="w-4 h-4" />
                  <span>{errorMessage || "Failed to send message."}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="terminal-button w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#00ff41]/30">
              <div className="text-[#00cc33] text-xs">
                <span className="text-[#00cc33]">$</span>{" "}
                <span className="text-[#00ff41]">_</span>
                <TerminalCursor />
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </SectionWrapper>
  );
}
