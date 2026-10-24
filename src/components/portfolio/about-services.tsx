import { Coins, Layers, PenTool, ShieldCheck, type LucideIcon } from "lucide-react";
import { aboutFacts, aboutParagraphs, approach, services } from "@/data/portfolio";
import { Parallax, Reveal, Section, SectionTitle } from "./primitives";

const SERVICE_ICONS: LucideIcon[] = [Layers, ShieldCheck, Coins, PenTool];
const SERVICE_STYLES = [
  "bg-card text-foreground",
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-secondary text-secondary-foreground",
];

export function About() {
  return (
    <Section id="about" clip className="bg-foreground text-background">
      <Parallax
        from={60}
        to={-60}
        className="pointer-events-none absolute inset-x-0 top-8 select-none"
      >
        <p className="text-stroke-paper whitespace-nowrap text-center font-display text-[16vw] uppercase leading-none opacity-20">
          0xkishan
        </p>
      </Parallax>

      <div className="relative grid gap-12 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <SectionTitle kicker="01 / Who" title="About" accent="me" dark />
          <div className="mt-10 space-y-6 text-base leading-relaxed text-background/85 md:text-lg">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="md:mt-16">
          <aside className="rotate-[1.5deg] border-[3px] border-foreground bg-card p-6 text-foreground shadow-brutal-cream">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Fact sheet
            </p>
            <dl className="mt-5 space-y-4">
              {aboutFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b-2 border-border pb-3 last:border-0 last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" className="bg-background">
      <SectionTitle kicker="02 / What I do" title="What I" accent="do" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <Reveal key={service.title} delay={i * 0.07} rotate={i % 2 ? 1 : -1}>
              <article
                className={`group h-full border-[3px] border-foreground p-7 shadow-brutal transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brutal-lg ${SERVICE_STYLES[i]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center border-[3px] border-current">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm opacity-60">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl uppercase leading-tight md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  {service.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-[2px] border-current px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function ApproachStrip() {
  return (
    <div className="border-y-[3px] border-foreground bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em]">
            My approach
          </p>
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-4">
          {approach.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div>
                <span className="font-mono text-sm opacity-70">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
