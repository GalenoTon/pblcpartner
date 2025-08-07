"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulando envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Erro no envio:', error)
    } finally {
      setIsSubmitting(false)
    }
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-12 font-bold mb-6 leading-tight">
              <span className="block text-white">Entre em </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] via-[#8FD4F7] to-[#49B5EA]">
                Contato
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#C5E8FA] leading-relaxed mb-12 max-w-3xl mx-auto">
              Estamos prontos para ajudar sua empresa ou instituição a alcançar novos patamares.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-24 bg-white relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(73,181,234,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-20"></div>

        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Formulário */}
            <div className="fade-in-section opacity-0 transition-all duration-1000">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">Envie sua mensagem</h2>
                  
                  {submitSuccess ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-4">
                          <Send className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-green-800">Mensagem enviada com sucesso!</h3>
                          <p className="text-green-700 mt-1">Nossa equipe entrará em contato em breve.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome completo</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#49B5EA] focus:border-[#49B5EA] transition-all"
                          placeholder="Seu nome"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#49B5EA] focus:border-[#49B5EA] transition-all"
                            placeholder="seu@email.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#49B5EA] focus:border-[#49B5EA] transition-all"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Assunto</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#49B5EA] focus:border-[#49B5EA] transition-all bg-white"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="consultoria">Consultoria</option>
                          <option value="orcamento">Orçamento</option>
                          <option value="parceria">Parceria</option>
                          <option value="duvidas">Dúvidas</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#49B5EA] focus:border-[#49B5EA] transition-all"
                          placeholder="Como podemos ajudar?"
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="group w-full bg-gradient-to-r from-[#49B5EA] to-[#2C9CDB] hover:from-[#3EA5D8] hover:to-[#1E8CC7] text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-[#49B5EA]/25 transition-all duration-300"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Enviando...' : (
                            <>
                              Enviar mensagem
                              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="fade-in-section opacity-0 transition-all duration-1000 delay-300">
              <div className="bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] border border-[#49B5EA]/20 rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Informações de contato</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-[#49B5EA]/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#49B5EA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">E-mail</h3>
                      <p className="text-slate-700">contato@publicpartner.com.br</p>
                      <p className="text-slate-700">comercial@publicpartner.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#49B5EA]/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#49B5EA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Telefone</h3>
                      <p className="text-slate-700">(21) 1234-5678</p>
                      <p className="text-slate-700">(21) 98765-4321 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#49B5EA]/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#49B5EA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Endereço</h3>
                      <p className="text-slate-700">Av. das Américas, 5000</p>
                      <p className="text-slate-700">Barra da Tijuca</p>
                      <p className="text-slate-700">Rio de Janeiro - RJ</p>
                      <p className="text-slate-700">CEP: 22793-081</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#49B5EA]/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#49B5EA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Horário de atendimento</h3>
                      <p className="text-slate-700">Segunda a sexta: 9h às 18h</p>
                      <p className="text-slate-700">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-bold text-xl text-slate-800 mb-4">Redes sociais</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white p-3 rounded-full shadow-sm border border-slate-200 hover:bg-[#49B5EA]/10 transition-colors">
                      <svg className="h-5 w-5 text-[#49B5EA]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white p-3 rounded-full shadow-sm border border-slate-200 hover:bg-[#49B5EA]/10 transition-colors">
                      <svg className="h-5 w-5 text-[#49B5EA]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white p-3 rounded-full shadow-sm border border-slate-200 hover:bg-[#49B5EA]/10 transition-colors">
                      <svg className="h-5 w-5 text-[#49B5EA]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white p-3 rounded-full shadow-sm border border-slate-200 hover:bg-[#49B5EA]/10 transition-colors">
                      <svg className="h-5 w-5 text-[#49B5EA]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Localização */}
      <section className="py-16 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="container mx-auto relative">
          <div className="fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Nossa localização</h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.954140467543!2d-43.3641919242836!3d-22.98207907925891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07a5b9e926!2sAv.%20das%20Am%C3%A9ricas%2C%205000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-081!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#49B5EA]/20 shadow-lg">
                <h3 className="font-bold text-[#49B5EA] flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Public Partner
                </h3>
                <p className="text-slate-700">Av. das Américas, 5000</p>
                <p className="text-slate-700">Barra da Tijuca - RJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-[#E6F7FF] to-[#D1F0FF] relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,181,234,0.08),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_65%,rgba(73,181,234,0.03)_90%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Pronto para </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B5EA] to-[#7ACCF4]">
                Transformar sua Gestão?
              </span>
            </h2>
            <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe de especialistas está pronta para ajudar sua organização a alcançar resultados excepcionais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              <Button
                size="lg"
                variant="outline"
                className="group bg-white text-[#49B5EA] border-[#49B5EA] hover:bg-[#49B5EA]/10 px-10 py-6 text-lg font-semibold shadow-sm transition-all duration-300 hover:scale-[1.03]"
                asChild
              >
                <Link href="/servicos">
                  Conheça nossos serviços
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