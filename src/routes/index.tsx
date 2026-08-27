import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground, ScrollProgress } from "@/components/portfolio/AnimatedBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { SignatureTransition } from "@/components/portfolio/SignatureTransition";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

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
      <LoadingScreen />
      <AnimatedBackground />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <SignatureTransition />
        <Skills />
        <Journey />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
