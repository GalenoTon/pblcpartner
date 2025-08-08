"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Target,
  Monitor,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, ease: "easeOut", duration: 0.6 },
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
    icon: <Users className="w-6 h-6" style={{ color: '#44B6EA' }} />,
    title: "Presenciais",
    description: "Formações in company e em polos regionais",
  },
  {
    icon: <Monitor className="w-6 h-6" style={{ color: '#44B6EA' }} />,
    title: "Online ao vivo",
    description: "Cursos interativos com participação em tempo real",
  },
  {
    icon: <BookOpen className="w-6 h-6" style={{ color: '#44B6EA' }} />,
    title: "Cursos gravados",
    description: "Acesso sob demanda, no seu ritmo",
  },
  {
    icon: <GraduationCap className="w-6 h-6" style={{ color: '#44B6EA' }} />,
    title: "Trilhas de aprendizagem",
    description: "Programas modulares e progressivos",
  },
];

export default function CapacitacaoPage() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white px-6 md:px-20 lg:px-36 py-28">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover opacity-40"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(68,182,234,0.15),transparent_90%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(17,53,132,0.1),transparent_90%)]" />

          <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0 pt-20">
            <img
              src="/logowhite2.png"
              alt="Public Partner Logo"
              className="h-auto w-150 max-w-4xl object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 tracking-wide">
            Capacitação e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44B6EA] via-[#8FD4F7] to-[#44B6EA]">
              Excelência
            </span> para a Gestão Pública
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed text-blue-100">
            Oferecemos soluções educacionais customizadas, alinhadas às demandas
            institucionais, para transformar conhecimento em resultados efetivos e
            inovação na administração pública.
          </p>
        </motion.div>
      </section>

      {/* Introdução */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-l-4 pl-8"
          style={{ borderColor: '#44B6EA' }}
        >
          <p className="text-xl text-gray-900 leading-relaxed max-w-3xl font-light">
            Nossos cursos são estruturados para atender às necessidades específicas
            de órgãos e instituições públicas, com metodologias práticas e focadas
            na resolução dos desafios reais do setor.
          </p>
        </motion.div>
      </section>

      {/* Diferenciais / Abordagem */}
      <section className="bg-white py-24 px-6 md:px-20 shadow-inner rounded-t-3xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-14">
          {[
            {
              icon: <Users className="w-10 h-10" style={{ color: '#44B6EA' }} />,
              title: "Personalização Completa",
              description:
                "Diagnóstico detalhado para oferecer treinamentos alinhados às reais demandas institucionais.",
            },
            {
              icon: <BookOpen className="w-10 h-10" style={{ color: '#44B6EA' }} />,
              title: "Conteúdo Atualizado",
              description:
                "Base rigorosa na legislação vigente, incluindo a Nova Lei de Licitações (14.133/21) e melhores práticas.",
            },
            {
              icon: <Target className="w-10 h-10" style={{ color: '#44B6EA' }} />,
              title: "Aprendizado Aplicado",
              description:
                "Metodologias ativas com estudos de caso, simulações e debates para impacto imediato.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg p-10 flex flex-col gap-6 hover:shadow-2xl transition-shadow cursor-default border border-gray-100"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-serif font-semibold" style={{ color: '#113584' }}>
                {item.title}
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Temas Estratégicos */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-serif font-bold mb-14 text-center"
          style={{ color: '#113584' }}
        >
          Temas Estratégicos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {temas.map((tema, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeInUp}
              className="relative bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer hover:shadow-xl transition-all duration-300 flex items-center gap-5 hover:border-blue-300"
              style={{
                '--hover-border-color': '#44B6EA'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#44B6EA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <span 
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#44B6EA' }}
              ></span>
              <p className="text-gray-900 font-semibold">{tema}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modalidades */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 px-6 md:px-20 rounded-b-3xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-serif font-bold mb-16 text-center"
          style={{ color: '#113584' }}
        >
          Modalidades de Treinamento
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {modalidades.map((mod, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center gap-5 text-center"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#44B6EA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f3f4f6';
              }}
            >
              <div className="p-4 rounded-full" style={{ backgroundColor: '#44B6EA20' }}>
                {mod.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold" style={{ color: '#113584' }}>
                {mod.title}
              </h3>
              <p className="text-gray-700 font-light">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center py-20 px-6 md:px-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-serif font-bold mb-6"
          style={{ color: '#113584' }}
        >
          Treinamento Personalizado
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg text-gray-700 mb-10 font-light max-w-xl mx-auto"
        >
          Está pronto para desenvolver uma capacitação alinhada aos desafios da sua equipe? Entre em contato e construa conosco um programa sob medida, focado em resultados e inovação.
        </motion.p>

        <Link
          href="/contato"
          className="inline-block border-2 px-14 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:text-white"
          style={{ 
            borderColor: '#44B6EA', 
            color: '#44B6EA'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#44B6EA';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#44B6EA';
          }}
        >
          Fale com a Equipe <ArrowRight className="inline ml-2 -mb-1" />
        </Link>
      </section>

      {/* Link externo */}
      <section className="max-w-4xl mx-auto text-center py-10 px-6 md:px-12 mb-20">
        <p className="text-gray-700 font-light mb-4">
          Para mais detalhes sobre nossos cursos, acesse:
        </p>
        <a
          href="https://www.publictrainer.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-3 border-2 rounded-full font-semibold transition-colors duration-300 shadow-md hover:shadow-lg hover:text-white"
          style={{ 
            borderColor: '#113584', 
            color: '#113584'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#113584';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#113584';
          }}
        >
          www.publictrainer.com.br <ExternalLink className="w-5 h-5" />
        </a>
      </section>
    </main>
  );
}