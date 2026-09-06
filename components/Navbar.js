"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why VR Works", href: "#reality" },
    { name: "Scenarios", href: "#scenarios" },
    { name: "Interaction Model", href: "#companions" },
    { name: "Field Trials", href: "#clinical" },
    { name: "Creators", href: "#creators" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#FFFFFF",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-light)",
        transition: "all 0.25s ease",
      }}
    >
      <div className="container navbar-layout">
        {/* Left: Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", justifySelf: "start" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center" }} aria-label="Belong Home">
            <div
              style={{
                width: "132px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/logo_cropped.png"
                alt="Belong Logo"
                width={132}
                height={43}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links (True Center) */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "2rem",
            justifySelf: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: CTA on Desktop / Hamburger on Mobile */}
        <div style={{ display: "flex", alignItems: "center", justifySelf: "end", gap: "1rem" }}>
          <div style={{ display: "none", alignItems: "center" }} className="desktop-nav">
            <a
              href="#scenarios"
              className="btn-primary"
              style={{
                padding: "0.6rem 1.35rem",
                fontSize: "0.88rem",
                whiteSpace: "nowrap",
              }}
            >
              <span>Explore Scenarios</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid var(--border-light)",
              color: "var(--text-primary)",
              background: "var(--bg-surface)",
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid var(--border-light)",
            padding: "1.75rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                padding: "0.4rem 0",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#scenarios"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <span>Explore Scenarios</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style jsx>{`
        .navbar-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        @media (min-width: 960px) {
          .navbar-layout {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
          }
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
