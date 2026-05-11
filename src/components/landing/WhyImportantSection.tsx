import { EyeIcon, ScaleIcon, ShieldIcon } from "./RetroIcons";

const pillars = [
  {
    icon: EyeIcon,
    code: "01",
    title: "Sea transparente",
    text: "Que podamos entender cómo la IA toma decisiones — sin cajas negras.",
  },
  {
    icon: ScaleIcon,
    code: "02",
    title: "Sea justa",
    text: "Que no discrimine a nadie por género, raza, edad o condición.",
  },
  {
    icon: ShieldIcon,
    code: "03",
    title: "Sea segura",
    text: "Que no ponga en riesgo a las personas, ni en lo digital ni en lo físico.",
  },
];

export function WhyImportantSection() {
  return (
    <section
      id="principios"
      aria-labelledby="principios-title"
      className="border-b-2 border-foreground bg-secondary bg-dotted"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <span className="font-mono-retro text-xs uppercase tracking-widest text-primary">
            // Principios
          </span>
          <h2
            id="principios-title"
            className="mt-2 text-4xl font-bold text-foreground md:text-5xl"
          >
            ¿Por qué es importante?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Imagina que un algoritmo decide quién recibe un préstamo, un trabajo
            o un tratamiento médico. Si tiene <em>sesgos</em>, podría excluir a
            personas. La gobernanza busca evitarlo garantizando tres pilares:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, code, title, text }) => (
            <article key={code} className="card-retro flex flex-col gap-4 bg-card p-6">
              <div className="flex items-center justify-between">
                <Icon className="h-12 w-12 text-primary" />
                <span className="font-mono-retro text-3xl font-bold text-mustard">
                  {code}
                </span>
              </div>
              <div className="ribbon-strip h-1.5 w-12" />
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
