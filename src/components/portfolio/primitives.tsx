import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Thin lime bar tracking overall page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-1.5 origin-left bg-primary"
    />
  );
}

/** Fade-and-rise reveal when the element scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 48,
  rotate = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Scroll-linked vertical parallax wrapper. */
export function Parallax({
  children,
  className,
  from = 70,
  to = -70,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/** Seamless infinite horizontal marquee (CSS-driven). */
export function Marquee({
  children,
  className,
  reverse = false,
  duration = 32,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee items-center"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Standard page section with a centered max-width column. */
export function Section({
  id,
  className,
  clip,
  children,
}: {
  id?: string;
  className?: string;
  clip?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-14 px-5 py-20 md:px-12 md:py-28",
        clip && "overflow-hidden",
        className,
      )}
    >
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/** Oversized section heading with kicker and an outlined accent word. */
export function SectionTitle({
  kicker,
  title,
  accent,
  dark,
  align = "left",
}: {
  kicker: string;
  title: string;
  accent?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      <Reveal>
        <p
          className={cn(
            "font-mono text-xs uppercase tracking-[0.35em]",
            dark ? "text-background/70" : "text-muted-foreground",
          )}
        >
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-3 font-display text-[clamp(2.6rem,7vw,5.5rem)] uppercase leading-[0.9]",
            dark ? "text-background" : "text-foreground",
          )}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <span className={dark ? "text-stroke-paper" : "text-stroke"}>
                {accent}
              </span>
            </>
          ) : null}
        </h2>
      </Reveal>
    </div>
  );
}
