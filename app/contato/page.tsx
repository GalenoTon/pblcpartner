"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export default function ContatoPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              <MessageSquare className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Fale Conosco</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-12 leading-tight">
              <span className="text-white">Entre em </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300">
                Contato
              </span>
            </h1>

            <p className="text-2xl text-slate-300 leading-relaxed">
              Estamos prontos para ajudar sua organização a alcançar resultados excepcionais. Entre em contato conosco e
              descubra nossas soluções personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in-section opacity-0 transition-all duration-1000">
              <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-bold mb-8 text-white">Envie sua Mensagem</h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-3">
                          Nome Completo
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-3">
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-3">
                          Assunto
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12"
                          placeholder="Como podemos ajudar?"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
                        placeholder="Descreva seu projeto ou necessidade..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-white">Informações de Contato</h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-10">
                    Nossa equipe está sempre disponível para atender suas necessidades. Entre em contato através dos
                    canais abaixo ou agende uma reunião.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-6 w-6" />,
                      title: "E-mail",
                      info: "contato@publicpartner.com.br",
                      color: "from-blue-500/20 to-indigo-500/20",
                      hoverColor: "hover:from-blue-500/30 hover:to-indigo-500/30",
                      iconColor: "text-blue-400",
                    },
                    {
                      icon: <Phone className="h-6 w-6" />,
                      title: "Telefone",
                      info: "(11) 9999-9999",
                      color: "from-green-500/20 to-emerald-500/20",
                      hoverColor: "hover:from-green-500/30 hover:to-emerald-500/30",
                      iconColor: "text-green-400",
                    },
                    {
                      icon: <MapPin className="h-6 w-6" />,
                      title: "Localização",
                      info: "Rio de Janeiro, RJ",
                      color: "from-purple-500/20 to-pink-500/20",
                      hoverColor: "hover:from-purple-500/30 hover:to-pink-500/30",
                      iconColor: "text-purple-400",
                    },
                    {
                      icon: <Clock className="h-6 w-6" />,
                      title: "Horário de Atendimento",
                      info: "Segunda a Sexta: 8h às 18h",
                      color: "from-orange-500/20 to-red-500/20",
                      hoverColor: "hover:from-orange-500/30 hover:to-red-500/30",
                      iconColor: "text-orange-400",
                    },
                  ].map((contact, index) => (
                    <Card
                      key={index}
                      className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50 group hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${contact.color} ${contact.hoverColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                          >
                            <div
                              className={`${contact.iconColor} group-hover:scale-110 transition-transform duration-300`}
                            >
                              {contact.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-2 text-lg group-hover:text-cyan-400 transition-colors duration-300">
                              {contact.title}
                            </h3>
                            <p className="text-slate-300 font-medium">{contact.info}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
