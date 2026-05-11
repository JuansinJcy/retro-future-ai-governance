import { GearIcon, RocketIcon, ShieldIcon } from "./RetroIcons";

const items = [
  {
    icon: ShieldIcon,
    label: "Privacidad",
    text: "Que tus datos personales no se usen sin tu permiso.",
    badge: "PRV-001",
  },
  {
    icon: GearIcon,
    label: "Responsabilidad",
    text: "Que alguien responda si la IA comete un error.",
    badge: "RES-002",
  },
  {
    icon: RocketIcon,
    label: "Beneficio social",
    text: "Que la IA ayude a resolver problemas globales — no solo a generar ganancias.",
    badge: "SOC-003",
  },
];

export function EthicalUseSection() {
  return (
    <section
      id="uso-etico"
      aria-labelledby="uso-etico-title"
      className="border-b-2 border-foreground"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono-retro text-xs uppercase tracking-widest text-primary">
              // Capítulo 02
            </span>
            <h2
              id="uso-etico-title"
              className="mt-2 text-4xl font-bold text-foreground md:text-5xl"
            >
              Uso Ético de la IA: <span className="font-mono-retro italic">más que código</span>
            </h2>
          </div>
          <p className="font-mono-retro mt-4 max-w-sm text-sm uppercase tracking-widest text-muted-foreground md:mt-0">
            La ética en IA no es solo “no hacer daño”. También es construir bien.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-2 border-foreground shadow-retro-lg md:grid-cols-3">
          {items.map(({ icon: Icon, label, text, badge }, idx) => (
            <article
              key={badge}
              className={`flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-mustard ${
                idx < items.length - 1 ? "border-b-2 border-foreground md:border-b-0 md:border-r-2" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className="h-14 w-14 text-foreground" />
                <span className="font-mono-retro border-2 border-foreground bg-background px-2 py-0.5 text-[10px] uppercase tracking-widest">
                  {badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">{label}</h3>
              <p className="text-base leading-relaxed text-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
