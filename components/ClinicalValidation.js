"use client";

import { Users, Building2, CheckCircle, ShieldCheck } from "lucide-react";

export default function ClinicalValidation() {
  const stats = [
    {
      value: "3",
      label: "Autism Support Centers",
      sub: "In-depth evaluations in Egypt",
      icon: Building2,
    },
    {
      value: "10",
      label: "Autistic Adolescent Participants",
      sub: "Supervised interactive testing sessions",
      icon: Users,
    },
    {
      value: "100%",
      label: "Turn Completion Rate",
      sub: "Successful conversational exchanges",
      icon: CheckCircle,
    },
    {
      value: "Zero",
      label: "Pressure Latency",
      sub: "Comfortable gaze-activated hint usage",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="clinical" style={{ padding: "2.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-eyebrow">
            Field Evaluation & Observations
          </span>
          <h2 className="section-title">
            Ground-truthed with autism specialists and Egyptian youth.
          </h2>
          <p className="section-description">
            Belong was evaluated across specialized autism support centers in Egypt through direct observational testing with autistic adolescents and structured reviews by autism specialists.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            const delayClass = `delay-${(idx + 1) * 100}`;
            return (
              <div
                key={idx}
                className={`clinical-card animate-on-scroll ${delayClass}`}
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      backgroundColor: "var(--accent-teal-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-teal-dark)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700 }}>
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.value}
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
