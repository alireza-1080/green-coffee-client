"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname(); // Track route changes

  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);

    // Disable scrolling temporarily
    const preventScroll = (e) => e.preventDefault();
    document.body.style.overflow = "hidden";
    window.addEventListener("scroll", preventScroll, { passive: false });

    // Re-enable scrolling after 1 second
    setTimeout(() => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", preventScroll);
    }, 1000);

  }, [pathname]); // Run when pathname changes

  return null; // No UI, just logic
}