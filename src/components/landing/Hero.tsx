import { StarIcon } from "./RetroIcons";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b-2 border-foreground bg-blueprint-grid"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div className="animate-fade-up">
          <span className="font-mono-retro inline-block border-2 border-foreground bg-mustard px-3 py-1 text-xs uppercase tracking-widest text-foreground shadow-retro">
            Manual /Vol.01 — Ética & IA
          </span>
          <h1
            id="hero-title"
            className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-7xl"
          >
            Gobernanza en IA:
            <br />
            <span className="text-primary">Tecnología</span> con{" "}
            <span className="font-mono-retro italic">Responsabilidad</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Un conjunto de reglas, principios y leyes para asegurar que la
            Inteligencia Artificial se desarrolle y utilice de manera{" "}
            <strong className="text-foreground">justa, transparente y segura</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#principios" className="btn-retro btn-retro-primary">
              ▸ Explorar principios
            </a>
            <a href="#uso-etico" className="btn-retro">
              Uso ético
            </a>
          </div>

          <dl className="font-mono-retro mt-12 grid max-w-md grid-cols-3 gap-4 text-xs uppercase">
            <div className="border-l-2 border-primary pl-3">
              <dt className="text-muted-foreground">Versión</dt>
              <dd className="text-foreground">1.0 / 2026</dd>
            </div>
            <div className="border-l-2 border-mustard pl-3">
              <dt className="text-muted-foreground">Misión</dt>
              <dd className="text-foreground">AI-ETHIC-01</dd>
            </div>
            <div className="border-l-2 border-foreground pl-3">
              <dt className="text-muted-foreground">Status</dt>
              <dd className="text-foreground">Activo</dd>
            </div>
          </dl>
        </div>

        {/* Sello tipo NASA */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-sm">
            <div className="card-retro flex h-full w-full flex-col items-center justify-center gap-4 bg-card p-8 text-center">
              <StarIcon className="h-24 w-24 text-primary" />
              <div className="font-mono-retro text-xs uppercase tracking-widest text-muted-foreground">
                Centro de Gobernanza
              </div>
              <div className="font-mono-retro text-2xl font-bold text-foreground">
                AI · ETHICS
              </div>
              <div className="ribbon-strip h-2 w-full" />
              <div className="font-mono-retro text-[10px] uppercase tracking-widest text-foreground">
                Est. MMXXVI · Programa Civil
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
