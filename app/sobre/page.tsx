
"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, Variants } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, MapPin, Calendar, TrendingUp, ArrowRight, Star, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fadeInUp: any = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.12,
      ease: "easeOut",
      duration: 0.8 
    },
  }),
};

export default function SobrePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
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
      {/* Hero Section - Melhorada responsividade */}
      <section className="relative min-h-[85vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24">
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
              className="h-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl object-contain px-4"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Elementos flutuantes decorativos - ajustados para mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400/20 rounded-lg"
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
        <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {/* Título - melhor responsividade */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 pt-14 sm:mb-8 tracking-tight">
              Sobre a{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44B6EA] via-[#8FD4F7] to-[#44B6EA]">
                  Public Partner
                </span>
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#44B6EA] to-[#8FD4F7]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </span>{" "}
            </h1>

            {/* Botões - stack vertical em mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto">
              <Link
                href="#historia"
                onClick={handleScrollToHistory}
                className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#49B5EA]/25 transform hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                <span className="relative z-10">Conheça nossa história</span>
                <ArrowRight className="inline ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contato"
                className="group w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-[#49B5EA]/50 backdrop-blur-sm text-[#49B5EA] font-semibold rounded-lg transition-all duration-300 hover:border-[#49B5EA] hover:bg-[#49B5EA] hover:text-slate-950 text-center text-sm sm:text-base"
              >
                Fale conosco
                <ArrowRight className="inline ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* História e Fundação - Melhorada responsividade */}
      <section id="historia" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(73,181,234,0.03)_50%,transparent_75%)] bg-[length:60px_60px] sm:bg-[length:80px_80px] opacity-20"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-5 sm:opacity-10 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-32 sm:h-48 md:h-64 w-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="fade-in-section opacity-0 transition-all duration-1000 order-2 lg:order-1">
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] mb-6 sm:mb-8 mx-auto lg:mx-0" />

              <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-xl sm:rounded-2xl mr-3 sm:mr-4">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-[#49B5EA]" />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">2015</h2>
                  <p className="text-[#49B5EA] font-medium text-sm sm:text-base">Fundação</p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 text-center lg:text-left">Nossa Origem</h3>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed text-left lg:text-left">
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
              
              <div className="mt-6 sm:mt-8 text-center lg:text-left">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:from-[#3EA5D8] hover:to-[#6AC2F0] transition-all duration-300"
                  asChild
                >
                  <Link href="/servicos">
                    Conheça nossos serviços
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300 order-1 lg:order-2">
              <div className="relative hover:scale-[1.02] transition-transform duration-500 max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/photo4.jpg" 
                    alt="Public Partner Início"
                    width={1170}
                    height={780}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consolidação e Crescimento - Melhorada responsividade */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,181,234,0.08),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_65%,rgba(73,181,234,0.03)_90%,transparent_100%)]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-5 sm:opacity-8 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-16 sm:h-24 md:h-32 w-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="fade-in-section opacity-0 transition-all duration-1000 order-2 lg:order-1">
              <div className="relative hover:scale-[1.02] transition-transform duration-500 max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/photo2.jpg"
                    alt="Public Partner Hoje"
                    width={1632}
                    height={1088}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300 order-1 lg:order-2">
              <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-[#49B5EA]/20 to-[#7ACCF4]/20 rounded-xl sm:rounded-2xl mr-3 sm:mr-4">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#49B5EA]" />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">2025</h2>
                  <p className="text-[#49B5EA] font-medium text-sm sm:text-base">Consolidação</p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 text-center lg:text-left">Crescimento Contínuo</h3>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed text-center lg:text-left text-left">
                <p>
                  Hoje, dez anos após sua fundação, a Public Partner consolida sua presença no mercado como uma empresa
                  moderna, com foco em soluções inteligentes e orientadas por resultados reais.
                </p>
                <p>
                  Expandimos nosso portfólio, nossas frentes de atuação e nossa equipe — e seguimos crescendo com base
                  em três pilares:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#49B5EA]/20 shadow-sm text-center">
                    <div className="bg-[#49B5EA]/10 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                      <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-[#49B5EA]" />
                    </div>
                    <h4 className="font-bold text-[#49B5EA] text-sm sm:text-base">Conhecimento Técnico</h4>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#49B5EA]/20 shadow-sm text-center">
                    <div className="bg-[#49B5EA]/10 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#49B5EA]" />
                    </div>
                    <h4 className="font-bold text-[#49B5EA] text-sm sm:text-base">Personalização</h4>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#49B5EA]/20 shadow-sm text-center">
                    <div className="bg-[#49B5EA]/10 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-[#49B5EA]" />
                    </div>
                    <h4 className="font-bold text-[#49B5EA] text-sm sm:text-base">Compromisso</h4>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-10 text-center lg:text-left">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:from-[#3EA5D8] hover:to-[#6AC2F0] transition-all duration-300"
                  asChild
                >
                  <Link href="/contato">
                    Fale com nossa equipe
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial e Compromisso - Melhorada responsividade */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(73,181,234,0.03)_50%,transparent_75%)] bg-[length:60px_60px] sm:bg-[length:80px_80px] opacity-20"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-5 sm:opacity-10 z-0">
          <img
            src="/justlogo.png"
            alt="Public Partner Logo"
            className="h-32 sm:h-48 md:h-64 w-auto object-contain"
            loading="lazy"
          />
        </div>
        
        <div className="container mx-auto relative max-w-7xl">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-slate-900">Excelência e </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Comprometimento
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto fade-in-section opacity-0 transition-all duration-1000">
            <div className="bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] border border-[#49B5EA]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Nosso diferencial está na entrega personalizada, baseada em evidências, boas práticas institucionais e 
                  resultados concretos. Trabalhamos com responsabilidade técnica e visão estratégica, sempre respeitando 
                  as singularidades de cada cliente e propondo soluções que unem inovação, legalidade e eficiência.
                </p>
                
                <div className="p-4 sm:p-6 bg-gradient-to-r from-[#49B5EA]/10 to-[#7ACCF4]/10 border border-[#49B5EA]/20 rounded-lg sm:rounded-xl mt-6 sm:mt-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6 text-[#49B5EA] mt-1 mb-2 sm:mb-0 sm:mr-3 flex-shrink-0 mx-auto sm:mx-0" />
                    <p className="text-slate-700 italic font-medium text-center sm:text-left">
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
            {/* <div className="inline-flex items-center px-6 py-2 bg-white border border-[#49B5EA]/30 rounded-lg mb-8 shadow-sm">
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

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed text-left">
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
              className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed text-left"
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
                href="/servicos"
                className="group px-12 py-6 border-2 border-blue-600/30 text-blue-600 font-semibold text-lg rounded-lg transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-50"
              >
                Conheça nossos serviços
                <ChevronRight className="inline ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}