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
const selectSty: CSSProperties = {
  background: "#0e0e12", border: "1px solid #2a2a33", borderRadius: 4, color: "#fff",
  fontSize: 13, padding: "11px 12px", fontFamily: "inherit",
};
const labelSty: CSSProperties = {
  display: "flex", flexDirection: "column", gap: 7, fontSize: 11, fontWeight: 700,
  letterSpacing: 1.4, textTransform: "uppercase", color: "#c9c9cf",
};

const CARS = [
  { img: "/assets/featured.jpg", name: "2024 Premium SUV", price: "From $48,990", blurb: "Bold design meets everyday practicality with premium comfort and advanced technology.", trans: "Automatic", km: "15,000 km", fuel: "Petrol" },
  { img: "/assets/sedan.jpg", name: "2024 Performance Sedan", price: "From $59,990", blurb: "Powerful performance without compromising everyday comfort.", trans: "Automatic", km: "12,500 km", fuel: "Petrol" },
  { img: "/assets/hatch.jpg", name: "2023 Premium Hatchback", price: "From $32,990", blurb: "Compact, refined, and ready for everyday adventures in the city and beyond.", trans: "Automatic", km: "18,000 km", fuel: "Petrol" },
  { img: "/assets/coupe-red.jpg", name: "2022 Sports Coupe", price: "From $72,990", blurb: "Precision engineering and pure driving excitement behind the wheel.", trans: "Automatic", km: "8,500 km", fuel: "Petrol" },
];

const TYPES = [
  { img: "/assets/suv.jpg", name: "SUVs", blurb: "More space. More comfort. More capability.", cta: "Explore SUVs" },
  { img: "/assets/sedan.jpg", name: "Sedans", blurb: "Refined design and smooth performance for every journey.", cta: "Explore Sedans" },
  { img: "/assets/hatch.jpg", name: "Hatchbacks", blurb: "Smart, practical, and built for everyday driving.", cta: "Explore Hatchbacks" },
  { img: "/assets/perf.jpg", name: "Performance", blurb: "Power, precision, and excitement behind the wheel.", cta: "Explore Performance" },
  { img: "/assets/electric.jpg", name: "Electric & Hybrid", blurb: "Modern driving with efficiency at its core.", cta: "Explore Electric" },
];

const WHY = [
  { title: "Quality Checked", blurb: "Our vehicles are carefully inspected before sale." },
  { title: "Transparent Pricing", blurb: "Straightforward pricing with no unnecessary surprises." },
  { title: "Finance Options", blurb: "Flexible finance solutions to help fit your budget." },
  { title: "Test Drive Available", blurb: "Experience your preferred vehicle before making your decision." },
];

const STATS = [
  { n: "500+", label: "Cars Available" },
  { n: "10,000+", label: "Happy Customers" },
  { n: "15+", label: "Years Experience" },
  { n: "98%", label: "Satisfaction Rate" },
];

const FILTERS: { label: string; options: string[] }[] = [
  { label: "Make & Model", options: ["All Makes & Models", "BMW", "Audi", "Mercedes-Benz", "Toyota", "Mazda"] },
  { label: "Vehicle Type", options: ["All Types", "SUV", "Sedan", "Hatchback", "Performance", "Electric & Hybrid"] },
  { label: "Price Range", options: ["Any Price", "Under $30,000", "$30,000 – $50,000", "$50,000 – $80,000", "$80,000+"] },
  { label: "Year", options: ["Any Year", "2024", "2023", "2022", "2021 or older"] },
  { label: "Mileage", options: ["Any Mileage", "Under 10,000 km", "Under 30,000 km", "Under 60,000 km"] },
  { label: "Transmission", options: ["Any Transmission", "Automatic", "Manual"] },
  { label: "Fuel Type", options: ["All Fuel Types", "Petrol", "Diesel", "Hybrid", "Electric"] },
];

