export function CtaFooter() {
  return (
    <>
      <section
        aria-labelledby="cta-title"
        className="border-b-2 border-foreground bg-foreground text-background"
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="font-mono-retro text-xs uppercase tracking-widest text-mustard">
            // Cierre de transmisión
          </span>
          <h2
            id="cta-title"
            className="mt-4 text-3xl font-bold leading-tight md:text-5xl"
          >
            La IA será lo que <span className="text-mustard">decidamos</span>{" "}
            que sea.
          </h2>
          <p className="font-mono-retro mt-6 text-base text-background/70">
            Construyamos una tecnología digna del futuro que prometimos.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#que-es" className="btn-retro">
              ◂ Volver al manual
            </a>
            <a href="#principios" className="btn-retro btn-retro-primary">
              Repasar principios ▸
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono-retro text-xs uppercase tracking-widest text-muted-foreground">
            © MMXXVI · Manual de Gobernanza en IA
          </p>
          <p className="font-mono-retro text-xs uppercase tracking-widest text-muted-foreground">
            Vol.01 / Ed. Civil / Distribución libre
          </p>
        </div>
        <div className="border-t-2 border-foreground bg-foreground py-4">
          <p className="font-mono-retro text-center text-xs uppercase tracking-[0.3em] text-mustard">
            ✦ Autor · Juan Carlos Yepez Kepp ✦
          </p>
        </div>
      </footer>
    </>
  );
}
