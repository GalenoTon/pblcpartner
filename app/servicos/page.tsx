"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Lightbulb, Shield, Target, Gavel, Building,
  ArrowRight, Zap, Scale, MonitorCheck, Eye, Cpu, Leaf, ChevronRight,
  BarChart3, Users, FileStack, Search, Handshake,
  CheckCircle, Award, BookOpen, TrendingUp, Star,
  Rocket, Globe, Timer, Layers, Briefcase
} from "lucide-react";

// Animações (tipadas e compatíveis com TS)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
    color: "from-blue-500/20 to-indigo-500/20",
    hoverColor: "hover:from-blue-500/30 hover:to-indigo-500/30",
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
    color: "from-emerald-500/20 to-teal-500/20",
    hoverColor: "hover:from-emerald-500/30 hover:to-teal-500/30",
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
    color: "from-purple-500/20 to-pink-500/20",
    hoverColor: "hover:from-purple-500/30 hover:to-pink-500/30",
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
    color: "from-orange-500/20 to-red-500/20",
    hoverColor: "hover:from-orange-500/30 hover:to-red-500/30",
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
    color: "from-yellow-500/20 to-orange-500/20",
    hoverColor: "hover:from-yellow-500/30 hover:to-orange-500/30",
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
    color: "from-rose-500/20 to-pink-500/20",
    hoverColor: "hover:from-rose-500/30 hover:to-pink-500/30",
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
    color: "from-violet-500/20 to-purple-500/20",
    hoverColor: "hover:from-violet-500/30 hover:to-purple-500/30",
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
    color: "from-lime-500/20 to-emerald-500/20",
    hoverColor: "hover:from-lime-500/30 hover:to-emerald-500/30",
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
    color: "from-sky-500/20 to-blue-500/20",
    hoverColor: "hover:from-sky-500/30 hover:to-blue-500/30",
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
    color: "from-green-500/20 to-teal-500/20",
    hoverColor: "hover:from-green-500/30 hover:to-teal-500/30",
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
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 min-h-screen overflow-x-hidden">
      {/* Hero Section - Redesenhada com mais impacto */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        {/* Background com parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay gradiente aprimorado */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-950/90" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.15),transparent_90%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.1),transparent_90%)]" />
          {/* Logo watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] z-0">
            <img
              src="/logowhite2.png"
              alt="Public Partner Logo"
              className="h-auto w-full max-w-6xl object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Floating elements decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + i * 8}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Badge de destaque */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-2 mb-8"
            >
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Soluções Especializadas</span>
            </motion.div> */}

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tight"
            >
              Nossos{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Serviços
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-slate-200 mb-12 font-light"
            >
              Transformamos 
              <span className="text-blue-300 font-medium"> desafios institucionais em oportunidades</span> 
              através de soluções técnicas inovadoras e estratégicas para o setor público e privado.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={2}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="#servicos"
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Conheça nossos serviços</span>
                <ArrowRight className="inline ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              
              <Link
                href="/contato"
                className="group px-12 py-5 border-2 border-slate-300/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                Fale conosco
                <ArrowRight className="inline ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div> */}
      </section>

      {/* Stats Section - Nova seção para credibilidade */}
      <section className="py-24 px-6 md:px-12 bg-white">
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
      </section>

      {/* Nossa Abordagem - Redesenhada */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mb-8" />
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Excelência Técnica com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Resultados Concretos
                </span>
              </h2>
              
              <div className="space-y-8 text-xl text-slate-300 leading-relaxed mb-12">
                <p>
                  Na Public Partner, desenvolvemos soluções sob medida para o setor público e privado, 
                  com foco na excelência técnica, na legalidade dos processos e na busca contínua por resultados concretos.
                </p>
                <p>
                  Nosso trabalho é guiado por evidências, boas práticas institucionais e um compromisso firme 
                  com o impacto positivo nas organizações. Entregamos mais do que relatórios: 
                  <span className="text-blue-300 font-semibold"> entregamos transformações mensuráveis</span>.
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
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Abordagem Public Partner"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metodologia - Nova seção */}
      <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(73,181,234,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Nossa <span className="text-blue-600">Metodologia</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Um processo estruturado que garante excelência e resultados em cada projeto
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metodologia.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="group relative text-center"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div> */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                
                {/* Connecting line */}
                {/* {i < metodologia.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
                )} */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Redesenhada */}
      <section id="servicos" className="py-32 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Soluções <span className="text-blue-600">Especializadas</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Expertise técnica para transformar desafios complexos em oportunidades de crescimento
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={scaleIn}
                className="group relative h-full"
              >
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-4 h-full flex flex-col">
                  {/* Category Badge */}
                  {/* <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-6 w-fit">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {service.category}
                  </div> */}

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} ${service.hoverColor} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href="/contato"
                      className="group/cta inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Saiba mais
                      <ChevronRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais - Nova seção */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Por que Escolher a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Public Partner
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Experiência comprovada e metodologia que garantem resultados excepcionais
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Inovação Constante",
                description: "Metodologias de ponta e tecnologias emergentes aplicadas aos desafios do setor público.",
                metric: "100% Digital"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Visão Estratégica",
                description: "Análise macro e micro dos cenários para decisões fundamentadas e sustentáveis.",
                metric: "360° de análise"
              },
              {
                icon: <Timer className="w-12 h-12" />,
                title: "Agilidade na Entrega",
                description: "Processos otimizados que garantem prazos cumpridos sem comprometer a qualidade.",
                metric: "98% no prazo"
              },
              {
                icon: <Layers className="w-12 h-12" />,
                title: "Multidisciplinaridade",
                description: "Equipe especializada em múltiplas áreas para soluções integradas e completas.",
                metric: "15+ especialidades"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Segurança Jurídica",
                description: "Rigor técnico e conformidade legal garantindo proteção e transparência total.",
                metric: "Zero passivos"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Reconhecimento",
                description: "Expertise reconhecida por órgãos de controle e instituições do setor público.",
                metric: "15+ anos"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="group relative h-full"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                  <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform w-fit mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 flex-1">{item.description}</p>
                  {/* <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    {item.metric}
                  </div> */}
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
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Construir Juntos</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Nosso time está preparado para entender suas demandas específicas e desenvolver 
              a solução mais adequada para o contexto da sua instituição.
              <span className="block mt-4 font-semibold text-blue-600">
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
                className="group relative px-16 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2"
              >
                <span className="relative z-10">Entre em contato agora</span>
                <ArrowRight className="inline ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity" />
              </Link>

              <Link
                href="/sobre"
                className="group px-12 py-6 border-2 border-blue-600/30 text-blue-600 font-semibold text-lg rounded-full transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-50"
              >
                Conheça nossa história
                <ChevronRight className="inline ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" />
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
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>contato@publicpartner.com.br</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}