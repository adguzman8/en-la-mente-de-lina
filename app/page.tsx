import HeroSection from '@/components/sections/HeroSection'
import PresentacionSection from '@/components/sections/PresentacionSection'
import ServiciosDestacados from '@/components/sections/ServiciosDestacados'
import ContenidoPreview from '@/components/sections/ContenidoPreview'
import TiendaPreview from '@/components/sections/TiendaPreview'
import Testimonios from '@/components/sections/Testimonios'
import CTAFinal from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PresentacionSection />
      <ServiciosDestacados />
      <ContenidoPreview />
      <TiendaPreview />
      <Testimonios />
      <CTAFinal />
    </>
  )
}
