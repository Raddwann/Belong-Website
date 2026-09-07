"use client";

export default function TeamSection() {
  const team = [
    {
      name: "Omar Radwan",
      initials: "OR",
    },
    {
      name: "Jana Ayman",
      initials: "JA",
    },
    {
      name: "Farida Amr",
      initials: "FA",
    },
    {
      name: "Farah Mohamed",
      initials: "FM",
    },
  ];

  return (
    <section id="creators" style={{ padding: "2.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-eyebrow">
            The Team
          </span>
          <h2 className="section-title">
            Project Creators
          </h2>
          <p className="section-description">
            Belong was conceived, engineered, and evaluated by a dedicated team committed to making immersive social therapy accessible and culturally authentic.
          </p>
        </div>

        {/* Team Cards Grid - Names ONLY, no roles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {team.map((member, idx) => {
            const delayClass = `delay-${(idx + 1) * 100}`;
            return (
              <div
                key={idx}
                className={`clinical-card animate-on-scroll ${delayClass}`}
                style={{
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  backgroundColor: "var(--bg-primary)",
                }}
              >
              {/* Monogram Badge */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                {member.initials}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {member.name}
                </h3>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
