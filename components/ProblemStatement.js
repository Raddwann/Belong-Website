"use client";

import { DollarSign, Globe2, Bot, CheckCircle2 } from "lucide-react";

export default function ProblemStatement() {
  const problems = [
    {
      num: "01",
      category: "The Economic Barrier",
      title: "High-End VR as an Exclusive Luxury",
      description:
        "Western therapeutic VR platforms depend on expensive standalone hardware requiring heavy import costs and foreign subscriptions. For families in Egypt and the MENA region, this pricing makes modern immersive intervention virtually out of reach.",
      solutionTitle: "Accessible Mobile VR Deployment",
      solutionDesc:
        "Belong is specifically engineered to run on standard everyday smartphones paired with accessible Mobile VR headsets—democratizing immersive social practice for families, schools, and local support centers across Egypt and the MENA region.",
      accent: "var(--accent-teal)",
      icon: DollarSign,
    },
    {
      num: "02",
      category: "Cultural & Linguistic Alienation",
      title: "Foreign Environments & Western Social Norms",
      description:
        "Existing platforms place youth in foreign American suburban streets, shopping malls, and English-speaking contexts. Autistic youth in Egypt and the Arab world cannot translate foreign social dynamics into the lively, high-density, and dialect-rich realities of local community life.",
      solutionTitle: "Native Egyptian Colloquial Immersion",
      solutionDesc:
        "Belong is built natively in colloquial Egyptian Arabic (العامية المصرية), immersing youth in authentic local spaces—ordering from sidewalk food carts, managing Egyptian banknotes, signaling microbuses, and reading genuine community social cues.",
      accent: "var(--accent-blue)",
      icon: Globe2,
    },
    {
      num: "03",
      category: "The Rigid Script Trap vs. Responsible AI",
      title: "Beyond Static Scripts: Safe, Adaptive Conversational AI",
      description:
        "Traditional digital tools force autistic youth into rigid multiple-choice buttons and predetermined branching sequences. Memorizing robotic scripts fails to prepare learners for real-life conversations, where dialogue is fluid, spontaneous, and unpredictable.",
      solutionTitle: "Unscripted Interaction Grounded in Responsible AI",
      solutionDesc:
        "Belong replaces fixed scripts with unscripted, natural voice dialogue powered by conversational intelligence. Crucially, the system is governed by strict Responsible AI safeguards—ensuring child privacy, non-judgmental acceptance, sensory safety, transparent feedback, and human-in-the-loop oversight to nurture genuine confidence without clinical risk.",
      accent: "var(--accent-warm)",
      icon: Bot,
      responsibleAiPillars: [
        "Privacy & Child Safety",
        "Human Control & Oversight",
        "Fairness & Non-Discrimination",
        "Sensory & Emotional Safeguards",
      ],
    },
  ];

  return (
    <section id="reality" style={{ padding: "5.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-eyebrow">
            The Belong Advantage
          </span>
          <h2 className="section-title">
            Where existing therapeutic VR falls short—and how Belong changes the game.
          </h2>
          <p className="section-description">
            While conventional VR platforms demonstrate clinical promise, they remain economically inaccessible, culturally foreign, and bound to rigid decision trees. Belong dismantles these barriers.
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
                  justifyContent: "space-between",
                }}
              >
                <div>
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
                      marginBottom: "1.75rem",
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

                  {/* Responsible AI Pillars Strip for Card 3 */}
                  {item.responsibleAiPillars && (
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
                      {item.responsibleAiPillars.map((pillar, pIdx) => (
                        <span
                          key={pIdx}
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
                          ✓ {pillar}
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
