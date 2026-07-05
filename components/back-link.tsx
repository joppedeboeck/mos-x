"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BackLink({
  href,
  label = "Terug",
  dark = false,
}: {
  href: string;
  label?: string;
  dark?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  if (dark) {
    return (
      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "12px",
          fontWeight: 600,
          color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.7)",
          textDecoration: "none",
          marginBottom: "12px",
          padding: "6px 12px 6px 8px",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.2)",
          background: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          transition: "background 150ms ease, color 150ms ease, border-color 150ms ease",
          letterSpacing: "0.01em",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ChevronLeft size={13} strokeWidth={2.5} />
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "12px",
        fontWeight: 600,
        color: hovered ? "#7AB54E" : "#9BCB6C",
        textDecoration: "none",
        marginBottom: "10px",
        padding: "6px 12px 6px 8px",
        borderRadius: "100px",
        border: hovered ? "1px solid rgba(155,203,108,0.5)" : "1px solid rgba(155,203,108,0.3)",
        background: hovered ? "rgba(155,203,108,0.14)" : "rgba(155,203,108,0.07)",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        transition: "background 150ms ease, color 150ms ease, border-color 150ms ease",
        letterSpacing: "0.01em",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ChevronLeft size={13} color={hovered ? "#7AB54E" : "#9BCB6C"} strokeWidth={2.5} />
      {label}
    </Link>
  );
}
