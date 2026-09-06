"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ScenarioGallery() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const hasDragged = useRef(false);

  const tabContainerRef = useRef(null);
  const tabRefs = useRef([]);

  const checkScroll = () => {
    if (tabContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabContainerRef.current;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = tabContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", checkScroll);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollTabs = (direction) => {
    if (tabContainerRef.current) {
      const scrollAmount = 320;
      tabContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const selectScenario = (idx) => {
    setActiveScenario(idx);
    if (tabRefs.current[idx]) {
      tabRefs.current[idx].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleMouseDown = (e) => {
    if (!tabContainerRef.current) return;
    setIsDragging(true);
    hasDragged.current = false;
    setStartX(e.pageX - tabContainerRef.current.offsetLeft);
    setScrollStart(tabContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !tabContainerRef.current) return;
    const x = e.pageX - tabContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    if (Math.abs(walk) > 4) {
      hasDragged.current = true;
    }
    tabContainerRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scenarios = [
    {
      id: "fava-beans",
      num: "01",
      titleEn: "Street Food Cart",
      titleAr: "عربة الفول البلدي",
      image: "/scenes/fava-beans-cart.jpg",
      category: "Daily Life & Food Ordering",
      difficulty: "Dynamic Conversational Adaptation",
      milestones: [
        "Initiate polite greeting («مساء النور / صباح الخير يا باشا»)",
        "State food choice and specify sandwich preferences (hot oil, tahina)",
        "Respond to vendor questions regarding order details",
        "Conclude exchange and settle payment smoothly",
      ],
      context:
        "The quintessential Egyptian morning ritual. Learners step up to a street food cart on a sidewalk in Cairo. They practice greeting, ordering, customizing ingredients, and conversing naturally with the social character who listens without haste.",
      interaction: "Voice Dialogue + Gaze-Activated Assistant Guidance",
    },
    {
      id: "currency-wallet",
      num: "02",
      titleEn: "3D Currency & Financial Autonomy",
      titleAr: "المحفظة والجنيه المصري",
      image: "/scenes/currency-wallet.jpg",
      category: "Financial Autonomy & Math Skills",
      difficulty: "Practical Transaction Skills",
      milestones: [
        "Identify realistic Egyptian Pound banknotes (10, 20, 50 LE)",
        "Calculate transaction total from vendor quotation",
        "Select correct bills from interactive 3D leather wallet",
        "Complete physical transaction with vendor confirmation",
      ],
      context:
        "Handling money independently is fundamental for daily autonomy. Belong renders realistic Egyptian currency notes inside an interactive wallet. Users inspect, count, and tender the exact amounts, overcoming real-world monetary anxiety in a safe space.",
      interaction: "3D Spatial Wallet + Raycast Banknote Selection",
    },
    {
      id: "supermarket",
      num: "03",
      titleEn: "Supermarket Snack Aisle",
      titleAr: "السوبرماركت والسلع الغذائية",
      image: "/scenes/supermarket.jpg",
      category: "Retail Navigation & Sensory Habituation",
      difficulty: "Visual Search & Checkout",
      milestones: [
        "Navigate visually dense grocery store aisles",
        "Read price tags («سناك - السعر 15 جنيه»)",
        "Utilize gaze reticle countdown to select products",
        "Interact with cashier at the checkout counter",
      ],
      context:
        "Supermarkets frequently provoke sensory overload for neurodiverse individuals due to crowded aisles and bright lighting. Belong provides a calibrated environment where adolescents practice locating items and completing checkout at a comfortable pace.",
      interaction: "Gaze Dwell Reticle (Hands-free selection) + Cashier Speech",
    },
    {
      id: "microbus",
      num: "04",
      titleEn: "Microbus Transit & Pedestrian Crossing",
      titleAr: "الميكروباص والموقف العام",
      image: "/scenes/microbus.jpg",
      category: "Urban Commuting & Public Safety",
      difficulty: "Urban Spatial Awareness",
      milestones: [
        "Locate pedestrian zebra crossings in urban street settings",
        "Identify microbuses and transit route designations",
        "Signal the driver using standard community hand gestures",
        "Confirm destination in everyday transit dialect",
      ],
      context:
        "Microbuses represent the primary public transit system in Egyptian cities. Navigating busy transit stops can be overwhelming. This scenario trains adolescents to safely cross the street, signal drivers calmly, and communicate destinations with confidence.",
      interaction: "Spatial Audio Head Tracking + Pedestrian Safety Cues",
    },
    {
      id: "school-canteen",
      num: "05",
      titleEn: "School Canteen & Peer Socialization",
      titleAr: "فناء المدرسة والكانتين",
      image: "/scenes/school-canteen.jpg",
      category: "Peer Communication & School Life",
      difficulty: "Social Proximity Dynamics",
      milestones: [
        "Approach classmate groups gathered in courtyard benches",
        "Initiate casual conversation during school recess",
        "Participate in group recreation (courtyard basketball)",
        "Order snacks independently at the canteen window",
      ],
      context:
        "School courtyards during break are vibrant but socially complex. In Belong, adolescents practice approaching peer groups, respecting personal space, initiating casual dialogue, and placing their own orders at the busy canteen window.",
      interaction: "Proximity Trigger + Peer Conversational Turns",
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section id="scenarios" style={{ padding: "5.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll">
        {/* Section Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-eyebrow">
            In-App Learning Environments
          </span>
          <h2 className="section-title">
            Five culturally localized training scenarios.
          </h2>
          <p className="section-description">
            Each scenario simulates authentic Egyptian urban spaces, everyday conversational vocabulary, and tangible life milestones.
          </p>
        </div>

        {/* Tab Selection Header with Navigation Controls */}
        <div style={{ position: "relative", marginBottom: "2.25rem" }}>
          {/* Scroll Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={() => scrollTabs("left")}
              aria-label="Scroll scenarios left"
              style={{
                position: "absolute",
                left: "-14px",
                top: "calc(50% - 6px)",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-medium)",
                boxShadow: "0 3px 12px rgba(0, 0, 0, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-subtle)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-surface)")}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Tab Container */}
          <div
            ref={tabContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              display: "flex",
              gap: "0.6rem",
              overflowX: "auto",
              paddingBottom: "0.85rem",
              paddingTop: "0.25rem",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              WebkitOverflowScrolling: "touch",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: isDragging ? "none" : "auto",
            }}
            className="scenario-tab-bar"
          >
            {scenarios.map((s, idx) => {
              const isActive = idx === activeScenario;
              return (
                <button
                  key={s.id}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  onClick={() => {
                    if (!hasDragged.current) {
                      selectScenario(idx);
                    }
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.85rem 1.4rem",
                    borderRadius: "8px",
                    backgroundColor: isActive ? "var(--accent-navy)" : "var(--bg-surface)",
                    border: `1px solid ${isActive ? "var(--accent-navy)" : "var(--border-light)"}`,
                    color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    flexShrink: 0,
                    boxShadow: isActive ? "0 2px 8px rgba(15, 23, 42, 0.15)" : "none",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.76rem",
                      color: isActive ? "rgba(255, 255, 255, 0.7)" : "var(--text-muted)",
                    }}
                  >
                    [{s.num}]
                  </span>
                  <span>{s.titleEn}</span>
                </button>
              );
            })}
          </div>

          {/* Scroll Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={() => scrollTabs("right")}
              aria-label="Scroll scenarios right"
              style={{
                position: "absolute",
                right: "-14px",
                top: "calc(50% - 6px)",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-medium)",
                boxShadow: "0 3px 12px rgba(0, 0, 0, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-subtle)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-surface)")}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Active Scenario Display Panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: "2.5rem",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-light)",
            borderRadius: "16px",
            padding: "2rem",
            alignItems: "stretch",
            boxShadow: "0 4px 25px rgba(0, 0, 0, 0.05)",
          }}
          className="scenario-grid"
        >
          {/* Left: Clean, 100% Unobscured Screenshot */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* The screenshot container: NO text overlays, NO bottom gradient text */}
            <div className="screenshot-container">
              <Image
                src={current.image}
                alt={current.titleEn}
                width={1200}
                height={680}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                priority
              />
            </div>

            {/* Clean Verification Tag Below the image */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "1rem",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
              }}
            >
              <span>Authentic Mobile VR runtime capture</span>
              <span className="font-mono" style={{ color: "var(--accent-teal-dark)", fontWeight: 600 }}>
                {current.interaction}
              </span>
            </div>
          </div>

          {/* Right: Detailed Scenario Information */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Category & Arabic Heading */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.6rem",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--accent-teal-dark)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {current.category}
                </span>
                <span
                  className="font-arabic"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {current.titleAr}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.85rem",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {current.titleEn}
              </h3>

              <p
                style={{
                  fontSize: "0.96rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                }}
              >
                {current.context}
              </p>

              {/* Learning Milestones Checklist */}
              <div>
                <h4
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginBottom: "0.85rem",
                  }}
                >
                  Target Life Skills & Milestones
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {current.milestones.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.65rem",
                        fontSize: "0.9rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "4px",
                          backgroundColor: "var(--accent-teal-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} style={{ color: "var(--accent-teal-dark)" }} />
                      </div>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Interaction Metadata & Quick Switcher Box */}
            <div
              style={{
                backgroundColor: "var(--bg-subtle)",
                border: "1px solid var(--border-light)",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                marginTop: "1.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <span className="font-mono" style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>
                  EVALUATION MODALITY
                </span>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {current.difficulty}
                </span>
              </div>

              {/* Prev / Next Quick Stepper */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button
                  onClick={() => selectScenario((activeScenario - 1 + scenarios.length) % scenarios.length)}
                  className="btn-secondary"
                  style={{
                    padding: "0.45rem 0.85rem",
                    fontSize: "0.82rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                  aria-label="Previous scenario"
                >
                  <ChevronLeft size={15} />
                  <span>Prev</span>
                </button>
                <span className="font-mono" style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, padding: "0 0.35rem" }}>
                  {activeScenario + 1} / {scenarios.length}
                </span>
                <button
                  onClick={() => selectScenario((activeScenario + 1) % scenarios.length)}
                  className="btn-secondary"
                  style={{
                    padding: "0.45rem 0.85rem",
                    fontSize: "0.82rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                  aria-label="Next scenario"
                >
                  <span>Next</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scenario-tab-bar {
          scrollbar-width: thin;
          scrollbar-color: var(--border-medium) transparent;
        }
        .scenario-tab-bar::-webkit-scrollbar {
          height: 6px;
        }
        .scenario-tab-bar::-webkit-scrollbar-track {
          background: var(--bg-subtle);
          border-radius: 999px;
        }
        .scenario-tab-bar::-webkit-scrollbar-thumb {
          background: var(--border-medium);
          border-radius: 999px;
        }
        .scenario-tab-bar::-webkit-scrollbar-thumb:hover {
          background: var(--border-strong);
        }
        @media (max-width: 960px) {
          .scenario-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
