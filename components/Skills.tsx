"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  {
    label: "SIEM / Log Analysis",
    color: "var(--neon-cyan)",
    tools: ["Splunk", "IBM QRadar", "Elastic SIEM", "Microsoft Sentinel", "Graylog"],
  },
  {
    label: "EDR / Endpoint",
    color: "var(--neon-green)",
    tools: ["CrowdStrike Falcon", "Microsoft Defender", "Carbon Black", "SentinelOne", "Velociraptor"],
  },
  {
    label: "Threat Intel",
    color: "var(--neon-purple)",
    tools: ["MISP", "VirusTotal", "Shodan", "AlienVault OTX", "MITRE ATT&CK"],
  },
  {
    label: "Network / Forensics",
    color: "var(--neon-pink)",
    tools: ["Wireshark", "Zeek (Bro)", "Suricata", "NetworkMiner", "TCPdump"],
  },
  {
    label: "Scripting / Automation",
    color: "var(--neon-cyan)",
    tools: ["Python", "PowerShell", "KQL", "Sigma Rules", "YARA"],
  },
  {
    label: "Platforms & Frameworks",
    color: "var(--neon-green)",
    tools: ["TheHive", "Cortex", "SOAR (Shuffle)", "OpenCTI", "Elastic Stack"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6"
      style={{ zIndex: 1, background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--neon-cyan)", letterSpacing: "0.3em", marginBottom: "0.5rem" }}
        >
          02 / SKILLS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-16"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "var(--text-primary)" }}
        >
          Arsenal
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="neon-card p-6"
              style={{ borderColor: `${cat.color}22` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}88`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${cat.color}22`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}22`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-1.5 h-5 rounded-sm"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: cat.color,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Tool chips */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs transition-all duration-200 cursor-default"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-primary)",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      letterSpacing: "0.05em",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = cat.color;
                      (e.currentTarget as HTMLElement).style.borderColor = cat.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 8px ${cat.color}44`;
                      (e.currentTarget as HTMLElement).style.background = `${cat.color}11`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    {tool}
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
