import type { Metadata } from 'next'
import { Headphones, Play, Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contenido — En la mente de Lina',
  description: 'Podcast, videos y contenido gratuito sobre salud mental, emociones y bienestar.',
}

const podcasts = [
  {
    titulo: 'Cómo manejar la ansiedad en el día a día',
    descripcion: 'Herramientas prácticas y sencillas para calmar la mente cuando todo se siente demasiado.',
    duracion: '22 min',
    spotifyId: '', // Agrega tu ID de Spotify aquí
  },
  {
    titulo: 'Crianza con apego: lo que los niños necesitan',
    descripcion: 'Una conversación honesta sobre la crianza respetuosa y su impacto emocional.',
    duracion: '30 min',
    spotifyId: '',
  },
  {
    titulo: 'Autoestima: ¿de dónde viene y cómo trabajarla?',
    descripcion: 'Exploramos el origen de la autoestima y los pasos concretos para fortalecerla.',
    duracion: '25 min',
    spotifyId: '',
  },
]

const videos = [
  {
    titulo: 'Señales de que necesitas apoyo psicológico',
    descripcion: 'Aprende a identificar las señales que tu mente y cuerpo te dan cuando necesitan ayuda.',
    duracion: '8 min',
    youtubeId: '', // Agrega tu ID de YouTube aquí
  },
  {
    titulo: '3 técnicas para regular tus emociones',
    descripcion: 'Ejercicios simples que puedes hacer en cualquier momento para volver a tu centro.',
    duracion: '12 min',
    youtubeId: '',
  },
  {
    titulo: 'Cómo hablar de salud mental con tus hijos',
    descripcion: 'Guía práctica para introducir el lenguaje emocional en la crianza de forma natural.',
    duracion: '15 min',
    youtubeId: '',
  },
]

type FilterType = 'todos' | 'podcast' | 'video'

export default function ContenidoPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-20 bg-verde-claro/30 gardenia-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Aprende & crece</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cafe mt-2 mb-4">
            Podcast & Videos
          </h1>
          <p className="font-body text-base md:text-lg text-cafe-light leading-relaxed">
            Contenido gratuito para acompañarte en tu proceso de autoconocimiento y bienestar emocional.
          </p>
        </div>
      </section>

      {/* Podcast section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-verde-claro flex items-center justify-center">
              <Headphones size={18} className="text-verde" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-cafe">Podcast</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {podcasts.map((p) => (
              <div key={p.titulo} className="bg-verde-claro/30 rounded-2xl p-5 hover:bg-verde-claro/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-verde text-white flex items-center justify-center mb-4">
                  <Headphones size={20} />
                </div>
                <h3 className="font-accent text-base font-medium text-cafe mb-2">{p.titulo}</h3>
                <p className="font-body text-sm text-cafe-light mb-3 leading-relaxed">{p.descripcion}</p>
                <span className="font-body text-xs text-verde bg-verde/10 px-2 py-1 rounded-full">{p.duracion}</span>

                {p.spotifyId ? (
                  <div className="mt-4">
                    <iframe
                      src={`https://open.spotify.com/embed/episode/${p.spotifyId}`}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      className="rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="mt-4 p-3 bg-white/60 rounded-xl text-center">
                    <p className="font-body text-xs text-cafe-light">🎙️ Próximamente en Spotify</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Spotify CTA */}
          <div className="p-5 bg-crema rounded-2xl flex flex-col sm:flex-row items-center gap-4">
            <span className="text-3xl">🎧</span>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-accent text-cafe font-medium">Escucha el podcast completo</p>
              <p className="font-body text-sm text-cafe-light">Disponible en Spotify, Apple Podcasts y Google Podcasts</p>
            </div>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1DB954] text-white text-sm font-body font-medium rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
            >
              Abrir en Spotify
            </a>
          </div>
        </div>
      </section>

      {/* Videos section */}
      <section className="py-12 md:py-16 bg-crema">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-rosa-light flex items-center justify-center">
              <Play size={18} className="text-rosa-acento" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-cafe">Videos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {videos.map((v) => (
              <div key={v.titulo} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {v.youtubeId ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.titulo}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-rosa-light to-beige flex flex-col items-center justify-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-rosa-acento/80 flex items-center justify-center">
                      <Play size={22} className="text-white ml-1" />
                    </div>
                    <p className="font-body text-xs text-cafe-light">Próximamente</p>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-accent text-sm font-medium text-cafe mb-1">{v.titulo}</h3>
                  <p className="font-body text-xs text-cafe-light mb-2 leading-relaxed">{v.descripcion}</p>
                  <span className="font-body text-xs text-rosa-acento bg-rosa-light px-2 py-1 rounded-full">{v.duracion}</span>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube CTA */}
          <div className="p-5 bg-white rounded-2xl flex flex-col sm:flex-row items-center gap-4">
            <span className="text-3xl">📺</span>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-accent text-cafe font-medium">Ver todos los videos</p>
              <p className="font-body text-sm text-cafe-light">Suscríbete al canal para no perderte nada</p>
            </div>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#FF0000] text-white text-sm font-body font-medium rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={24} className="text-rosa-acento" />
            <h2 className="font-display text-2xl md:text-3xl text-cafe">Sígueme en Instagram</h2>
          </div>
          <p className="font-body text-cafe-light mb-8">
            Contenido diario sobre emociones, crianza y bienestar mental
          </p>

          {/* Instagram preview placeholder */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-lg mx-auto mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-gradient-to-br from-beige to-rosa-light flex items-center justify-center text-2xl hover:opacity-80 transition-opacity cursor-pointer"
              >
                {['🌸', '🧠', '🌿', '💙', '🌼', '✨'][i]}
              </div>
            ))}
          </div>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-rosa-acento to-cafe text-white font-body font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <Instagram size={18} />
            @enlamentedelina
          </a>
        </div>
      </section>
    </div>
  )
}
