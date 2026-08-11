import Link from "next/link";
import { CSSProperties } from "react";
import { Logo } from "./nav";

const CONTACT = {
  phone: "(02) 1234 5678",
  email: "info@drivex.com",
  address: "123 Auto Drive, Sydney, NSW 2000",
};

const h: CSSProperties = {
  fontSize: 11.5,
  fontWeight: 800,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#d6d6dc",
};
const link: CSSProperties = { color: "#8b8b95" };
const social: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 34,
  height: 34,
  border: "1px solid #2a2a33",
  borderRadius: 4,
};

export default function Footer() {
  return (
    <footer style={{ background: "#08080b", borderTop: "1px solid #1d1d24", padding: "44px 64px" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        <div>
          <Link href="/"><Logo size={17} /></Link>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.7, color: "#8b8b95" }}>
            Quality vehicles. Trusted service.
            <br />
            Better journeys.
          </p>
        </div>
        <div>
          <div style={h}>Quick Links</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 36px", marginTop: 14, fontSize: 12.5 }}>
            <Link href="/" style={link}>Home</Link>
            <Link href="/#finance" style={link}>Finance</Link>
            <Link href="/cars" style={link}>Cars</Link>
            <Link href="/#about" style={link}>About Us</Link>
            <Link href="/#offers" style={link}>Special Offers</Link>
            <Link href="/#contact" style={link}>Contact</Link>
          </div>
        </div>
        <div>
          <div style={h}>Contact</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14, fontSize: 12.5, color: "#8b8b95" }}>
            <div>{CONTACT.address}</div>
            <div>{CONTACT.phone}</div>
            <div>{CONTACT.email}</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={h}>Follow Us</div>
          <div style={{ display: "flex", gap: 12, marginTop: 14, justifyContent: "flex-end" }}>
            <a href="#" style={social} aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9c9cf">
                <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a href="#" style={social} aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9c9cf" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#c9c9cf" stroke="none" />
              </svg>
            </a>
            <a href="#" style={social} aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9c9cf">
                <path d="M22 8s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C16.2 4.7 12 4.7 12 4.7s-4.2 0-7.1.2c-.4.1-1.3.1-2.1.9C2.2 6.5 2 8 2 8S1.8 9.8 1.8 11.5v1.7C1.8 15 2 16.7 2 16.7s.2 1.5.8 2.2c.8.8 1.8.8 2.3.9 1.7.2 6.9.2 6.9.2s4.2 0 7.1-.2c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.5v-1.7C22.2 9.8 22 8 22 8zM9.8 15.3V8.9l5.8 3.2z" />
              </svg>
            </a>
          </div>
          <div style={{ marginTop: 18, fontSize: 11.5, color: "#6f6f78" }}>© 2026 Drive X. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
