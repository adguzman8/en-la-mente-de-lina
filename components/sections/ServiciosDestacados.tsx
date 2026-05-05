import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const servicios = [
  {
    icon: '👶',
    titulo: 'Psicología infantil',
    descripcion: 'Acompañamiento especializado para niños en su desarrollo emocional, conductual y social.',
    color: 'from-rosa-light to-beige',
    href: '/servicios#infantil',
  },
  {
    icon: '🧑',
    titulo: 'Psicología adolescente',
    descripcion: 'Apoyo en la construcción de identidad, autoestima y manejo de emociones en la adolescencia.',
    color: 'from-verde-claro to-beige',
    href: '/servicios#adolescente',
  },
  {
    icon: '👩',
    titulo: 'Psicología individual',
    descripcion: 'Espacio personal para trabajar el estrés, la ansiedad, la depresión y el crecimiento personal.',
    color: 'from-beige to-rosa-light',
    href: '/servicios#individual',
  },
  {
    icon: '💑',
    titulo: 'Terapia de pareja',
    descripcion: 'Herramientas para mejorar la comunicación, resolver conflictos y reconectar con tu pareja.',
    color: 'from-rosa-light to-verde-claro',
    href: '/servicios#pareja',
  },
  {
    icon: '👨‍👩‍👧',
    titulo: 'Terapia familiar',
    descripcion: 'Trabajo en dinámicas familiares, crianza y resolución de conflictos dentro del hogar.',
    color: 'from-verde-claro to-rosa-light',
    href: '/servicios#familiar',
  },
]

export default function ServiciosDestacados() {
  return (
    <section className="py-16 md:py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Lo que ofrezco</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cafe mt-2 mb-4">
            Servicios de acompañamiento
          </h2>
          <p className="font-body text-cafe-light text-base md:text-lg">
            Cada proceso es único. Encontremos juntos el camino que se adapta a tu momento de vida.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {servicios.map((s, i) => (
            <div
              key={s.titulo}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="font-display text-xl text-cafe mb-3">{s.titulo}</h3>
              <p className="font-body text-sm text-cafe-light leading-relaxed flex-1 mb-5">{s.descripcion}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-rosa-acento text-sm font-body font-medium hover:gap-3 transition-all group/link"
              >
                Ver más
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-rosa-acento to-cafe rounded-2xl p-6 md:p-8 flex flex-col justify-between text-white shadow-lg">
            <div>
              <p className="font-display text-2xl md:text-3xl mb-3 leading-tight">
                ¿No sabes por dónde empezar?
              </p>
              <p className="font-body text-sm text-white/80 mb-6">
                Escríbeme y con gusto te oriento sobre qué tipo de proceso se adapta mejor a lo que necesitas.
              </p>
            </div>
            <a
              href="https://wa.me/573167209974?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-cafe text-sm font-body font-medium rounded-full hover:bg-beige transition-colors self-start"
            >
              Escríbeme 💬
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-rosa-acento text-rosa-acento font-body font-medium rounded-full hover:bg-rosa-acento hover:text-white transition-all duration-200"
          >
            Ver todos los servicios
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
