"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";

function Letters({ text }: { text: string }) {
  return (
    <span className="word" aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="letter" aria-hidden style={{ animationDelay: `${i * 70}ms` }}>
          {c}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Hero text drifts and fades as you scroll away.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = Math.min(window.scrollY, window.innerHeight);
      el.style.setProperty("--shift", `${y * 0.35}px`);
      el.style.setProperty("--fade", `${1 - y / (window.innerHeight * 0.9)}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="hero" id="top">
      <div className="hero-inner">
        <p className="eyebrow">
          <i className="pulse" /> {profile.role} · {profile.location}
        </p>
        <h1>
          <Letters text={profile.first} />
          <Letters text={profile.last} />
        </h1>
        <p className="lead">{profile.tagline}</p>
        <div className="cta">
          <Magnetic>
            <a className="btn primary" href="#projects" data-cursor="View">
              See my work
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn" href="#contact" data-cursor="Hi!">
              Get in touch
            </a>
          </Magnetic>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
