import {
  Globe,
  Smartphone,
  Cog,
  Layers,
  BrainCircuit,
  Lightbulb,
  Code,
  RefreshCw,
  TrendingUp,
  Users,
  MessageSquare,
  PencilRuler,
  FlaskConical,
  Rocket,
  Workflow,
  Briefcase,
  Mail,
  Monitor,
  Server,
  Database,
  Cloud,
  Languages,
  Sparkles,
  Target,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const FIELD_LIMITS = { name: 80, email: 120, message: 2000 };

/* ------------------------------------------------------------------ */
/* Logos des technologies (Devicon, servis par jsDelivr, version figée) */
/* ------------------------------------------------------------------ */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const dev = (slug, variant = "original") =>
  `${DEVICON}/${slug}/${slug}-${variant}.svg`;

/* ------------------------------------------------------------------ */
/* Navigation — routes en anglais                                      */
/* ------------------------------------------------------------------ */
export const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Technologies" },
];

export const NAV_MENU = {
  label: "Entreprise",
  items: [
    {
      to: "/process",
      label: "Processus",
      description: "De l'idée à la mise en ligne",
      icon: Workflow,
    },
    {
      to: "/about",
      label: "À propos",
      description: "L'équipe et notre approche",
      icon: Users,
    },
    {
      to: "/careers",
      label: "Carrières",
      description: "Rejoindre l'équipe",
      icon: Briefcase,
    },
    {
      to: "/contact",
      label: "Nous contacter",
      description: "Réponse sous 24h",
      icon: Mail,
    },
  ],
};

export const HERO_STATS = [
  { value: "5", label: "Domaines d'expertise" },
  { value: "100%", label: "Solutions sur mesure" },
  { value: "24h", label: "Délai de première réponse" },
];

export const SERVICES = [
  {
    id: "web",
    number: "01",
    icon: Globe,
    title: "Développement web",
    subtitle: "Sites et applications web",
    description:
      "Nous concevons des sites web modernes, rapides et adaptés à vos besoins.",
    items: [
      "Sites vitrines",
      "Sites pour entreprises",
      "Plateformes web",
      "Tableaux de bord administratifs",
      "Portails clients",
      "Applications web",
      "Plateformes de gestion",
      "Solutions e-commerce",
    ],
    note: "Chaque projet est conçu selon vos objectifs et les besoins de vos utilisateurs.",
  },
  {
    id: "mobile",
    number: "02",
    icon: Smartphone,
    title: "Applications mobiles",
    subtitle: "Applications mobiles sur mesure",
    description: "Nous développons des applications mobiles pour Android et iOS.",
    items: [],
    note: "Que vous ayez une idée de nouvelle application ou souhaitiez créer une version mobile de votre service, notre équipe peut vous accompagner dans toutes les étapes du projet. Nous développons des applications modernes, intuitives et adaptées aux besoins de vos utilisateurs.",
  },
  {
    id: "software",
    number: "03",
    icon: Cog,
    title: "Logiciels et solutions sur mesure",
    subtitle: "Des logiciels adaptés à votre entreprise",
    description:
      "Chaque entreprise fonctionne différemment. C'est pourquoi les logiciels standards ne répondent pas toujours à tous les besoins. Nous créons des logiciels et des outils numériques sur mesure pour vous aider à automatiser vos processus, gérer vos données et améliorer votre efficacité.",
    items: [
      "Logiciels de gestion",
      "Systèmes internes",
      "Gestion des clients",
      "Gestion des employés",
      "Gestion des commandes",
      "Tableaux de bord",
      "Automatisation de processus",
      "Intégration avec vos systèmes existants",
    ],
    note: "",
  },
  {
    id: "saas",
    number: "04",
    icon: Layers,
    title: "Plateformes SaaS",
    subtitle: "Transformez votre idée en produit SaaS",
    description:
      "Vous avez une idée de plateforme ou souhaitez créer un logiciel accessible en ligne ? Nous vous accompagnons dans le développement de votre produit SaaS, de la conception jusqu'au déploiement.",
    items: [
      "Plateformes SaaS",
      "Applications avec abonnement",
      "Systèmes multi-utilisateurs",
      "Espaces clients",
      "Tableaux de bord",
      "APIs et services backend",
      "Systèmes de paiement",
      "Gestion des utilisateurs et des rôles",
    ],
    note: "",
  },
  {
    id: "ai",
    number: "05",
    icon: BrainCircuit,
    title: "Intelligence artificielle",
    subtitle: "Intelligence artificielle et automatisation",
    description:
      "Nous intégrons des technologies d'intelligence artificielle dans les produits numériques lorsque cela apporte une réelle valeur à votre entreprise.",
    items: [
      "Intégration de modèles LLM",
      "Assistants conversationnels",
      "Chatbots intelligents",
      "Traitement du langage naturel (NLP)",
      "Automatisation avec l'IA",
      "Analyse de données",
      "Recherche intelligente",
      "Intégration d'IA dans vos applications existantes",
    ],
    note: "",
  },
];

