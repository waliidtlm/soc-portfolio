"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCE = [
  {
    title: "SOC Analyst L2",
    company: "Your Company Name",
    period: "2024 — Present",
    type: "Full-time",
    color: "var(--neon-cyan)",
    bullets: [
      "Triaged and investigated 50+ security alerts daily across SIEM platforms (Splunk, Elastic)",
      "Developed and tuned 30+ detection rules reducing false positive rate by 40%",
      "Led incident response for 3 ransomware attempts; contained all threats within SLA",
    ],
  },
  {
    title: "Junior SOC Analyst",
    company: "Previous Company",
    period: "2023 — 2024",
    type: "Full-time",
    color: "var(--neon-green)",
    bullets: [
      "Monitored and analyzed security events from 500+ endpoints using QRadar SIEM",
      "Performed phishing email triage and malware analysis using sandbox environments",
      "Documented 100+ incident response procedures and contributed to internal runbooks",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Internship Organization",
    period: "2022 — 2023",
    type: "Internship",
    color: "var(--neon-purple)",
    bullets: [
      "Assisted SOC team in daily alert monitoring and ticket management",
      "Built home SIEM lab using ELK stack for threat simulation and detection testing",
      "Completed Blue Team Level 1 certification and MITRE ATT&CK framework training",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 grid-bg"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--neon-cyan)", letterSpacing: "0.3em", marginBottom: "0.5rem" }}
        >
          05 / EXPERIENCE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-16"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "var(--text-primary)" }}
        >
          Mission History
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 top-0 bottom-0 w-px origin-top"
            style={{
              background: "linear-gradient(to bottom, var(--neon-cyan), var(--neon-purple), transparent)",
              boxShadow: "0 0 8px rgba(0,212,255,0.4)",
            }}
          />

          <div className="flex flex-col gap-10 pl-16">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.title + job.company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-sm flex items-center justify-center"
                  style={{
                    background: job.color,
                    boxShadow: `0 0 12px ${job.color}`,
                  }}
                >
                  <Briefcase size={8} style={{ color: "var(--bg-primary)" }} />
                </div>

                <div className="neon-card p-7" style={{ borderColor: `${job.color}22` }}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          letterSpacing: "0.05em",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {job.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: job.color }}>
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                        {job.period}
                      </span>
                      <span className="tag-pill" style={{ color: job.color, borderColor: `${job.color}44`, background: `${job.color}11` }}>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 items-start">
                        <span style={{ color: job.color, fontFamily: "var(--font-mono)", fontSize: "0.75rem", marginTop: "0.15rem", flexShrink: 0 }}>
                          &gt;
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
