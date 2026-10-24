import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import type { CSSProperties } from "react";
import { Marquee, EASE } from "./primitives";
import { profile, tickerItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_LINKS: Array<[string, string]> = [
  ["About", "#about"],
  ["What I Do", "#services"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

/** One word of the hero headline, letters rising in one by one. */
function Word({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn("inline-flex overflow-hidden pb-[0.08em]", className)}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "115%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.055, ease: EASE }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function Sticker({
  children,
  className,
  late,
}: {
  children: string;
  className?: string;
  late?: boolean;
}) {
  const style = { "--float-rot": "-6deg" } as CSSProperties;
  return (
    <div
      className={cn(
        "absolute hidden border-[3px] border-foreground bg-card px-4 py-2 font-display text-sm uppercase shadow-brutal-sm lg:block",
        late ? "animate-float-late" : "animate-float",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

function OrbitBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute hidden h-36 w-36 rounded-full border-[3px] border-foreground bg-primary shadow-brutal-sm lg:block",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-rotate-slow fill-primary-foreground"
      >
        <defs>
          <path
            id="orbit-circle"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          />
        </defs>
        <text fontSize="9" letterSpacing="2.5" className="font-mono uppercase">
          <textPath href="#orbit-circle">
            open to work ✦ web3 ✦ solana ✦ ethereum ✦
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <ArrowDown className="h-7 w-7 text-primary-foreground" />
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b-[3px] border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="font-mono text-lg font-bold tracking-tight">
          {profile.handle}
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="border-[2px] border-foreground bg-primary px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-brutal-sm transition-transform hover:-translate-y-0.5"
        >
          {"Résumé ↗"}
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-blueprint px-5 pb-20 pt-32 md:px-12"
    >
      <Sticker className="left-[5%] top-[24%]">Solidity ✦ Rust</Sticker>
      <Sticker className="right-[4%] top-[30%]" late>
        IIT Roorkee '27
      </Sticker>
      <Sticker className="bottom-[26%] left-[9%]" late>
        Solana ✦ Ethereum
      </Sticker>
      <Sticker className="bottom-[18%] right-[7%]">Open Source</Sticker>
      <OrbitBadge className="bottom-[10%] right-[13%]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 border-[2px] border-foreground bg-card px-4 py-2 font-mono text-xs uppercase tracking-widest shadow-brutal-sm"
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
          Open to Solana / Web3 roles
        </motion.div>

        <h1 className="mt-8 font-display text-[clamp(3.8rem,14vw,11.5rem)] uppercase leading-[0.82] text-foreground">
          <Word text="Kishan" />
          <br />
          <span className="text-stroke">
            <Word text="Singh" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {profile.subtitle} from IIT Roorkee — building secure,
          production-ready blockchain products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-[3px] border-foreground bg-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground shadow-brutal transition-transform hover:-translate-y-1"
          >
            See projects <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-[3px] border-foreground bg-card px-6 py-3 font-display text-sm uppercase tracking-wide text-foreground shadow-brutal transition-transform hover:-translate-y-1 hover:bg-accent"
          >
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
          <span>IIT Roorkee — BS-MS Mathematics &amp; Computing</span>
        </motion.div>
      </div>
    </section>
  );
}

/** Lime tech ticker between the hero and the about section. */
export function Ticker() {
  return (
    <div className="border-y-[3px] border-foreground bg-primary py-3 text-primary-foreground">
      <Marquee duration={28}>
        {tickerItems.map((t) => (
          <span key={t} className="flex items-center">
            <span className="px-5 font-display text-xl uppercase md:text-2xl">
              {t}
            </span>
            <span aria-hidden>✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
