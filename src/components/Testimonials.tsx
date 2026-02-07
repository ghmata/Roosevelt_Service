import { useState } from "react";
import { FadeIn } from "./Animations";
import { Star, Quote } from "lucide-react";

const CATEGORIES = ["Todos", "Atendimento", "Agilidade", "Segurança", "Consultoria"];

const TESTIMONIALS = [
  {
    name: "Marcelo Ferreira",
    company: "MF Logística",
    text: "A Roosevelt cuida da nossa contabilidade há mais de 15 anos. A confiança que temos na equipe é o nosso maior ativo.",
    rating: 5,
    category: "Atendimento",
  },
  {
    name: "Patrícia Almeida",
    company: "PA Arquitetura",
    text: "Resposta rápida, relatórios claros e nenhuma surpresa com o fisco. É isso que esperamos e sempre recebemos.",
    rating: 5,
    category: "Agilidade",
  },
  {
    name: "Eduardo Nascimento",
    company: "Grupo EN",
    text: "Quando precisamos reestruturar a sociedade, a equipe nos guiou com segurança total. Zero problemas.",
    rating: 5,
    category: "Segurança",
  },
  {
    name: "Juliana Costa",
    company: "JC Importações",
    text: "O planejamento tributário que fizeram para a minha empresa economizou mais do que eu imaginava ser possível.",
    rating: 5,
    category: "Consultoria",
  },
  {
    name: "Ricardo Lopes",
    company: "RL Construtora",
    text: "Atendem com atenção pessoal mesmo sendo um escritório grande. Os sócios participam diretamente.",
    rating: 5,
    category: "Atendimento",
  },
  {
    name: "Fernanda Braga",
    company: "Braga & Associados",
    text: "Migramos de outro escritório e a diferença na qualidade de informação e acompanhamento foi imediata.",
    rating: 5,
    category: "Consultoria",
  },
  {
    name: "Anderson Silva",
    company: "AS Distribuidora",
    text: "Precisamos de resposta urgente sobre uma autuação e tivemos retorno no mesmo dia. Isso não tem preço.",
    rating: 5,
    category: "Agilidade",
  },
  {
    name: "Camila Duarte",
    company: "CD Eventos",
    text: "A Roosevelt nos dá segurança para tomar decisões. Sabemos que os números estão corretos e atualizados.",
    rating: 5,
    category: "Segurança",
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? TESTIMONIALS : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <section id="avaliacoes" className="section-padding bg-muted/50">
      <div className="container-editorial">
        <FadeIn>
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-trust">
            Avaliações
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 max-w-2xl leading-tight">
            Quem confia, recomenda.
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-trust fill-trust" />)}
            </div>
            <span className="text-muted-foreground text-sm">
              <strong className="text-foreground">5.0</strong> · {TESTIMONIALS.length} avaliações
            </span>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mt-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-trust text-trust-foreground"
                    : "bg-card text-muted-foreground border border-border hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {filtered.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border p-6 hover-lift h-full flex flex-col">
                <Quote size={24} className="text-trust/30 mb-4" />
                <p className="text-foreground leading-relaxed flex-1 text-sm">
                  "{t.text}"
                </p>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
