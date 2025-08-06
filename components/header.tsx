"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
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
  const customBlueHover = '#49B5EA';
  const customBlueLight = '#2a5bbf';

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
            className="md:hidden text-lg transition-all duration-300 hover:scale-110 hover:opacity-80 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Background overlay */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu content */}
            <div className="absolute top-0 left-0 w-full bg-white shadow-xl transform transition-transform duration-300 ease-out">
              {/* Header space */}
              <div className="h-20 bg-white border-b border-gray-100"></div>
              
              {/* Navigation items */}
              <nav className="px-6 py-8 bg-gradient-to-b from-white to-gray-50">
                <div className="space-y-1">
                  <Link
                    href="/"
                    className="flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-sm group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span 
                      style={{ color: customBlue }}
                      className="text-xl font-semibold group-hover:text-blue-600 transition-colors"
                    >
                      Home
                    </span>
                    <ChevronRight 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </Link>

                  <Link
                    href="/sobre"
                    className="flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-sm group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span 
                      style={{ color: customBlue }}
                      className="text-xl font-semibold group-hover:text-blue-600 transition-colors"
                    >
                      Sobre
                    </span>
                    <ChevronRight 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </Link>

                  <Link
                    href="/servicos"
                    className="flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-sm group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span 
                      style={{ color: customBlue }}
                      className="text-xl font-semibold group-hover:text-blue-600 transition-colors"
                    >
                      Serviços
                    </span>
                    <ChevronRight 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </Link>

                  <Link
                    href="/capacitacao"
                    className="flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-sm group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span 
                      style={{ color: customBlue }}
                      className="text-xl font-semibold group-hover:text-blue-600 transition-colors"
                    >
                      Capacitação
                    </span>
                    <ChevronRight 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </Link>

                  <Link
                    href="/contato"
                    className="flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-sm group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span 
                      style={{ color: customBlue }}
                      className="text-xl font-semibold group-hover:text-blue-600 transition-colors"
                    >
                      Contato
                    </span>
                    <ChevronRight 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </Link>
                </div>

                {/* CTA Button */}
                <div className="mt-8 px-4">
                  <Button
                    style={{ 
                      backgroundColor: customBlue,
                      borderColor: customBlue
                    }}
                    className="w-full text-white text-lg font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    asChild
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/contato">
                      Fale Conosco
                    </Link>
                  </Button>
                </div>

                {/* Decorative element */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center space-x-2 text-gray-400">
                    <div className="w-8 h-px bg-gray-300"></div>
                    <span className="text-sm font-medium">Public Partner</span>
                    <div className="w-8 h-px bg-gray-300"></div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}