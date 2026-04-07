import Link from 'next/link'
import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cafe text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌸</span>
              <div>
                <p className="font-display text-lg leading-tight text-white/80">En la mente de</p>
                <p className="font-display text-xl leading-tight text-rosa-principal font-semibold -mt-1">Lina</p>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Un espacio seguro para entender tu mente y transformar tu vida.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-accent text-sm font-medium text-rosa-principal mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/contenido', label: 'Podcast & Videos' },
                { href: '/tienda', label: 'Tienda' },
                { href: '/sobre-lina', label: 'Sobre Lina' },
                { href: '/contacto', label: 'Contáctanos' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-white/60 hover:text-rosa-principal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-accent text-sm font-medium text-rosa-principal mb-4 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2">
              {['Psicología infantil', 'Psicología adolescente', 'Psicología individual', 'Terapia de pareja', 'Terapia familiar'].map((s) => (
                <li key={s}>
                  <Link href="/servicios" className="font-body text-sm text-white/60 hover:text-rosa-principal transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-sm font-medium text-rosa-principal mb-4 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-rosa-principal transition-colors"
              >
                <MessageCircle size={16} />
                <span className="font-body text-sm">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-rosa-principal transition-colors"
              >
                <Instagram size={16} />
                <span className="font-body text-sm">@enLamentedeLina</span>
              </a>
              <a
                href="mailto:hola@enlamentedelina.com"
                className="flex items-center gap-2 text-white/60 hover:text-rosa-principal transition-colors"
              >
                <Mail size={16} />
                <span className="font-body text-sm">hola@enlamentedelina.com</span>
              </a>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/573000000000?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-rosa-acento text-white text-sm font-body font-medium rounded-full hover:bg-rosa-principal transition-colors"
              >
                Agendar cita
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} En la mente de Lina. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-white/40 flex items-center gap-1">
            Hecho con <Heart size={12} className="text-rosa-principal" /> y amor
          </p>
        </div>
      </div>
    </footer>
  )
}
