import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Heart, BookOpen, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Lina — En la mente de Lina',
  description: 'Conoce a Lina, psicóloga especializada en acompañamiento emocional, psicología infantil, individual y de pareja.',
}

const certificaciones = [
  { icon: '🎓', titulo: 'Psicóloga clínica', institucion: 'Universidad Nacional de Colombia' },
  { icon: '🏅', titulo: 'Especialización en Psicología Infantil', institucion: 'Pontificia Universidad Javeriana' },
  { icon: '📜', titulo: 'Certificación en Terapia Cognitivo-Conductual', institucion: 'Instituto Beck – Colombia' },
  { icon: '🌱', titulo: 'Formación en Crianza con Apego', institucion: 'Centro de Apego Seguro' },
  { icon: '💑', titulo: 'Certificación en Terapia de Pareja', institucion: 'Instituto Gottman Colombia' },
]

const valores = [
  {
    icon: <Heart className="text-rosa-acento" size={22} />,
    titulo: 'Empatía',
    descripcion: 'Escucho sin juzgar. Tu experiencia siempre será recibida con calidez y respeto.',
  },
  {
    icon: <Award className="text-verde" size={22} />,
    titulo: 'Ética profesional',
    descripcion: 'La confidencialidad y el bienestar de cada persona es mi prioridad absoluta.',
  },
  {
    icon: <BookOpen className="text-cafe" size={22} />,
    titulo: 'Formación continua',
    descripcion: 'Me actualizo constantemente para ofrecerte el mejor acompañamiento posible.',
  },
]

export default function SobreLinaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-crema gardenia-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start order-1">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-br from-rosa-light via-beige to-verde-claro overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-end justify-center pb-8">
                    <div className="text-center">
                      <div className="text-7xl mb-2">👩‍⚕️</div>
                      <p className="font-accent text-cafe/60 text-sm italic">Foto profesional de Lina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg p-4">
                  <p className="font-display text-2xl font-semibold text-rosa-acento">5+</p>
                  <p className="font-body text-xs text-cafe-light">años de experiencia</p>
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-verde-claro -z-10" />
              </div>
            </div>

            {/* Text */}
            <div className="order-2">
              <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Mi historia</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-cafe mt-2 mb-6 leading-tight">
                Soy Lina, psicóloga con propósito
              </h1>
              <p className="font-body text-base text-cafe-light leading-relaxed mb-4">
                Desde pequeña fui la persona a quien todos le contaban sus cosas. Siempre supe que quería ayudar a otros a entenderse mejor. Esa intuición me llevó a estudiar psicología, y cada año en esta profesión me reafirma que es lo que vine a hacer.
              </p>
              <p className="font-body text-base text-cafe-light leading-relaxed mb-6">
                Trabajo desde un enfoque humanista e integrativo, combinando herramientas cognitivo-conductuales, mindfulness y terapia basada en el apego, adaptando cada proceso a la persona que tengo enfrente.
              </p>
              <blockquote className="border-l-4 border-rosa-acento pl-5 mb-6">
                <p className="font-accent text-lg italic text-cafe leading-relaxed">
                  "Creo en el poder de ser escuchado sin juicio. En ese espacio es donde ocurre la transformación real."
                </p>
              </blockquote>
              <a
                href="https://wa.me/573000000000?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rosa-acento text-white font-body font-medium rounded-full hover:bg-cafe transition-colors"
              >
                <Calendar size={16} />
                Agendar cita conmigo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque terapéutico */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-cafe">Mi enfoque terapéutico</h2>
            <p className="font-body text-cafe-light mt-2 text-base">
              Una combinación de herramientas que se adapta a cada persona y momento
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { emoji: '🌱', titulo: 'Humanista', desc: 'Creo en el potencial innato de cada persona para sanar y crecer.' },
              { emoji: '🧠', titulo: 'Cognitivo-Conductual', desc: 'Trabajo con los pensamientos y conductas que generan malestar.' },
              { emoji: '🤍', titulo: 'Basado en el Apego', desc: 'Exploro cómo nuestras relaciones tempranas moldean nuestra vida emocional.' },
            ].map((e) => (
              <div key={e.titulo} className="text-center p-6 bg-crema rounded-2xl">
                <div className="text-4xl mb-3">{e.emoji}</div>
                <h3 className="font-accent font-medium text-cafe mb-2">{e.titulo}</h3>
                <p className="font-body text-sm text-cafe-light leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-12 md:py-16 bg-crema">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl text-cafe text-center mb-10">Mis valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {valores.map((v) => (
              <div key={v.titulo} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-accent font-medium text-cafe mb-1">{v.titulo}</h3>
                  <p className="font-body text-sm text-cafe-light leading-relaxed">{v.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl text-cafe text-center mb-10">Formación académica</h2>
          <div className="space-y-4">
            {certificaciones.map((c) => (
              <div key={c.titulo} className="flex items-start gap-4 p-5 bg-crema rounded-2xl hover:bg-beige transition-colors">
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div>
                  <p className="font-accent font-medium text-cafe">{c.titulo}</p>
                  <p className="font-body text-sm text-cafe-light">{c.institucion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
