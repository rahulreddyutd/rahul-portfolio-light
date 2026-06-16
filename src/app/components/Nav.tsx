"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(250,250,248,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #E8E5DF" : "1px solid transparent",
      padding: "0 max(24px, calc((100% - 1080px)/2))",
      height: "60px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.25s",
    }}>
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "8px" }}>
        <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: "18px", color: "#111111", letterSpacing: "-0.01em" }}>
          Rahul Reddy
        </span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9B9890", letterSpacing: "0.04em" }}>
          AI PM
        </span>
      </Link>
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {[
          { href: "/#projects", label: "Projects" },
          { href: "/#about", label: "About" },
          { href: "/#experience", label: "Experience" },
          { href: "/#contact", label: "Contact" },
        ].map(({ href, label }) => (
          <a key={label} href={href} style={{
            fontSize: "14px", color: "#555250", textDecoration: "none",
            transition: "color 0.15s", fontWeight: 500,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#111111")}
          onMouseLeave={e => (e.currentTarget.style.color = "#555250")}
          >{label}</a>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
          padding: "7px 18px",
          background: "#F97316", color: "#FFFFFF",
          borderRadius: "6px", fontSize: "13px", fontWeight: 600,
          textDecoration: "none", transition: "background 0.15s",
          letterSpacing: "0.01em",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#EA6A0A")}
        onMouseLeave={e => (e.currentTarget.style.background = "#F97316")}
        >Resume</a>
      </div>
    </nav>
  );
}
