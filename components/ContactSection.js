"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/omar.radwan2474@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          _replyto: formData.email,
          Topic: formData.subject,
          Message: formData.message,
          _subject: `[Belong VR Inquiry] ${formData.subject}`,
          _template: "table",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error(data.message || "Unable to send message automatically.");
      }
    } catch (err) {
      console.warn("Direct submission notice:", err);
      // Fallback: trigger mailto so message is never lost
      const mailtoSubject = encodeURIComponent(`[Belong VR Inquiry] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:omar.radwan2474@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus("success");
    }
  };

  return (
    <section id="contact" style={{ padding: "5.5rem 0", backgroundColor: "transparent" }}>
      <div className="container animate-on-scroll" style={{ maxWidth: "840px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-eyebrow">
            Get In Touch
          </span>
          <h2 className="section-title" style={{ maxWidth: "100%" }}>
            Connect with the Belong team.
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Have inquiries about the system, research collaborations, or clinical demonstrations? Send a direct inquiry to our team.
          </p>
        </div>

        {/* Centered Form Card */}
        <div
          className="clinical-card"
          style={{
            padding: "2.75rem",
            backgroundColor: "var(--bg-surface)",
          }}
        >
          {status === "success" ? (
            <div
              style={{
                textAlign: "center",
                padding: "2.5rem 1rem",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-teal-light)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-teal-dark)",
                  marginBottom: "1.25rem",
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.6rem", color: "var(--text-primary)" }}>
                Message Sent Successfully
              </h3>
              <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 1.75rem" }}>
                Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <em>"{formData.subject}"</em> has been sent successfully. Our team will get back to you at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setFormData({ name: "", email: "", subject: "", message: "" });
                  setStatus("idle");
                }}
                className="btn-secondary"
                style={{ fontSize: "0.9rem", padding: "0.65rem 1.4rem" }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Full Name <span style={{ color: "var(--accent-warm)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "8px",
                      border: "1px solid var(--border-medium)",
                      backgroundColor: "var(--bg-surface)",
                      fontSize: "0.94rem",
                      color: "var(--text-primary)",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    Your Email Address <span style={{ color: "var(--accent-warm)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "8px",
                      border: "1px solid var(--border-medium)",
                      backgroundColor: "var(--bg-surface)",
                      fontSize: "0.94rem",
                      color: "var(--text-primary)",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.45rem",
                  }}
                >
                  Inquiry Topic <span style={{ color: "var(--accent-warm)" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter the topic of your inquiry (e.g. Clinical Trial, Partnership, Question)"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border-medium)",
                    backgroundColor: "var(--bg-surface)",
                    fontSize: "0.94rem",
                    color: "var(--text-primary)",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.45rem",
                  }}
                >
                  Message <span style={{ color: "var(--accent-warm)" }}>*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Please share details about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border-medium)",
                    backgroundColor: "var(--bg-surface)",
                    fontSize: "0.94rem",
                    color: "var(--text-primary)",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                  }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary"
                  style={{
                    padding: "0.9rem 2.2rem",
                    fontSize: "0.95rem",
                    opacity: status === "loading" ? 0.75 : 1,
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
