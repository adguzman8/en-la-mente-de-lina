import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'En la mente de Lina — Psicología & Bienestar Emocional',
  description: 'Un espacio seguro para entender tu mente y transformar tu vida. Servicios de psicología individual, infantil, adolescente, de pareja y familiar.',
  keywords: 'psicología, terapia, bienestar emocional, psicóloga, Lina, salud mental',
  openGraph: {
    title: 'En la mente de Lina',
    description: 'Un espacio seguro para entender tu mente y transformar tu vida.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
