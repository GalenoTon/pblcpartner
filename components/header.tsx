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

  // Cores personalizadas
  const customBlue = '#173882';
  const customBlueHover = '#49B5EA'; // Cor para hover
  const customBlueLight = '#2a5bbf'; // Cor mais clara para hover alternativo

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white shadow-md"}`}
    >
      <div className="container mx-auto px-14 pt-3 pb-3">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="relative w-32 h-32">
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
            <Link 
              href="/" 
              style={{ color: customBlue }}
              className="text-lg font-medium transition-all duration-200 hover:scale-105 hover:text-customBlueHover"
              onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
              onMouseOut={(e) => e.currentTarget.style.color = customBlue}
            >
              Home
            </Link>
            <Link 
              href="/sobre" 
              style={{ color: customBlue }}
              className="text-lg font-medium transition-all duration-200 hover:scale-105 hover:text-customBlueHover"
              onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
              onMouseOut={(e) => e.currentTarget.style.color = customBlue}
            >
              Sobre
            </Link>
            <Link 
              href="/#" 
              style={{ color: customBlue }}
              className="text-lg font-medium transition-all duration-200 hover:scale-105 hover:text-customBlueHover"
              onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
              onMouseOut={(e) => e.currentTarget.style.color = customBlue}
            >
              Serviços
            </Link>
            <Link 
              href="/#" 
              style={{ color: customBlue }}
              className="text-lg font-medium transition-all duration-200 hover:scale-105 hover:text-customBlueHover"
              onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
              onMouseOut={(e) => e.currentTarget.style.color = customBlue}
            >
              Capacitação
            </Link>
            {/* <Link 
              href="/#" 
              style={{ color: customBlue }}
              className="text-lg font-medium transition-all duration-200 hover:scale-105 hover:text-customBlueHover"
              onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
              onMouseOut={(e) => e.currentTarget.style.color = customBlue}
            >
              Contato
            </Link> */}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              style={{ 
                borderColor: customBlue,
                color: customBlue
              }}
              className="text-lg transition-all duration-300 hover:bg-blue hover:text-white hover:scale-105 hover:border-blue-600 hover:shadow-lg bg-transparent"
              asChild
              onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
              onMouseOut={(e) => e.currentTarget.style.color = customBlue}
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={{ color: customBlue }}
            className="md:hidden text-lg transition-all duration-200 hover:scale-110 hover:opacity-80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
            <nav className="flex flex-col space-y-6 p-6">
              <Link
                href="/"
                style={{ color: customBlue }}
                className="text-lg font-medium transition-all duration-200 hover:pl-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
                onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
                onMouseOut={(e) => e.currentTarget.style.color = customBlue}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                style={{ color: customBlue }}
                className="text-lg font-medium transition-all duration-200 hover:pl-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
                onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
                onMouseOut={(e) => e.currentTarget.style.color = customBlue}
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                style={{ color: customBlue }}
                className="text-lg font-medium transition-all duration-200 hover:pl-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
                onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
                onMouseOut={(e) => e.currentTarget.style.color = customBlue}
              >
                Serviços
              </Link>
              <Link
                href="/capacitacao"
                style={{ color: customBlue }}
                className="text-lg font-medium transition-all duration-200 hover:pl-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
                onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
                onMouseOut={(e) => e.currentTarget.style.color = customBlue}
              >
                Capacitação
              </Link>
              <Link
                href="/contato"
                style={{ color: customBlue }}
                className="text-lg font-medium transition-all duration-200 hover:pl-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
                onMouseOver={(e) => e.currentTarget.style.color = customBlueHover}
                onMouseOut={(e) => e.currentTarget.style.color = customBlue}
              >
                Contato
              </Link>
              <Button
                variant="outline"
                style={{ 
                  borderColor: customBlue,
                  color: customBlue
                }}
                className="text-lg transition-all duration-300  hover:text-white hover:border-blue-600 hover:shadow-lg w-full bg-transparent mt-4 py-2"
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