/* `logo` : URL (image) ou composant d'icône lucide quand il n'existe pas de logo officiel */
export const STACK = [
  {
    category: "Frontend",
    icon: Monitor,
    blurb: "Interfaces rapides et réactives",
    items: [
      { name: "React", logo: dev("react") },
      { name: "Redux", logo: dev("redux") },
      { name: "Angular", logo: dev("angular") },
      { name: "JavaScript", logo: dev("javascript") },
      { name: "TypeScript", logo: dev("typescript") },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    blurb: "APIs et logique métier",
    items: [
      { name: "C#", logo: dev("csharp") },
      { name: ".NET", logo: dev("dotnetcore") },
      { name: "Python", logo: dev("python") },
      { name: "Node.js", logo: dev("nodejs") },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    blurb: "Android et iOS",
    items: [{ name: "React Native", logo: dev("react") }],
  },
  {
    category: "Intelligence artificielle",
    icon: BrainCircuit,
    blurb: "Modèles, langage et automatisation",
    items: [
      { name: "LLM", logo: BrainCircuit },
      { name: "NLP", logo: Languages },
      { name: "Modèles d'IA", logo: Sparkles },
    ],
  },
  {
    category: "Bases de données & infrastructure",
    icon: Database,
    blurb: "Données, conteneurs et déploiement",
    items: [
      { name: "PostgreSQL", logo: dev("postgresql") },
      { name: "MySQL", logo: dev("mysql") },
      { name: "MongoDB", logo: dev("mongodb") },
      { name: "Docker", logo: dev("docker") },
      { name: "Cloud et serveurs", logo: Cloud },
    ],
  },
];

export const PROCESS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Parlons de votre projet",
    description: "Nous discutons de votre idée, de vos besoins et de vos objectifs.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Analyse et conception",
    description: "Nous analysons votre projet et proposons une solution technique adaptée.",
  },
  {
    number: "03",
    icon: Code,
    title: "Développement",
    description: "Notre équipe développe votre solution étape par étape.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Tests et amélioration",
    description: "Nous testons le produit afin d'assurer sa qualité et son bon fonctionnement.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Mise en ligne et accompagnement",
    description:
      "Nous vous accompagnons lors du lancement et pouvons continuer à assurer la maintenance et l'évolution de votre solution.",
  },
];

export const WHY_US = [
  {
    icon: Lightbulb,
    title: "Des solutions sur mesure",
    description:
      "Nous ne proposons pas une solution identique à tous nos clients. Chaque projet est conçu selon vos besoins.",
  },
  {
    icon: Code,
    title: "Une équipe technique",
    description:
      "Votre projet est réalisé par une équipe de développeurs capables de travailler sur différentes technologies.",
  },
  {
    icon: RefreshCw,
    title: "De l'idée à la maintenance",
    description:
      "Nous pouvons vous accompagner depuis la conception jusqu'au développement, au déploiement et à l'évolution de votre produit.",
  },
  {
    icon: TrendingUp,
    title: "Des solutions évolutives",
    description:
      "Nous développons des produits capables d'évoluer avec vos besoins et votre entreprise.",
  },
  {
    icon: Users,
    title: "Un accompagnement humain",
    description:
      "Nous travaillons avec vous pour comprendre votre projet et trouver la solution la plus adaptée.",
  },
];

/* Profils recherchés — à adapter à vos vrais besoins de recrutement */
export const CAREERS = [
  {
    id: "fullstack",
    icon: Code,
    title: "Développeur Full-Stack",
    description:
      "Concevoir et livrer des applications web et des plateformes SaaS de bout en bout.",
    tags: ["React", "C# / .NET", "Node.js"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Développeur Mobile",
    description:
      "Créer des applications Android et iOS modernes, fluides et fiables.",
    tags: ["React Native", "TypeScript", "API"],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "Ingénieur IA",
    description:
      "Intégrer des modèles de langage et de l'automatisation dans des produits réels.",
    tags: ["LLM", "NLP", "Python"],
  },
];

export const CAREER_VALUES = [
  {
    icon: Target,
    title: "Des produits concrets",
    description: "Vous travaillez sur des projets réels, avec un impact visible pour nos clients.",
  },
  {
    icon: ShieldCheck,
    title: "Exigence technique",
    description: "Du code propre, testé et maintenable : la qualité n'est pas négociable.",
  },
  {
    icon: GraduationCap,
    title: "Apprentissage continu",
    description: "Une stack variée et des sujets qui évoluent : web, mobile, SaaS et IA.",
  },
];