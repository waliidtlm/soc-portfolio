"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ zIndex: 1 }}
    >
      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Pre-title label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 6px var(--neon-cyan)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--neon-cyan)", letterSpacing: "0.3em" }}>
            INITIALIZING PROFILE...
          </span>
          <div className="h-px w-12" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 6px var(--neon-cyan)" }} />
        </motion.div>

        {/* Main name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "var(--text-primary)",
            letterSpacing: "0.05em",
          }}
        >
          <span
            className="glitch-text"
            data-text="WALIID"
            style={{ display: "block" }}
          >
            WALIID
          </span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 0 20px rgba(0,212,255,0.5))",
            }}
          >
            TLEMCANI
          </span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 mb-8"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "var(--neon-green)",
            letterSpacing: "0.08em",
          }}
        >
          <span style={{ color: "var(--text-muted)" }}>&gt; </span>
          <TypeAnimation
            sequence={[
              "SOC Analyst", 2500,
              "Threat Hunter", 2500,
              "Incident Responder", 2500,
              "Blue Team Operator", 2500,
              "SIEM Engineer", 2500,
            ]}
            repeat={Infinity}
            cursor
            style={{ color: "var(--neon-green)" }}
          />
        </motion.div>

        {/* Short bio line */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-xl mx-auto mb-10"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          Defending networks. Hunting threats. Turning alerts into answers.
          Specialized in SIEM engineering, endpoint detection, and incident response.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 font-medium transition-all duration-300"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--bg-primary)",
              background: "var(--neon-cyan)",
              boxShadow: "0 0 20px rgba(0,212,255,0.5)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,212,255,0.8)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.5)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 transition-all duration-300"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--neon-cyan)",
              border: "1px solid var(--neon-cyan)",
              boxShadow: "0 0 10px rgba(0,212,255,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(0,212,255,0.2)";
            }}
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.2em" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} style={{ color: "var(--neon-cyan)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
