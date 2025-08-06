"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Lightbulb, Shield, Play, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  
    // Adiciona um pequeno delay para garantir que o DOM esteja completamente carregado
    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Verifica se a classe ainda não foi adicionada
              if (!entry.target.classList.contains("animate-fade-in-up")) {
                entry.target.classList.add("animate-fade-in-up")
              }
            }
          })
        },
        { 
          threshold: 0.1, 
          rootMargin: "0px 0px -100px 0px" // Aumentamos a margem inferior
        }
      )
  
      const elements = document.querySelectorAll(".fade-in-section")
      elements.forEach((el) => observerRef.current?.observe(el))
  
      return () => {
        observerRef.current?.disconnect()
      }
    }, 300) // 100ms delay
  
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden">
      {/* Hero Section - Dark Background */}
{/* Hero Section - Dark Background */}
{/* Hero Section - Dark Background */}
<section className="relative min-h-screen flex items-center justify-left overflow-hidden bg-slate-950 text-white">
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
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-950/90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.15),transparent_90%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.1),transparent_90%)]" />
    
    {/* Logo como marca d'água no fundo */}
    <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
      <img 
        src="/logowhite.png" 
        alt="Public Partner Logo"
        className="h-auto w-full max-w-4xl object-contain"
      />
    </div>
  </div>

  {/* Hero Content - Ajustado para alinhar à esquerda */}
  <div className="container mx-auto px-10 pl-13 pt-13 relative z-10 text-left">
    <div className="max-w-4xl fade-in-section opacity-0 transition-all duration-1000"> {/* Removido mx-auto */}
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
          <Link href="/#">
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

      {/* About Section - White Background */}
      <section className="py-24 bg-white relative overflow-hidden px-4 sm:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(21,164,229,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-20"></div>
        
        {/* Logo como fundo na seção Posicionamento Institucional */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
          <img 
            src="/logopartner.png" 
            alt="Public Partner Logo"
            className="h-250 w-auto max-w-250 object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 fade-in-section opacity-0 transition-all duration-1000">
              <div className="inline-flex items-center px-6 py-2 bg-[#E6F7FF] border border-[#15A4E5]/30 rounded-full mb-8">
                <span className="text-sm font-medium text-[#15A4E5] tracking-wider uppercase">
                  Posicionamento Institucional
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-slate-900">Conectamos </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15A4E5] via-[#4BC0F0] to-[#15A4E5]">
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
                className="group mt-8 bg-gradient-to-r from-[#15A4E5] to-[#4BC0F0] text-white px-8 py-4 text-lg font-semibold hover:from-[#0E8BC0] hover:to-[#3AA0D0] transition-all duration-300"
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
                <div className="absolute -inset-4 bg-gradient-to-r from-[#15A4E5]/20 to-[#4BC0F0]/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="espaco.jpg" 
                    alt="Espaço de reunião"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - White Background with Light Blue Accents */}
      <section className="py-24 px-4 sm:px-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(21,164,229,0.05),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(21,164,229,0.05),transparent_60%)]"></div>

        

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section opacity-0 transition-all duration-1000">
            <div className="inline-flex items-center px-6 py-2 bg-[#E6F7FF] border border-[#15A4E5]/30 rounded-full mb-8">
              <span className="text-sm font-medium text-[#15A4E5] tracking-wider uppercase">Nossos Pilares</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              <span>Áreas de </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15A4E5] to-[#4BC0F0]">
                Atuação
              </span>
            </h2>
            <p className="text-lg text-slate-700">
              Soluções especializadas para os desafios mais complexos do setor público e privado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Consultorias Estratégicas",
                description: "Soluções personalizadas para desafios complexos do setor público.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Assessoria Técnica Especializada",
                description: "Suporte técnico especializado para tomada de decisões estratégicas.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Gestão de Projetos Públicos",
                description: "Estruturação e gestão eficiente de projetos públicos.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Capacitação Técnica e Formação de Gestores",
                description: "Formação especializada de gestores e servidores públicos.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-400 bg-white border border-slate-200 hover:border-[#15A4E5]/50 group hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-[#15A4E5]/10`}
                style={{ transitionDelay: `${index * 10}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E6F7FF] rounded-xl mb-6 group-hover:scale-110 transition-all duration-300">
                    <div className="text-[#15A4E5] group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-[#15A4E5] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      className="group text-[#15A4E5] hover:text-[#0E8BC0] px-0"
                      asChild
                    >
                      <Link href="/#">
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

 {/* CTA Section - Clean Professional Version */}
<section className="py-24 px-4 sm:px-10 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden">
  {/* Efeitos de fundo sutis */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,164,229,0.08),transparent_70%)]"></div>
    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_65%,rgba(21,164,229,0.03)_90%,transparent_100%)]"></div>
  </div>

  <div className="absolute inset-0 flex items-center justify-center opacity-8 z-0">
          <img 
            src="/logopartner.png" 
            alt="Public Partner Logo"
            className="h-200 w-auto max-w-200 object-contain"
          />
        </div>

  <div className="container mx-auto px-4 relative">
    <div className="max-w-3xl mx-auto text-center fade-in-section opacity-0 transition-all duration-1000">
      {/* Badge */}
      <div className="inline-flex items-center px-6 py-2 bg-white border border-[#15A4E5]/30 rounded-full mb-8 shadow-sm">
        <span className="text-sm font-medium text-[#15A4E5] tracking-wider uppercase">Pronto para Transformar?</span>
      </div>
      
      {/* Título com ênfase */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
        Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15A4E5] to-[#4BC0F0]">Conversar</span>
      </h2>
      
      {/* Texto conciso */}
      <p className="text-lg text-slate-700 mb-10 mx-auto leading-relaxed max-w-xl">
        Soluções personalizadas para os desafios do seu negócio ou instituição.
      </p>
      
      {/* CTA principal */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="group bg-gradient-to-r from-[#15A4E5] to-[#4BC0F0] hover:from-[#0E8BC0] hover:to-[#3AA0D0] text-white px-8 py-5 text-lg font-semibold shadow-lg hover:shadow-[#15A4E5]/20 transition-all duration-300 hover:scale-[1.02]"
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
          className="group border-2 border-[#15A4E5]/40 text-[#15A4E5] hover:bg-[#15A4E5]/5 px-8 py-5 text-lg font-semibold bg-white/80 backdrop-blur-sm"
          asChild
        >
          <Link href="/contato">
            <Phone className="mr-2 h-5 w-5" />
            Falar agora
          </Link>
        </Button>
      </div>
      
      {/* Logo discreta no rodapé da seção */}
      {/* <div className="mt-16 opacity-70">
        <img 
          src="/logopartner.png" 
          alt="Public Partner" 
          className="h-16 mx-auto w-auto" 
        />
      </div> */}
    </div>
  </div>
</section>
    </div>
  )
}