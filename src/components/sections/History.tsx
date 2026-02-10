import { useState } from "react";
import { FadeIn } from "@/components/ui/Animations";
import { getYearsOfExperience } from "@/lib/constants";
import { Zap, Building, Monitor, FileText, Users, TrendingUp } from "lucide-react";

const MILESTONES = [
  {
    year: "1965",
    title: "A Fundação",
    description: "Em 02 de janeiro, Telmo Gerhardt funda o Escritório Contábil Roosevelt. O nome homenageia sua primeira sede na Av. Franklin Roosevelt e sua admiração pelo presidente americano.",
    icon: Building,
  },
  {
    year: "1979",
    title: "Visão e Estratégia",
    description: "Inauguração da sede própria na Rua Olinda. Um local escolhido estrategicamente para facilitar o acesso e oferecer maior conforto aos clientes.",
    icon: TrendingUp,
  },
  {
    year: "Legado",
    title: "DNA Familiar",
    description: "Uma empresa familiar onde a contabilidade corre no sangue. Os filhos de Telmo — Daniel, Deni e Rochelle — formaram-se contadores, perpetuando o orgulho e a profissão do pai.",
    icon: Users,
  },
  {
    year: "Valores",
    title: "Essência que Permanece",
    description: "Após o falecimento do Sr. Telmo em 2017, ficou o exemplo de ética e honestidade. Mantemos vivos os valores de qualidade, confiança, respeito e empatia em cada atendimento.",
    icon: FileText,
  },
  {
    year: "Hoje",
    title: "Tradição e Futuro",
    description: `Com ${getYearsOfExperience()} anos de história, unimos a solidez de décadas de experiência à inovação constante, honrando a confiança de clientes que estão conosco desde o início.`,
    icon: Zap,
  },
];

export default function History() {
  const [active, setActive] = useState(0);

  return (
    <section id="historia" className="section-padding bg-background scroll-mt-28">
      <div className="container-editorial">
        <FadeIn>
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-trust">
            Nossa trajetória
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 max-w-3xl leading-tight">
            Uma história construída com responsabilidade — e atualizada com tecnologia.
          </h2>
        </FadeIn>

        <div className="mt-14 md:mt-20">
          {/* Timeline nav */}
          <FadeIn delay={0.1}>
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-6 scrollbar-hide">
              {MILESTONES.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    active === i
                      ? "bg-trust text-trust-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div className="relative bg-card rounded-2xl border border-border p-8 md:p-12 mt-4 min-h-[240px]">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-xl bg-trust/10 text-trust flex-shrink-0">
                  {(() => {
                    const Icon = MILESTONES[active].icon;
                    return <Icon size={28} />;
                  })()}
                </div>
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
                    {MILESTONES[active].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl text-base md:text-lg">
                    {MILESTONES[active].description}
                  </p>
                  {active === MILESTONES.length - 1 && (
                    <div className="flex items-center gap-2 pt-2">
                      <Zap size={16} className="text-trust" />
                      <span className="text-sm font-semibold text-trust">
                        Processos digitais · Plataformas integradas · Rotinas automatizadas
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex gap-1.5 mt-8">
                {MILESTONES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active ? "bg-trust w-10" : "bg-border w-6"
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
