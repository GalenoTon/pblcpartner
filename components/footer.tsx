import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Public Partner</div>
                <div className="text-cyan-400 text-xs font-medium">Soluções Inteligentes</div>
              </div>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md">
              Consultoria especializada em Gestão Pública e Privada, com foco em soluções para Projetos de
              Infraestrutura e Tecnologia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/capacitacao" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Capacitação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>contato@publicpartner.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-start space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-400 mt-1" />
                <span>Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Public Partner. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
