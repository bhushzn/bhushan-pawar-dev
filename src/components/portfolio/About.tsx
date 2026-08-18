import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ABOUT_TIMELINE } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./primitives";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="01 / About" title="Building. Learning. Experimenting." />

        <div className="mt-12 grid gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <Reveal>
              <p>
                I'm Bhushan Pawar, a Computer Science &amp; Engineering student at Samrat Ashok
                Technological Institute, Vidisha. I enjoy turning ideas into interactive digital
                products and exploring the intersection of frontend development, AI, and emerging
                technologies.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                My focus is on becoming a strong software developer by building real projects,
                participating in hackathons, experimenting with AI-powered applications, and
                gradually moving deeper into Web3 and blockchain development.
              </p>
            </Reveal>
          </div>

          <div ref={ref} className="relative pl-8">
            <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-[image:var(--gradient-primary)]"
            />
            <ul className="space-y-8">
              {ABOUT_TIMELINE.map((t, i) => (
                <Reveal as="li" key={`${t.year}-${i}`} delay={i * 0.06} className="relative">
                  <span className="absolute -left-8 top-1.5 size-3.5 rounded-full border border-primary/60 bg-background shadow-[0_0_14px_oklch(0.66_0.22_300/45%)]" />
                  <p className="font-mono text-xs tracking-[0.24em] text-secondary">{t.year}</p>
                  <p className="mt-1 text-base text-foreground">{t.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
