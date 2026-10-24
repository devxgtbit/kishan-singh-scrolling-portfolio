import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/portfolio/primitives";
import { Hero, Nav, Ticker } from "@/components/portfolio/hero";
import {
  About,
  ApproachStrip,
  Services,
} from "@/components/portfolio/about-services";
import {
  EducationPositions,
  Experience,
  Skills,
} from "@/components/portfolio/experience-skills";
import {
  Contact,
  Projects,
  Testimonials,
  TrustedBy,
  Writing,
} from "@/components/portfolio/projects-contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kishan Singh — Blockchain Developer & Full-Stack Engineer",
      },
      {
        name: "description",
        content:
          "Portfolio of Kishan Singh (0xkishan_) — Web3 developer and full-stack engineer from IIT Roorkee building secure, production-ready blockchain products with Solidity, Rust, Ethereum and Solana.",
      },
      {
        property: "og:title",
        content: "Kishan Singh — Blockchain Developer & Full-Stack Engineer",
      },
      {
        property: "og:description",
        content:
          "Web3 developer and full-stack engineer from IIT Roorkee building secure, production-ready blockchain products with Solidity, Rust, Ethereum and Solana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background font-sans text-foreground">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <ApproachStrip />
      <Experience />
      <EducationPositions />
      <Skills />
      <Projects />
      <Writing />
      <Testimonials />
      <TrustedBy />
      <Contact />
    </main>
  );
}
