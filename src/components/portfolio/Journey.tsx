import { SectionHeading, Reveal } from "./primitives";
import { JOURNEY } from "@/data/portfolio";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-primary/5">
      <div className="container px-6">
        <SectionHeading
          label="JOURNEY"
          title="The path so far."
          subtitle="Education, experiences and what's coming next."
          className="mx-auto text-center"
        />

        <div className="mx-auto mt-20 max-w-4xl relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {JOURNEY.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col md:flex-row md:items-center",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 z-10 top-0 md:top-auto" />

                  {/* Empty half for spacing on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "w-full md:w-1/2 pl-12 md:pl-0",
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    )}
                  >
                    <div className="glass relative overflow-hidden rounded-2xl p-6 md:p-8 transition-colors hover:border-primary/30">
                      <div className="text-primary font-mono text-sm mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
