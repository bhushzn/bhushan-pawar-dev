import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PROJECTS, PROJECT_GROUPS, type ProjectGroup } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "./primitives";

const HASH_PREFIX = "#project/";

function projectIdFromHash(hash: string) {
  if (!hash.startsWith(HASH_PREFIX)) return null;
  const id = decodeURIComponent(hash.slice(HASH_PREFIX.length));
  return PROJECTS.some((p) => p.id === id) ? id : null;
}

type Filter = "All" | ProjectGroup;

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Deep links: hash <-> open project, with back/forward support.
  useEffect(() => {
    const sync = () => setActiveId(projectIdFromHash(window.location.hash));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const open = useCallback((id: string) => {
    window.location.hash = `${HASH_PREFIX}${encodeURIComponent(id)}`;
  }, []);

  const close = useCallback(() => {
    if (projectIdFromHash(window.location.hash)) {
      window.history.back();
    } else {
      setActiveId(null);
    }
  }, []);

  const active = useMemo(() => PROJECTS.find((p) => p.id === activeId) ?? null, [activeId]);
  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.groups.includes(filter))),
    [filter],
  );

  const filters: Filter[] = ["All", ...PROJECT_GROUPS];

  return (
    <section ref={ref} id="projects" className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div style={reduce ? undefined : { y: headingY }}>
        <SectionHeading
          label="SELECTED WORK"
          title="Projects"
          subtitle="A collection of AI, web and creative development projects — open any card for a full case study."
        />
      </motion.div>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const selected = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                selected
                  ? "border-primary/60 bg-primary text-primary-foreground"
                  : "border-border bg-surface-2/50 text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} projects shown for filter {filter}.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={(proj) => open(proj.id)} />
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted-foreground">No projects in this category yet.</p>
      ) : null}

      <AnimatePresence>
        {active ? <ProjectModal key={active.id} project={active} onClose={close} /> : null}
      </AnimatePresence>
    </section>
  );
}
