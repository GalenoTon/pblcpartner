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
    <div className="min-h-screen bg-slate-900 text-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.03)_50%,transparent_75%)] bg-[length:60px_60px]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full mb-12">
              <GraduationCap className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">
                Desenvolvimento Profissional
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-12 leading-tight">
              <span className="text-white">Capacitação e </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300">
                Treinamentos
              </span>
            </h1>

            <p className="text-2xl text-slate-300 leading-relaxed">
              Na Public Partner, acreditamos que a transformação da gestão pública começa com o desenvolvimento de
              pessoas. Oferecemos programas de capacitação especialmente voltados a gestores, técnicos e servidores
              públicos.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Abordagem Personalizada",
                description:
                  "Cada órgão público possui sua própria realidade, desafios e limitações. Nossos cursos são planejados sob medida, a partir de um diagnóstico prévio e alinhamento de expectativas.",
                color: "from-blue-500/20 to-indigo-500/20",
                hoverColor: "hover:from-blue-500/30 hover:to-indigo-500/30",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Conteúdo Atualizado",
                description:
                  "Todas as formações seguem as diretrizes das legislações mais recentes, especialmente da Nova Lei de Licitações e Contratos (Lei nº 14.133/2021) e jurisprudência dos Tribunais de Contas.",
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
                className={`fade-in-section opacity-0 transition-all duration-1000 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50 group hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${approach.color} ${approach.hoverColor} rounded-2xl mb-8 group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {approach.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed flex-grow">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full mb-8">
              <Award className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Temas Estratégicos</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Temas </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Estratégicos
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Oferecemos treinamentos nas seguintes áreas (entre outras):
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 group flex items-center space-x-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full mb-8">
              <Monitor className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Modalidades</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Modalidades </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Disponíveis
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modalities.map((modality, index) => (
              <Card
                key={index}
                className={`fade-in-section opacity-0 transition-all duration-1000 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50 group hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${modality.color} ${modality.hoverColor} rounded-2xl mb-8 group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {modality.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {modality.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed flex-grow">{modality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000 text-center max-w-5xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-bold mb-12 leading-tight">
              <span className="text-white">Curso </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Sob Medida
              </span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              Deseja montar um curso sob medida para sua instituição? Entre em contato com nossa equipe técnica e
              comercial. Estamos prontos para ajudá-lo a capacitar sua equipe de forma estratégica e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
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
                className="group border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-10 py-4 text-lg font-semibold bg-slate-900/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contato">Fale com Nossa Equipe</Link>
              </Button>
            </div>

            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-full mb-4">
                <ExternalLink className="h-4 w-4 text-teal-400 mr-2" />
                <span className="text-sm font-medium text-teal-400 tracking-wider uppercase">Public Trainer</span>
              </div>
              <p className="text-lg text-slate-300 mb-6">
                Conheça nossa plataforma especializada em capacitação para o setor público
              </p>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-teal-400/50 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold bg-slate-900/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://www.publictrainer.com.br" target="_blank" rel="noopener noreferrer">
                  Acesse o Public Trainer
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
