import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Tilt } from "./primitives";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 36 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(project.featured && "lg:col-span-2")}
    >
      <Tilt intensity={project.featured ? 6 : 10}>
        <div className="group surface-card glow-border relative h-full overflow-hidden p-6 transition-colors duration-500 hover:border-primary/60 sm:p-8 hover:shadow-[0_0_40px_-10px_oklch(0.85_0.15_190/30%)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,oklch(0.85_0.15_190/18%),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 frost-blur opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />

          <div className={cn("relative grid gap-8", project.featured && "lg:grid-cols-[1fr_1.05fr] lg:items-center")}>
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.24em] text-primary">
                  PROJECT {project.index}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <h3
                className={cn(
                  "mt-4 font-semibold tracking-tight",
                  project.featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
                )}
              >
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-[0.7rem] tracking-[0.2em] text-secondary">
                {project.category.toUpperCase()}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-surface-2/60 px-3 py-1 font-mono text-[0.68rem] text-foreground/75"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpen(project)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  View Project <ArrowUpRight className="size-4" aria-hidden="true" />
                </button>
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-full glass px-5 py-2.5 text-sm transition-colors hover:border-primary/50"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              style={reduce ? {} : { y: visualY }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-[image:linear-gradient(160deg,oklch(0.12_0_0),oklch(0.16_0_0))]"
            >
              <div className="absolute inset-0 grid-bg opacity-30 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.15_190/40%),transparent_65%)] blur-2xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-150" />
              <div className="relative flex h-full flex-col justify-between p-5 z-10 transition-transform duration-500 group-hover:translate-y-[-4px]">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-destructive/60" />
                  <span className="size-2 rounded-full bg-primary/60" />
                  <span className="size-2 rounded-full bg-secondary/60" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-2/3 rounded-full bg-foreground/15" />
                  <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
                  <div className="grid grid-cols-3 gap-2 pt-3">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-12 rounded-lg border border-border bg-background/40" />
                    ))}
                  </div>
                </div>
                <p className="font-mono text-[0.65rem] tracking-[0.24em] text-muted-foreground">
                  {project.title.toUpperCase()} / PREVIEW
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
