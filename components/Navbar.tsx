"use client";

import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,5,8,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Shield
            size={20}
            style={{ color: "var(--neon-cyan)" }}
            className="group-hover:drop-shadow-[0_0_8px_#00d4ff] transition-all"
          />
          <span
            style={{ fontFamily: "var(--font-mono)", color: "var(--neon-cyan)", fontSize: "0.85rem" }}
            className="group-hover:glow-cyan transition-all"
          >
            SOC_ANALYST
          </span>
          <span className="cursor-blink" style={{ color: "var(--neon-cyan)", fontFamily: "var(--font-mono)" }}>_</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-all duration-200 hover:glow-cyan"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--neon-cyan)";
                  (e.target as HTMLElement).style.textShadow = "0 0 10px var(--neon-cyan)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-muted)";
                  (e.target as HTMLElement).style.textShadow = "none";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-2">
          <div className="status-dot" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--neon-green)" }}>
            AVAILABLE
          </span>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all"
              style={{ background: "var(--neon-cyan)", boxShadow: "0 0 4px var(--neon-cyan)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(5,5,8,0.97)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--neon-cyan)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              &gt; {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
