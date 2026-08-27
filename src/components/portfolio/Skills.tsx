import { SectionHeading, Reveal } from "./primitives";
import { SKILL_GROUPS, EXPLORING } from "@/data/portfolio";
import { Brain, Blocks, Sparkles } from "lucide-react";

export function Skills() {
  const getExploringIcon = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return <Brain className="h-6 w-6 text-primary" />;
      case "blocks":
        return <Blocks className="h-6 w-6 text-primary" />;
      case "sparkles":
        return <Sparkles className="h-6 w-6 text-primary" />;
      default:
        return <Sparkles className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container px-6">
        <SectionHeading
          label="SKILLS & TOOLKIT"
          title="What I build with."
          subtitle="My primary stack and the technologies I'm actively exploring."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-12">
            {SKILL_GROUPS.filter((g) => g.title !== "EXPLORING").map((group, i) => (
              <Reveal key={group.title} delay={i * 0.1}>
                <h3 className="mb-6 text-sm font-medium tracking-wider text-primary/80">
                  {group.title}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="glass group relative overflow-hidden rounded-xl p-5 transition-colors hover:border-primary/50 hover:bg-primary/5"
                    >
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-12">
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 relative overflow-hidden">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                <h3 className="mb-8 text-xl font-semibold tracking-tight">Currently Exploring</h3>
                <div className="space-y-8">
                  {EXPLORING.map((topic, i) => (
                    <div key={topic.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass bg-background/50">
                        {getExploringIcon(topic.icon)}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{topic.title}</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {topic.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex rounded-full border border-border/50 bg-background/30 px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {SKILL_GROUPS.filter((g) => g.title === "EXPLORING").map((group, i) => (
              <Reveal key={group.title} delay={0.3}>
                <h3 className="mb-6 text-sm font-medium tracking-wider text-primary/80">
                  {group.title} NOTES
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="glass group relative overflow-hidden rounded-xl p-5 transition-colors hover:border-primary/50 hover:bg-primary/5"
                    >
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
