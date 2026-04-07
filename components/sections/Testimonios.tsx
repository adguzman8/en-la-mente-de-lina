const testimonios = [
  {
    texto: 'Lina me ayudó a entender mis emociones de una manera que nunca había podido hacerlo sola. Cada sesión fue un espacio de calma y claridad que necesitaba.',
    nombre: 'María C.',
    rol: 'Paciente individual',
    emoji: '🌸',
  },
  {
    texto: 'Como mamá, siempre me preocupaba el comportamiento de mi hijo. Con la guía de Lina, aprendí herramientas que transformaron nuestra relación en casa.',
    nombre: 'Valentina R.',
    rol: 'Mamá en terapia familiar',
    emoji: '🌿',
  },
  {
    texto: 'Empezar fue lo más difícil, pero valió cada paso. Lina crea un ambiente donde uno se siente completamente seguro de ser honesto.',
    nombre: 'Juliana M.',
    rol: 'Paciente adolescente',
    emoji: '💚',
  },
]

export default function Testimonios() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-verde-claro/30 to-beige/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Voces que inspiran</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cafe mt-2">
            Lo que dicen quienes han dado el paso
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonios.map((t, i) => (
            <blockquote
              key={t.nombre}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span className="text-3xl mb-4 block">{t.emoji}</span>
              <p className="font-accent text-base italic text-cafe leading-relaxed flex-1 mb-6">
                "{t.texto}"
              </p>
              <footer className="border-t border-beige pt-4">
                <p className="font-body text-sm font-medium text-cafe">{t.nombre}</p>
                <p className="font-body text-xs text-cafe-light">{t.rol}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Stars rating */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm">
            <span className="text-lg">⭐⭐⭐⭐⭐</span>
            <span className="font-body text-sm text-cafe-light">5.0 · Más de 100 reseñas positivas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
