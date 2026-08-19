import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, type Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./primitives";

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-5">
      <p className="font-mono text-[0.68rem] tracking-[0.24em] text-primary">{label}</p>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="surface-card glow-border relative my-0 w-full max-w-4xl overflow-hidden p-6 sm:my-8 sm:rounded-3xl sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full glass transition-colors hover:border-primary/50"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        <span className="font-mono text-xs tracking-[0.24em] text-primary">PROJECT {project.index}</span>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">{project.title}</h3>
        <p className="mt-2 font-mono text-[0.7rem] tracking-[0.2em] text-secondary">
          {project.category.toUpperCase()}
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

        <div className="mt-8 space-y-5">
          <DetailBlock label="OVERVIEW">{project.detail.overview}</DetailBlock>
          <DetailBlock label="PROBLEM">{project.detail.problem}</DetailBlock>
          <DetailBlock label="SOLUTION">{project.detail.solution}</DetailBlock>
          <DetailBlock label="TECHNOLOGY">{project.detail.technology}</DetailBlock>
          <DetailBlock label="KEY FEATURES">
            <ul className="space-y-1.5">
              {project.detail.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>
          <DetailBlock label="ARCHITECTURE">{project.detail.architecture}</DetailBlock>
          <DetailBlock label="STATUS">{project.detail.status}</DetailBlock>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
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
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="projects" className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div style={reduce ? {} : { y: headingY }}>
        <SectionHeading
          label="SELECTED WORK"
          title="Projects"
          subtitle="A collection of AI, web and creative development projects — click any card for a full case study."
        />
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active ? <ProjectModal project={active} onClose={() => setActive(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}
