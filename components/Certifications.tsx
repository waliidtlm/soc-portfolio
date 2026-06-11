"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const CERTS = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023",
    level: "Foundation",
    color: "var(--neon-cyan)",
    abbr: "SEC+",
  },
  {
    name: "Blue Team Level 1",
    issuer: "Security Blue Team",
    date: "2023",
    level: "Blue Team",
    color: "var(--neon-green)",
    abbr: "BTL1",
  },
  {
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2024",
    level: "Intermediate",
    color: "var(--neon-purple)",
    abbr: "CEH",
  },
  {
    name: "Google Cybersecurity",
    issuer: "Google / Coursera",
    date: "2022",
    level: "Foundation",
    color: "var(--neon-pink)",
    abbr: "GCC",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32 px-6 grid-bg"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--neon-cyan)", letterSpacing: "0.3em", marginBottom: "0.5rem" }}
        >
          03 / CERTIFICATIONS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-16 text-center"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "var(--text-primary)" }}
        >
          Clearances
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.abbr}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="neon-card p-6 flex flex-col gap-4"
              style={{ borderColor: `${cert.color}33` }}
            >
              {/* Badge circle */}
              <div className="flex items-start justify-between">
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}44`,
                    boxShadow: `0 0 15px ${cert.color}22`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: cert.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {cert.abbr}
                  </span>
                </div>
                <CheckCircle size={16} style={{ color: cert.color, opacity: 0.7 }} />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.05em",
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                  }}
                >
                  {cert.name}
                </h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="tag-pill" style={{ color: cert.color, borderColor: `${cert.color}44`, background: `${cert.color}11` }}>
                  {cert.level}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
