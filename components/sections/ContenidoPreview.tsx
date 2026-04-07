import Link from 'next/link'
import { Headphones, Play, ArrowRight, Instagram } from 'lucide-react'

const contenidos = [
  {
    tipo: 'Podcast',
    icon: <Headphones size={16} />,
    titulo: 'Cómo manejar la ansiedad en el día a día',
    descripcion: 'Herramientas prácticas y sencillas para calmar la mente cuando todo se siente demasiado.',
    color: 'bg-verde-claro',
    tag_color: 'bg-verde text-white',
    duracion: '22 min',
  },
  {
    tipo: 'Video',
    icon: <Play size={16} />,
    titulo: 'Señales de que necesitas apoyo psicológico',
    descripcion: 'Aprende a identificar las señales que tu mente y cuerpo te dan cuando necesitan ayuda.',
    color: 'bg-rosa-light',
    tag_color: 'bg-rosa-acento text-white',
    duracion: '8 min',
  },
  {
    tipo: 'Podcast',
    icon: <Headphones size={16} />,
    titulo: 'Crianza con apego: lo que los niños necesitan',
    descripcion: 'Una conversación honesta sobre la crianza respetuosa y su impacto en la salud emocional.',
    color: 'bg-beige',
    tag_color: 'bg-cafe text-white',
    duracion: '30 min',
  },
]

export default function ContenidoPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Podcast & Videos</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cafe mt-2">
              Contenido gratuito para ti
            </h2>
          </div>
          <Link
            href="/contenido"
            className="inline-flex items-center gap-2 text-rosa-acento font-body font-medium hover:gap-3 transition-all group self-start md:self-end"
          >
            Ver todo el contenido
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
          {contenidos.map((c) => (
            <article key={c.titulo} className="group rounded-2xl overflow-hidden border border-cafe/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
              {/* Thumbnail placeholder */}
              <div className={`${c.color} h-36 flex items-center justify-center text-4xl relative`}>
                <span>🎙️</span>
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-body font-medium ${c.tag_color}`}>
                    {c.icon} {c.tipo}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-cafe/70 text-white text-xs px-2 py-0.5 rounded-full font-body">
                  {c.duracion}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-accent text-base font-medium text-cafe mb-2 leading-snug">{c.titulo}</h3>
                <p className="font-body text-sm text-cafe-light leading-relaxed flex-1">{c.descripcion}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-rosa-acento text-sm font-body font-medium hover:gap-3 transition-all">
                  Escuchar ahora <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Social CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-6 md:p-8 bg-crema rounded-2xl">
          <div className="text-center sm:text-left">
            <p className="font-accent text-cafe font-medium">¿Quieres más contenido?</p>
            <p className="font-body text-sm text-cafe-light">Sígueme en redes para contenido nuevo cada semana</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rosa-acento to-cafe text-white text-sm font-body font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <Link
              href="/contenido"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-cafe/20 text-cafe text-sm font-body font-medium rounded-full hover:border-rosa-acento hover:text-rosa-acento transition-colors"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
