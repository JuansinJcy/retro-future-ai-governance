import { GlobeIcon } from "./RetroIcons";

export function WhatIsSection() {
  return (
    <section
      id="que-es"
      aria-labelledby="que-es-title"
      className="border-b-2 border-foreground"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="card-retro inline-flex flex-col items-start gap-3 bg-mustard p-6">
            <GlobeIcon className="h-16 w-16 text-foreground" />
            <span className="font-mono-retro text-xs uppercase tracking-widest">
              Cap. 01
            </span>
          </div>
        </div>

        <div>
          <span className="font-mono-retro text-xs uppercase tracking-widest text-primary">
            // Definición
          </span>
          <h2
            id="que-es-title"
            className="mt-2 text-4xl font-bold text-foreground md:text-5xl"
          >
            ¿Qué es la Gobernanza en IA?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground">
            La <strong>Inteligencia Artificial</strong> ya no es solo cosa de
            películas. Está en tu teléfono, en las recomendaciones de Netflix,
            en los asistentes virtuales e incluso en los diagnósticos médicos.
            Pero, ¿quién decide cómo se usa?
          </p>

          <blockquote className="font-mono-retro mt-8 border-l-4 border-primary bg-secondary p-6 text-base leading-relaxed shadow-retro">
            “Un conjunto de reglas, principios y leyes para asegurar que la IA
            se desarrolle de manera{" "}
            <span className="bg-mustard px-1">justa, transparente y segura</span>.”
            <footer className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              — Manual de Gobernanza, p. 12
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
