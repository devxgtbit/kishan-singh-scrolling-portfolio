import {
  education,
  experience,
  positions,
  skillGroups,
  tickerItems,
} from "@/data/portfolio";
import { Marquee, Reveal, Section, SectionTitle } from "./primitives";

/** Sticky cards that stack over each other while scrolling. */
export function Experience() {
  return (
    <Section id="experience" className="bg-primary text-primary-foreground">
      <SectionTitle kicker="03 / Experience" title="Experience" accent="log" />
      <div className="mt-14 pb-10">
        {experience.map((job, i) => (
          <div
            key={`${job.company}-${job.role}`}
            className="sticky mb-8 last:mb-0"
            style={{ top: `${84 + i * 26}px`, zIndex: i + 1 }}
          >
            <Reveal y={60}>
              <article
                className="border-[3px] border-foreground bg-card p-6 text-foreground shadow-brutal md:p-8"
                style={{ rotate: i % 2 ? "0.5deg" : "-0.5deg" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl uppercase leading-tight md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-foreground px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-background">
                      {job.period}
                    </span>
                    <span className="text-stroke hidden font-display text-5xl sm:block">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {job.highlight}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-[2px] border-foreground/25 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function EducationPositions() {
  return (
    <Section id="education" className="bg-background">
      <SectionTitle kicker="04 / Credentials" title="Beyond" accent="work" />
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Education
            </h3>
          </Reveal>
          <div className="mt-5 space-y-5">
            {education.map((item, i) => (
              <Reveal key={item.institution} delay={i * 0.08}>
                <article className="border-[3px] border-foreground bg-card p-6 shadow-brutal-sm transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display text-lg uppercase leading-tight">
                      {item.institution}
                    </h4>
                    <span className="shrink-0 bg-primary px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-primary-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.degree}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Positions of responsibility
            </h3>
          </Reveal>
          <div className="mt-5">
            {positions.map((item, i) => (
              <Reveal key={item.org} delay={i * 0.06}>
                <div className="border-b-2 border-border py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold">
                      {item.role} · {item.org}
                    </p>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-foreground text-background">
      <SectionTitle kicker="05 / Arsenal" title="Skill" accent="stack" dark />

      <div className="mt-12 border-y-[3px] border-foreground bg-primary py-3 text-primary-foreground">
        <Marquee duration={30}>
          {tickerItems.map((t) => (
            <span key={t} className="flex items-center">
              <span className="px-5 font-display text-lg uppercase md:text-xl">
                {t}
              </span>
              <span aria-hidden>✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.07}>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border-[2px] border-background/50 px-3 py-1 font-mono text-xs uppercase tracking-wide text-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 border-y-[3px] border-foreground bg-primary py-3 text-primary-foreground">
        <Marquee duration={30} reverse>
          {tickerItems.map((t) => (
            <span key={t} className="flex items-center">
              <span className="px-5 font-display text-lg uppercase md:text-xl">
                {t}
              </span>
              <span aria-hidden>✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
