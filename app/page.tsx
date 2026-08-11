import Link from "next/link";
import { CSSProperties } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Fold, Reveal, Track, FadeUp, Zoom, Stagger, Count, Shine, Circular } from "@/components/anim";

const red = "#e11d2b";
const btnPrimary: CSSProperties = {
  background: red, color: "#fff", fontSize: 12.5, fontWeight: 700, letterSpacing: 1.5,
  textTransform: "uppercase", padding: "15px 28px", borderRadius: 3,
};
const btnGhost: CSSProperties = {
  border: "1px solid rgba(255,255,255,0.45)", color: "#fff", fontSize: 12.5, fontWeight: 700,
  letterSpacing: 1.5, textTransform: "uppercase", padding: "15px 26px", borderRadius: 3,
};
const eyebrow: CSSProperties = {
  fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: red,
};
const card: CSSProperties = {
  background: "#141419", border: "1px solid #232329", borderRadius: 8, overflow: "hidden",
  display: "flex", flexDirection: "column",
};

const CATEGORIES = [
  { img: "/assets/suv.jpg", name: "SUVs", blurb: "Space, comfort, and capability for every journey." },
  { img: "/assets/sedan.jpg", name: "Sedans", blurb: "Elegant design with a smooth, refined driving experience." },
  { img: "/assets/hatch.jpg", name: "Hatchbacks", blurb: "Compact, practical, and perfect for city driving." },
  { img: "/assets/perf.jpg", name: "Performance Cars", blurb: "Powerful machines built for those who love to drive." },
];

const FEATURES = [
  "Automatic Transmission", "Fuel Efficient", "Premium Interior", "Low Mileage", "Advanced Safety Features",
];

const WHY = [
  { title: "Quality You Can Trust", blurb: "Every vehicle is carefully inspected before it reaches you." },
  { title: "Transparent Pricing", blurb: "Know what you're paying with clear, straightforward pricing." },
  { title: "Flexible Finance", blurb: "Explore finance options designed around your budget." },
  { title: "Personal Service", blurb: "Our team is here to help you find the right car—not just any car." },
];

const STEPS = [
  { n: "01", title: "Choose Your Car", blurb: "Browse our collection and find the vehicle that fits your needs." },
  { n: "02", title: "Book a Test Drive", blurb: "Experience the car for yourself and see how it feels on the road." },
  { n: "03", title: "Get Your Offer", blurb: "Talk to our team about pricing and available finance options." },
  { n: "04", title: "Drive Away", blurb: "Complete the process and get behind the wheel of your next car." },
];

