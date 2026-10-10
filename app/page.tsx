import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import Magnetic from "@/components/Magnetic";
import SpotlightCard from "@/components/SpotlightCard";
import ProjectStack from "@/components/ProjectStack";
import { aboutGroups, education, experience, profile, projects, skills, socials, stats } from "@/lib/data";

function Heading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="eyebrow">{n}</p>
      <h2 className="mega">{children}</h2>
    </Reveal>
  );
}

export default function Home() {
  const all = skills.flatMap((s) => s.items);
  return (
    <>
      <Cursor />
      <div className="glow" aria-hidden />
      <Nav />
      <main>
        <Hero />

        <div className="marquees">
          <Marquee items={all.slice(0, 18)} />
          <Marquee items={all.slice(18)} reverse />
        </div>

        <section id="about" className="section">
          <div className="wrap">
            <Heading n="01 — About">
              Engineer by trade. <span className="dim">Designer at heart.</span>
            </Heading>
            <div className="about-groups">
              {aboutGroups.map((g, i) => (
                <Reveal key={g.title} delay={i * 90}>
                  <div className="about-group">
                    <h3>{g.title}</h3>
                    <ul className="arrows">
                      {g.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div className="stat">
                    <strong className="metal">
                      <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </strong>
                    <span>{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="wrap">
            <Heading n="02 — Skills">
              The <span className="metal">toolbox.</span>
            </Heading>
            <div className="skill-list">
              {skills.map((g, i) => (
                <Reveal key={g.group} delay={i * 60}>
                  <div className="skill-row">
                    <h3>{g.group}</h3>
                    <ul className="chips">
                      {g.items.map((s) => (
                        <li key={s} data-cursor=" ">{s}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="wrap">
            <Heading n="03 — Work">
              Selected <span className="metal">projects.</span>
            </Heading>
            <ProjectStack projects={projects} />
          </div>
        </section>

        <section id="experience" className="section">
          <div className="wrap">
            <Heading n="04 — Experience">
              Where I&apos;ve <span className="dim">built things.</span>
            </Heading>
            <ol className="timeline">
              {experience.map((e, i) => (
                <Reveal key={e.role + e.period}>
                  <li data-cursor=" ">
                    <span className="period">{e.period}</span>
                    <div>
                      <h3>
                        {e.role}
                        <em> — {e.focus}</em>
                      </h3>
                      <p className="org">{e.org}</p>
                      <p className="sum">{e.summary}</p>
                    </div>
                    <span className="idx">0{i + 1}</span>
                  </li>
                </Reveal>
              ))}
            </ol>

            <div id="education">
            <Reveal>
              <SpotlightCard className="edu" tilt={false}>
                <p className="eyebrow">Education</p>
                <h3>{education.school}</h3>
                <p className="org">{education.degree} · {education.period}</p>
                <ul className="chips">
                  {[...education.honors, ...education.coursework].map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="wrap">
            <Heading n="05 — Contact">
              Let&apos;s build <span className="metal">something.</span>
            </Heading>
            <Reveal delay={100}>
              <Magnetic strength={0.25}>
                <a className="mail" href={`mailto:${profile.email}`} data-cursor="Email">
                  {profile.email} <span>↗</span>
                </a>
              </Magnetic>
              <div className="socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label} ↗
                  </a>
                ))}
                <a href={profile.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </footer>
    </>
  );
}
