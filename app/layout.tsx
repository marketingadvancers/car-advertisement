import type { Metadata } from "next";
import { Changa_One, Caveat } from "next/font/google";
import "./globals.css";

// Changa One ships a single weight (400) in roman and italic — the heading rule in
// globals.css turns off weight synthesis so the inline fontWeight values on the
// h1/h2 elements can't smear it into a faux bold.
const heading = Changa_One({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

// Caveat is variable across 400..700, so no weight list — the full axis is loaded.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drive X — Premium Cars, Exceptional Value",
  description: "Discover a carefully selected range of quality vehicles designed to match your lifestyle, performance needs, and budget.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* The entrance start states hide content until GSAP reveals it — undo them
            when there is no JS to run the reveal. */}
        <noscript>
          <style>{`.dx-hidden,.dx-stagger>*,.dx-piece,.dx-word{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className={`${heading.variable} ${caveat.variable}`}>{children}</body>
    </html>
  );
}
