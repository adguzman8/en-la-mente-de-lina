'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contenido', label: 'Contenido' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/sobre-lina', label: 'Sobre Lina' },
  { href: '/contacto', label: 'Contáctanos' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌸</span>
            <div>
              <p className="font-display text-lg leading-tight text-cafe font-medium">En la mente de</p>
              <p className="font-display text-xl leading-tight text-rosa-acento font-semibold -mt-1">Lina</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-cafe-light hover:text-rosa-acento transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-rosa-acento group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
            <a
              href="https://wa.me/573000000000?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-rosa-acento text-white text-sm font-body font-medium rounded-full hover:bg-cafe transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Agendar cita
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-cafe hover:text-rosa-acento transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-rosa-light px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-body text-base text-cafe hover:text-rosa-acento transition-colors py-2 border-b border-beige last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/573000000000?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 w-full text-center px-5 py-3 bg-rosa-acento text-white font-body font-medium rounded-full hover:bg-cafe transition-colors"
          >
            Agendar cita 🌸
          </a>
        </div>
      </div>
    </header>
  )
}
