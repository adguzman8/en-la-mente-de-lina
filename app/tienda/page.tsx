import type { Metadata } from 'next'
import { MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tienda — En la mente de Lina',
  description: 'Agendas emocionales, juegos terapéuticos, libros y material sensorial para tu bienestar.',
}

const categorias = [
  { id: 'agendas', label: '📔 Agendas', },
  { id: 'juegos', label: '🧸 Juegos' },
  { id: 'sensorial', label: '🧠 Sensorial' },
  { id: 'libros', label: '📚 Libros' },
]

const productos = [
  {
    id: 1,
    categoria: 'agendas',
    emoji: '📔',
    nombre: 'Agenda Emocional 2025',
    descripcion: 'Diseñada para registrar tus emociones, identificar patrones y construir autoconocimiento día a día. Incluye ejercicios semanales y espacios de reflexión.',
    precio: 45000,
    badge: 'Más vendido',
    badge_color: 'bg-rosa-acento text-white',
    bg: 'from-rosa-light to-beige',
  },
  {
    id: 2,
    categoria: 'agendas',
    emoji: '📓',
    nombre: 'Diario de Gratitud Infantil',
    descripcion: 'Para niños de 6 a 12 años. Con ilustraciones, actividades y espacios para explorar sus emociones de forma divertida.',
    precio: 35000,
    badge: 'Nuevo',
    badge_color: 'bg-verde text-white',
    bg: 'from-verde-claro to-beige',
  },
  {
    id: 3,
    categoria: 'juegos',
    emoji: '🧸',
    nombre: 'Kit de Juegos Terapéuticos',
    descripcion: 'Colección de juegos diseñados para trabajar emociones, habilidades sociales y comunicación en niños de 3 a 10 años.',
    precio: 80000,
    badge: null,
    badge_color: '',
    bg: 'from-beige to-rosa-light',
  },
  {
    id: 4,
    categoria: 'juegos',
    emoji: '🎲',
    nombre: 'Cartas de Emociones',
    descripcion: 'Baraja de 54 cartas con emociones, situaciones y preguntas para facilitar la expresión emocional en familia.',
    precio: 30000,
    badge: null,
    badge_color: '',
    bg: 'from-verde-claro to-rosa-light',
  },
  {
    id: 5,
    categoria: 'sensorial',
    emoji: '🧠',
    nombre: 'Kit Sensorial Básico',
    descripcion: 'Materiales de regulación sensorial para niños: texturas, masas, elementos visuales y auditivos seleccionados con criterio terapéutico.',
    precio: 10000,
    badge: 'Recomendado',
    badge_color: 'bg-cafe text-white',
    bg: 'from-beige to-verde-claro',
  },
    {
    id: 8,
    categoria: 'sensorial',
    emoji: '🧠',
    nombre: 'Kit Sensorial Básico',
    descripcion: 'Materiales de regulación sensorial para niños: texturas, masas, elementos visuales y auditivos seleccionados con criterio terapéutico.',
    precio: 10000,
    badge: '',
    badge_color: 'bg-cafe text-white',
    bg: 'from-beige to-verde-claro',
  },
  {
    id: 6,
    categoria: 'libros',
    emoji: '📚',
    nombre: 'Mis Emociones y Yo',
    descripcion: 'Una guía accesible y práctica escrita por Lina para aprender a identificar, comprender y gestionar el mundo emocional.',
    precio: 40000,
    badge: 'De Lina',
    badge_color: 'bg-rosa-acento text-white',
    bg: 'from-rosa-light to-verde-claro',
  },
  {
    id: 7,
    categoria: 'libros',
    emoji: '📖',
    nombre: 'Crianza con Amor',
    descripcion: 'Libro recomendado por Lina sobre crianza respetuosa, apego seguro y desarrollo emocional saludable en la infancia.',
    precio: 38000,
    badge: 'Recomendado',
    badge_color: 'bg-verde text-white',
    bg: 'from-verde-claro to-beige',
  },
  {
    id: 8,
    categoria: 'libros',
    emoji: '🧘',
    nombre: 'El Arte de la Calma',
    descripcion: 'Guía práctica para adultos sobre mindfulness, regulación emocional y bienestar mental en el día a día.',
    precio: 42000,
    badge: null,
    badge_color: '',
    bg: 'from-beige to-rosa-light',
  },
]

function formatPrecio(precio: number) {
  return `$${precio.toLocaleString('es-CO')}`
}

export default function TiendaPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-20 bg-beige/60 gardenia-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Recursos para tu bienestar</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cafe mt-2 mb-4">
            Tienda emocional
          </h1>
          <p className="font-body text-base md:text-lg text-cafe-light leading-relaxed">
            Herramientas diseñadas con amor y criterio terapéutico para acompañar tu proceso y el de tu familia.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-cafe/5 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <a
              href="#todos"
              className="flex-shrink-0 px-4 py-2 bg-rosa-acento text-white text-sm font-body rounded-full"
            >
              🛍️ Todos
            </a>
            {categorias.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="flex-shrink-0 px-4 py-2 bg-crema text-cafe text-sm font-body rounded-full hover:bg-rosa-light transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Productos por categoría */}
      {categorias.map((cat) => {
        const prods = productos.filter((p) => p.categoria === cat.id)
        return (
          <section key={cat.id} id={cat.id} className="py-12 md:py-16 first:bg-white even:bg-crema odd:bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl md:text-3xl text-cafe mb-8">{cat.label}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {prods.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col border border-cafe/5"
                  >
                    {/* Image */}
                    <div className={`h-44 bg-gradient-to-br ${p.bg} flex items-center justify-center text-5xl relative`}>
                      {p.emoji}
                      {p.badge && (
                        <span className={`absolute top-3 left-3 text-xs font-body font-medium px-2.5 py-1 rounded-full ${p.badge_color}`}>
                          {p.badge}
                        </span>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-accent text-base font-medium text-cafe mb-2">{p.nombre}</h3>
                      <p className="font-body text-sm text-cafe-light leading-relaxed flex-1 mb-4">{p.descripcion}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xl font-semibold text-rosa-acento">{formatPrecio(p.precio)}</span>
                        <a
                          href={`https://wa.me/573167209974?text=Hola%20Lina,%20quiero%20comprar:%20${encodeURIComponent(p.nombre)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-verde text-white text-sm font-body font-medium rounded-full hover:bg-verde-dark transition-colors"
                        >
                          <MessageCircle size={14} />
                          Comprar
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Note */}
      <section className="py-10 bg-white border-t border-cafe/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-cafe italic text-base">
            💬 Todos los pedidos se coordinan vía WhatsApp. Despacho a todo Colombia.
          </p>
          <p className="font-body text-sm text-cafe-light mt-2">
            Tiempo de entrega: 3–5 días hábiles · Envío desde Bogotá
          </p>
        </div>
      </section>
    </div>
  )
}
