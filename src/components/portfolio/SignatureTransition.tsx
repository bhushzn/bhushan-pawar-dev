import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SignatureTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 20%"] });

  const bpOpacity = useTransform(scrollYProgress, [0.1, 0.45], [1, 0]);
  const bpBlur = useTransform(scrollYProgress, [0.1, 0.45], [0, 8]);
  const bpFilter = useTransform(bpBlur, (b) => `blur(${b}px)`);
  const codeOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1.05]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  return (
    <div ref={ref} className="relative flex h-56 items-center justify-center" aria-hidden="true">
      <motion.div style={{ scale, rotate }} className="relative">
        <motion.span
          style={{ opacity: bpOpacity, filter: bpFilter }}
          className="block text-6xl font-semibold tracking-tight text-gradient sm:text-7xl"
        >
          BP
        </motion.span>
        <motion.span
          style={{ opacity: codeOpacity }}
          className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-semibold text-gradient sm:text-7xl"
        >
          &lt;/&gt;
        </motion.span>
      </motion.div>
    </div>
  );
}
