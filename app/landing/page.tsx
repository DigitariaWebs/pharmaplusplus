import Image from 'next/image'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ForProfessionals from './components/ForProfessionals'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Bandeau décoratif en haut de page */}
      <div className="pointer-events-none select-none absolute top-0 left-0 right-0 flex justify-center opacity-20">
        <div className="relative w-[720px] max-w-full h-[160px]">
          <Image
            src="/bandeau.png"
            alt="Bannière décorative"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 720px"
            priority
          />
        </div>
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <ForProfessionals />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
