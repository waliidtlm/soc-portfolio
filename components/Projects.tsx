"use client";

import { motion } from "framer-motion";
import { GitFork, ExternalLink, Terminal, Shield, Search, AlertTriangle } from "lucide-react";

const PROJECTS = [
  {
    icon: Terminal,
    title: "Home SIEM Lab",
    description:
      "Built a fully functional home SOC lab using Elastic Stack (ELK). Configured log ingestion from Windows/Linux endpoints, built custom detection rules, and created dashboards for threat visualization.",
    tags: ["Elastic SIEM", "Filebeat", "Winlogbeat", "KQL", "Docker"],
    color: "var(--neon-cyan)",
    github: "#",
    demo: null,
  },
  {
    icon: Search,
    title: "Threat Hunting Playbooks",
    description:
      "Collection of documented threat hunting playbooks targeting common MITRE ATT&CK techniques. Each playbook includes hypothesis, data sources, detection queries, and response actions.",
    tags: ["MITRE ATT&CK", "Sigma", "Splunk SPL", "KQL", "Python"],
    color: "var(--neon-green)",
    github: "#",
    demo: "#",
  },
  {
    icon: AlertTriangle,
    title: "Phishing Analysis Toolkit",
    description:
      "Python-based toolkit for automated phishing email analysis. Extracts IOCs, checks headers, queries VirusTotal/URLScan APIs, and generates structured incident reports.",
    tags: ["Python", "VirusTotal API", "URLScan", "IOC Extraction", "Automation"],
    color: "var(--neon-purple)",
    github: "#",
    demo: null,
  },
  {
    icon: Shield,
    title: "Custom YARA + Sigma Rules",
    description:
      "Repository of custom YARA and Sigma detection rules targeting malware families and attack techniques observed in the wild. Includes testing methodology and coverage mapping.",
    tags: ["YARA", "Sigma", "Malware Analysis", "Detection Engineering"],
    color: "var(--neon-pink)",
    github: "#",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6"
      style={{ zIndex: 1, background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--neon-cyan)", letterSpacing: "0.3em", marginBottom: "0.5rem" }}
        >
          04 / PROJECTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-16 text-center"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "var(--text-primary)" }}
        >
          Operations Log
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="neon-card p-7 flex flex-col gap-5"
              style={{ borderColor: `${proj.color}22` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}66`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}22`;
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5"
                    style={{
                      background: `${proj.color}15`,
                      border: `1px solid ${proj.color}33`,
                    }}
                  >
                    <proj.icon size={18} style={{ color: proj.color }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {proj.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  {proj.github && (
                    <a
                      href={proj.github}
                      className="transition-all"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = proj.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                      }}
                    >
                      <GitFork size={16} />
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      className="transition-all"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = proj.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                      }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill"
                    style={{ color: proj.color, borderColor: `${proj.color}33`, background: `${proj.color}0d` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
