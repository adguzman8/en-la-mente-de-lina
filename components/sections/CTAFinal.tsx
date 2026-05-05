import { Calendar, ArrowRight } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative */}
        <div className="flex justify-center gap-2 mb-6 text-2xl" aria-hidden>
          <span className="animate-float">🌸</span>
          <span className="animate-float" style={{ animationDelay: '1s' }}>🌿</span>
          <span className="animate-float" style={{ animationDelay: '2s' }}>🌸</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cafe mb-4 leading-tight">
          Dar el primer paso también{' '}
          <em className="text-rosa-acento not-italic">es parte del proceso</em>
        </h2>

        <p className="font-body text-base md:text-lg text-cafe-light max-w-xl mx-auto mb-10 leading-relaxed">
          No tienes que esperar a estar en crisis para buscar apoyo. Cuidar tu salud mental es un acto de amor hacia ti mismo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/573167209974?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rosa-acento text-white font-body font-medium text-base rounded-full hover:bg-cafe transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            <Calendar size={20} />
            Agendar mi cita
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/573167209974"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cafe/20 text-cafe font-body font-medium text-base rounded-full hover:border-rosa-acento hover:text-rosa-acento transition-all duration-200"
          >
            💬 Hacer una consulta
          </a>
        </div>

        <p className="mt-8 font-accent text-sm italic text-cafe-light/70">
          Respondo en menos de 24 horas · Sesiones presenciales y virtuales
        </p>
      </div>
    </section>
  )
}
