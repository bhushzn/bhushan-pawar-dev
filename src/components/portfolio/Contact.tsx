import { SectionHeading, Reveal, MagneticLink } from "./primitives";
import { PROFILE } from "@/data/portfolio";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-primary/5">
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            label="GET IN TOUCH"
            title="Let's build together."
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
          />

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <Reveal delay={0.1} className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Email</h3>
                <p className="mb-6 text-muted-foreground">Drop me a line anytime.</p>
                <MagneticLink href={`mailto:${PROFILE.emailPlaceholder}`} className="w-full justify-center">
                  {PROFILE.emailPlaceholder} <ArrowUpRight className="ml-2 h-4 w-4" />
                </MagneticLink>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="space-y-8">
              <div className="glass rounded-2xl p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Location</h3>
                  <p className="text-muted-foreground">{PROFILE.location}</p>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-medium tracking-wider text-primary/80">SOCIALS</h4>
                  <div className="flex gap-4">
                    <MagneticLink href={PROFILE.github} external variant="ghost" className="px-4 py-2 rounded-xl">
                      <Github className="h-5 w-5" />
                    </MagneticLink>
                    <MagneticLink href={PROFILE.linkedin} external variant="ghost" className="px-4 py-2 rounded-xl">
                      <Linkedin className="h-5 w-5" />
                    </MagneticLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