const REVIEWS = [
  { quote: "\u201CThe entire process was easy and straightforward. I found exactly what I was looking for and couldn't be happier with my new car.\u201D", name: "James R." },
  { quote: "\u201CGreat selection, friendly service, and no pressure. The team made buying my car incredibly simple.\u201D", name: "Sarah T." },
];

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={red} strokeWidth="2.4">
      <circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div style={{ background: "#0b0b0e", color: "#fff", minWidth: 1200 }}>
      {/* HERO */}
      <header style={{ position: "relative", minHeight: 760, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(8,8,10,0.92) 0%,rgba(8,8,10,0.72) 34%,rgba(8,8,10,0.15) 70%,rgba(8,8,10,0.35) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 140, background: "linear-gradient(180deg,rgba(11,11,14,0) 0%,#0b0b0e 100%)" }} />
        <Nav active="home" />
        <div style={{ position: "absolute", right: 130, top: "50%", marginTop: -110, zIndex: 2 }}>
          <Circular text="Fuel Your Passion • Own Every Road • " />
        </div>
        <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 64px 90px", maxWidth: 560 }}>
          <Fold as="h1" text="Drive What Moves You." stagger={0.035}
            style={{ margin: 0, fontSize: 64, lineHeight: 1.02, fontWeight: 900, letterSpacing: -1, textTransform: "uppercase" }} />
          <Reveal text="Premium cars. Exceptional value. Ready for the road." delay={0.5}
            style={{ margin: "26px 0 0", fontSize: 19, fontWeight: 600, color: "#fff" }} />
          <Reveal text="Discover a carefully selected range of quality vehicles designed to match your lifestyle, performance needs, and budget." delay={0.75}
            style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.7, color: "#b9b9c2", maxWidth: 380 }} />
          <FadeUp delay={0.95} style={{ display: "flex", gap: 16, marginTop: 34 }}>
            <Link href="/cars" style={btnPrimary}>Explore Cars</Link>
            <Link href="#contact" style={{ ...btnGhost, display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 1l9 5-9 5z" fill={red} /></svg>
              Book a Test Drive
            </Link>
          </FadeUp>
        </div>
        <Stagger delay={1.1} style={{ position: "relative", zIndex: 2, display: "flex", gap: 56, padding: "22px 64px 34px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          {["Quality Checked", "Transparent Pricing", "Easy Finance Options"].map((t) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11.5, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: "#d6d6dc" }}>
              <Check />{t}
            </div>
          ))}
        </Stagger>
      </header>

      {/* CATEGORIES */}
      <section id="cars" style={{ padding: "84px 64px", maxWidth: 1440, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Track text="Browse Categories" style={eyebrow} />
          <Fold text="Find Your Next Car" style={{ margin: "12px 0 0", fontSize: 38, fontWeight: 900, letterSpacing: 0.5, textTransform: "uppercase" }} />
          <Reveal text="Explore our latest selection of vehicles, from everyday comfort to premium performance." delay={0.2}
            style={{ margin: "14px 0 0", fontSize: 14.5, color: "#b9b9c2" }} />
        </div>
        <Stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
          {CATEGORIES.map((c) => (
            <div key={c.name} style={card}>
              <div style={{ height: 170, backgroundImage: `url(${c.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: "20px 22px 24px" }}>
                <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase" }}>{c.name}</div>
                <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.6, color: "#a7a7b0" }}>{c.blurb}</p>
              </div>
            </div>
          ))}
        </Stagger>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
          <Link href="/cars" style={{ ...btnGhost, letterSpacing: 1.8, padding: "14px 34px" }}>View All Cars</Link>
        </div>
      </section>

      {/* FEATURED VEHICLE */}
      <section style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/featured.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(9,9,12,0.94) 0%,rgba(9,9,12,0.8) 32%,rgba(9,9,12,0.1) 65%,rgba(9,9,12,0.25) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 64px", maxWidth: 520 }}>
          <Track text="Featured Vehicle" style={eyebrow} />
          <Fold text="Meet Your Next Drive" stagger={0.04}
            style={{ margin: "14px 0 0", fontSize: 42, lineHeight: 1.05, fontWeight: 900, textTransform: "uppercase" }} />
          <div style={{ margin: "16px 0 0", fontSize: 14, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: red }}>2024 Premium SUV</div>
          <Reveal text="A perfect combination of bold design, advanced technology, everyday practicality, and confident performance."
            style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.7, color: "#c5c5cd" }} />
          <Stagger delay={0.2} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 28px", marginTop: 24, fontSize: 13, fontWeight: 600, color: "#e6e6ea" }}>
            {FEATURES.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 9 }}><Check />{f}</div>
            ))}
          </Stagger>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 28 }}>
            <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#d6d6dc" }}>From</span>
            <Count text="$48,990" style={{ fontSize: 36, fontWeight: 900, color: red }} />
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
            <Link href="/cars" style={{ ...btnPrimary, fontSize: 12, padding: "14px 26px" }}>View Vehicle</Link>
            <Link href="#contact" style={{ ...btnGhost, fontSize: 12, padding: "14px 26px" }}>Enquire Now</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" style={{ background: "#101015", borderTop: "1px solid #1d1d24", borderBottom: "1px solid #1d1d24", padding: "78px 64px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <Track text="Why Choose Us" style={eyebrow} />
            <Fold text="More Than Just a Car." style={{ margin: "12px 0 0", fontSize: 36, fontWeight: 900, textTransform: "uppercase" }} />
            <Reveal text="We make finding your next vehicle simple, transparent, and stress-free." delay={0.2}
              style={{ margin: "14px 0 0", fontSize: 14.5, color: "#b9b9c2" }} />
          </div>
          <Stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {WHY.map((w, i) => (
              <div key={w.title} style={{ padding: "0 28px", borderRight: i < 3 ? "1px solid #24242c" : "none" }}>
                <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{w.title}</div>
                <p style={{ margin: "10px 0 0", fontSize: 13, lineHeight: 1.65, color: "#a7a7b0" }}>{w.blurb}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROCESS */}
      <section id="finance" style={{ padding: "84px 64px", maxWidth: 1440, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <Track text="Our Process" style={eyebrow} />
          <Fold text="Your Next Car, Made Simple" style={{ margin: "12px 0 0", fontSize: 36, fontWeight: 900, textTransform: "uppercase" }} />
        </div>
        <Stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ ...card, padding: "32px 26px", textAlign: "center" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, margin: "0 auto" }}>{s.n}</div>
              <div style={{ marginTop: 16, fontSize: 14, fontWeight: 800, letterSpacing: 1.4, textTransform: "uppercase" }}>{s.title}</div>
              <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.65, color: "#a7a7b0" }}>{s.blurb}</p>
            </div>
          ))}
        </Stagger>
      </section>

      {/* SPECIAL OFFER */}
      <section id="offers" style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/offer-dark.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(9,9,12,0.5) 0%,rgba(9,9,12,0.85) 45%,rgba(9,9,12,0.94) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 64, width: "100%", padding: "70px 64px", boxSizing: "border-box" }}>
          <div style={{ maxWidth: 400 }}>
            <Track text="Limited Time Only" style={eyebrow} />
            <Fold text="Ready for a Better Drive?" style={{ margin: "12px 0 0", fontSize: 36, fontWeight: 900, textTransform: "uppercase" }} />
            <Reveal text="Save on selected vehicles for a limited time. Find your favourite car before it's gone."
              style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.7, color: "#c5c5cd" }} />
            <Link href="#contact" style={{ ...btnPrimary, display: "inline-block", fontSize: 12, padding: "14px 26px", marginTop: 26 }}>View Current Offers</Link>
          </div>
          <div style={{ textAlign: "center" }}>
            <Zoom delay={0.25}>
              <div style={{ border: "1px solid rgba(255,255,255,0.3)", background: "rgba(12,12,16,0.72)", backdropFilter: "blur(4px)", borderRadius: 6, padding: "30px 42px" }}>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 2.4, textTransform: "uppercase", color: "#e6e6ea" }}>Save Up To</div>
                <Count text="$5,000" delay={0.5} style={{ display: "block", fontSize: 52, fontWeight: 900, color: red, marginTop: 6 }} />
                <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 2.4, textTransform: "uppercase", color: "#e6e6ea", marginTop: 6 }}>On Selected Cars</div>
              </div>
            </Zoom>
            <p style={{ margin: "14px 0 0", fontSize: 11, lineHeight: 1.6, color: "#8b8b95" }}>
              *Offers and availability may vary.<br />Terms and conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "#101015", borderTop: "1px solid #1d1d24", padding: "78px 64px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Track text="What Our Customers Say" style={eyebrow} />
            <Fold text="Drivers Who Made the Switch" style={{ margin: "12px 0 0", fontSize: 34, fontWeight: 900, textTransform: "uppercase" }} />
          </div>
          <Stagger style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {REVIEWS.map((r) => (
              <div key={r.name} style={{ background: "#16161c", border: "1px solid #24242c", borderRadius: 8, padding: "28px 30px" }}>
                <div style={{ display: "flex", gap: 4 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={red}>
                      <path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7-6.3-3.8L5.7 21l1.6-7L2 9.6 9 9z" />
                    </svg>
                  ))}
                </div>
                <p style={{ margin: "14px 0 0", fontSize: 13.5, lineHeight: 1.7, color: "#d6d6dc" }}>{r.quote}</p>
                <div style={{ marginTop: 14, fontSize: 12.5, fontWeight: 700, letterSpacing: 1, color: "#fff" }}>{r.name}</div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ position: "relative", background: "radial-gradient(1200px 500px at 30% 100%,#26141677 0%,transparent 60%),#0c0c10", borderTop: "1px solid #1d1d24", padding: "88px 64px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48 }}>
          <div style={{ maxWidth: 480 }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.08, fontWeight: 900, textTransform: "uppercase" }}>
              Your Next Adventure<br />Starts <Shine text="Here." />
            </h2>
            <Reveal text="The right car is waiting. Explore our collection and find the one that's made for you." delay={0.25}
              style={{ margin: "18px 0 0", fontSize: 14, lineHeight: 1.7, color: "#b9b9c2" }} />
          </div>
          <Stagger delay={0.2} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 24 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <Link href="/cars" style={btnPrimary}>Explore Our Cars</Link>
              <Link href="#contact" style={btnGhost}>Contact Our Team</Link>
            </div>
            <div style={{ display: "flex", gap: 28, background: "rgba(255,255,255,0.04)", border: "1px solid #24242c", borderRadius: 6, padding: "16px 24px", fontSize: 13, color: "#d6d6dc" }}>
              <span>(02) 1234 5678</span>
              <span>info@drivex.com</span>
              <span>123 Auto Drive, Sydney, NSW 2000</span>
            </div>
          </Stagger>
        </div>
      </section>

      <Footer />
    </div>
  );
}
