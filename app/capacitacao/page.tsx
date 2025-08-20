"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  Target,
  Monitor,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.12, ease: "easeOut", duration: 0.8 },
  }),
};

const temas = [
  "Planejamento estratégico para contratações públicas",
  "Elaboração de Estudos Técnicos Preliminares e Termos de Referência",
  "Fiscalização, controle e gestão contratual eficaz",
  "Avaliação e reequilíbrio econômico-financeiro de contratos públicos",
  "Desenvolvimento e análise jurídica de editais",
  "Responsabilidade e compliance para agentes públicos",
  "Governança pública, integridade e transparência",
  "Inovação e sustentabilidade para o setor público",
];

const modalidades = [
  {
    icon: <Users className="w-6 h-6 text-[#49B5EA]" />,
    title: "Presenciais",
    description: "Formações in company e em polos regionais",
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#49B5EA]" />,
    title: "Online ao vivo",
    description: "Cursos interativos com participação em tempo real",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#49B5EA]" />,
    title: "Cursos gravados",
    description: "Acesso sob demanda, no seu ritmo",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#49B5EA]" />,
    title: "Trilhas de aprendizagem",
    description: "Programas modulares e progressivos",
  },
];

export default function CapacitacaoPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[85vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
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
        <div className="w-full max-w-5xl mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {/* Título - melhor responsividade */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight mb-6 sm:mb-8 tracking-tight px-2 pt-14">
              <span className="block sm:inline">Capacitação e Treinamentos para</span>
              <br className="hidden sm:block" />
              {/* <span className="block sm:inline mt-2 sm:mt-0">para a </span> */}
              <span className="relative inline-block mt-2 sm:mt-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#8FD4F7] to-[#49B5EA]">
                  Gestão Pública
                </span>
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#49B5EA] to-[#8FD4F7]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </span>
            </h1>

            {/* Botões - stack vertical em mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto">
              <Link
                href="#temas"
                className="group relative w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#49B5EA]/25 transform hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                <span className="relative z-10">Conheça os temas</span>
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

      {/* Seção Intro - fundo branco com marca d'água */}
      <section className="py-24 bg-white relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(73,181,234,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-20"></div>
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-250 w-auto max-w-250 object-contain"
            loading="lazy"
          />
        </div> */}
        <div className="container mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-slate-900">Capacitação com foco em </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">resultados</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Nossos cursos atendem às necessidades de órgãos e instituições públicas, com metodologias ativas,
              conteúdos atualizados e aplicação prática para impactar o dia a dia das equipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais - fundo gradiente seguindo padrão */}
      <section className="py-24 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,181,234,0.08),transparent_70%)]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-8 z-0">
          <img src="/justlogo.png" alt="Public Partner Logo" className="h-100 w-auto max-w-100 object-contain" loading="lazy" />
        </div>
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp as any} className="text-4xl md:text-5xl font-bold">
              <span className="text-slate-900">Nossa </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">Abordagem</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Users className="w-7 h-7" />,
                title: "Personalização Completa",
                description: "Diagnóstico detalhado para alinhar o conteúdo às demandas institucionais.",
              },
              {
                icon: <BookOpen className="w-7 h-7" />,
                title: "Conteúdo Atualizado",
                description: "Base em legislação vigente, jurisprudência e melhores práticas.",
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Aprendizado Aplicado",
                description: "Estudos de caso, simulações e exercícios com foco em impacto imediato.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp as any}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm border border-[#49B5EA]/20 rounded-xl p-6"
              >
                <div className="p-2 bg-[#49B5EA]/10 rounded-lg text-[#49B5EA]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temas Estratégicos */}
      <section
  id="temas"
  className="relative py-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-b from-white via-[#F9FCFF] to-white overflow-hidden"
>
  {/* Padrão de fundo */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,181,234,0.06),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(122,204,244,0.05),transparent_60%)] pointer-events-none"></div>

  <div className="container mx-auto relative z-10">
    {/* Título */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp as any}
      className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight"
    >
      <span className="text-slate-900">Temas </span>
      <span className="bg-gradient-to-r from-[#49B5EA] via-[#65C0F0] to-[#7ACCF4] bg-clip-text text-transparent drop-shadow-sm">
        Estratégicos
      </span>
    </motion.h2>

    {/* Lista de temas */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {temas.map((tema, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          variants={fadeInUp as any}
          className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 hover:border-[#49B5EA]/50 hover:shadow-xl hover:shadow-[#49B5EA]/10 transition-all duration-300 transform hover:-translate-y-1"
        >
          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] shadow-md" />
          <p className="text-slate-800 font-medium group-hover:text-slate-900 transition-colors">
            {tema}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Modalidades */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.08),transparent_70%)]" />
        </div>
        <div className="container mx-auto relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp as any}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            <span className="text-slate-900">Modalidades de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">Treinamento</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {modalidades.map((mod, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp as any}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-[#49B5EA]/40 hover:shadow-[#49B5EA]/10 hover:shadow-2xl transition-all flex flex-col items-center gap-4 text-center"
              >
                <div className="p-4 rounded-lg bg-[#49B5EA]/10 text-[#49B5EA]">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{mod.title}</h3>
                <p className="text-slate-600">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA padrão do site */}
      <section className="py-32 pb-10 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.1),transparent_70%)]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-8 z-0">
          <img src="/justlogo.png" alt="Public Partner Logo" className="h-100 w-auto max-w-100 object-contain" loading="lazy" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp as any} className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Construir Juntos</span>
            </motion.h2>
            <motion.p variants={fadeInUp as any} className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
              Nosso time está preparado para entender suas demandas específicas e desenvolver a solução mais adequada
              para o contexto da sua instituição.
              <span className="block mt-4 font-semibold text-cyan-600">Entre em contato e converse com um dos nossos especialistas.</span>
            </motion.p>
            <motion.div variants={fadeInUp as any} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contato"
                className="group relative px-16 py-6 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2"
              >
                <span className="relative z-10">Entre em contato agora</span>
                <ArrowRight className="inline ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity" />
              </Link>
              <Link
                href="/sobre"
                className="group px-12 py-6 border-2 border-blue-600/30 text-blue-600 font-semibold text-lg rounded-lg transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-50"
              >
                Conheça nossa história
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Link externo - padronizado */}
      <section className="max-w-full mx-auto text-center py-16 px-6 md:px-12 relative bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] rounded-2xl overflow-hidden shadow-lg">
  {/* Fundo decorativo radial */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,181,234,0.15),transparent_70%)] pointer-events-none"></div>

  <div className="relative z-10">
  <p className="text-lg text-cyan-700 mb-6 sm:text-center">
    Para mais detalhes sobre nossos cursos, acesse:
  </p>

  <a
    href="https://www.publictrainer.com.br"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center px-6 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-2 w-full sm:w-auto"
  >
    <span className="relative z-10">www.publictrainer.com.br</span>
    <ExternalLink className="inline ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity" />
  </a>
</div>
</section>



    </div>
  );
}