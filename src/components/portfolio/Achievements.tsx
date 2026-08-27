import { SectionHeading, Reveal, Tilt } from "./primitives";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Award, Shield, Code, Flag, Mic, LucideIcon } from "lucide-react";

const getAchievementIcon = (iconName: string): LucideIcon => {
  switch (iconName) {
    case "award":
      return Award;
    case "shield":
      return Shield;
    case "code":
      return Code;
    case "flag":
      return Flag;
    case "mic":
      return Mic;
    default:
      return Award;
  }
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container px-6">
        <SectionHeading
          label="RECOGNITION"
          title="Achievements."
          subtitle="Milestones, awards and extra-curriculars."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((achievement, i) => {
            const Icon = getAchievementIcon(achievement.icon);
            return (
              <Reveal key={achievement.title} delay={i * 0.1} className="h-full">
                <Tilt className="h-full">
                  <div className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-colors hover:border-primary/50">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{achievement.title}</h3>
                    <div className="mb-4 text-sm font-mono text-primary/80">{achievement.year}</div>
                    <p className="text-muted-foreground">{achievement.text}</p>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
