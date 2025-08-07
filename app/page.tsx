"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Phone, BriefcaseBusiness, ChartGantt, ClipboardList, GraduationCap } from "lucide-react"
import Link from "next/link"

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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

              <div className="flex items-left justify-left space-x-3 text-[#49B5EA]">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <p className="text-lg md:text-xl font-medium">
                  Experiência, técnica e visão de futuro aplicadas aos seus desafios.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-left">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-[#49B5EA]/25 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/#">
                  Conheça nossos serviços
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-[#49B5EA]/50 text-[#49B5EA] hover:bg-[#49B5EA] hover:text-slate-950 px-8 py-4 text-lg font-semibold bg-slate-950/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contato">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Fale com nossa equipe
                </Link>
              </Button>
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
              <div className="inline-flex items-center px-6 py-2 bg-[#E6F7FF] border border-[#49B5EA]/30 rounded-full mb-8">
                <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">
                  Posicionamento Institucional
                </span>
              </div>

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

      <section className="py-24 bg-white relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(73,181,234,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(73,181,234,0.1),transparent_70%)]"></div>

        <div className="container mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section opacity-0 transition-all duration-1000">
            <div className="inline-flex items-center px-6 py-2 bg-[#E6F7FF] border border-[#49B5EA]/30 rounded-full mb-8 hover:bg-[#49B5EA]/10 hover:border-[#49B5EA]/50 transition-all duration-500 ease-out">
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Nossos Pilares</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              <span>Áreas de </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] hover:bg-gradient-to-l transition-all duration-700 ease-in-out">
                Atuação
              </span>
            </h2>
            <p className="text-lg text-slate-700 hover:text-slate-800 transition-colors duration-500 ease-out">
              Soluções especializadas para os desafios mais complexos do setor público e privado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ChartGantt className="h-8 w-8" />,
                title: "Consultorias Estratégicas",
                description: "Soluções personalizadas para desafios complexos do setor público.",
                bgImage: "photo1.jpg"
              },
              {
                icon: <ClipboardList className="h-8 w-8" />,
                title: "Assessoria Técnica Especializada",
                description: "Suporte técnico especializado para tomada de decisões estratégicas.",
                bgImage: "photo2.jpg"
              },
              {
                icon: <BriefcaseBusiness className="h-8 w-8" />,
                title: "Gestão de Projetos Públicos",
                description: "Estruturação e gestão eficiente de projetos públicos.",
                bgImage: "photo3.jpg"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Capacitação Técnica e Formação de Gestores",
                description: "Formação especializada de gestores e servidores públicos.",
                bgImage: "photo4.jpg"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group perspective-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card
                  className={`h-full fade-in-section opacity-0 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-[#49B5EA]/20
                  group-hover:-translate-y-2 group-hover:border-[#49B5EA]/40 transform-gpu 
                  relative overflow-hidden border-2 border-transparent hover:border-[#49B5EA]/30`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#49B5EA]/100 to-[#2C9CDB]/80 
                      group-hover:from-[#49B5EA]/100 group-hover:to-[#2C9CDB]/80 transition-all duration-700 ease-out`}></div>
                  </div>

                  <CardContent className="p-6 h-full flex flex-col relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 
                      group-hover:bg-white/30 group-hover:scale-110 transition-all duration-600 ease-out shadow-lg group-hover:shadow-xl group-hover:shadow-[#49B5EA]/30 border border-white/20">
                      <div className="text-white group-hover:text-white transition-all duration-600 ease-out transform group-hover:scale-110">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white/95 transition-all duration-600 ease-out transform group-hover:translate-y-[-2px]">
                      {service.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-6 flex-grow group-hover:text-white/95 transition-all duration-600 ease-out">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Button
                        variant="ghost"
                        className="group/btn text-white hover:text-white px-0 hover:bg-transparent transition-all duration-500 ease-out"
                        asChild
                      >
                        <Link href="/#">
                          <span className="relative overflow-hidden">
                            <span className="inline-block transition-all duration-500 ease-out group-hover/btn:translate-x-1">
                              Saiba mais
                            </span>
                            <ArrowRight className="ml-2 h-4 w-4 inline-block transition-all duration-500 ease-out group-hover/btn:translate-x-1 group-hover/btn:scale-125" />
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,181,234,0.08),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_65%,rgba(73,181,234,0.03)_90%,transparent_100%)]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-8 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-100 w-auto max-w-100 object-contain"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center fade-in-section opacity-0 transition-all duration-1000">
            <div className="inline-flex items-center px-6 py-2 bg-white border border-[#49B5EA]/30 rounded-full mb-8 shadow-sm">
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Pronto para Transformar?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">Conversar</span>
            </h2>

            <p className="text-lg text-slate-700 mb-10 mx-auto leading-relaxed max-w-xl">
              Soluções personalizadas para os desafios do seu negócio ou instituição.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-[#49B5EA]/30 transition-all duration-300 hover:scale-[1.03]"
                asChild
              >
                <Link href="/contato">
                  Agendar uma conversa
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-[#49B5EA]/40 text-[#49B5EA] hover:bg-[#49B5EA]/5 px-10 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm hover:scale-[1.02]"
                asChild
              >
                <Link href="/contato">
                  <Phone className="mr-2 h-5 w-5" />
                  Falar agora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}