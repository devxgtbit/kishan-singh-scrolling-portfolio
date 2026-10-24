import { ArrowUpRight } from "lucide-react";
import {
  otherBuilds,
  profile,
  projects,
  socials,
  testimonials,
  trustedBy,
  writing,
} from "@/data/portfolio";
import { Marquee, Reveal, Section, SectionTitle } from "./primitives";

export function Projects() {
  return (
    <Section id="projects" className="bg-background">
      <SectionTitle kicker="06 / Selected work" title="Projects" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08} rotate={i % 2 ? 1 : -1}>
            <article className="group flex h-full flex-col border-[3px] border-foreground bg-card p-6 shadow-brutal transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brutal-lg">
              <div className="flex items-start justify-between">
                <span className="text-stroke font-display text-5xl">
                  {project.index}
                </span>
                <span className="bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-foreground">
                  {project.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl uppercase leading-tight md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border-[2px] border-foreground/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-foreground px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Live <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border-[2px] border-foreground px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {"Code </>"}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14">
          <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
            More builds
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {otherBuilds.map((item) => (
              <span
                key={item}
                className="border-[2px] border-foreground px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Writing() {
  return (
    <Section
      id="writing"
      clip
      className="bg-secondary text-secondary-foreground"
    >
      <SectionTitle kicker="07 / Writing" title="Writing" accent="desk" dark />
      <Reveal delay={0.1}>
        <a
          href={writing.url}
          target="_blank"
          rel="noreferrer"
          className="mt-12 block rotate-[0.6deg] border-[3px] border-foreground bg-card p-7 text-foreground shadow-brutal-cream transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brutal-lime md:p-9"
        >
          <span className="inline-block bg-primary px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary-foreground">
            Featured post
          </span>
          <h3 className="mt-5 max-w-3xl font-display text-2xl uppercase leading-tight md:text-3xl">
            {writing.title}
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {writing.blurb}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {writing.date} · {writing.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground">
              Read the guide <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {writing.tags.map((tag) => (
              <span
                key={tag}
                className="border-[2px] border-foreground/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      </Reveal>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-background">
      <SectionTitle kicker="08 / Kind words" title="Receipts" />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.1} rotate={i % 2 ? 1.5 : -1.5}>
            <figure className="h-full border-[3px] border-foreground bg-card p-7 shadow-brutal md:p-8">
              <span
                className="font-display text-6xl leading-none text-primary"
                aria-hidden
              >
                “
              </span>
              <blockquote className="mt-2 text-base leading-relaxed md:text-lg">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t-2 border-border pt-4">
                <span className="font-display text-sm uppercase tracking-wide">
                  {t.author}
                </span>
                <span className="ml-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t.context}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function TrustedBy() {
  return (
    <div className="border-y-[3px] border-foreground bg-primary py-6 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 md:px-12">
        <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.3em] md:block">
          Trusted by
        </span>
        <Marquee duration={24} className="min-w-0 flex-1">
          {trustedBy.map((name) => (
            <span key={name} className="flex items-center">
              <span className="px-6 font-display text-2xl uppercase md:text-3xl">
                {name}
              </span>
              <span aria-hidden>✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-foreground text-background"
    >
      <div className="pointer-events-none absolute inset-0 select-none py-10 opacity-25">
        <p className="text-stroke-paper whitespace-nowrap font-display text-[13vw] uppercase leading-none">
          Let's build ✦ Let's build ✦ Let's build ✦ Let's build ✦ Let's build ✦
        </p>
        <p className="text-stroke-paper mt-6 whitespace-nowrap font-display text-[13vw] uppercase leading-none">
          On-chain ✦ On-chain ✦ On-chain ✦ On-chain ✦ On-chain ✦ On-chain ✦
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-12 md:py-36">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Get in touch
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,8vw,6.5rem)] uppercase leading-[0.9]">
            Let's build <span className="text-stroke-paper">together</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block break-all font-mono text-lg underline decoration-primary decoration-4 underline-offset-8 transition-colors hover:text-primary md:text-3xl"
          >
            {profile.email}
          </a>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-background/70 md:text-sm">
            {profile.phone} · {profile.location}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {socials.map((social, i) => (
            <Reveal key={social.label} delay={i * 0.05} y={32}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-[2px] border-background/40 p-4 transition-colors hover:bg-background hover:text-foreground"
              >
                <span>
                  <span className="block font-display text-sm uppercase tracking-wide">
                    {social.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-xs text-background/60 group-hover:text-foreground/70">
                    {social.handle}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t-2 border-background/20 pt-6 font-mono text-[11px] uppercase tracking-widest text-background/60">
          <span>© 2026 {profile.name}</span>
          <span>{profile.location}</span>
          <a href="#top" className="transition-colors hover:text-primary">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
