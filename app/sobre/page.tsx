"use client"

import { useEffect, useRef } from "react"
// import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, MapPin, Calendar, TrendingUp, ArrowRight, Star } from "lucide-react"
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
    <div className="min-h-screen text-slate-900 overflow-x-hidden">
      {/* Hero Section - Mesmo padrão da HomePage */}
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
              <span className="block text-white">Sobre a </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#8FD4F7] to-[#49B5EA]">
                Public Partner
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#C5E8FA] leading-relaxed mb-12 max-w-3xl mx-auto">
              Transformando desafios em oportunidades com excelência em consultoria e gestão.
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

      {/* História e Fundação - Fundo branco como HomePage */}
      <section id="historia" className="py-24 bg-white relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section opacity-0 transition-all duration-1000">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-2xl mr-4">
                  <Calendar className="h-8 w-8 text-[#49B5EA]" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-slate-900">2015</h2>
                  <p className="text-[#49B5EA] font-medium">Fundação</p>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-slate-900">Nossa Origem</h3>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
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
                  size="lg"
                  className="group bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] text-white px-8 py-4 text-lg font-semibold hover:from-[#3EA5D8] hover:to-[#6AC2F0] transition-all duration-300"
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
              <div className="relative hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Public Partner Início"
                    width={1170}
                    height={780}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consolidação e Crescimento - Fundo gradiente como HomePage */}
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section opacity-0 transition-all duration-1000">
              <div className="relative hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                    alt="Public Partner Hoje"
                    width={1632}
                    height={1088}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-2xl mr-4">
                  <TrendingUp className="h-8 w-8 text-[#49B5EA]" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-slate-900">2025</h2>
                  <p className="text-[#49B5EA] font-medium">Consolidação</p>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-slate-900">Crescimento Contínuo</h3>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Hoje, dez anos após sua fundação, a Public Partner consolida sua presença no mercado como uma empresa
                  moderna, com foco em soluções inteligentes e orientadas por resultados reais.
                </p>
                <p>
                  Expandimos nosso portfólio, nossas frentes de atuação e nossa equipe — e seguimos crescendo com base
                  em três pilares:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#49B5EA]/20 shadow-sm">
                    <div className="bg-[#49B5EA]/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <Lightbulb className="h-6 w-6 text-[#49B5EA]" />
                    </div>
                    <h4 className="font-bold text-[#49B5EA]">Conhecimento Técnico</h4>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#49B5EA]/20 shadow-sm">
                    <div className="bg-[#49B5EA]/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-[#49B5EA]" />
                    </div>
                    <h4 className="font-bold text-[#49B5EA]">Personalização</h4>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#49B5EA]/20 shadow-sm">
                    <div className="bg-[#49B5EA]/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <Star className="h-6 w-6 text-[#49B5EA]" />
                    </div>
                    <h4 className="font-bold text-[#49B5EA]">Compromisso</h4>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial e Compromisso - Fundo branco */}
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
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-16">
            {/* <div className="inline-flex items-center px-6 py-2 bg-[#E6F7FF] border border-[#49B5EA]/30 rounded-full mb-8">
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Nosso Diferencial</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Excelência e </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Comprometimento
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto fade-in-section opacity-0 transition-all duration-1000">
            <div className="bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] border border-[#49B5EA]/20 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Nosso diferencial está na entrega personalizada, baseada em evidências, boas práticas institucionais e 
                  resultados concretos. Trabalhamos com responsabilidade técnica e visão estratégica, sempre respeitando 
                  as singularidades de cada cliente e propondo soluções que unem inovação, legalidade e eficiência.
                </p>
                
                <div className="p-6 bg-gradient-to-r from-[#49B5EA]/10 to-[#7ACCF4]/10 border border-[#49B5EA]/20 rounded-xl mt-8">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-[#49B5EA] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-slate-700 italic font-medium">
                      A Public Partner é mais que uma empresa: é uma parceira comprometida com a transformação e o 
                      fortalecimento institucional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atuação Nacional - Fundo gradiente */}
      <section className="py-24 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,181,234,0.08),transparent_70%)]"></div>
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
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-16">
            {/* <div className="inline-flex items-center px-6 py-2 bg-white border border-[#49B5EA]/30 rounded-full mb-8 shadow-sm">
              <MapPin className="h-4 w-4 text-[#49B5EA] mr-2" />
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Atuação Nacional</span>
            </div> */}

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <div className="inline-flex items-center ">
              <MapPin className="h-6 w-8 text-[#49B5EA] mr-3" />
             
            </div>
              <span className="text-slate-900">Sede no Rio de Janeiro, </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Atuação em Todo o Brasil
              </span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Apesar de termos sede no Rio de Janeiro, nossa atuação é nacional. Estamos prontos para atender
                instituições públicas e privadas em todo o Brasil, com profissionais altamente capacitados, que combinam
                sólida formação, experiência prática e atualização constante sobre os marcos normativos, administrativos 
                e jurídicos que regem a gestão contemporânea.
              </p>
            </div>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300 max-w-4xl mx-auto">
            <div className="relative hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
              <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1563126171-fa019bbbfa18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mapa de Atuação"
                  width={1170}
                  height={780}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#49B5EA]/20 shadow-lg">
                  <h3 className="font-bold text-[#49B5EA] flex items-center">
                    {/* <MapPin className="h-5 w-5 mr-2" /> */}
                    Do Rio de Janeiro
                  </h3>
                  <div className="flex items-center">
                    {/* <MapPin className="h-5 w-5 mr-2 text-[#49B5EA]" /> */}
                    <p className="text-slate-700">Para todo Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Fundo gradiente como HomePage */}
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
          <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0 transition-all duration-1000">
            {/* <div className="inline-flex items-center px-6 py-2 bg-white border border-[#49B5EA]/30 rounded-full mb-8 shadow-sm">
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Pronto para Transformar?</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Vamos </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Construir Juntos
              </span>
            </h2>
            <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está pronta para entender seus desafios e propor soluções personalizadas para seu negócio ou instituição.
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-[#49B5EA]/30 transition-all duration-300 hover:scale-[1.03]"
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