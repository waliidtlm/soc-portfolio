"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Activity, Award } from "lucide-react";

const stats = [
  { icon: Shield, label: "Years Experience", value: "3+" },
  { icon: Activity, label: "Incidents Handled", value: "500+" },
  { icon: Award, label: "Certifications", value: "4" },
  { icon: Terminal, label: "Tools Mastered", value: "20+" },
];

const slideIn = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
});

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 grid-bg"
      style={{ zIndex: 1 }}
    >
      {/* Section label */}
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--neon-cyan)", letterSpacing: "0.3em", marginBottom: "0.5rem" }}
        >
          01 / ABOUT
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-16"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "var(--text-primary)" }}
        >
          Operator Profile
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar column */}
          <motion.div
            variants={slideIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-3 rounded-sm"
                style={{
                  background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
                  opacity: 0.3,
                  filter: "blur(12px)",
                }}
              />
              {/* Avatar box */}
              <div
                className="relative w-64 h-64 flex items-center justify-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--neon-cyan)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.2), inset 0 0 30px rgba(0,212,255,0.05)",
                }}
              >
                {/* Placeholder avatar */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(184,0,255,0.2))",
                      border: "1px solid rgba(0,212,255,0.4)",
                    }}
                  >
                    <Shield size={40} style={{ color: "var(--neon-cyan)" }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}>
                    [ PHOTO ]
                  </span>
                </div>
                {/* Corner decorations */}
                {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} w-3 h-3`}
                    style={{
                      borderTop: i < 2 ? "2px solid var(--neon-cyan)" : "none",
                      borderBottom: i >= 2 ? "2px solid var(--neon-cyan)" : "none",
                      borderLeft: i % 2 === 0 ? "2px solid var(--neon-cyan)" : "none",
                      borderRight: i % 2 !== 0 ? "2px solid var(--neon-cyan)" : "none",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio column */}
          <motion.div
            variants={slideIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--text-primary)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                opacity: 0.85,
              }}
            >
              Security operations professional with hands-on experience in threat detection,
              log analysis, and incident response. I operate in the Blue Team space —
              building detection logic, triaging alerts at scale, and hunting adversaries
              before they become breaches.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Proficient in SIEM engineering, EDR analysis, network forensics, and threat
              intelligence integration. Passionate about automation and building detection
              pipelines that actually catch what matters.
            </p>

            {/* Terminal-style location/status */}
            <div
              className="p-4"
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid var(--border-dim)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
              }}
            >
              {[
                { key: "location", val: "Algeria, DZ" },
                { key: "status", val: <span style={{ color: "var(--neon-green)" }}>open_to_opportunities</span> },
                { key: "focus", val: "SOC / Blue Team / Threat Hunting" },
              ].map(({ key, val }) => (
                <div key={key} className="flex gap-3 mb-1">
                  <span style={{ color: "var(--neon-cyan)" }}>{key}</span>
                  <span style={{ color: "var(--text-muted)" }}>:</span>
                  <span style={{ color: "var(--text-primary)" }}>{val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="neon-card p-6 flex flex-col items-center text-center gap-3"
            >
              <Icon size={22} style={{ color: "var(--neon-cyan)" }} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "var(--neon-cyan)",
                  textShadow: "0 0 20px rgba(0,212,255,0.5)",
                }}
              >
                {value}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
