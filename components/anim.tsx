"use client";
import React, { useEffect, useLayoutEffect, useRef, useState, CSSProperties, ReactNode } from "react";
import gsap from "gsap";

type Sty = CSSProperties | undefined;

/** Layout effect on the client, plain effect on the server (avoids the SSR warning). */
const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Fires as the element's top crosses the lower 12% of the viewport. */
const IO_OPTS: IntersectionObserverInit = { threshold: 0, rootMargin: "0px 0px -12% 0px" };

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Holds an entrance animation at frame 0 until the element scrolls into view.
 *
 * `build` applies the start values and returns a paused timeline. It runs in a
 * layout effect, so the hidden state is committed before the browser paints —
 * the `dx-*` classes in globals.css cover the same state for the pre-hydration
 * paint. Setting the start values inside the observer callback instead is what
 * caused the one-frame flash: the finished element painted first, then snapped
 * back to the start and replayed.
 */
function useEntrance(build: (el: HTMLElement) => gsap.core.Timeline) {
  const ref = useRef<any>(null);
  useIso(() => {
    const el: HTMLElement | null = ref.current;
    if (!el) return;
    let io: IntersectionObserver | null = null;
    const ctx = gsap.context(() => {
      const tl = build(el);
      if (reducedMotion()) {
        tl.progress(1).pause();
        return;
      }
      io = new IntersectionObserver((entries) => {
        for (const en of entries) {
          // Below the fold and still out of view — keep waiting.
          if (!en.isIntersecting && en.boundingClientRect.bottom > 0) continue;
          io?.disconnect();
          io = null;
          // Already scrolled past (reload mid-page, hash link): show, don't replay.
          if (en.isIntersecting) tl.play();
          else tl.progress(1).pause();
          return;
        }
      }, IO_OPTS);
      io.observe(el);
    }, el);
    return () => {
      io?.disconnect();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

/** Per-letter 3D fold-in heading (ReactBits SplitText / FlipText style). */
export function Fold({
  text,
  as: Tag = "h2",
  style,
  className,
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  as?: any;
  style?: Sty;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useEntrance((el) => {
    const pieces = el.querySelectorAll("[data-piece]");
    gsap.set(pieces, { opacity: 0, rotateX: -92, transformOrigin: "50% 100%" });
    return gsap
      .timeline({ paused: true })
      .to(pieces, { opacity: 1, rotateX: 0, duration: 0.7, ease: "power3.out", stagger }, delay);
  });
  return (
    <Tag ref={ref} className={className} style={{ perspective: 600, ...style }} aria-label={text}>
      {text.split(/(\s+)/).map((word, wi) =>
        /^\s+$/.test(word) ? (
          <span key={wi}> </span>
        ) : (
          <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((ch, i) => (
              <span key={i} data-piece className="dx-piece">
                {ch}
              </span>
            ))}
          </span>
        )
      )}
    </Tag>
  );
}

/** Word-by-word scroll reveal paragraph (ReactBits ScrollReveal style). */
export function Reveal({
  text,
  as: Tag = "p",
  style,
  className,
  delay = 0,
}: {
  text: string;
  as?: any;
  style?: Sty;
  className?: string;
  delay?: number;
}) {
  const ref = useEntrance((el) => {
    const pieces = el.querySelectorAll("[data-piece]");
    gsap.set(pieces, { opacity: 0.12, filter: "blur(4px)" });
    return gsap.timeline({ paused: true }).to(
      pieces,
      { opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.out", stagger: 0.045 },
      delay
    );
  });
  return (
    <Tag ref={ref} className={className} style={style} aria-label={text}>
      {text.split(/(\s+)/).map((word, i) =>
        /^\s+$/.test(word) ? (
          <span key={i}> </span>
        ) : (
          <span key={i} data-piece className="dx-word">
            {word}
          </span>
        )
      )}
    </Tag>
  );
}

/** Letter-spacing tracking-in eyebrow label. */
export function Track({
  text,
  style,
  className,
  delay = 0,
}: {
  text: string;
  style?: Sty;
  className?: string;
  delay?: number;
}) {
  const target = (style?.letterSpacing as string) ?? "3px";
  const ref = useEntrance((el) => {
    gsap.set(el, { opacity: 0, letterSpacing: "12px" });
    return gsap
      .timeline({ paused: true })
      .to(el, { opacity: 1, letterSpacing: target, duration: 1, ease: "power3.out" }, delay);
  });
  return (
    <div ref={ref} className={cx("dx-hidden", className)} style={style}>
      {text}
    </div>
  );
}

/** Fade-up entrance wrapper. */
export function FadeUp({
  children,
  style,
  className,
  delay = 0,
}: {
  children: ReactNode;
  style?: Sty;
  className?: string;
  delay?: number;
}) {
  const ref = useEntrance((el) => {
    gsap.set(el, { opacity: 0, y: 28 });
    return gsap
      .timeline({ paused: true })
      .to(el, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, delay);
  });
  return (
    <div ref={ref} className={cx("dx-hidden", className)} style={style}>
      {children}
    </div>
  );
}

/** Scale-in entrance wrapper. */
export function Zoom({
  children,
  style,
  className,
  delay = 0,
}: {
  children: ReactNode;
  style?: Sty;
  className?: string;
  delay?: number;
}) {
  const ref = useEntrance((el) => {
    gsap.set(el, { opacity: 0, scale: 0.82 });
    return gsap
      .timeline({ paused: true })
      .to(el, { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }, delay);
  });
  return (
    <div ref={ref} className={cx("dx-hidden", className)} style={style}>
      {children}
    </div>
  );
}

/** Staggered children reveal (grids, button rows, badge rows). */
export function Stagger({
  children,
  style,
  className,
  delay = 0,
}: {
  children: ReactNode;
  style?: Sty;
  className?: string;
  delay?: number;
}) {
  const ref = useEntrance((el) => {
    gsap.set(el.children, { opacity: 0, y: 30 });
    return gsap
      .timeline({ paused: true })
      .to(el.children, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.13 }, delay);
  });
  return (
    <div ref={ref} className={cx("dx-stagger", className)} style={style}>
      {children}
    </div>
  );
}

/** Count-up number (ReactBits CountUp style). Animates the first number found in `text`. */
export function Count({
  text,
  style,
  className,
  delay = 0,
}: {
  text: string;
  style?: Sty;
  className?: string;
  delay?: number;
}) {
  const match = text.match(/([\d,]+)/);
  // The server renders the real value (readable without JS); the client swaps in
  // the zeroed value in a layout effect, so the final figure never paints first.
  const [shown, setShown] = useState(text);
  const ref = useRef<HTMLSpanElement | null>(null);

  useIso(() => {
    const el = ref.current;
    if (!el) return;
    if (!match || reducedMotion()) {
      gsap.set(el, { opacity: 1 });
      return;
    }
    const from = match[1];
    setShown(text.replace(from, "0"));

    let io: IntersectionObserver | null = null;
    const ctx = gsap.context(() => {
      const obj = { n: 0 };
      const tl = gsap
        .timeline({ paused: true })
        .to(el, { opacity: 1, duration: 0.35, ease: "power2.out" }, delay)
        .to(
          obj,
          {
            n: parseInt(from.replace(/,/g, ""), 10),
            duration: 1.5,
            ease: "power3.out",
            onUpdate: () => setShown(text.replace(from, Math.round(obj.n).toLocaleString("en-US"))),
          },
          delay
        );
      io = new IntersectionObserver((entries) => {
        for (const en of entries) {
          if (!en.isIntersecting && en.boundingClientRect.bottom > 0) continue;
          io?.disconnect();
          io = null;
          if (en.isIntersecting) tl.play();
          else tl.progress(1).pause();
          return;
        }
      }, IO_OPTS);
      io.observe(el);
    }, el);
    return () => {
      io?.disconnect();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={cx("dx-hidden", className)} style={style} aria-label={text}>
      {shown}
    </span>
  );
}

/** Looping gradient shine text (ReactBits ShinyText style). */
export function Shine({ text, style }: { text: string; style?: Sty }) {
  return (
    <span
      className="dx-loop"
      style={{
        backgroundImage: "linear-gradient(110deg,#e11d2b 35%,#ffffff 50%,#e11d2b 65%)",
        backgroundSize: "220% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: "dx-shine 2.6s linear infinite",
        ...style,
      }}
    >
      {text}
    </span>
  );
}

/** Rotating circular text badge (ReactBits CircularText style). */
export function Circular({
  text,
  size = 220,
  radius = 104,
  style,
}: {
  text: string;
  size?: number;
  radius?: number;
  style?: Sty;
}) {
  const chars = text.split("");
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        ...style,
      }}
    >
      <div
        className="dx-loop"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          animation: "dx-spin 22s linear infinite",
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#fff",
          textShadow: "0 1px 8px rgba(0,0,0,0.8)",
        }}
      >
        {chars.map((ch, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transformOrigin: "0 0",
              transform: `rotate(${(i * 360) / chars.length}deg) translate(-50%, -${radius}px)`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>
      <div style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", background: "#e11d2b" }} />
    </div>
  );
}