export default function CarsPage() {
  return (
    <div style={{ background: "#0b0b0e", color: "#fff", minWidth: 1200 }}>
      <div style={{ background: "#0b0b0e", borderBottom: "1px solid #1d1d24" }}>
        <Nav active="cars" />
      </div>

      {/* HERO */}
      <header style={{ position: "relative", minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/cars-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(8,8,10,0.92) 0%,rgba(8,8,10,0.7) 36%,rgba(8,8,10,0.15) 72%,rgba(8,8,10,0.3) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 120, background: "linear-gradient(180deg,rgba(11,11,14,0) 0%,#0b0b0e 100%)" }} />
        <div style={{ position: "absolute", right: 130, top: "50%", marginTop: -100, zIndex: 2 }}>
          <Circular text="Quality Cars • Trusted Service • " size={200} radius={94} />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "70px 64px", maxWidth: 560 }}>
          <FadeUp style={{ display: "flex", gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "#b9b9c2" }}>
            <Link href="/" style={{ color: "#b9b9c2" }}>Home</Link>
            <span style={{ color: red }}>›</span>
            <span style={{ color: "#fff" }}>Cars</span>
          </FadeUp>
          <Fold as="h1" text="Find Your Next Drive" stagger={0.03}
            style={{ margin: "20px 0 0", fontSize: 58, lineHeight: 1.04, fontWeight: 900, letterSpacing: -0.5, textTransform: "uppercase" }} />
          <Reveal text="Explore our curated collection of quality vehicles, from practical city cars to premium SUVs and high-performance machines." delay={0.5}
            style={{ margin: "20px 0 0", fontSize: 15, lineHeight: 1.7, color: "#c5c5cd", maxWidth: 400 }} />
          <FadeUp delay={0.75} style={{ display: "flex", gap: 16, marginTop: 30 }}>
            <a href="#featured" style={btnPrimary}>Browse All Cars</a>
            <a href="#contact" style={btnGhost}>Book a Test Drive</a>
          </FadeUp>
        </div>
      </header>

      {/* FILTERS */}
      <section style={{ padding: "0 64px", maxWidth: 1440, margin: "-30px auto 0", position: "relative", zIndex: 3, boxSizing: "border-box" }}>
        <FadeUp>
          <div style={{ background: "#141419", border: "1px solid #26262e", borderRadius: 10, padding: "30px 34px", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>Find the Right Car for You</div>
              <div style={{ marginTop: 6, fontSize: 12.5, color: "#a7a7b0" }}>Search our available vehicles and narrow your options by what matters most.</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr) auto", gap: "14px 16px", alignItems: "end" }}>
              {FILTERS.slice(0, 4).map((f) => (
                <label key={f.label} style={labelSty}>{f.label}
                  <select style={selectSty}>{f.options.map((o) => <option key={o}>{o}</option>)}</select>
                </label>
              ))}
              <button style={{ ...btnPrimary, gridRow: "span 2", border: "none", cursor: "pointer", alignSelf: "center", fontFamily: "inherit" }}>Search Cars</button>
              {FILTERS.slice(4).map((f) => (
                <label key={f.label} style={labelSty}>{f.label}
                  <select style={selectSty}>{f.options.map((o) => <option key={o}>{o}</option>)}</select>
                </label>
              ))}
              <button style={{ background: "transparent", border: "none", color: "#c9c9cf", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "12px 8px", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>Reset Filters ⟲</button>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* FEATURED VEHICLES */}
      <section id="featured" style={{ padding: "72px 64px 84px", maxWidth: 1440, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 38 }}>
          <div>
            <Track text="Featured Cars" style={eyebrow} />
            <Fold text="Handpicked For You" style={{ margin: "10px 0 0", fontSize: 36, fontWeight: 900, textTransform: "uppercase" }} />
            <Reveal text="Quality vehicles selected for performance, comfort, reliability, and value." delay={0.2}
              style={{ margin: "12px 0 0", fontSize: 14, color: "#b9b9c2" }} />
          </div>
        </div>
        <Stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
          {CARS.map((c) => (
            <div key={c.name} style={{ background: "#141419", border: "1px solid #232329", borderRadius: 10, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: 180, backgroundImage: `url(${c.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div style={{ position: "absolute", top: 12, left: 12, background: red, color: "#fff", fontSize: 10.5, fontWeight: 800, letterSpacing: 1.4, textTransform: "uppercase", padding: "6px 10px", borderRadius: 3 }}>Featured</div>
              </div>
              <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 0.4 }}>{c.name}</div>
                <Count text={c.price} style={{ marginTop: 8, fontSize: 19, fontWeight: 900, color: red }} />
                <p style={{ margin: "10px 0 0", fontSize: 12.5, lineHeight: 1.6, color: "#a7a7b0" }}>{c.blurb}</p>
                <div style={{ display: "flex", gap: 14, marginTop: 14, paddingTop: 14, borderTop: "1px solid #232329", fontSize: 11.5, fontWeight: 600, color: "#c9c9cf" }}>
                  <span>{c.trans}</span><span>{c.km}</span><span>{c.fuel}</span>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                  <a href="#contact" style={{ flex: 1, textAlign: "center", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1.3, textTransform: "uppercase", padding: "11px 8px", borderRadius: 3 }}>View Details</a>
                  <a href="#contact" style={{ flex: 1, textAlign: "center", background: red, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1.3, textTransform: "uppercase", padding: "11px 8px", borderRadius: 3 }}>Test Drive</a>
                </div>
              </div>
            </div>
          ))}
        </Stagger>
      </section>

      {/* BROWSE BY TYPE */}
      <section id="types" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/mtn-road.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,14,0.86)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "78px 64px", maxWidth: 1440, margin: "0 auto", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Track text="Browse by Type" style={eyebrow} />
            <Fold text="Choose Your Style" style={{ margin: "12px 0 0", fontSize: 36, fontWeight: 900, textTransform: "uppercase" }} />
          </div>
          <Stagger style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 18 }}>
            {TYPES.map((t) => (
              <a key={t.name} href="#featured" style={{ display: "flex", flexDirection: "column", background: "rgba(16,16,21,0.85)", border: "1px solid #2a2a33", borderRadius: 10, overflow: "hidden", color: "#fff" }}>
                <div style={{ padding: "22px 20px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{t.name}</div>
                  <p style={{ margin: "8px 0 0", fontSize: 12, lineHeight: 1.55, color: "#a7a7b0" }}>{t.blurb}</p>
                  <div style={{ marginTop: 12, fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: red }}>{t.cta} ›</div>
                </div>
                <div style={{ height: 120, marginTop: "auto", backgroundImage: `url(${t.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </a>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY BUY */}
      <section style={{ background: "#101015", borderTop: "1px solid #1d1d24", borderBottom: "1px solid #1d1d24", padding: "72px 64px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Track text="Why Buy From Us" style={eyebrow} />
            <Fold text="Drive With Confidence" style={{ margin: "12px 0 0", fontSize: 34, fontWeight: 900, textTransform: "uppercase" }} />
            <Reveal text="Every vehicle is selected with quality and value in mind." delay={0.2}
              style={{ margin: "12px 0 0", fontSize: 14, color: "#b9b9c2" }} />
          </div>
          <Stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {WHY.map((w) => (
              <div key={w.title} style={{ background: "#16161c", border: "1px solid #24242c", borderRadius: 8, padding: "24px 26px" }}>
                <div style={{ fontSize: 13.5, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase" }}>{w.title}</div>
                <p style={{ margin: "8px 0 0", fontSize: 12.5, lineHeight: 1.6, color: "#a7a7b0" }}>{w.blurb}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* STATS */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/mtn-road.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,14,0.9)" }} />
        <Stagger style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "54px 64px" }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.14)" : "none" }}>
              <Count text={s.n} style={{ fontSize: 42, fontWeight: 900, color: "#fff" }} />
              <div style={{ marginTop: 6, fontSize: 12, fontWeight: 700, letterSpacing: 1.8, textTransform: "uppercase", color: "#b9b9c2" }}>{s.label}</div>
            </div>
          ))}
        </Stagger>
      </section>

      {/* FINANCE */}
      <section id="finance" style={{ padding: "72px 64px", maxWidth: 1240, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, background: "#141419", border: "1px solid #26262e", borderLeft: `3px solid ${red}`, borderRadius: 10, padding: "40px 46px" }}>
          <div style={{ maxWidth: 640 }}>
            <Track text="Finance" style={eyebrow} />
            <Fold text="Make Your Next Car More Affordable" style={{ margin: "10px 0 0", fontSize: 28, fontWeight: 900, textTransform: "uppercase" }} />
            <Reveal text="Our flexible finance options can help you get behind the wheel without unnecessary hassle. Talk with our team to explore available options based on your needs and budget." delay={0.2}
              style={{ margin: "12px 0 0", fontSize: 13.5, lineHeight: 1.7, color: "#b9b9c2" }} />
            <p style={{ margin: "12px 0 0", fontSize: 11, color: "#6f6f78" }}>*Finance approval and terms are subject to applicable conditions.</p>
          </div>
          <Zoom delay={0.3}>
            <a href="#contact" style={{ ...btnPrimary, whiteSpace: "nowrap", padding: "16px 30px" }}>Explore Finance Options</a>
          </Zoom>
        </div>
      </section>

      {/* FOUND THE ONE CTA */}
      <section id="contact" style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", overflow: "hidden", borderTop: "1px solid #1d1d24" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/assets/cta-drive.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(9,9,13,0.82) 0%,rgba(9,9,13,0.66) 55%,rgba(9,9,13,0.88) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "80px 64px", textAlign: "center" }}>
          <Track text="Ready to Drive?" style={{ ...eyebrow, display: "inline-block" }} />
          <Fold text="Found the One?" stagger={0.04} style={{ margin: "14px 0 0", fontSize: 44, fontWeight: 900, textTransform: "uppercase" }} />
          <Reveal text="Take it for a drive and experience the difference yourself. Your next car is waiting." delay={0.4}
            style={{ margin: "16px auto 0", fontSize: 14.5, lineHeight: 1.7, color: "#d6d6dc", maxWidth: 520 }} />
          <FadeUp delay={0.65} style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 30 }}>
            <a href="#contact" style={btnPrimary}>Book a Test Drive</a>
            <a href="#contact" style={btnGhost}>Enquire About This Car</a>
          </FadeUp>
          <FadeUp delay={0.85} style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 28, fontSize: 13, color: "#d6d6dc" }}>
            <span>(02) 1234 5678</span>
            <span>info@drivex.com</span>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
