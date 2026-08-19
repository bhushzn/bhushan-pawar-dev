import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground, ScrollProgress } from "@/components/portfolio/AnimatedBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";

const title = "Bhushan Pawar — Developer, AI Enthusiast & Future Blockchain Dev";
const description =
  "Portfolio of Bhushan Pawar: interactive web experiences, AI-powered applications and Web3 explorations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
      </main>
    </div>
  );
}
