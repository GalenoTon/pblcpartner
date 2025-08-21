"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  Lightbulb, Shield, Target, Gavel, Building,
  ArrowRight, Zap, Scale, MonitorCheck, Eye, Cpu, Leaf,
  BarChart3, Users, FileStack, Search, Handshake,
  CheckCircle, Award, BookOpen, TrendingUp, Star,
  Rocket, Globe, Timer, Layers, Briefcase
} from "lucide-react";


const fadeInUp: any = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      ease: "easeOut",
      duration: 0.8
    },
  }),
};



const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.7 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Assessoria Técnica Especializada",
    description:
      "Prestamos apoio estratégico e técnico em processos decisórios, com atuação transversal em áreas como contratações públicas, estruturação de políticas públicas, planejamento institucional, regulação e melhoria da governança.",
    features: [
      "Contratações públicas estratégicas",
      "Estruturação de políticas públicas",
      "Planejamento institucional avançado",
      "Regulação e governança corporativa"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Consultoria Estratégica"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Apoio Técnico ao Setor Público",
    description:
      "Oferecemos suporte contínuo a órgãos da administração direta e indireta, com foco em modernização administrativa, otimização de processos e conformidade normativa.",
    features: [
      "Modernização administrativa",
      "Otimização de processos",
      "Conformidade normativa",
      "Suporte técnico contínuo"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Transformação Digital"
  },
  {
    icon: <Handshake className="h-8 w-8" />,
    title: "Concessões e PPPs",
    description:
      "Desenvolvemos estudos, pareceres e minutas contratuais para parcerias público-privadas e concessões, com foco em segurança jurídica, atratividade do projeto e equilíbrio econômico-financeiro.",
    features: [
      "Estudos de viabilidade complexos",
      "Pareceres técnicos especializados",
      "Minutas contratuais robustas",
      "Equilíbrio econômico-financeiro"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Parcerias Estratégicas"
  },
  {
    icon: <FileStack className="h-8 w-8" />,
    title: "Planos Municipais",
    description:
      "Atuamos na concepção e na avaliação de planos estratégicos municipais, como Planos de Mobilidade Urbana, Saneamento, Resíduos Sólidos, Cultura, Educação e Desenvolvimento Econômico, entre outros.",
    features: [
      "Planos de Mobilidade Urbana",
      "Saneamento e Resíduos Sólidos",
      "Cultura e Educação",
      "Desenvolvimento Econômico"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Planejamento Urbano"
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: "Planos de Desestatização",
    description:
      "Apoiamos governos municipais e estaduais na estruturação de projetos de desestatização, com foco na eficiência dos serviços públicos, no valor agregado à gestão e no respeito às normativas de controle.",
    features: [
      "Projetos de desestatização",
      "Eficiência dos serviços públicos",
      "Valor agregado à gestão",
      "Conformidade com normativas"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Reestruturação"
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Estudos e Levantamentos Técnicos",
    description:
      "Realizamos diagnósticos, estudos setoriais, levantamentos de campo e análises estratégicas que subsidiam a tomada de decisão em políticas públicas, contratações e reestruturações institucionais.",
    features: [
      "Diagnósticos institucionais",
      "Estudos setoriais especializados",
      "Levantamentos de campo",
      "Análises estratégicas avançadas"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Análise & Diagnóstico"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Reequilíbrio Econômico-Financeiro",
    description:
      "Avaliamos e fundamentamos pedidos de reequilíbrio contratual com base em análises técnicas e jurídicas robustas, garantindo a sustentabilidade dos contratos e a equidade entre as partes.",
    features: [
      "Análises técnicas e jurídicas",
      "Sustentabilidade contratual",
      "Equidade entre partes",
      "Fundamentação robusta"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Gestão Financeira"
  },
  {
    icon: <MonitorCheck className="h-8 w-8" />,
    title: "Gerenciamento e Fiscalização de Contratos",
    description:
      "Auxiliamos na estruturação de rotinas de fiscalização, elaboração de relatórios técnicos, análises de conformidade e acompanhamento da execução contratual sob a ótica técnica e normativa.",
    features: [
      "Rotinas de fiscalização",
      "Relatórios técnicos detalhados",
      "Análises de conformidade",
      "Acompanhamento de execução"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Controle & Fiscalização"
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Verificador Independente",
    description:
      "Atuamos como agente técnico responsável pela verificação de desempenho contratual em projetos de concessões e parcerias, assegurando transparência, rigor técnico e cumprimento de metas pactuadas.",
    features: [
      "Verificação de desempenho",
      "Transparência total",
      "Rigor técnico",
      "Cumprimento de metas"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Auditoria & Compliance"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Soluções em Tecnologia da Informação",
    description:
      "Apoiamos a transformação digital na administração pública e privada por meio da concepção e implementação de soluções tecnológicas personalizadas, integradas à gestão e à prestação de serviços.",
    features: [
      "Transformação digital",
      "Soluções personalizadas",
      "Integração à gestão",
      "Prestação de serviços digitais"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Tecnologia & Inovação"
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Sustentabilidade e Economia Verde",
    description:
      "Elaboramos e acompanhamos projetos voltados à promoção do desenvolvimento sustentável, integrando inovação, responsabilidade ambiental e viabilidade econômica.",
    features: [
      "Desenvolvimento sustentável",
      "Inovação ambiental",
      "Responsabilidade ambiental",
      "Viabilidade econômica"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    category: "Sustentabilidade"
  },
];

const metodologia = [
  {
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Diagnóstico Inteligente",
    description: "Análise profunda e personalizada das necessidades específicas de cada organização, utilizando metodologias avançadas de diagnóstico.",
    step: "01"
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Solução Sob Medida",
    description: "Desenvolvimento de estratégias customizadas alinhadas aos objetivos institucionais e realidade operacional.",
    step: "02"
  },
  {
    icon: <Gavel className="h-12 w-12" />,
    title: "Conformidade Total",
    description: "Garantia de aderência completa às normas, regulamentações e melhores práticas do setor.",
    step: "03"
  },
  {
    icon: <Target className="h-12 w-12" />,
    title: "Resultados Mensuráveis",
    description: "Foco em entregas concretas com KPIs definidos, monitoramento contínuo e impacto mensurável.",
    step: "04"
  }
];

const stats = [
  { number: "15+", label: "Anos de Experiência", description: "Década e meia de excelência" },
  { number: "200+", label: "Projetos Executados", description: "Portfólio diversificado" },
  { number: "50+", label: "Clientes Ativos", description: "Parcerias de longo prazo" },
  { number: "100%", label: "Taxa de Sucesso", description: "Projetos entregues com qualidade" }
];

export default function ServicosPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 min-h-screen overflow-x-hidden">
      {/* Hero Section - Redesenhada com mais impacto */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Fundo com vídeo e overlays */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-40"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradientes e efeitos */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.15),transparent_90%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.1),transparent_90%)]" />

          {/* Marca d'água */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <img
              src="/logowhite2.png"
              alt="Public Partner Logo"
              className="h-auto w-full max-w-3xl sm:max-w-6xl object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Elementos flutuantes decorativos - ajustados para mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400/20 rounded-lg"
              style={{
                left: `${15 + i * 14}%`,
                top: `${25 + i * 10}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Conteúdo */}
        <div className="w-full max-w-7xl mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {/* Título - melhor responsividade */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight mb-6 sm:mb-8 tracking-tight px-2 pt-14">
              Nossos{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#8FD4F7] to-[#49B5EA]">
                  Serviços
                </span>
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#49B5EA] to-[#8FD4F7]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </span>
            </h1>

            {/* Subtítulo - comentado conforme original */}
            {/* <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#C5E8FA] mb-8 sm:mb-12 font-light px-4">
              Transformamos
              <span className="text-[#49B5EA] font-medium"> desafios institucionais em oportunidades</span>
              através de soluções técnicas inovadoras e estratégicas para o setor público e privado.
            </p> */}

            {/* Botões - stack vertical em mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto">
              <Link
                href="#servicos"
                className="group relative w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#49B5EA]/25 transform hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                <span className="relative z-10">Conheça nossos serviços</span>
                <ArrowRight className="inline ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contato"
                className="group w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-[#49B5EA]/50 backdrop-blur-sm text-[#49B5EA] font-semibold rounded-lg transition-all duration-300 hover:border-[#49B5EA] hover:bg-[#49B5EA] hover:text-slate-950 text-center text-sm sm:text-base"
              >
                Fale conosco
                <ArrowRight className="inline ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Stats Section - Nova seção para credibilidade */}
      {/* <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Nossa Abordagem - Redesenhada */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden text-slate-900">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,181,234,0.08),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_65%,rgba(73,181,234,0.03)_90%,transparent_100%)]"></div>
        </div>

        {/* Logo ao fundo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-8 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-100 w-auto max-w-100 object-contain"
            loading="lazy"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <div className="w-20 h-1 bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] mb-8" />
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Excelência Técnica com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                  Resultados Concretos
                </span>
              </h2>

              <div className="space-y-8 text-xl text-slate-700 leading-relaxed mb-12">
                <p>
                  Na Public Partner, desenvolvemos soluções sob medida para o setor público e privado,
                  com foco na excelência técnica, na legalidade dos processos e na busca contínua por resultados concretos.
                </p>
                <p>
                  Nosso trabalho é guiado por evidências, boas práticas institucionais e um compromisso firme
                  com o impacto positivo nas organizações. Entregamos mais do que relatórios:
                  <span className="text-[#49B5EA] font-semibold"> entregamos transformações mensuráveis</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Award className="w-6 h-6" />, title: "Foco na Excelência", desc: "Padrões elevados em todas as entregas" },
                  { icon: <Scale className="w-6 h-6" />, title: "Conformidade Legal", desc: "Soluções alinhadas à legislação" },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Resultados Mensuráveis", desc: "Métricas claras de impacto" },
                  { icon: <BookOpen className="w-6 h-6" />, title: "Baseado em Evidências", desc: "Decisões fundamentadas em dados" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 bg-white/80 backdrop-blur-sm border border-[#49B5EA]/20 rounded-xl p-4"
                  >
                    <div className="p-2 bg-[#49B5EA]/10 rounded-lg text-[#49B5EA]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-3xl transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Abordagem Public Partner"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              </div>
            </div>
            <div className="mt-0">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] text-white px-8 py-4 text-lg font-semibold hover:from-[#3EA5D8] hover:to-[#6AC2F0] transition-all duration-300"
                asChild
              >
                <Link href="/contato">
                  Fale com nossa equipe
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Metodologia - Nova seção */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
        {/* Modern background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.02),transparent)]"></div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-20 blur-xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <motion.div
        variants={fadeInUp}
        className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-6"
      >
        <div className="w-2 h-2 bg-blue-500 rounded-lg animate-pulse" />
        Soluções Empresariais
      </motion.div> */}

            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-slate-900">Soluções Especializadas para</span>{" "}<br></br>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Desafios Complexos
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Transformamos desafios complexos em oportunidades de crescimento através de
              soluções tecnológicas inovadoras e estratégias personalizadas
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80",
                title: "Assessoria Técnica Especializada",
                description: "Prestamos apoio estratégico e técnico em processos decisórios, com atuação transversal em áreas como contratações públicas, estruturação de políticas públicas, planejamento institucional, regulação e melhoria da governança.",
                features: ["Contratações públicas", "Estruturação de políticas públicas", "Planejamento institucional", "Regulação e governança"],
                category: "Consultoria Estratégica",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
                title: "Apoio Técnico Especializado ao Setor Público",
                description: "Oferecemos suporte contínuo a órgãos da administração direta e indireta, com foco em modernização administrativa, otimização de processos e conformidade normativa.",
                features: ["Modernização administrativa", "Otimização de processos", "Conformidade normativa", "Suporte técnico especializado"],
                category: "Transformação e Gestão Pública",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80",
                title: "Estruturação de Modelagens para Concessões e PPPs",
                description: "Desenvolvemos estudos, pareceres e minutas contratuais para parcerias público-privadas e concessões, com foco em segurança jurídica, atratividade do projeto e equilíbrio econômico-financeiro.",
                features: ["Estudos de viabilidade", "Pareceres técnicos", "Minutas contratuais", "Equilíbrio econômico-financeiro"],
                category: "Parcerias Estratégicas",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&q=80",
                title: "Elaboração e Análise de Planos Municipais",
                description: "Atuamos na concepção e na avaliação de planos estratégicos municipais, como Planos de Mobilidade Urbana, Saneamento, Resíduos Sólidos, Cultura, Educação e Desenvolvimento Econômico.",
                features: ["Planos de Mobilidade Urbana", "Saneamento e Resíduos Sólidos", "Cultura e Educação", "Desenvolvimento Econômico"],
                category: "Planejamento Urbano",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
                title: "Elaboração de Planos de Desestatização",
                description: "Apoiamos governos municipais e estaduais na estruturação de projetos de desestatização, com foco na eficiência dos serviços públicos, no valor agregado à gestão e no respeito às normativas de controle.",
                features: ["Projetos de desestatização", "Eficiência dos serviços públicos", "Valor agregado à gestão", "Conformidade normativa"],
                category: "Reestruturação",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80",
                title: "Estudos e Levantamentos Técnicos",
                description: "Realizamos diagnósticos, estudos setoriais, levantamentos de campo e análises estratégicas que subsidiam a tomada de decisão em políticas públicas, contratações e reestruturações institucionais.",
                features: ["Diagnósticos técnicos", "Estudos setoriais", "Levantamentos de campo", "Análises estratégicas"],
                category: "Consultoria Técnica",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1711097383282-28097ae16b1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Reequilíbrio Econômico-Financeiro em Contratos Públicos e Privados",
                description: "Avaliamos e fundamentamos pedidos de reequilíbrio contratual com base em análises técnicas e jurídicas robustas, garantindo a sustentabilidade dos contratos e a equidade entre as partes.",
                features: ["Análises técnicas e jurídicas", "Sustentabilidade contratual", "Equidade entre as partes", "Reequilíbrio econômico-financeiro"],
                category: "Gestão Contratual",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Apoio Técnico em Gerenciamento e Fiscalização de Contratos",
                description: "Auxiliamos na estruturação de rotinas de fiscalização, elaboração de relatórios técnicos, análises de conformidade e acompanhamento da execução contratual sob a ótica técnica e normativa.",
                features: ["Rotinas de fiscalização", "Relatórios técnicos", "Análises de conformidade", "Acompanhamento contratual"],
                category: "Gestão Contratual",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop&q=80",
                title: "Verificador Independente",
                description: "Atuamos como agente técnico responsável pela verificação de desempenho contratual em projetos de concessões e parcerias, assegurando transparência, rigor técnico e cumprimento de metas pactuadas.",
                features: ["Verificação de desempenho contratual", "Transparência e rigor técnico", "Cumprimento de metas", "Experiência no Maracanã"],
                category: "Controle e Auditoria",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80",
                title: "Projetos e Soluções em Tecnologia da Informação",
                description: "Apoiamos a transformação digital na administração pública e privada por meio da concepção e implementação de soluções tecnológicas personalizadas, integradas à gestão e à prestação de serviços.",
                features: ["Transformação digital", "Soluções personalizadas", "Integração à gestão", "Serviços digitais"],
                category: "Tecnologia & Inovação",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              },
              {
                image: "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Sustentabilidade e Economia Verde",
                description: "Elaboramos e acompanhamos projetos voltados à promoção do desenvolvimento sustentável, integrando inovação, responsabilidade ambiental e viabilidade econômica.",
                features: ["Desenvolvimento sustentável", "Inovação verde", "Responsabilidade ambiental", "Viabilidade econômica"],
                category: "Sustentabilidade",
                accent: "from-cyan-500 to-blue-400", 
                bgPattern: "from-cyan-50 to-blue-50"
              }
            ]
              .map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={i}
                  variants={fadeInUp}
                  className="group max-w-6xl mx-auto"
                >
                  <div className={`relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 ${i % 2 === 0 ? '' : ''
                    }`}>
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgPattern} opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>

                    <div className={`flex flex-col lg:flex-row min-h-[450px] ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}>

                      {/* Image Section */}
                      <div className="w-full lg:w-[45%] relative overflow-hidden">
                        <div className="absolute inset-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            loading="lazy"
                          />
                          {/* Modern overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-20 group-hover:opacity-30 transition-opacity duration-700`}></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>

                        {/* Category badge */}
                        {/* <div className={`absolute top-8 ${i % 2 === 0 ? 'right-8' : 'left-8'}`}>
                        <div className={`bg-gradient-to-r ${item.accent} text-white px-4 py-2.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20`}>
                          <span className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            {item.category}
                          </span>
                        </div>
                      </div> */}

                        {/* Decorative corner */}
                        {/* <div className={`absolute bottom-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-tl ${item.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div> */}
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-[55%] p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative">
                        {/* Number indicator */}
                        {/* <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.accent} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div> */}

                        <div className="mt-8 lg:mt-0">
                          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-cyan-600 transition-all duration-700 leading-tight">
                            {item.title}
                          </h3>

                          <p className="text-slate-600 leading-relaxed text-base lg:text-lg mb-6 group-hover:text-slate-700 transition-colors duration-500">
                            {item.description}
                          </p>

                          {/* Features list */}
                          {/* <div className="mb-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {item.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                                <div className={`w-2 h-2 bg-gradient-to-r ${item.accent} rounded-full flex-shrink-0`}></div>
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div> */}

                          {/* Modern CTA */}
                          <div className="flex items-center gap-4">
                            <Button
                              size="lg"
                              className="group bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] text-white px-8 py-4 text-lg font-semibold hover:from-[#3EA5D8] hover:to-[#6AC2F0] transition-all duration-300"
                              asChild
                            >
                              <Link href="/contato">
                                Fale com nossa equipe
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>

                            {/* <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <div className={`w-8 h-1 bg-gradient-to-r ${item.accent} rounded-full`}></div>
                            <span className="font-medium">Consulte nossos especialistas</span>
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glassmorphism effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>




      {/* CTA Section - Redesenhada */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.1),transparent_70%)]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-8 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-100 w-auto max-w-100 object-contain"
            loading="lazy"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-900"
            >
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Construir Juntos</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Nosso time está preparado para entender suas demandas específicas e desenvolver
              a solução mais adequada para o contexto da sua instituição.
              <span className="block mt-4 font-semibold text-cyan-600">
                Entre em contato e converse com um dos nossos especialistas.
              </span>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={2}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/contato"
                className="group relative px-16 py-6 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2"
              >
                <span className="relative z-10">Entre em contato agora</span>
                {/* <ArrowRight className="inline ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" /> */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity" />
              </Link>

              <Link
                href="/sobre"
                className="group px-12 py-6 border-2 border-blue-600/30 text-blue-600 font-semibold text-lg rounded-lg transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-50"
              >
                Conheça nossa história
                {/* <ArrowRight className="inline ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" /> */}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info - Nova seção */}
      {/* <section className="py-16 px-6 md:px-12 bg-slate-50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ficou com alguma dúvida? Fale diretamente com nossa equipe especializada!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-lg" />
              <span>contato@publicpartner.com.br</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-lg" />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
