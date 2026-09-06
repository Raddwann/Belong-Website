"use client";

import { DollarSign, Globe2, Bot, CheckCircle2 } from "lucide-react";

export default function ProblemStatement() {
  const problems = [
    {
      num: "01",
      category: "The Economic Barrier",
      title: "High-End VR as an Exclusive Luxury",
      description:
        "Western therapeutic VR platforms depend on expensive standalone hardware requiring heavy import costs and foreign subscriptions. For families in Egypt and the region, this pricing makes modern immersive intervention virtually out of reach.",
      solutionTitle: "Accessible Mobile VR Deployment",
      solutionDesc:
        "Belong is specifically optimized to run on standard everyday smartphones paired with accessible Mobile VR headsets—democratizing immersive social practice for families, schools, and local support centers.",
      accent: "var(--accent-teal)",
      icon: DollarSign,
    },
    {
      num: "02",
      category: "The Cultural & Linguistic Disconnect",
      title: "Foreign Settings & Stiff Formal Arabic",
      description:
        "Available software places adolescents in Western suburban neighborhoods or utilizes formal Modern Standard Arabic (Fusha). An autistic child cannot translate textbook phrases into the lively, dialect-rich social encounters of daily Egyptian life.",
      solutionTitle: "Native Egyptian Colloquial Immersion",
      solutionDesc:
        "Belong is built natively in colloquial Egyptian Arabic (العامية المصرية), immersing learners in authentic cultural spaces: ordering street food, handling local currency, and navigating public transportation.",
      accent: "var(--accent-blue)",
      icon: Globe2,
    },
    {
      num: "03",
      category: "The Static Script Trap",
      title: "Rigid Multiple-Choice Memorization",
      description:
        "Most educational tools force users into pre-written branching trees where virtual characters only accept fixed button choices. Learners end up memorizing arbitrary sequences without experiencing true conversational give-and-take.",
      solutionTitle: "Unscripted, Adaptive Dialogue",
      solutionDesc:
        "Social characters engage in spontaneous, context-aware dialogues. Users speak freely into the headset microphone, learning natural conversational turn-taking, asking questions, and recovering from pauses.",
      accent: "var(--accent-warm)",
      icon: Bot,
    },
  ];

  return (
    <section id="reality" style={{ padding: "5.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-eyebrow">
            Why Virtual Reality Intervention Matters
          </span>
          <h2 className="section-title">
            Overcoming the barriers in modern assistive technology.
          </h2>
          <p className="section-description">
            Traditional behavioral therapy and foreign VR platforms struggle to prepare Egyptian neurodivergent adolescents for everyday community autonomy.
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
                  </div>

                  {/* Problem Description */}
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: "0.85rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "2rem",
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
