'use client'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gardenia-bg overflow-hidden pt-20">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-verde-claro/40 blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full bg-rosa-light/50 blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-beige/60 blur-2xl -z-10" />

      {/* Floating gardenias */}
      <div className="absolute top-24 right-1/4 text-4xl opacity-20 animate-petal hidden md:block" aria-hidden>🌸</div>
      <div className="absolute bottom-32 left-16 text-3xl opacity-15 animate-float hidden md:block" style={{ animationDelay: '2s' }} aria-hidden>🌿</div>
      <div className="absolute top-1/3 right-10 text-2xl opacity-20 animate-float hidden lg:block" style={{ animationDelay: '4s' }} aria-hidden>🌸</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-verde-claro rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-verde animate-pulse" />
              <span className="font-body text-sm text-verde-dark">Psicología & Bienestar Emocional</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight text-cafe mb-6 text-balance">
              Un espacio seguro para{' '}
              <em className="text-rosa-acento not-italic">entender tu mente</em>{' '}
              y transformar tu vida
            </h1>

            <p className="font-body text-base md:text-lg text-cafe-light leading-relaxed mb-8 max-w-lg">
              Acompañamos procesos emocionales desde el respeto, la empatía y el crecimiento personal. Aquí estás en buenas manos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573000000000?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-rosa-acento text-white font-body font-medium rounded-full hover:bg-cafe transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <Calendar size={18} />
                Agendar cita
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-cafe/20 text-cafe font-body font-medium rounded-full hover:border-rosa-acento hover:text-rosa-acento transition-all duration-200"
              >
                Ver servicios
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-cafe/10">
              {[
                { value: '5+', label: 'Años de experiencia' },
                { value: '500+', label: 'Pacientes acompañados' },
                { value: '100%', label: 'Confidencial' },
              ].map((badge) => (
                <div key={badge.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl font-semibold text-rosa-acento">{badge.value}</p>
                  <p className="font-body text-xs text-cafe-light">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-[40%_60%_60%_40%/40%_40%_60%_60%] bg-gradient-to-br from-rosa-light via-beige to-verde-claro overflow-hidden shadow-2xl animate-float">
                {/* Replace with real <Image> once you have a photo */}
                <div className="w-full h-full flex items-end justify-center pb-8">
                  <div className="text-center">
                    <div className="text-7xl mb-2">👩‍⚕️</div>
                    <p className="font-accent text-cafe/60 text-sm italic">Foto de Lina</p>
                  </div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] border-2 border-rosa-principal/30 -z-10" />
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <span className="text-xl">🌸</span>
                <div>
                  <p className="font-display text-xs text-cafe/60">Psicóloga</p>
                  <p className="font-accent text-sm font-medium text-cafe">Lina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 64L60 53.3C120 43 240 21 360 16C480 11 600 21 720 26.7C840 32 960 32 1080 26.7C1200 21 1320 11 1380 5.3L1440 0V64H1380C1320 64 1200 64 1080 64C960 64 840 64 720 64C600 64 480 64 360 64C240 64 120 64 60 64H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
