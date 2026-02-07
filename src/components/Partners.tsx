import { FadeIn } from "./Animations";
import { Briefcase, Award, Shield } from "lucide-react";

const PARTNERS = [
  {
    name: "Carlos Eduardo Roosevelt",
    role: "Sócio-Diretor",
    credentials: [
      "Mais de 35 anos de atuação em consultoria contábil",
      "Especialista em planejamento tributário estratégico",
      "Responsável por decisões de alto impacto para clientes de grande porte",
    ],
  },
  {
    name: "Ana Carolina Mendes",
    role: "Sócia-Diretora",
    credentials: [
      "Referência em gestão de departamento pessoal e trabalhista",
      "20+ anos de experiência em compliance empresarial",
      "Atendimento direto a empresas em processos societários complexos",
    ],
  },
  {
    name: "Roberto Augusto Campos",
    role: "Sócio-Diretor",
    credentials: [
      "Liderança da área fiscal e de obrigações acessórias",
      "Especialista em regimes tributários (Lucro Real, Presumido, Simples)",
      "Condutor da transformação digital do escritório",
    ],
  },
];

export default function Partners() {
  return (
    <section id="socios" className="section-padding bg-muted/50">
      <div className="container-editorial">
        <FadeIn>
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-trust">
            Liderança
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 max-w-2xl leading-tight">
            Sócios em destaque
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl">
            Atendimento direto e responsável em decisões críticas.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {PARTNERS.map((partner, i) => (
            <FadeIn key={partner.name} delay={i * 0.1}>
              <div className="bg-card rounded-2xl border border-border p-8 hover-lift h-full flex flex-col">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center mb-6">
                  <span className="text-2xl font-display font-bold text-primary-foreground">
                    {partner.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground">
                  {partner.name}
                </h3>
                <p className="text-trust font-semibold text-sm mt-1 mb-5">
                  {partner.role}
                </p>

                <ul className="space-y-3 flex-1">
                  {partner.credentials.map((cred, ci) => (
                    <li key={ci} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Shield size={14} className="text-trust mt-0.5 flex-shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
