import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PresentacionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/lina_psicologia.jpg"
                  alt="Lina - Psicóloga"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-rosa-light/60 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-verde-claro -z-10" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="font-accent text-rosa-acento text-sm tracking-wide uppercase">
              Conoce a tu psicóloga
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cafe mt-2 mb-6 leading-tight">
              Hola, soy Lina
            </h2>
            <p className="font-body text-base md:text-lg text-cafe-light leading-relaxed mb-6">
              Soy psicóloga enfocada en acompañar procesos emocionales desde el
              respeto, la empatía y el crecimiento personal.
            </p>
            <p className="font-body text-base text-cafe-light leading-relaxed mb-8">
              Creo en que cada persona tiene dentro de sí los recursos
              necesarios para sanar. Mi trabajo es acompañarte a encontrarlos,
              en un espacio sin juicios y con toda la calma que mereces.
            </p>

            <blockquote className="border-l-4 border-rosa-acento pl-5 mb-8">
              <p className="font-accent text-lg italic text-cafe">
                "Creo en el poder de ser escuchado sin juicio"
              </p>
            </blockquote>

            <Link
              href="/sobre-lina"
              className="inline-flex items-center gap-2 text-rosa-acento font-body font-medium hover:gap-3 transition-all group"
            >
              Conocer más sobre mí
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
