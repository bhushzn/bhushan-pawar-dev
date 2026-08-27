import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { PROFILE } from "@/data/portfolio";
import { MagneticLink, Tilt, TextReveal, Parallax } from "./primitives";

const CARD_TAGS = ["React", "Python", "AI", "Web3"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={reduce ? {} : { y, opacity }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-label"
          >
            {PROFILE.name.toUpperCase()}
          </motion.p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <TextReveal text="Building digital experiences" className="text-gradient" delay={0.1} />
            <br />
            <TextReveal text="with code, AI & curiosity." delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 font-mono text-xs tracking-[0.18em] text-secondary sm:text-sm"
          >
            CSE Student • Developer • AI Enthusiast • Future Blockchain Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I turn ideas into interactive web experiences and AI-powered applications, while
            exploring the future of Web3 and blockchain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticLink href="#projects">
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </MagneticLink>
            <MagneticLink href={PROFILE.github} external variant="ghost">
              GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
            </MagneticLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground"
          >
            <span className="size-2 rounded-full bg-secondary shadow-[0_0_10px_oklch(0.75_0.15_160)]" />
            Open to opportunities &amp; collaborations
          </motion.p>
        </motion.div>

        <motion.div
          style={reduce ? {} : { scale }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <Parallax offset={40}>
            <Tilt intensity={15}>
              <div className="relative animate-float">
                <div className="glow-border surface-card glass relative overflow-hidden rounded-[1.6rem] p-6 sm:p-8">
                  <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.15_190/28%),transparent_65%)] blur-xl" />
                  <p className="font-mono text-[0.65rem] tracking-[0.3em] text-muted-foreground">
                    DEVELOPER ID
                  </p>
                  <p className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl text-gradient">
                    BHUSHAN.PAWAR
                  </p>
                  <p className="mt-1 font-mono text-xs tracking-[0.24em] text-secondary">
                    CSE / DEVELOPER
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {CARD_TAGS.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-[0.7rem] text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 rounded-xl glass border-primary/20 bg-background/60 p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    <div className="flex gap-1.5 relative z-10">
                      <span className="size-2 rounded-full bg-destructive/70" />
                      <span className="size-2 rounded-full bg-primary/70" />
                      <span className="size-2 rounded-full bg-secondary/70" />
                    </div>
                    <p className="mt-3 font-mono text-xs text-muted-foreground relative z-10">
                      <span className="text-secondary">$</span> status
                    </p>
                    <p className="mt-1 font-mono text-sm text-foreground relative z-10">
                      «building...»
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity }}
                        className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </Parallax>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        style={reduce ? {} : { opacity }}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-max flex-col items-center gap-2 font-mono text-[0.6rem] tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
      >
        SCROLL TO EXPLORE
        <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
