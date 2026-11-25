export const sections = [
  { id: "start", n: "00", label: "START" },
  { id: "sobre", n: "01", label: "SOBRE" },
  { id: "fases", n: "02", label: "FASES" },
  { id: "skills", n: "03", label: "SKILLS" },
  { id: "projetos", n: "04", label: "PROJETOS" },
  { id: "contato", n: "05", label: "CONTATO" },
];

export const sectionIds = sections.map((s) => s.id);

// TROQUE pelo seu número: código do país + DDD + número, sem "+", espaços ou traços
export const whatsapp = "5527996685546";

export const about = [
  "Desenvolvedora Full Stack com mais de 3 anos de experiência em sistemas para o setor público e para grandes empresas, com foco em usabilidade, integração de sistemas e automação.",
  "Já liderei projeto, conduzi levantamento de requisitos e implantei soluções usadas por prefeituras, cidadãos e equipes internas.",
  "Fora do código, gosto de jogos e pixel art, e deixo um pouco disso em tudo que construo.",
];

export const stats = [
  { value: "3+", label: "anos de experiência" },
  { value: "4", label: "experiências profissionais" },
];

type Phase = {
  level: string;
  company: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
};

export const phases: Phase[] = [
  {
    level: "LVL 04",
    company: "Upcities",
    role: "Desenvolvedora FullStack",
    period: "Atual",
    points: [
      "Plataforma govtech com apps personalizados por município.",
      "Central de Serviços usada pelas prefeituras de Vila Velha e Vitória, com sistema de filas e chamados.",
      "Melhoria de interface e usabilidade para servidores públicos e cidadãos.",
    ],
    stack: ["Php", "Laravel", "TypeScript", "Tailwind", "shadcn/ui"], 
  },
  {
    level: "LVL 03",
    company: "Data Source Expert | DEX",
    role: "Desenvolvedora FullStack",
    period: "1 ano",
    points: [
      "Liderei o projeto DEX Backoffice.",
      "Onboarding e setup de clientes, garantindo a implementação técnica correta.",
      "Gestão de requisitos e suporte técnico focado no sucesso do usuário.",
    ],
    stack: ["PHP", "Laravel", "TypeScript", "Azure DevOps"],
  },
  {
    level: "LVL 02",
    company: "Vale",
    role: "Estágio Superior",
    period: "11 meses",
    points: [
      "Várias melhorias de usabilidade em fluxos internos usados pelos colaboradores.",
      "Integrações via API com Power Automate e scripts em JavaScript.",
      "Trabalho sob princípios de ITIL e Scrum.",
    ],
    stack: ["ServiceNow", "Power Automate", "JavaScript", "APIs"],
  },
  {
    level: "LVL 01",
    company: "Instituto Senai de Tecnologia",
    role: "Estágio Técnico",
    period: "1 ano e 2 meses",
    points: [
      "Participação ativa no projeto Genypso (ES).",
      "Ciclo completo de software, do levantamento de requisitos ao front-end.",
      "Metodologias ágeis com Azure DevOps.",
    ],
    stack: ["TypeScript", "Next.js", "React", "Styled Components"],
  },
];

export const skills = [
  {
    group: "Front-End",
    items: ["React", "Next.js", "Vue.js", "Inertia.js", "TypeScript", "JavaScript", "Tailwind", "shadcn/ui", "MUI", "Styled Components"],
  },
  {
    group: "Back-End",
    items: ["PHP (Laravel)", "Node.js", "NestJS", "API REST", "MySQL", "MariaDB"],
  },
  {
    group: "Automação & Integrações",
    items: ["ServiceNow", "Power Automate", "Integração de APIs"],
  },
  {
    group: "DevOps & Ferramentas",
    items: ["Docker", "Deploy", "Git", "Azure DevOps", "Postman", "Figma"],
  },
  {
    group: "Negócio & Processos",
    items: ["Análise de requisitos", "Onboarding", "Setup de clientes", "Suporte técnico", "Scrum/Kanban", "ITIL"],
  },
];

export const projects = [
  {
    name: "Central de Serviços",
    description:
      "Sistema de filas e chamados para prefeituras, com foco na experiência de servidores e cidadãos.",
    tags: ["Upcities", "Prefeituras"],
  },
  {
    name: "DEX Backoffice",
    description:
      "Projeto que liderei na Data Source Expert, do levantamento de requisitos à entrega.",
    tags: ["Laravel", "TypeScript"],
  },
  {
    name: "Gestão de Comandas (TCC)",
    description: "Software completo para automação de sorveterias.",
    tags: ["Node", "React", "MariaDB"],
  },
  {
    name: "Maratona Hack 27",
    description:
      "Protótipo e pitch com foco na visão de negócio e nas expectativas do cliente.",
    tags: ["Protótipo", "Pitch"],
  },
];