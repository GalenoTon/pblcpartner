import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-32 h-16 md:w-40 md:h-20">
                <Image
                  src="/logopartner.png"
                  alt="Logo Public Partner"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md text-sm md:text-base">
              Consultoria especializada em Gestão Pública e Privada, com foco em soluções para Projetos de
              Infraestrutura e Tecnologia.
            </p>
            <div className="flex space-x-4">
  {/* <a 
    href="#" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-cyan-400 transition-colors"
  >
    <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
  </a> */}
  <a 
    href="https://www.instagram.com/public.partner/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-cyan-400 transition-colors"
  >
    <Instagram className="h-5 w-5 md:h-6 md:w-6" />
    
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm md:text-base">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm md:text-base">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm md:text-base">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/capacitacao" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm md:text-base">
                  Capacitação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-slate-300">
                <Mail className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base break-words">comercial@publicpartner.com.br</span>
              </li>
              <li className="flex items-start space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base">Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm md:text-base">© {new Date().getFullYear()} Public Partner. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}