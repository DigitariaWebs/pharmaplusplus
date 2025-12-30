import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          🚀 Lancement bêta • Afrique de l'Ouest
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Pharma+
          </span>
          <br />
          Votre pharmacie et labo connectés<br />
          disponibles 24/7 💊
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Commandez vos médicaments, réservez vos examens et consultez des professionnels 
          de santé — simple, rapide, et disponible même sans Internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#newsletter" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            Rejoindre la liste d'attente
          </a>
          <a href="/demo" className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all text-center">
            Tester la démo
          </a>
        </div>

        {/* Hero Image - Médicaments */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-green-200">
            {/* Image de fond */}
            <div className="relative h-[500px] bg-gradient-to-br from-green-100 to-emerald-100">
              {/* Image Hero - Médicaments optimisée avec Next.js Image */}
              <Image 
                src="/hero-medicines.jpg" 
                alt="Médicaments et soins de santé - Pharma+"
                fill
                priority
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
            </div>
            
            {/* Overlay avec statistiques */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/90 to-transparent p-8">
              <div className="grid grid-cols-3 gap-4 text-white text-center">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-green-100">Pharmacies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-green-100">Laboratoires</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-green-100">Disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
            <p className="text-gray-600">Disponible hors ligne</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
            <p className="text-gray-600">Service disponible</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-gray-600">Paiements sécurisés</p>
          </div>
        </div>
      </div>
    </section>
  )
}
