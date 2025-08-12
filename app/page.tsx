"use client"
import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, BriefcaseBusiness, ChartGantt, ClipboardList, GraduationCap, ChevronRight } from "lucide-react"
import Link from "next/link"

const fadeInUp: any = {
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


export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("animate-fade-in-up")) {
              entry.target.classList.add("animate-fade-in-up")
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px"
        }
      )

      const elements = document.querySelectorAll(".fade-in-section")
      elements.forEach((el) => observerRef.current?.observe(el))

      return () => observerRef.current?.disconnect()
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden">
      {/* Hero Section - FUNDO MANTIDO COMO ESTÁ */}
      <section className="relative min-h-screen flex items-center justify-left overflow-hidden bg-slate-950 text-white px-6 md:px-12 lg:px-16 xl:px-24 py-24">
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.15),transparent_90%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.1),transparent_90%)]" />

          <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
            <img
              src="/logowhite2.png"
              alt="Public Partner Logo"
              className="h-auto w-full max-w-4xl object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="container mx-auto relative z-10 text-left">
          <div className="max-w-4xl fade-in-section opacity-0 transition-all duration-1000">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight pt-10">
              <span className="block text-white">Transformamos</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#8FD4F7] to-[#49B5EA]">
                Desafios em Soluções
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#8FD4F7]">
                Inteligentes
              </span>
            </h1>

            <div className="space-y-6 mb-12 max-w-2xl">
              <p className="text-xl md:text-2xl text-[#C5E8FA] leading-relaxed">
                A Public Partner oferece soluções estratégicas com foco em inovação, eficiência e excelência na gestão
                pública e privada.
              </p>

              {/* <div className="flex items-left justify-left space-x-3 text-[#49B5EA]">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <p className="text-lg md:text-xl font-medium">
                  Experiência, técnica e visão de futuro aplicadas aos seus desafios.
                </p>
              </div> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-left items-center">
              <Link
                href="/servicos"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#49B5EA]/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Conheça nossos serviços</span>
                <ArrowRight className="inline ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contato"
                className="group px-10 py-4 border-2 border-[#49B5EA]/50 backdrop-blur-sm text-[#49B5EA] font-semibold rounded-lg transition-all duration-300 hover:border-[#49B5EA] hover:bg-[#49B5EA] hover:text-slate-950"
              >
                Fale conosco
                <ArrowRight className="inline ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(73,181,234,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-20"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-250 w-auto max-w-250 object-contain"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="lg:w-1/2 fade-in-section opacity-0 transition-all duration-1000">
              {/* <div className="inline-flex items-center px-6 py-2 bg-[#E6F7FF] border border-[#49B5EA]/30 rounded-lg mb-8">
                <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">
                  Posicionamento Institucional
                </span>
              </div> */}
              <div className="w-20 h-1 bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] mb-8" />


              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-slate-900">Conectamos </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#7ACCF4] to-[#49B5EA]">
                  conhecimento, estratégia
                </span>
                <span className="text-slate-900"> e resultados</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Somos uma empresa de consultoria, assessoria e capacitação especializada no setor público. Atuamos com
                  excelência em contratações públicas, defesa técnica perante órgãos de controle, estruturação de projetos
                  e formação de servidores e gestores.
                </p>
                <p>
                  Com inteligência aplicada e atuação multidisciplinar, desenvolvemos soluções sob medida que promovem
                  segurança jurídica, inovação institucional e alto desempenho.
                </p>
              </div>

              <Button
                size="lg"
                className="group mt-8 bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] text-white px-8 py-4 text-lg font-semibold hover:from-[#3EA5D8] hover:to-[#6AC2F0] transition-all duration-300"
                asChild
              >
                <Link href="/sobre">
                  Saiba mais sobre nós
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2 fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="relative hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="espaco.jpg"
                    alt="Espaço de reunião moderno da Public Partner"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 rounded-full mb-8 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">Nossas Especialidades</span>
      </div> */}

            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-black leading-tight">
              <span className="text-slate-900">Áreas de </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#7ACCF4] to-[#49B5EA]">
                Atuação
              </span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              Transformamos desafios complexos em soluções inovadoras através de expertise especializada e metodologias comprovadas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <ChartGantt className="h-10 w-10" />,
                title: "Consultorias Estratégicas",
                description: "Desenvolvemos estratégias personalizadas que impulsionam a transformação digital e otimização de processos no setor público.",
                bgImage: "photo1.jpg",
                gradient: "from-[#49B5EA] to-cyan-500 to-cyan-700"
              },
              {
                icon: <ClipboardList className="h-10 w-10" />,
                title: "Assessoria Técnica Especializada",
                description: "Fornecemos suporte técnico de alta qualidade para decisões estratégicas complexas com base em dados e análises aprofundadas.",
                bgImage: "photo2.jpg",
                gradient: "from-[#49B5EA] to-cyan-500 to-cyan-700"
              },
              {
                icon: <BriefcaseBusiness className="h-10 w-10" />,
                title: "Gestão de Projetos Públicos",
                description: "Estruturamos e gerenciamos projetos públicos com metodologias ágeis, garantindo eficiência e transparência em cada etapa.",
                bgImage: "photo3.jpg",
                gradient: "from-[#49B5EA] to-cyan-500 to-cyan-700"
              },
              {
                icon: <GraduationCap className="h-10 w-10" />,
                title: "Capacitação e Formação",
                description: "Programas de capacitação inovadores que desenvolvem competências essenciais para líderes e gestores do setor público.",
                bgImage: "photo4.jpg",
                gradient: "from-[#49B5EA] to-cyan-500 to-cyan-700"
              },
            ].map((service, index) => (

              <div
                key={index}
                className="group cursor-pointer"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                <Link
                  href="/servicos">
                  <div className="relative h-[400px] rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.02] border border-slate-200/50">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-700`}></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-700"></div>
                    <div className="absolute bottom-6 left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      {/* Icon */}
                      <div className="inline-flex">
                        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                          <div className="text-white transition-transform duration-500">
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white leading-tight group-hover:translate-y-[-2px] transition-transform duration-500">
                          {service.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base group-hover:text-white transition-colors duration-500">
                          {service.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="pt-6">
                        <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-500 cursor-pointer">
                          <span>Explorar serviço</span>
                          <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 group-hover:translate-x-1 transition-all duration-500">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </Link>

              </div>

            ))}
          </div>


        </div>

        <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
      </section>

      {/* CTA Section */}
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
                <ArrowRight className="inline ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity" />
              </Link>

              <Link
                href="/sobre"
                className="group px-12 py-6 border-2 border-blue-600/30 text-blue-600 font-semibold text-lg rounded-lg transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-50"
              >
                Conheça nossa história
                <ChevronRight className="inline ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}