import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import type { Project } from "@/data/portfolio";

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-4 sm:pt-5">
      <h4 className="font-mono text-[0.62rem] tracking-[0.22em] text-primary sm:text-[0.68rem] sm:tracking-[0.24em]">
        {label}
      </h4>
      <div className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground sm:text-base">{children}</div>
    </div>
  );
}

const FOCUSABLE =
  'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (n) => n.offsetParent !== null || n === document.activeElement,
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (activeEl === first || !panelRef.current.contains(activeEl))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto overscroll-contain bg-background/80 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0.12 : 0.25 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: reduce ? 0.12 : 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="surface-card glow-border relative w-full max-w-4xl overflow-hidden px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] [scroll-behavior:smooth] sm:my-8 sm:max-h-[calc(100dvh-3rem)] sm:overflow-y-auto sm:rounded-3xl sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.title} details`}
          className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] inline-flex size-11 items-center justify-center rounded-full glass transition-colors hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        <span className="font-mono text-[0.7rem] tracking-[0.24em] text-primary sm:text-xs">
          PROJECT {project.index}
        </span>
        <h3
          id={titleId}
          className="mt-3 max-w-[85%] text-balance text-2xl font-semibold tracking-tight text-gradient sm:text-4xl"
        >
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-[0.65rem] tracking-[0.18em] text-secondary sm:text-[0.7rem] sm:tracking-[0.2em]">
          {project.category.toUpperCase()}
        </p>

        <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-surface-2/60 px-3 py-1 font-mono text-[0.68rem] text-foreground/75"
            >
              {t}
            </li>
          ))}
        </ul>

        <div id={descId} className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
          <DetailBlock label="OVERVIEW">{project.detail.overview}</DetailBlock>
          <DetailBlock label="PROBLEM">{project.detail.problem}</DetailBlock>
          <DetailBlock label="SOLUTION">{project.detail.solution}</DetailBlock>
          <DetailBlock label="TECHNOLOGY">{project.detail.technology}</DetailBlock>
          <DetailBlock label="KEY FEATURES">
            <ul className="space-y-1.5">
              {project.detail.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
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
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full glass px-5 py-2.5 text-sm transition-colors hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
