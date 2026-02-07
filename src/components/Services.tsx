import { useState } from "react";
import { FadeIn } from "./Animations";
import { FileText, Users, Calculator, Building2, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "fiscal",
    title: "Fiscal",
    icon: FileText,
    description: "Gestão tributária completa com foco em conformidade e economia fiscal. Análise contínua de regimes e obrigações para evitar riscos e otimizar resultados.",
    deliverables: [
      "Apuração e controle de tributos federais, estaduais e municipais",
      "Planejamento tributário estratégico por regime",
      "Gestão de obrigações acessórias e SPED",
    ],
    audience: "Empresas de todos os portes que buscam segurança fiscal e redução legal de carga tributária.",
  },
  {
    id: "pessoal",
    title: "Pessoal",
    icon: Users,
    description: "Departamento pessoal estratégico que vai além da folha de pagamento. Cuidamos de toda a relação trabalhista com compliance e eficiência.",
    deliverables: [
      "Folha de pagamento, encargos e benefícios",
      "Admissões, rescisões e gestão de férias",
      "eSocial e conformidade trabalhista completa",
    ],
    audience: "Empresas que precisam de gestão de pessoas sem riscos trabalhistas.",
  },
  {
    id: "contabil",
    title: "Contábil",
    icon: Calculator,
    description: "Contabilidade consultiva com relatórios claros e análises que suportam decisões de negócio. Não fazemos apenas lançamentos — entregamos inteligência contábil.",
    deliverables: [
      "Escrituração contábil e demonstrações financeiras",
      "Relatórios gerenciais personalizados",
      "Análise de indicadores e suporte a decisões",
    ],
    audience: "Empresas que enxergam a contabilidade como ferramenta estratégica de gestão.",
  },
  {
    id: "societario",
    title: "Societário",
    icon: Building2,
    description: "Suporte completo em estruturação societária, desde a abertura até alterações contratuais complexas. Segurança jurídica em cada movimento.",
    deliverables: [
      "Constituição, alteração e encerramento de empresas",
      "Reestruturação societária e fusões",
      "Registro em órgãos competentes e certidões",
    ],
    audience: "Empreendedores e empresas em fase de reestruturação ou expansão.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-editorial">
        <FadeIn>
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-trust">
            Áreas de atuação
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 max-w-2xl leading-tight">
            Especialização real, não genérica.
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 mt-14">
          {/* Left: service index */}
          <FadeIn delay={0.1} className="lg:col-span-4">
            <div className="space-y-2">
              {SERVICES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    active === i
                      ? "bg-navy text-primary-foreground shadow-lg"
                      : "bg-card text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  <s.icon size={22} className={active === i ? "text-trust" : "text-muted-foreground"} />
                  <span className="font-display font-bold text-lg">{s.title}</span>
                  {active === i && <ArrowRight size={16} className="ml-auto text-trust" />}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Right: content */}
          <FadeIn delay={0.2} className="lg:col-span-8">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 min-h-[380px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center">
                  <service.icon size={24} className="text-trust" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">{service.title}</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {service.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-trust mb-4">
                    Entregáveis
                  </h4>
                  <ul className="space-y-3">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-trust mt-2 flex-shrink-0" />
                        <span className="text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-trust mb-2">
                    Para quem
                  </h4>
                  <p className="text-sm text-muted-foreground">{service.audience}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
