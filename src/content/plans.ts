
export interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  link: string;
  highlight?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "start",
    name: "Start",
    price: "Entrega Anual",
    description: "Ideal para empresas sem funcionários que estão começando no mercado e desejam economizar para conseguir se destacar.",
    features: [
      "Contabilidade Simplificada",
      "Integração via caixa contábil",
      "Movimentações fiscais e folha",
      "Atende bancos e fornecedores",
    ],
    cta: "Solicitar Orçamento",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSejN5bniFDStswLwswGdJqYF1J1sVYra-Hz_DghKVDXPu9HPQ/viewform",
    highlight: false,
  },
  {
    id: "gold",
    name: "Gold",
    price: "Entrega Trimestral",
    description: "Ideal para empresas que estão em crescimento e desejam alavancar o seu negócio no mercado.",
    features: [
      "Contabilidade Completa",
      "Integração bancária e fiscal",
      "Conciliações detalhadas",
      "Atende distribuição de lucros",
    ],
    cta: "Solicitar Orçamento",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSejN5bniFDStswLwswGdJqYF1J1sVYra-Hz_DghKVDXPu9HPQ/viewform",
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "Entrega Mensal",
    description: "Ideal para empresas mais estruturadas e consolidadas que procuram uma melhor gestão do seu negócio.",
    features: [
      "Contabilidade Completa e Personalizada",
      "Acesso ao Roosevelt BI",
      "Prioridade nas novidades",
      "Consultoria empresarial",
      "Suporte exclusivo",
    ],
    cta: "Solicitar Orçamento",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSejN5bniFDStswLwswGdJqYF1J1sVYra-Hz_DghKVDXPu9HPQ/viewform",
    highlight: false,
  },
];
