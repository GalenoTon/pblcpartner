"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from 'next/image';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-25 h-25">
              <Image
                src="/logopartner.png"
                alt="Logo Public Partner"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/sobre" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/#" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Serviços
            </Link>
            <Link href="/#" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Capacitação
            </Link>
            <Link href="/#" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
              asChild
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                className="text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/capacitacao"
                className="text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Capacitação
              </Link>
              <Link
                href="/contato"
                className="text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 w-full bg-transparent"
                asChild
              >
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
