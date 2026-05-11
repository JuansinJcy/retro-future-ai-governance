import { CheckIcon } from "./RetroIcons";

const actions = [
  "Cuestiona los resultados que te entrega un sistema automatizado.",
  "Lee las políticas de privacidad antes de aceptar.",
  "Apoya iniciativas y leyes que regulen la IA con criterio.",
  "Aprende lo básico sobre cómo funcionan los algoritmos.",
  "Comparte conocimiento ético con tu comunidad.",
  "Reporta usos abusivos o discriminatorios de la IA.",
];

export function WhatCanYouDoSection() {
  return (
    <section
      aria-labelledby="que-puedes-hacer-title"
      className="border-b-2 border-foreground bg-mustard"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="font-mono-retro text-xs uppercase tracking-widest text-primary">
          // Acción
        </span>
        <h2
          id="que-puedes-hacer-title"
          className="mt-2 max-w-3xl text-4xl font-bold text-foreground md:text-5xl"
        >
          ¿Qué puedes hacer tú?
        </h2>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {actions.map((action, i) => (
            <li
              key={i}
              className="card-retro flex items-start gap-4 bg-background p-5"
            >
              <CheckIcon className="mt-1 h-7 w-7 shrink-0 text-primary" />
              <div>
                <span className="font-mono-retro text-xs uppercase tracking-widest text-muted-foreground">
                  Acción {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-base leading-relaxed text-foreground">
                  {action}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
