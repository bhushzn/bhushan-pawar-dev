import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function AnimatedBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,oklch(0.85_0.15_190/18%),transparent_50%)]" />
      <motion.div
        style={{ y: reduce ? 0 : y1 }}
        className="absolute -left-40 top-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.15_190/12%),transparent_65%)] blur-[100px] animate-orb"
      />
      <motion.div
        style={{ y: reduce ? 0 : y2 }}
        className="absolute -right-32 top-2/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.15_160/10%),transparent_65%)] blur-[100px] animate-orb"
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-90 h-0.5 origin-left bg-[image:var(--gradient-primary)]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
