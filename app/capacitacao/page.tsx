"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Target,
  Monitor,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Award,
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle,
  Star
} from "lucide-react";

// Animações mais sofisticadas
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.12, 
      ease: [0.25, 0.1, 0.25, 1], 
      duration: 0.8 
    },
  }),
};

const slideInFromLeft = {
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

const temas = [
  {
    title: "Planejamento estratégico para contratações públicas",
    description: "Metodologias avançadas de planejamento e análise de riscos"
  },
  {
    title: "Elaboração de Estudos Técnicos Preliminares e Termos de Referência",
    description: "Técnicas práticas para documentos técnicos eficazes"
  },
  {
    title: "Fiscalização, controle e gestão contratual eficaz",
    description: "Ferramentas de monitoramento e controle de performance"
  },
  {
    title: "Avaliação e reequilíbrio econômico-financeiro de contratos públicos",
    description: "Análise financeira e estratégias de reequilíbrio"
  },
  {
    title: "Desenvolvimento e análise jurídica de editais",
    description: "Framework legal atualizado com a nova legislação"
  },
  {
    title: "Responsabilidade e compliance para agentes públicos",
    description: "Governança, ética e gestão de riscos institucionais"
  },
  {
    title: "Governança pública, integridade e transparência",
    description: "Implementação de sistemas de integridade e transparência"
  },
  {
    title: "Inovação e sustentabilidade para o setor público",
    description: "Tecnologias emergentes e práticas sustentáveis"
  },
];

const modalidades = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Presenciais",
    description: "Formações in company e em polos regionais com metodologias ativas",
    features: ["Networking", "Hands-on", "Customização total"]
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Online ao vivo",
    description: "Cursos interativos com participação em tempo real",
    features: ["Interatividade", "Flexibilidade", "Gravação disponível"]
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Cursos gravados",
    description: "Acesso sob demanda, no seu ritmo de aprendizagem",
    features: ["24/7 disponível", "Certificação", "Suporte técnico"]
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Trilhas de aprendizagem",
    description: "Programas modulares e progressivos estruturados",
    features: ["Progressão clara", "Mentoria", "Avaliação contínua"]
  },
];

const diferenciais = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Excelência Comprovada",
    description: "Mais de 10 anos de experiência em capacitação para o setor público, com metodologias validadas e resultados mensuráveis.",
    metric: "98% de satisfação"
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Resultados Mensuráveis",
    description: "Acompanhamento de indicadores de performance e impacto real nas operações institucionais pós-treinamento.",
    metric: "+40% eficiência"
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Compliance Garantido",
    description: "Conteúdo rigorosamente alinhado com a legislação vigente e melhores práticas de governança corporativa.",
    metric: "100% conformidade"
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Inovação Constante",
    description: "Metodologias de ensino inovadoras, incluindo simulações, gamificação e análise de casos reais complexos.",
    metric: "Tecnologia de ponta"
  }
];

export default function CapacitacaoPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section - Redesenhada com mais impacto visual */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white">
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(68,182,234,0.05)_50%,transparent_70%)]" />
          
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
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
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
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Líder em Capacitação Pública</span>
            </motion.div> */}

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tight"
            >
              Capacitação e{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Excelência
                </span>
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
              <br />
              para a Gestão Pública
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-slate-200 mb-12 font-light"
            >
              Transformamos conhecimento em resultados efetivos através de soluções educacionais 
              <span className="text-blue-300 font-medium"> personalizadas e inovadoras</span>, 
              alinhadas às demandas institucionais do setor público.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={2}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/contato"
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Solicitar Proposta</span>
                <ArrowRight className="inline ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              
              <a
                href="https://www.publictrainer.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-5 border-2 border-slate-300/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                Explorar Cursos
                <ExternalLink className="inline ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "10+", label: "Anos de Experiência" },
              { number: "500+", label: "Instituições Atendidas" },
              { number: "15K+", label: "Profissionais Capacitados" },
              { number: "98%", label: "Índice de Satisfação" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Introdução aprimorada */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Nossa <span className="text-blue-600">Abordagem</span> Diferenciada
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
              Desenvolvemos soluções educacionais sob medida, combinando rigor técnico, 
              metodologias inovadoras e profundo conhecimento das demandas do setor público.
            </p>
            <div className="flex items-center gap-4 text-blue-600">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Metodologia comprovada e resultados mensuráveis</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl transform rotate-3" />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Foco em Resultados</h3>
                <p className="text-gray-600">
                  Cada programa é desenhado para gerar impacto real na performance institucional
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Diferenciais redesenhados */}
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
              Nossa experiência e metodologia garantem resultados excepcionais para sua instituição
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {diferenciais.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
                className="group relative h-full"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                  <div className="flex items-start gap-6 flex-1">
                    <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed mb-6 flex-1">{item.description}</p>
                      <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        {item.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temas Estratégicos aprimorados */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-32">
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
            Temas <span className="text-blue-600">Estratégicos</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Conteúdos especializados alinhados aos principais desafios da gestão pública moderna
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {temas.map((tema, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeInUp}
              className="group relative h-full"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-start gap-5 h-full">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {tema.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">{tema.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modalidades aprimoradas */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
              Modalidades de <span className="text-blue-600">Treinamento</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Flexibilidade total para atender às necessidades específicas de cada instituição
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modalidades.map((mod, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
                className="group relative h-full"
              >
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-4 text-center h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                    {mod.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{mod.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">{mod.description}</p>
                  
                  <div className="space-y-2 mt-auto">
                    {mod.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 justify-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action redesenhado */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.1),transparent_70%)]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Transformar</span> sua Equipe?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Desenvolva uma capacitação sob medida, focada em resultados mensuráveis e inovação. 
              Nossa equipe está pronta para construir o programa ideal para sua instituição.
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
                <span className="relative z-10">Solicitar Consultoria Gratuita</span>
                <ArrowRight className="inline ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity" />
              </Link>

              <a
                href="https://www.publictrainer.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-6 border-2 border-slate-400/30 backdrop-blur-sm text-white font-semibold text-lg rounded-full transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                Explorar Catálogo Completo
                <ExternalLink className="inline ml-4 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer com informações de contato */}
      {/* <section className="py-16 px-6 md:px-12 bg-slate-50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ficou com alguma dúvida? Entre em contato conosco!
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