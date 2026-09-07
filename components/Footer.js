"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border-light)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Column 1: Brand & Manifesto */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <Image
                src="/logo_cropped.png"
                alt="Belong Logo"
                width={200}
                height={65}
                style={{ objectFit: "contain", width: "200px", height: "auto", display: "block" }}
              />
            </div>
            <p
              style={{
                fontSize: "0.94rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "360px",
              }}
            >
              Dismantling the economic, linguistic, and cultural barriers in autism intervention. Enabling unscripted, natural social practice through accessible Mobile VR.
            </p>
          </div>

          {/* Column 2: In-App Scenarios */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: "0.78rem",
                color: "var(--accent-teal-dark)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              In-App Scenarios
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <a href="#scenarios">Street Food Cart (عربة الفول)</a>
              <a href="#scenarios">3D Egyptian Currency (المحفظة)</a>
              <a href="#scenarios">Supermarket Snack Aisle (السوبرماركت)</a>
              <a href="#scenarios">Microbus Transit (الميكروباص)</a>
              <a href="#scenarios">School Canteen (فناء المدرسة)</a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: "0.78rem",
                color: "var(--accent-navy)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <a href="#reality">Why Virtual Reality Works</a>
              <a href="#scenarios">In-App Learning Environments</a>
              <a href="#companions">The Dual-Companion Model</a>
              <a href="#clinical">Field Trials & Evaluation</a>
              <a href="#creators">Project Creators</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {new Date().getFullYear()} Belong. Accessible Mobile VR Assistive System.
          </div>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--text-secondary)",
              fontWeight: 600,
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
