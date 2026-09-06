"use client";

import { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Once revealed, unobserve to keep visible
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
