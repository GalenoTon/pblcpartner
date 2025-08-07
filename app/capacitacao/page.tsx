"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Monitor, ArrowRight, ExternalLink, Target, Award } from "lucide-react"
import Link from "next/link"

export default function CapacitacaoPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Scroll to top when page loads
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

  const topics = [
    "Planejamento das contratações públicas",
    "Estudos Técnicos Preliminares (ETP) e Termos de Referência",
    "Fiscalização e gestão contratual",
    "Reequilíbrio econômico-financeiro de contratos",
    "Elaboração de editais e análise jurídica de processos",
    "Responsabilidade de agentes públicos",
    "Governança, integridade e controle",
    "Sustentabilidade e inovação no setor público",
  ]

  const modalities = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Presenciais",
      description: "In company ou em polos regionais",
      color: "from-blue-500/20 to-indigo-500/20",
      hoverColor: "hover:from-blue-500/30 hover:to-indigo-500/30",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Online ao vivo",
      description: "Com interação em tempo real",
      color: "from-green-500/20 to-emerald-500/20",
      hoverColor: "hover:from-green-500/30 hover:to-emerald-500/30",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Cursos gravados",
      description: "Sob demanda",
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "hover:from-purple-500/30 hover:to-pink-500/30",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Trilhas de aprendizagem",
      description: "Formações modulares",
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "hover:from-orange-500/30 hover:to-red-500/30",
    },
  ]

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-12 font-bold mb-6 leading-tight">
              <span className="block text-white">Capacitação e </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#8FD4F7] to-[#49B5EA]">
                Treinamentos
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#C5E8FA] leading-relaxed mb-12 max-w-3xl mx-auto">
              Na Public Partner, acreditamos que a transformação da gestão pública começa com o desenvolvimento de
              pessoas. Por isso, oferecemos programas de capacitação e treinamentos especialmente voltados a gestores, técnicos e servidores públicos, com foco em conteúdo prático, atualizado e customizado conforme as necessidades de cada instituição.
            </p>
          </div>
        </div>
      </section>

      {/* Introdução Section - Fundo branco */}
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
          <div className="max-w-4xl mx-auto fade-in-section opacity-0 transition-all duration-1000">
            <div className="bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] border border-[#49B5EA]/20 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Nossa proposta vai além da simples transmissão de conhecimento: promovemos a aplicação prática dos temas abordados, utilizando estudos de caso reais, simulações e troca de experiências que agregam valor imediato à rotina dos participantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Fundo branco */}
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
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Abordagem Personalizada",
                description:
                  "Cada órgão público possui sua própria realidade, desafios e limitações. Por isso, nossos cursos são planejados sob medida, a partir de um diagnóstico prévio e alinhamento de expectativas. O objetivo é garantir o máximo aproveitamento dos participantes e resultados efetivos para a instituição.",
                color: "from-blue-500/20 to-indigo-500/20",
                hoverColor: "hover:from-blue-500/30 hover:to-indigo-500/30",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Conteúdo Atualizado e Alinhado às Normas",
                description:
                  "Todas as formações seguem as diretrizes das legislações mais recentes, especialmente da Nova Lei de Licitações e Contratos (Lei nº 14.133/2021), da jurisprudência dos Tribunais de Contas, da LINDB, além das melhores práticas em gestão pública contemporânea.",
                color: "from-emerald-500/20 to-teal-500/20",
                hoverColor: "hover:from-emerald-500/30 hover:to-teal-500/30",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Aplicação Prática",
                description:
                  "Promovemos a aplicação prática dos temas abordados, utilizando estudos de caso reais, simulações e troca de experiências que agregam valor imediato à rotina dos participantes.",
                color: "from-purple-500/20 to-pink-500/20",
                hoverColor: "hover:from-purple-500/30 hover:to-pink-500/30",
              },
            ].map((approach, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 bg-white border border-slate-200 hover:border-[#49B5EA]/50 group hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${approach.color} ${approach.hoverColor} rounded-2xl mb-8 group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-[#49B5EA] group-hover:scale-110 transition-transform duration-300">
                      {approach.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-slate-900 group-hover:text-[#49B5EA] transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section - Fundo gradiente */}
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
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-white border border-[#49B5EA]/30 rounded-full mb-8 shadow-sm">
              <Award className="h-4 w-4 text-[#49B5EA] mr-2" />
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Temas Estratégicos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Temas </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Estratégicos
              </span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Oferecemos treinamentos nas seguintes áreas (entre outras):
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 group flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-[#49B5EA]/50 hover:bg-white hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-medium">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section - Fundo branco */}
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
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#49B5EA]/10 to-[#7ACCF4]/10 border border-[#49B5EA]/30 rounded-full mb-8">
              <Monitor className="h-4 w-4 text-[#49B5EA] mr-2" />
              <span className="text-sm font-medium text-[#49B5EA] tracking-wider uppercase">Modalidades</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Modalidades </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Disponíveis
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modalities.map((modality, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 bg-white border border-slate-200 hover:border-[#49B5EA]/50 group hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${modality.color} ${modality.hoverColor} rounded-2xl mb-8 group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-[#49B5EA] group-hover:scale-110 transition-transform duration-300">
                      {modality.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-slate-900 group-hover:text-[#49B5EA] transition-colors duration-300">
                    {modality.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{modality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fundo gradiente */}
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
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              <span className="text-slate-900">Curso </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Sob Medida
              </span>
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed mb-12">
              Deseja montar um curso sob medida para sua instituição? Entre em contato com nossa equipe técnica e
              comercial. Estamos prontos para ajudá-lo a capacitar sua equipe de forma estratégica e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-[#49B5EA]/30 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contato">
                  Solicite um Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-[#49B5EA]/50 text-[#49B5EA] hover:bg-[#49B5EA] hover:text-white px-10 py-4 text-lg font-semibold bg-white/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contato">Fale com Nossa Equipe</Link>
              </Button>
            </div>

            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7ACCF4]/10 to-[#49B5EA]/10 border border-[#7ACCF4]/30 rounded-full mb-4">
                <ExternalLink className="h-4 w-4 text-[#7ACCF4] mr-2" />
                <span className="text-sm font-medium text-[#7ACCF4] tracking-wider uppercase">Public Trainer</span>
              </div>
              <p className="text-lg text-slate-700 mb-6">
                Conheça mais sobre nossos cursos acessando:
              </p>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-[#7ACCF4]/50 text-[#7ACCF4] hover:bg-[#7ACCF4] hover:text-white px-8 py-3 text-lg font-semibold bg-white/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://www.publictrainer.com.br" target="_blank" rel="noopener noreferrer">
                  www.publictrainer.com.br
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
