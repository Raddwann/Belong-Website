"use client";

import Image from "next/image";
import { ArrowDown, CheckCircle, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "calc(var(--nav-height) + 3.5rem)",
        paddingBottom: "4.5rem",
        backgroundColor: "transparent",
      }}
    >
      <div className="container">
        {/* Eyebrow */}
        <div>
          <span className="section-eyebrow">
            Accessible Virtual Reality Intervention
          </span>
        </div>

        {/* Hero Title & Description */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "var(--text-primary)",
              maxWidth: "1050px",
            }}
          >
            Real-world social independence for autistic youth.
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Belong is an accessible Mobile VR assistive system designed to bridge the gap between clinical behavioral therapy and everyday Egyptian life. By replacing rigid multiple-choice buttons with unscripted Egyptian Arabic conversations, adolescents practice essential life skills at their own pace in a safe, controlled virtual space.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="#scenarios" className="btn-primary">
                  <span>Explore In-App Scenarios</span>
                  <ArrowDown size={16} />
                </a>
                <a href="#clinical" className="btn-secondary">
                  <span>Field Trial Results</span>
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                }}
              >
                <CheckCircle size={15} style={{ color: "var(--accent-teal)" }} />
                <span>Evaluated across 3 autism support centers in Egypt with 10 adolescent participants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Unobscured Real Screenshot Viewport */}
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-light)",
            borderRadius: "16px",
            padding: "1.5rem",
            boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Viewport Meta Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border-light)",
              marginBottom: "1.25rem",
              fontSize: "0.82rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-secondary)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                SCENARIO 01: STREET FOOD CART
              </span>
              <span style={{ color: "var(--border-strong)" }}>•</span>
              <span className="font-arabic" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                عربة الفول البلدي
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border-light)",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "4px",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                }}
              >
                Mobile VR Capture
              </span>
            </div>
          </div>

          {/* Clean Screenshot — No text on top of the image */}
          <div className="screenshot-container">
            <Image
              src="/scenes/fava-beans-cart.jpg"
              alt="Belong Mobile VR Application - Fava Beans Street Cart Scenario with the Social Character and the Assistant"
              width={1500}
              height={850}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
              priority
            />
          </div>

          {/* Clean Caption Below Image */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              paddingTop: "1.25rem",
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
            }}
          >
            <span>
              <strong style={{ color: "var(--text-primary)" }}>In-App Capture: </strong>
              Adolescent practicing a real-time breakfast ordering dialogue in Egyptian Arabic with the social character, supported by the in-scene assistant.
            </span>
            <span className="font-mono" style={{ fontSize: "0.76rem", color: "var(--accent-teal-dark)", fontWeight: 700 }}>
              AUTHENTIC APPLICATION RUNTIME
            </span>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          <div className="clinical-card" style={{ padding: "1.75rem" }}>
            <span className="section-eyebrow" style={{ fontSize: "0.72rem", color: "var(--accent-teal)" }}>
              01 / ACCESSIBLE HARDWARE
            </span>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0.5rem 0 0.4rem", color: "var(--text-primary)" }}>
              Everyday Mobile VR
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Runs on standard smartphones paired with accessible mobile VR headsets—eliminating prohibitive hardware costs for families and centers.
            </p>
          </div>

          <div className="clinical-card" style={{ padding: "1.75rem" }}>
            <span className="section-eyebrow" style={{ fontSize: "0.72rem", color: "var(--accent-blue)" }}>
              02 / CULTURAL RELEVANCE
            </span>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0.5rem 0 0.4rem", color: "var(--text-primary)" }}>
              Egyptian Colloquial Arabic
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Native dialect speech recognition allows users to practice real spoken phrases used in Egyptian community life, not rigid formal text.
            </p>
          </div>

          <div className="clinical-card" style={{ padding: "1.75rem" }}>
            <span className="section-eyebrow" style={{ fontSize: "0.72rem", color: "var(--accent-warm)" }}>
              03 / PSYCHOLOGICAL SAFETY
            </span>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0.5rem 0 0.4rem", color: "var(--text-primary)" }}>
              Zero-Pressure Guidance
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Adolescents can look at the in-scene hint sphere at any time to receive gentle spoken advice from the assistant without penalties or failure timers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
