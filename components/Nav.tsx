"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo">
          {profile.name}
          <span>.</span>
        </a>
        <nav className={open ? "open" : ""}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="nav-resume">
            Résumé ↗
          </a>
        </nav>
        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
        </button>
      </div>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
