"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Lightbulb, Shield, Play, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-left overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover opacity-40"
      poster="/placeholder.svg?height=1080&width=1920"
    >
      <source
        src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4"
        type="video/mp4"
      />
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.15),transparent_70%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.1),transparent_70%)]" />
  </div>

  {/* Conteúdo Centralizado */}
  <div className="container mx-auto px-4 relative z-10 text-left">
    <div className="max-w-4xl mx-auto fade-in-section opacity-0 transition-all duration-1000">


      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
        <span className="block text-white">Transformamos</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 animate-gradient">
          Desafios
        </span>
        <span className="block text-white">em Soluções</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
          Inteligentes
        </span>
      </h1>

      <div className="space-y-6 mb-12 max-w-2xl">
        <p className="text-xl text-slate-300 leading-relaxed">
          A Public Partner oferece soluções estratégicas com foco em inovação, eficiência e excelência na gestão
          pública e privada.
        </p>
        
        <div className="flex items-left justify-left space-x-3 text-cyan-400">
          <ArrowRight className="h-5 w-5 flex-shrink-0" />
          <p className="text-lg font-medium">
            Experiência, técnica e visão de futuro aplicadas aos seus desafios.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-left">
        <Button
          size="lg"
          className="group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          asChild
        >
          <Link href="/servicos">
            Conheça nossos serviços
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="group border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-8 py-4 text-lg font-semibold bg-slate-950/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
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

      {/* Stats Section 
      {/*<section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Anos de Experiência", icon: <Award className="h-6 w-6" /> },
              { number: "200+", label: "Projetos Realizados", icon: <Target className="h-6 w-6" /> },
              { number: "50+", label: "Clientes Atendidos", icon: <Users className="h-6 w-6" /> },
              { number: "98%", label: "Taxa de Sucesso", icon: <CheckCircle className="h-6 w-6" /> },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="fade-in-section opacity-0 transition-all duration-1000 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center group hover:scale-105 hover:bg-slate-900/70 hover:border-cyan-500/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* About Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden px-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 fade-in-section opacity-0 transition-all duration-1000">
              <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">
                  Posicionamento Institucional
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-white">Conectamos </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300">
                  conhecimento, estratégia
                </span>
                <span className="text-white"> e resultados</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
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
                variant="outline"
                size="lg"
                className="group mt-8 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-8 py-4 text-lg font-semibold bg-slate-950/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/sobre">
                  Saiba mais sobre nós
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2 fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Equipe trabalhando"
                    className="w-full h-auto object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-10 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.05),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.05),transparent_60%)]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section opacity-0 transition-all duration-1000">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Nossos Pilares</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Áreas de </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Atuação
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              Soluções especializadas para os desafios mais complexos do setor público e privado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Consultorias Estratégicas",
                description: "Soluções personalizadas para desafios complexos do setor público.",
                color: "from-purple-500/20 to-blue-500/20"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Assessoria Técnica Especializada",
                description: "Suporte técnico especializado para tomada de decisões estratégicas.",
                color: "from-cyan-500/20 to-teal-500/20"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Gestão de Projetos Públicos",
                description: "Estruturação e gestão eficiente de projetos públicos.",
                color: "from-teal-500/20 to-emerald-500/20"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Capacitação Técnica e Formação de Gestores",
                description: "Formação especializada de gestores e servidores públicos.",
                color: "from-emerald-500/20 to-cyan-500/20"
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/70 group hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      className="group text-cyan-400 hover:text-cyan-300 px-0 hover:bg-transparent"
                      asChild
                    >
                      <Link href="/servicos">
                        Saiba mais
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0 transition-all duration-1000">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Pronto para Transformar?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Vamos </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Conversar
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está pronta para entender seus desafios e propor soluções personalizadas para seu negócio ou instituição.
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/contato">
                Entre em contato agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
