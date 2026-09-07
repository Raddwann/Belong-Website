"use client";

import { DollarSign, Globe2, Bot, CheckCircle2, PauseCircle, ArrowRight } from "lucide-react";

export default function ProblemStatement() {
  const problems = [
    {
      num: "01",
      category: "The Economic Barrier",
      title: "High-End VR as an Exclusive Luxury",
      description:
        "Western therapeutic VR platforms depend on expensive standalone hardware requiring heavy import tariffs and foreign subscriptions. For families across Egypt and the MENA region, this pricing makes modern immersive intervention virtually out of reach.",
      solutionTitle: "Accessible Mobile VR Deployment",
      solutionDesc:
        "Belong is specifically engineered to run on standard everyday smartphones paired with accessible Mobile VR headsets—democratizing immersive social practice for families, schools, and local support centers across Egypt and the MENA region.",
      accent: "var(--accent-teal)",
      icon: DollarSign,
      highlights: [
        "Everyday Smartphones",
        "Zero Import Tariffs",
        "90%+ Cost Reduction",
        "MENA Scalable",
      ],
    },
    {
      num: "02",
      category: "Cultural & Linguistic Disconnect",
      title: "Foreign Environments & Western Social Norms",
      description:
        "Existing platforms place youth in foreign American suburban streets, shopping malls, and English-speaking contexts. Autistic youth in Egypt and the Arab world cannot translate foreign social dynamics into the lively, high-density, and dialect-rich realities of local community life.",
      solutionTitle: "Native Egyptian Colloquial Immersion",
      solutionDesc:
        "Belong is built natively in colloquial Egyptian Arabic (العامية المصرية), immersing youth in authentic local spaces—ordering from sidewalk food carts, managing Egyptian banknotes, signaling microbuses, and reading genuine community social cues.",
      accent: "var(--accent-blue)",
      icon: Globe2,
      highlights: [
        "Colloquial Arabic (عامية)",
        "Authentic Cairo Contexts",
        "Egyptian Banknotes",
        "Zero Cultural Friction",
      ],
    },
    {
      num: "03",
      category: "The Rigid Script Trap vs. Adaptive AI",
      title: "Beyond Static Scripts: Safe, Adaptive AI",
      description:
        "Traditional digital tools force autistic youth into rigid multiple-choice buttons and predetermined branching sequences. Memorizing robotic scripts fails to prepare learners for real-life conversations, where dialogue is fluid, spontaneous, and unpredictable.",
      solutionTitle: "Unscripted Voice Grounded in Responsible AI",
      solutionDesc:
        "Belong replaces fixed scripts with unscripted, natural voice dialogue powered by conversational intelligence. Crucially, the system is governed by strict Responsible AI safeguards—ensuring child privacy, sensory safety, non-judgmental acceptance, and human oversight without clinical risk.",
      accent: "var(--accent-warm)",
      icon: Bot,
      highlights: [
        "Privacy & Child Safety",
        "Human Oversight",
        "Sensory Safeguards",
        "Non-Judgmental Acceptance",
      ],
    },
  ];

  return (
    <section id="reality" style={{ padding: "4.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll">
        {/* Narrative Block: The Suffer -> The Gap -> The Transition */}
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-light)",
            borderRadius: "16px",
            padding: "clamp(1.5rem, 3.5vw, 2.75rem)",
            marginBottom: "3.5rem",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Stage 1: The Struggle */}
          <div style={{ maxWidth: "820px", marginBottom: "2.25rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <PauseCircle size={18} style={{ color: "var(--accent-warm)" }} />
              <span
                className="font-mono"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent-warm)",
                }}
              >
                The Real-World Challenge
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Social situations don’t come with a pause button.
            </h2>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.3vw, 1.18rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              For many autistic individuals, practicing real-world interactions can be stressful, unpredictable, and difficult to repeat. In everyday life, fast-paced conversations and unexpected social cues can feel overwhelming—with zero opportunity to rewind, pause, or safely try again.
            </p>
          </div>

          {/* Stage 2: The Gap / Traditional Approaches */}
          <div
            style={{
              borderTop: "1px solid var(--border-light)",
              paddingTop: "2rem",
              marginBottom: "2.25rem",
            }}
          >
            <div style={{ marginBottom: "1.25rem" }}>
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Where Traditional Approaches Fall Short
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--bg-subtle)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-warm)",
                    }}
                  />
                  <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-primary)" }}>
                    Static & Scripted
                  </span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  Pre-programmed decision trees and robotic scripts fail to prepare learners for real life, where dialogue is spontaneous, fluid, and unpredictable.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-subtle)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-teal)",
                    }}
                  />
                  <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-primary)" }}>
                    Prohibitively Expensive
                  </span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  Imported standalone VR headsets and expensive overseas software subscriptions put immersive interventions out of reach for most families and local centers.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-subtle)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-blue)",
                    }}
                  />
                  <span style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-primary)" }}>
                    Not Culturally Relevant
                  </span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  Foreign tools built around Western shopping malls and English dialogue cannot teach the vibrant social nuances and colloquial realities of Egyptian street life.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3: The Transition */}
          <div
            style={{
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--border-medium)",
              borderRadius: "12px",
              padding: "1.5rem 1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}
          >
            <div style={{ maxWidth: "680px" }}>
              <div
                style={{
                  fontSize: "1.18rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.015em",
                  marginBottom: "0.35rem",
                }}
              >
                So, what if practice could happen before the real moment?
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                An immersive, zero-stakes rehearsal ground where autistic adolescents can pause, explore freely, make mistakes without social penalties, and build authentic confidence.
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text-primary)",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-medium)",
                padding: "0.55rem 1rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.86rem",
              }}
            >
              <span>Belong’s Approach</span>
              <ArrowRight size={15} style={{ color: "var(--accent-teal)" }} />
            </div>
          </div>
        </div>

        {/* Stage 4: The Belong Advantage Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-eyebrow">
            The Belong Advantage
          </span>
          <h2 className="section-title">
            Where traditional approaches fall short—and how Belong changes the game.
          </h2>
          <p className="section-description">
            By dismantling the barriers of high cost, rigid scripts, and foreign contexts, Belong delivers an accessible, culturally native, and adaptive practice ecosystem.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {problems.map((item, idx) => {
            const Icon = item.icon;
            const delayClass = idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300";
            return (
              <div
                key={item.num}
                className={`clinical-card animate-on-scroll ${delayClass}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "1.25rem" }}>
                  {/* Top Bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: item.accent,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      [{item.num}] {item.category}
                    </span>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.accent,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Problem Title & Text */}
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: "0.85rem",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.93rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Belong's Answer Box */}
                <div
                  style={{
                    backgroundColor: "var(--bg-subtle)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "10px",
                    padding: "1.25rem",
                    marginTop: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.45rem",
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: item.accent }} />
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.solutionTitle}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.solutionDesc}
                  </p>

                  {/* Highlights Strip */}
                  {item.highlights && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        marginTop: "0.85rem",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid var(--border-light)",
                      }}
                    >
                      {item.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "4px",
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-medium)",
                            color: "var(--text-secondary)",
                            fontWeight: 600,
                          }}
                        >
                          ✓ {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
