"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Lightbulb, Shield, Target, Gavel, Building, 
  ArrowRight, Zap, Scale, MonitorCheck, Eye, Cpu, Leaf, ChevronRight, 
  BarChart3, Users, FileStack, Search, Handshake,
  ClipboardCheck, Award, BookOpen, TrendingUp
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicosPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleScrollToHistory = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observerRef.current?.observe(el))



    return () => observerRef.current?.disconnect()
  }, [])

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Assessoria Técnica Especializada",
      description:
        "Prestamos apoio estratégico e técnico em processos decisórios, com atuação transversal em áreas como contratações públicas, estruturação de políticas públicas, planejamento institucional, regulação e melhoria da governança.",
      features: [
        "Contratações públicas",
        "Estruturação de políticas públicas",
        "Planejamento institucional",
        "Regulação e governança",
      ],
      color: "from-blue-500/20 to-indigo-500/20",
      hoverColor: "hover:from-blue-500/30 hover:to-indigo-500/30",
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
        "Suporte contínuo",
      ],
      color: "from-emerald-500/20 to-teal-500/20",
      hoverColor: "hover:from-emerald-500/30 hover:to-teal-500/30",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Concessões e PPPs",
      description:
        "Desenvolvemos estudos, pareceres e minutas contratuais para parcerias público-privadas e concessões, com foco em segurança jurídica, atratividade do projeto e equilíbrio econômico-financeiro.",
      features: [
        "Estudos de viabilidade",
        "Pareceres técnicos",
        "Minutas contratuais",
        "Equilíbrio econômico-financeiro",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "hover:from-purple-500/30 hover:to-pink-500/30",
    },
    {
      icon: <FileStack className="h-8 w-8" />,
      title: "Planos Municipais",
      description:
        "Atuamos na concepção e na avaliação de planos estratégicos municipais, como Planos de Mobilidade Urbana, Saneamento, Resíduos Sólidos, Cultura, Educação e Desenvolvimento Econômico, entre outros.",
      features: [
        "Planos de Mobilidade Urbana",
        "Saneamento e Resíduos",
        "Cultura e Educação",
        "Desenvolvimento Econômico",
      ],
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "hover:from-orange-500/30 hover:to-red-500/30",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Planos de Desestatização",
      description:
        "Apoiamos governos municipais e estaduais na estruturação de projetos de desestatização, com foco na eficiência dos serviços públicos, no valor agregado à gestão e no respeito às normativas de controle.",
      features: [
        "Projetos de desestatização",
        "Eficiência dos serviços",
        "Valor agregado à gestão",
        "Conformidade normativa",
      ],
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "hover:from-cyan-500/30 hover:to-blue-500/30",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Estudos e Levantamentos Técnicos",
      description:
        "Realizamos diagnósticos, estudos setoriais, levantamentos de campo e análises estratégicas que subsidiam a tomada de decisão em políticas públicas, contratações e reestruturações institucionais.",
      features: ["Diagnósticos institucionais", "Estudos setoriais", "Levantamentos de campo", "Análises estratégicas"],
      color: "from-yellow-500/20 to-orange-500/20",
      hoverColor: "hover:from-yellow-500/30 hover:to-orange-500/30",
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
        "Fundamentação robusta",
      ],
      color: "from-rose-500/20 to-pink-500/20",
      hoverColor: "hover:from-rose-500/30 hover:to-pink-500/30",
    },
    {
      icon: <MonitorCheck className="h-8 w-8" />,
      title: "Gerenciamento e Fiscalização de Contratos",
      description:
        "Auxiliamos na estruturação de rotinas de fiscalização, elaboração de relatórios técnicos, análises de conformidade e acompanhamento da execução contratual sob a ótica técnica e normativa.",
      features: [
        "Rotinas de fiscalização",
        "Relatórios técnicos",
        "Análises de conformidade",
        "Acompanhamento de execução",
      ],
      color: "from-violet-500/20 to-purple-500/20",
      hoverColor: "hover:from-violet-500/30 hover:to-purple-500/30",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Verificador Independente",
      description:
        "Atuamos como agente técnico responsável pela verificação de desempenho contratual em projetos de concessões e parcerias, assegurando transparência, rigor técnico e cumprimento de metas pactuadas.",
      features: [
        "Verificação de desempenho",
        "Transparência",
        "Rigor técnico",
        "Cumprimento de metas",
      ],
      color: "from-lime-500/20 to-emerald-500/20",
      hoverColor: "hover:from-lime-500/30 hover:to-emerald-500/30",
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
        "Prestação de serviços",
      ],
      color: "from-sky-500/20 to-blue-500/20",
      hoverColor: "hover:from-sky-500/30 hover:to-blue-500/30",
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
        "Viabilidade econômica",
      ],
      color: "from-green-500/20 to-teal-500/20",
      hoverColor: "hover:from-green-500/30 hover:to-teal-500/30",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}


      <section className="relative min-120px flex items-center justify-center overflow-hidden bg-slate-950 text-white px-6 md:px-12 lg:px-16 xl:px-24 py-24">
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

          <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0 pt-20">
            <img
              src="/logowhite2.png"
              alt="Public Partner Logo"
              className="h-auto w-150 max-w-4xl object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto fade-in-section opacity-0 transition-all duration-1000">
            {/* <div className="inline-flex items-center px-6 py-2 bg-slate-950/50 backdrop-blur-sm border border-[#49B5EA]/30 rounded-full mb-8">
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Nossa História</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-12 font-bold mb-6 leading-tight">
              <span className="block text-white">Nossos </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#8FD4F7] to-[#49B5EA]">
              Serviços
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#C5E8FA] leading-relaxed mb-12 max-w-3xl mx-auto">
            Transformando desafios institucionais em oportunidades com excelência técnica e estratégica
            </p>
            
            <Link href="#historia">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-[#49B5EA]/25 transition-all duration-300 hover:scale-105"
                onClick={handleScrollToHistory}
              >
                Conheça nossa história
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nossa Abordagem Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950/50 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-section opacity-0 transition-all duration-1000">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden aspect-video">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Abordagem Public Partner"
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                </div>
              </div>

              <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
                <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
                  <ClipboardCheck className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">
                    Nossa Abordagem
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Excelência técnica com resultados concretos
                </h2>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Na Public Partner, desenvolvemos soluções sob medida para o setor público e privado, com foco na excelência técnica, na legalidade dos processos e na busca contínua por resultados concretos.
                  </p>
                  <p>
                    Nosso trabalho é guiado por evidências, boas práticas institucionais e um compromisso firme com o impacto positivo nas organizações com as quais atuamos. Entregamos mais do que relatórios: entregamos resultados mensuráveis, com inteligência aplicada e visão estratégica.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                    <Award className="h-5 w-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Foco na Excelência</h4>
                      <p className="text-sm text-slate-300">Padrões elevados de qualidade em todas as entregas</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                    <Scale className="h-5 w-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Conformidade Legal</h4>
                      <p className="text-sm text-slate-300">Soluções alinhadas com a legislação vigente</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                    <TrendingUp className="h-5 w-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Resultados Mensuráveis</h4>
                      <p className="text-sm text-slate-300">Métricas claras de desempenho e impacto</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                    <BookOpen className="h-5 w-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Baseado em Evidências</h4>
                      <p className="text-sm text-slate-300">Decisões fundamentadas em dados e melhores práticas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900/50 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Áreas de Atuação</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Soluções Especializadas para </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Desafios Complexos
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Confira as principais áreas em que atuamos para transformar desafios em oportunidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-400/50 group hover:scale-[1.02] hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 h-full`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} ${service.hoverColor} rounded-2xl mb-8 group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-400">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button
                      variant="link"
                      className="group p-0 text-cyan-400 hover:no-underline"
                      asChild
                    >
                      <Link href="/contato">
                        Saiba mais
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Nosso Método</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Como Trabalhamos para </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Entregar Resultados
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Nossa abordagem combina expertise técnica, personalização e compromisso com impacto positivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Diagnóstico Personalizado",
                description: "Analisamos minuciosamente suas necessidades específicas para entender os desafios únicos da sua organização."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Solução Sob Medida",
                description: "Desenvolvemos estratégias personalizadas alinhadas aos seus objetivos institucionais."
              },
              {
                icon: <Gavel className="h-8 w-8" />,
                title: "Conformidade Legal",
                description: "Garantimos que todas as soluções estejam em conformidade com as normas e regulamentações aplicáveis."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Resultados Mensuráveis",
                description: "Focamos em entregas concretas com indicadores de desempenho claros e acompanhamento contínuo."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="fade-in-section opacity-0 transition-all duration-1000 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-cyan-400">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0 transition-all duration-1000">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Pronto para Transformar?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Vamos </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Construir Juntos
              </span>
            </h2>
            <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-teal-900/30 border border-cyan-800/50 rounded-xl mb-12">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-200 font-medium">
                  Nosso time comercial está preparado para entender suas demandas com profundidade e indicar a solução mais adequada para seu contexto institucional.
                </p>
              </div>
            </div>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Entre em contato e converse com um dos nossos especialistas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contato">
                  Fale com a Public Partner
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-10 py-6 text-lg font-semibold bg-slate-950/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contato">
                  Solicite uma proposta
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}