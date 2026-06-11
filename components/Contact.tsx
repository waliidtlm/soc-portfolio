"use client";

import { motion } from "framer-motion";
import { Mail, Link, GitFork, ExternalLink, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

const LINKS = [
  {
    icon: Link,
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    color: "var(--neon-cyan)",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/yourhandle",
    href: "https://github.com/yourhandle",
    color: "var(--neon-green)",
  },
  {
    icon: ExternalLink,
    label: "TryHackMe",
    value: "tryhackme.com/p/yourprofile",
    href: "https://tryhackme.com/p/yourprofile",
    color: "var(--neon-purple)",
  },
];

const EMAIL = "your.email@example.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6"
      style={{ zIndex: 1, background: "var(--bg-secondary)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--neon-cyan)", letterSpacing: "0.3em", marginBottom: "0.5rem" }}
        >
          06 / CONTACT
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "var(--text-primary)" }}
        >
          Open Channel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.7 }}
        >
          Available for SOC roles, freelance incident response, and blue team consulting.
          Encrypted comms preferred.
        </motion.p>

        {/* Terminal email card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(0,212,255,0.2)",
            boxShadow: "0 0 30px rgba(0,212,255,0.08)",
          }}
        >
          {/* Terminal title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{ borderBottom: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,212,255,0.04)" }}
          >
            {["var(--neon-pink)", "var(--neon-green)", "var(--neon-cyan)"].map((c, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
            ))}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
              contact.sh
            </span>
          </div>

          <div className="p-6 text-left">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--neon-green)" }}>$</span> cat contact.txt
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: "var(--neon-cyan)" }} />
                <a
                  href={`mailto:${EMAIL}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    color: "var(--neon-cyan)",
                    textShadow: "0 0 10px rgba(0,212,255,0.4)",
                  }}
                >
                  {EMAIL}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 transition-all"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: copied ? "var(--neon-green)" : "var(--text-muted)",
                  border: `1px solid ${copied ? "rgba(0,255,136,0.3)" : "rgba(255,255,255,0.1)"}`,
                  background: copied ? "rgba(0,255,136,0.08)" : "transparent",
                }}
              >
                {copied ? <CheckCheck size={12} /> : <Copy size={12} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "1rem" }}>
              <span className="cursor-blink" style={{ color: "var(--neon-cyan)" }}>_</span>
            </p>
          </div>
        </motion.div>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="flex items-center justify-between p-4 neon-card group"
              style={{ borderColor: `${link.color}22`, textDecoration: "none" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}66`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}22`;
              }}
            >
              <div className="flex items-center gap-3">
                <link.icon size={16} style={{ color: link.color }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                  {link.label}
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: link.color }}>
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", marginTop: "4rem", letterSpacing: "0.1em" }}
        >
          BUILT WITH NEXT.JS · DEPLOYED ON VERCEL · © {new Date().getFullYear()} WALIID TLEMCANI
        </motion.p>
      </div>
    </section>
  );
}
