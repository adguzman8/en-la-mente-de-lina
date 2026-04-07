import Link from 'next/link'
import { ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react'

const productos = [
  {
    emoji: '📔',
    nombre: 'Agenda emocional',
    descripcion: 'Para registrar tus emociones y construir autoconocimiento día a día.',
    precio: '$45.000',
    badge: 'Más vendido',
    badge_color: 'bg-rosa-acento text-white',
  },
  {
    emoji: '🧸',
    nombre: 'Kit de juegos terapéuticos',
    descripcion: 'Herramientas lúdicas para acompañar el desarrollo emocional de los niños.',
    precio: '$80.000',
    badge: 'Nuevo',
    badge_color: 'bg-verde text-white',
  },
  {
    emoji: '📚',
    nombre: 'Libro: Mis emociones',
    descripcion: 'Una guía accesible para entender y gestionar el mundo emocional.',
    precio: '$35.000',
    badge: null,
    badge_color: '',
  },
  {
    emoji: '🧠',
    nombre: 'Material sensorial',
    descripcion: 'Recursos sensoriales para niños con necesidades especiales de regulación.',
    precio: '$60.000',
    badge: null,
    badge_color: '',
  },
]

export default function TiendaPreview() {
  return (
    <section className="py-16 md:py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Recursos para ti</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cafe mt-2">
              Tienda emocional
            </h2>
            <p className="font-body text-cafe-light mt-2">
              Herramientas diseñadas con amor para tu proceso.
            </p>
          </div>
          <Link
            href="/tienda"
            className="inline-flex items-center gap-2 text-rosa-acento font-body font-medium hover:gap-3 transition-all group self-start md:self-end"
          >
            Ver tienda completa
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productos.map((p) => (
            <div
              key={p.nombre}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Product image placeholder */}
              <div className="h-40 bg-gradient-to-br from-beige to-rosa-light flex items-center justify-center text-5xl relative">
                {p.emoji}
                {p.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-body font-medium px-2.5 py-1 rounded-full ${p.badge_color}`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-accent text-base font-medium text-cafe mb-1">{p.nombre}</h3>
                <p className="font-body text-xs text-cafe-light leading-relaxed flex-1 mb-3">{p.descripcion}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-rosa-acento">{p.precio}</span>
                  <a
                    href={`https://wa.me/573000000000?text=Hola%20Lina,%20quiero%20comprar:%20${encodeURIComponent(p.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-verde text-white text-xs font-body font-medium rounded-full hover:bg-verde-dark transition-colors"
                  >
                    <MessageCircle size={12} />
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tienda"
            className="inline-flex items-center gap-2 px-7 py-3 bg-cafe text-white font-body font-medium rounded-full hover:bg-rosa-acento transition-colors"
          >
            <ShoppingBag size={18} />
            Explorar toda la tienda
          </Link>
        </div>
      </div>
    </section>
  )
}
