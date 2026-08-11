import Link from "next/link";

const nav: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 34,
  fontSize: 12.5,
  fontWeight: 600,
  letterSpacing: 1.6,
  textTransform: "uppercase",
};
import { CSSProperties } from "react";

export function Logo({ size = 20 }: { size?: number }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <svg width={size * 2.2} height={size * 1.2} viewBox="0 0 44 24" fill="none">
        <path d="M4 16c4-7 12-11 20-11 7 0 12 2 16 6-6-2-10-2-15-1l3 3H10l-2 3H4z" fill="#fff" />
        <path d="M6 19h30" stroke="#e11d2b" strokeWidth="2" />
      </svg>
      {/* The wordmark reads as display type, not body copy — it stays on the heading face. */}
      <span style={{ fontFamily: "var(--font-heading), Impact, sans-serif", fontSize: size, letterSpacing: 2, textTransform: "uppercase", color: "#fff" }}>
        Drive <span style={{ color: "#e11d2b" }}>X</span>
      </span>
    </span>
  );
}

export default function Nav({ active }: { active: "home" | "cars" }) {
  const on = { color: "#fff", borderBottom: "2px solid #e11d2b", paddingBottom: 4 } as CSSProperties;
  const off = { color: "#c9c9cf" } as CSSProperties;
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        padding: "22px 64px",
        position: "relative",
        zIndex: 5,
      }}
    >
      <Link href="/"><Logo /></Link>
      <div style={nav}>
        <Link href="/" style={active === "home" ? on : off}>Home</Link>
        <Link href="/cars" style={active === "cars" ? on : off}>Cars</Link>
        <Link href="/#offers" style={off}>Special Offers</Link>
        <Link href="/#finance" style={off}>Finance</Link>
        <Link href="/#about" style={off}>About Us</Link>
        <Link href="/#contact" style={off}>Contact</Link>
      </div>
      <Link
        href="/#contact"
        style={{
          background: "#e11d2b",
          color: "#fff",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          padding: "13px 22px",
          borderRadius: 3,
        }}
      >
        Book a Test Drive
      </Link>
    </nav>
  );
}
