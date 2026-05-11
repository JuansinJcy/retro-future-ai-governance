import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { WhatIsSection } from "@/components/landing/WhatIsSection";
import { WhyImportantSection } from "@/components/landing/WhyImportantSection";
import { EthicalUseSection } from "@/components/landing/EthicalUseSection";
import { WhatCanYouDoSection } from "@/components/landing/WhatCanYouDoSection";
import { CtaFooter } from "@/components/landing/CtaFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Gobernanza en IA y Uso Ético | Manual Civil",
      },
      {
        name: "description",
        content:
          "Una guía clara y accesible sobre Gobernanza en IA: principios, ética, transparencia y acciones para un uso responsable de la Inteligencia Artificial.",
      },
      { property: "og:title", content: "Gobernanza en IA y Uso Ético" },
      {
        property: "og:description",
        content:
          "Principios, ética y acciones para una Inteligencia Artificial justa, transparente y segura.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhatIsSection />
      <WhyImportantSection />
      <EthicalUseSection />
      <WhatCanYouDoSection />
      <CtaFooter />
    </main>
  );
}
