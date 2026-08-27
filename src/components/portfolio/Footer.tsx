import { PROFILE, NAV_LINKS } from "@/data/portfolio";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { MagneticLink } from "./primitives";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container px-6 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              {PROFILE.name}
            </span>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {PROFILE.headline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Socials</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:mt-0"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
