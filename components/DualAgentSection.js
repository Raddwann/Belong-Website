"use client";

import { MessageCircle, Sparkles, Volume2, Shield, Eye, HeartHandshake } from "lucide-react";

export default function DualAgentSection() {
  return (
    <section id="companions" style={{ padding: "5.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-eyebrow">
            The Interaction Model
          </span>
          <h2 className="section-title">
            Conversational practice with a built-in safety net.
          </h2>
          <p className="section-description">
            Traditional social training either rushes the child or exposes them to social anxiety. Belong pairs an authentic social character with an assistant who provides discreet, pressure-free guidance.
          </p>
        </div>

        {/* 2 Roles Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Card 1: The Social Character */}
          <div
            className="clinical-card animate-on-scroll delay-100"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: "var(--accent-blue-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-blue)",
                  }}
                >
                  <MessageCircle size={22} />
                </div>
                <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Conversational Partner
                </span>
              </div>

              <div style={{ marginBottom: "0.75rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  The Social Character
                </h3>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                The social character represents the real-world individuals the adolescent will encounter in everyday community environments. The character responds dynamically to speech in Egyptian Arabic, allowing the user to practice greeting, ordering, asking questions, and responding naturally.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.9rem" }}>
                  <Volume2 size={17} style={{ color: "var(--accent-blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>
                    <strong>Authentic Intonation:</strong> Spoken responses calibrated with warm, natural community phrasing in colloquial Egyptian Arabic.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.9rem" }}>
                  <Shield size={17} style={{ color: "var(--accent-blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>
                    <strong>Calm Patience:</strong> The character will never rush, interrupt, or express frustration, allowing the user to formulate sentences comfortably.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The Assistant */}
          <div
            className="clinical-card animate-on-scroll delay-200"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: "var(--accent-teal-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-teal-dark)",
                  }}
                >
                  <Sparkles size={22} />
                </div>
                <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  In-Scene Guide
                </span>
              </div>

              <div style={{ marginBottom: "0.75rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  The Assistant
                </h3>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                The assistant acts as a reassuring guide standing nearby in the scene. When an adolescent is uncertain of what to say or feeling conversational hesitation, gazing at the hint sphere triggers the assistant to offer gentle, actionable suggestions in spoken Arabic.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.9rem" }}>
                  <Eye size={17} style={{ color: "var(--accent-teal-dark)", marginTop: "3px", flexShrink: 0 }} />
                  <span>
                    <strong>Gaze-Activated:</strong> Simply looking at the hint sphere brings guidance without requiring complex controller gestures.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.9rem" }}>
                  <HeartHandshake size={17} style={{ color: "var(--accent-teal-dark)", marginTop: "3px", flexShrink: 0 }} />
                  <span>
                    <strong>Zero Penalties or Judgment:</strong> Utilizing hints never reduces progress or docks scores, fostering confidence and reducing social anxiety.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
