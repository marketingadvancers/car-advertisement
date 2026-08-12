import type { Metadata } from "next";
import { Changa_One, Merienda } from "next/font/google";
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

// Merienda is variable across 300..900, so no weight list — the full axis is loaded.
// The 300..900 range matters: the pages set fontWeight 800/900 on labels and figures,
// which a 400..700 face would clamp instead of rendering.
const bodyFont = Merienda({
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
      <body className={`${heading.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
