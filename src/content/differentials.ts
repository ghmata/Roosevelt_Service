
import { 
  Smartphone, 
  ShieldCheck, 
  Target,
  BarChart3,
  Clock,
  Sparkles
} from "lucide-react";

export interface Differential {
  id: string;
  icon: any; 
  title: string;
  description: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    id: "planejamento-tributario",
    icon: Target,
    title: "Planejamento Tributário",
    description: "Realizamos anualmente o planejamento tributário para garantir que a empresa fique no melhor regime tributário.",
  },
  {
    id: "tecnologia-praticidade",
    icon: Smartphone,
    title: "Envios pelo App, E-mail e WhatsApp",
    description: "Os envios são através de sistema, o cliente recebe por e-mail o documento/guia sem precisar de senha, além disso,fica disponível no app e WhatsApp. Protocolo eletrônico de todos os acessos.",
  },
  {
    id: "roosevelt-bi",
    icon: BarChart3,
    title: "Roosevelt BI",
    description: "Acesso imediato à gráficos e relatórios que ajudam a empresa na análise e tomada de decisões ágeis e assertivas.",
  },
  {
    id: "atendimento-24h",
    icon: Clock,
    title: "Atendimento 24 Horas",
    description: "Atendimento automatizado via WhatsApp para solicitar documentos e guias no momento exato que você precisar.",
  },
  {
    id: "inteligencia-artificial",
    icon: Sparkles,
    title: "Inteligência Artificial",
    description: "Engajamento total em trazer as melhores oportunidades e soluções aos nossos clientes através da inteligência artificial aliada com a nossa expertise.",
  },
  {
    id: "seguro-civil",
    icon: ShieldCheck,
    title: "Seguro Resp. Civil",
    description: "Temos um seguro focado em entregar uma maior tranquilidade e segurança para as operações de alto valor e grande responsabilidade.",
  },
];
