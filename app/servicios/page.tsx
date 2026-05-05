import type { Metadata } from 'next'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios — En la mente de Lina',
  description: 'Psicología infantil, adolescente, individual, terapia de pareja y familiar. Conoce todos los servicios de acompañamiento psicológico.',
}

const servicios = [
  {
    id: 'infantil',
    emoji: '👶',
    titulo: 'Psicología infantil',
    descripcion: 'Un espacio lúdico y seguro donde los niños pueden expresar sus emociones, trabajar sus miedos y fortalecer habilidades sociales a través del juego terapéutico.',
    beneficios: [
      'Desarrollo emocional saludable',
      'Manejo de conducta y límites',
      'Juego terapéutico como herramienta',
      'Apoyo en transiciones (colegio, hermanos, divorcios)',
      'Trabajo con la familia como sistema de apoyo',
    ],
    color: 'bg-rosa-light',
    border: 'border-rosa-acento/20',
  },
  {
    id: 'adolescente',
    emoji: '🧑',
    titulo: 'Psicología adolescente',
    descripcion: 'La adolescencia es un tiempo de cambios intensos. Acompañamos a los jóvenes en la construcción de su identidad, el manejo de las emociones y las relaciones.',
    beneficios: [
      'Construcción de identidad y autoestima',
      'Manejo de ansiedad y estrés escolar',
      'Relaciones con pares y límites sanos',
      'Toma de decisiones asertiva',
      'Comunicación familiar mejorada',
    ],
    color: 'bg-verde-claro',
    border: 'border-verde/20',
  },
  {
    id: 'individual',
    emoji: '👩',
    titulo: 'Psicología individual',
    descripcion: 'Un espacio solo para ti, donde trabajamos juntos en los aspectos emocionales que te generan malestar o que quieres transformar para vivir mejor.',
    beneficios: [
      'Manejo del estrés y la ansiedad',
      'Trabajo con depresión y tristeza persistente',
      'Crecimiento personal y autoconocimiento',
      'Duelos y pérdidas',
      'Establecimiento de metas y propósito de vida',
    ],
    color: 'bg-beige',
    border: 'border-cafe/10',
  },
  {
    id: 'pareja',
    emoji: '💑',
    titulo: 'Terapia de pareja',
    descripcion: 'Las relaciones necesitan cuidado. Te acompañamos a mejorar la comunicación, resolver conflictos de manera constructiva y reconectar con tu pareja.',
    beneficios: [
      'Comunicación asertiva y empática',
      'Manejo de conflictos sin daño',
      'Reconexión emocional y afectiva',
      'Trabajo en acuerdos y límites',
      'Apoyo en momentos de crisis',
    ],
    color: 'bg-rosa-light',
    border: 'border-rosa-acento/20',
  },
  {
    id: 'familiar',
    emoji: '👨‍👩‍👧',
    titulo: 'Terapia familiar',
    descripcion: 'La familia como sistema tiene dinámicas propias que a veces necesitan ajuste. Trabajamos juntos en mejorar la comunicación y el bienestar del hogar.',
    beneficios: [
      'Mejora de dinámicas familiares',
      'Crianza respetuosa y con apego',
      'Resolución de conflictos entre miembros',
      'Adaptación a cambios familiares',
      'Fortalecimiento de vínculos',
    ],
    color: 'bg-verde-claro',
    border: 'border-verde/20',
  },
]

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-20 bg-crema gardenia-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Acompañamiento personalizado</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cafe mt-2 mb-4">
            Servicios
          </h1>
          <p className="font-body text-base md:text-lg text-cafe-light leading-relaxed">
            Cada persona, familia y etapa de vida es única. Aquí encontrarás el espacio adecuado para lo que estás viviendo.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
          {servicios.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`rounded-3xl border ${s.border} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Visual side */}
                <div className={`${s.color} md:w-48 lg:w-64 flex-shrink-0 flex items-center justify-center py-10 md:py-0`}>
                  <span className="text-6xl md:text-7xl">{s.emoji}</span>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-cafe mb-3">{s.titulo}</h2>
                    <p className="font-body text-base text-cafe-light leading-relaxed mb-6">{s.descripcion}</p>
                    <div>
                      <p className="font-accent text-sm font-medium text-verde mb-3">Trabajamos en:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {s.beneficios.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="text-rosa-acento mt-0.5 flex-shrink-0">✦</span>
                            <span className="font-body text-sm text-cafe-light">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/573167209974?text=Hola%20Lina,%20me%20interesa%20el%20servicio%20de:%20${encodeURIComponent(s.titulo)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-rosa-acento text-white font-body font-medium rounded-full hover:bg-cafe transition-colors text-sm"
                    >
                      <Calendar size={16} />
                      Agendar sesión
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ quick */}
      <section className="py-12 md:py-16 bg-crema">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-cafe mb-4">¿Tienes preguntas?</h2>
          <p className="font-body text-cafe-light mb-6">
            Es completamente normal no saber por dónde empezar. Escríbeme y con gusto te oriento sin ningún compromiso.
          </p>
          <a
            href="https://wa.me/573167209974"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cafe text-white font-body font-medium rounded-full hover:bg-rosa-acento transition-colors"
          >
            💬 Escríbeme por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
