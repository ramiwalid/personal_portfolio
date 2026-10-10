"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/data";
import SpotlightCard from "./SpotlightCard";

// Sticky stacking cards: each card pins, and earlier cards shrink back as the next slides over.
export default function ProjectStack({ projects }: { projects: Project[] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      refs.current.forEach((el, i) => {
        const next = refs.current[i + 1];
        if (!el || !next) return;
        const nextTop = next.getBoundingClientRect().top;
        const stuck = 120 + i * 18;
        const p = Math.min(Math.max(1 - (nextTop - stuck) / window.innerHeight, 0), 1);
        el.style.setProperty("--scale", `${1 - p * 0.06}`);
        el.style.setProperty("--dim", `${1 - p * 0.55}`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="stack">
      {projects.map((p, i) => (
        <div
          key={p.title}
          className="stack-item"
          style={{ top: `${120 + i * 18}px` }}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          <SpotlightCard className="project" tilt={false}>
            <div className="project-top">
              <span className="num">0{i + 1}</span>
              <span className="meta">{p.kind} · {p.period}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="desc">{p.description}</p>
            <ul className="points">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <ul className="chips">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {p.href && (
              <a className="arrow-link" href={p.href} target="_blank" rel="noreferrer" data-cursor="Open">
                View on GitHub ↗
              </a>
            )}
          </SpotlightCard>
        </div>
      ))}
    </div>
  );
}
