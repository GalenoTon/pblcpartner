"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, Lightbulb, MapPin, Calendar, TrendingUp, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobrePage() {
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

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-[500px] w-[1500px] h-[1500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-teal-500/5 to-transparent rounded-full" />
          <div className="absolute -bottom-1/3 -right-[400px] w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-600/10 via-cyan-500/5 to-transparent rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/70 to-slate-950" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Nossa História</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Sobre a </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400">
                Public Partner
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Transformando desafios em oportunidades com excelência em consultoria e gestão.
            </p>
            
            <Link href="#historia">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-cyan-500/20 hover:shadow-teal-500/30 transition-all duration-300"
              onClick={handleScrollToHistory}
            >
              Conheça nossa história
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* História e Fundação */}
      <section id="historia" className="py-24 px-10 bg-gradient-to-b from-slate-900/50 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section opacity-0 transition-all duration-1000">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl mr-4">
                  <Calendar className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">2015</h2>
                  <p className="text-cyan-400 font-medium">Fundação</p>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-white">Nossa Origem</h3>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  A Public Partner nasceu em 2015, impulsionada pelo propósito de apoiar a gestão pública e privada na
                  estruturação de projetos e na implementação de soluções que combinassem técnica, responsabilidade e
                  inovação.
                </p>
                <p>
                  Nos primeiros anos, nossa atuação foi voltada para pequenas consultorias e parcerias estratégicas,
                  focadas em demandas pontuais, mas sempre com um olhar atento para o impacto institucional e a geração
                  de valor.
                </p>
                <p>
                  Esse período foi fundamental para consolidar nossa identidade como uma empresa comprometida com o 
                  aperfeiçoamento da administração pública e com o fortalecimento de boas práticas em ambientes 
                  organizacionais complexos.
                </p>
              </div>
              
              <div className="mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-8 py-4 text-lg font-semibold bg-slate-950/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/servicos">
                    Conheça nossos serviços
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Public Partner Início"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consolidação e Crescimento */}
      <section className="py-24 px-10 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section opacity-0 transition-all duration-1000">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                    alt="Public Partner Hoje"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
              </div>
            </div>

            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl mr-4">
                  <TrendingUp className="h-8 w-8 text-teal-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">2025</h2>
                  <p className="text-teal-400 font-medium">Consolidação</p>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-white">Crescimento Contínuo</h3>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Hoje, dez anos após sua fundação, a Public Partner consolida sua presença no mercado como uma empresa
                  moderna, com foco em soluções inteligentes e orientadas por resultados reais.
                </p>
                <p>
                  Expandimos nosso portfólio, nossas frentes de atuação e nossa equipe — e seguimos crescendo com base
                  em três pilares:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <div className="bg-cyan-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <Lightbulb className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h4 className="font-bold text-cyan-400">Conhecimento Técnico</h4>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <div className="bg-teal-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-teal-400" />
                    </div>
                    <h4 className="font-bold text-teal-400">Personalização</h4>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <div className="bg-cyan-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <Star className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h4 className="font-bold text-cyan-400">Compromisso</h4>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-teal-400/50 text-teal-400 hover:bg-teal-400 hover:text-slate-950 px-8 py-4 text-lg font-semibold bg-slate-950/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/contato">
                    Fale com nossa equipe
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial e Compromisso */}
      <section className="py-24 px-10 bg-gradient-to-b from-slate-900/50 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.05),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.05),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Nosso Diferencial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Excelência e </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Comprometimento
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto fade-in-section opacity-0 transition-all duration-1000">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Nosso diferencial está na entrega personalizada, baseada em evidências, boas práticas institucionais e 
                  resultados concretos. Trabalhamos com responsabilidade técnica e visão estratégica, sempre respeitando 
                  as singularidades de cada cliente e propondo soluções que unem inovação, legalidade e eficiência.
                </p>
                
                <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-teal-900/30 border border-cyan-800/50 rounded-xl mt-8">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-cyan-200 italic font-medium">
                      "A Public Partner é mais que uma empresa: é uma parceira comprometida com a transformação e o 
                      fortalecimento institucional."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      {/* <section className="py-24 px-10 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.05),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.05),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Nossos Valores</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Pilares que </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Guiam Nossa Atuação
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Princípios fundamentais que garantem excelência em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excelência",
                description: "Comprometimento com a qualidade e resultados superiores em todos os projetos.",
                color: "from-cyan-500/20 to-teal-500/20",
                iconColor: "text-cyan-400",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Colaboração",
                description: "Trabalho em equipe e parceria estratégica com nossos clientes.",
                color: "from-teal-500/20 to-emerald-500/20",
                iconColor: "text-teal-400",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Inovação",
                description: "Busca constante por soluções criativas e tecnologias avançadas.",
                color: "from-emerald-500/20 to-cyan-500/20",
                iconColor: "text-emerald-400",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Resultados",
                description: "Foco em entregas efetivas que geram valor real para nossos clientes.",
                color: "from-cyan-500/20 to-blue-500/20",
                iconColor: "text-blue-400",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 group hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <div className={`${value.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Atuação Nacional */}
      <section className="py-24 px-10 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Atuação Nacional</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-white">Sede no Rio de Janeiro, </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Atuação em Todo o Brasil
              </span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Apesar de termos sede no Rio de Janeiro, nossa atuação é nacional. Estamos prontos para atender
                instituições públicas e privadas em todo o Brasil, com profissionais altamente capacitados, que combinam
                sólida formação, experiência prática e atualização constante sobre os marcos normativos, administrativos 
                e jurídicos que regem a gestão contemporânea.
              </p>
            </div>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300 max-w-4xl mx-auto">
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1563126171-fa019bbbfa18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mapa de Atuação"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-700">
                <h3 className="font-bold text-cyan-400 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Do Rio de Janeiro
                </h3>
                <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <p className="text-slate-300">Para todo Brasil</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
                Construir Juntos
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
