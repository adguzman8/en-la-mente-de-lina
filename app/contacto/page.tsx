'use client'
import { useState } from 'react'
import { MessageCircle, Instagram, Mail, Clock, MapPin, Send, Check } from 'lucide-react'

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return
    setLoading(true)
    // Simula envío (reemplazar con tu lógica: EmailJS, Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setEnviado(true)
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-20 bg-crema gardenia-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">Estoy aquí para ti</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cafe mt-2 mb-4">
            Contáctanos
          </h1>
          <p className="font-body text-base md:text-lg text-cafe-light leading-relaxed">
            ¿Tienes preguntas o quieres dar el primer paso? Escríbeme, con gusto te respondo.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Info lateral */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl text-cafe mb-6">Información de contacto</h2>
              </div>

              {/* Métodos de contacto */}
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-accent font-medium text-cafe">WhatsApp</p>
                  <p className="font-body text-sm text-cafe-light">+57 300 000 0000</p>
                  <p className="font-body text-xs text-verde mt-1">Respuesta rápida ✓</p>
                </div>
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-rosa-light/30 rounded-2xl hover:bg-rosa-light/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rosa-acento to-cafe flex items-center justify-center flex-shrink-0">
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-accent font-medium text-cafe">Instagram</p>
                  <p className="font-body text-sm text-cafe-light">@enlamentedelina</p>
                </div>
              </a>

              <a
                href="mailto:hola@enlamentedelina.com"
                className="flex items-start gap-4 p-4 bg-beige/50 rounded-2xl hover:bg-beige transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-cafe flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-accent font-medium text-cafe">Email</p>
                  <p className="font-body text-sm text-cafe-light">hola@enlamentedelina.com</p>
                </div>
              </a>

              {/* Horarios */}
              <div className="p-4 bg-verde-claro/40 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-verde" />
                  <p className="font-accent font-medium text-cafe text-sm">Horarios de atención</p>
                </div>
                <div className="space-y-1.5">
                  {[
                    { dia: 'Lunes – Viernes', hora: '8:00 AM – 6:00 PM' },
                    { dia: 'Sábados', hora: '9:00 AM – 1:00 PM' },
                    { dia: 'Domingos', hora: 'Cerrado' },
                  ].map((h) => (
                    <div key={h.dia} className="flex justify-between">
                      <span className="font-body text-xs text-cafe-light">{h.dia}</span>
                      <span className="font-body text-xs font-medium text-cafe">{h.hora}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start gap-3 p-4 bg-crema rounded-2xl">
                <MapPin size={18} className="text-rosa-acento mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-accent font-medium text-cafe text-sm mb-1">Ubicación</p>
                  <p className="font-body text-sm text-cafe-light">Cajicá - Cundinamarca, Colombia</p>
                  <p className="font-body text-xs text-verde mt-1">También atención virtual 🌐</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl text-cafe mb-6">Envíame un mensaje</h2>

              {enviado ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-verde-claro flex items-center justify-center mb-4">
                    <Check size={28} className="text-verde" />
                  </div>
                  <h3 className="font-display text-xl text-cafe mb-2">¡Mensaje enviado!</h3>
                  <p className="font-body text-cafe-light text-sm max-w-xs">
                    Te responderé pronto. Si necesitas respuesta urgente, escríbeme por WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-rosa-acento text-white font-body font-medium rounded-full hover:bg-cafe transition-colors text-sm"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm font-medium text-cafe mb-1.5" htmlFor="nombre">
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-cafe/15 bg-crema focus:outline-none focus:ring-2 focus:ring-rosa-acento/30 focus:border-rosa-acento font-body text-sm text-cafe placeholder-cafe/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-cafe mb-1.5" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-cafe/15 bg-crema focus:outline-none focus:ring-2 focus:ring-rosa-acento/30 focus:border-rosa-acento font-body text-sm text-cafe placeholder-cafe/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-cafe mb-1.5" htmlFor="asunto">
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cafe/15 bg-crema focus:outline-none focus:ring-2 focus:ring-rosa-acento/30 focus:border-rosa-acento font-body text-sm text-cafe transition-colors"
                    >
                      <option value="">Selecciona un motivo</option>
                      <option value="cita">Quiero agendar una cita</option>
                      <option value="info">Información sobre servicios</option>
                      <option value="tienda">Pregunta sobre la tienda</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-cafe mb-1.5" htmlFor="mensaje">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntame en qué puedo ayudarte..."
                      className="w-full px-4 py-3 rounded-xl border border-cafe/15 bg-crema focus:outline-none focus:ring-2 focus:ring-rosa-acento/30 focus:border-rosa-acento font-body text-sm text-cafe placeholder-cafe/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.nombre || !form.email || !form.mensaje}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-rosa-acento text-white font-body font-medium rounded-full hover:bg-cafe transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  <p className="font-body text-xs text-cafe-light">
                    * Campos obligatorios. Tu información es confidencial y nunca será compartida.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-10 bg-crema">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-cafe italic text-base mb-4">
            ¿Prefieres algo más inmediato?
          </p>
          <a
            href="https://wa.me/573000000000?text=Hola%20Lina,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-body font-medium rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            <MessageCircle size={18} />
            Escribir por WhatsApp ahora
          </a>
        </div>
      </section>
    </div>
  )
}
