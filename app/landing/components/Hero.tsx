import Image from "next/image";
import { Rocket, Pill, Heart, Stethoscope, Syringe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-teal-200/25 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-300/30 rounded-full blur-lg animate-pulse delay-1500"></div>

        {/* Floating medical icons */}
        <div className="absolute top-32 left-20 animate-bounce delay-300">
          <Pill className="w-8 h-8 text-green-400/60" />
        </div>
        <div className="absolute top-60 right-32 animate-bounce delay-700">
          <Heart className="w-10 h-10 text-emerald-400/50" />
        </div>
        <div className="absolute bottom-40 left-32 animate-bounce delay-1000">
          <Stethoscope className="w-9 h-9 text-teal-400/55" />
        </div>
        <div className="absolute bottom-60 right-40 animate-bounce delay-1300">
          <Syringe className="w-7 h-7 text-green-500/45" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-20">
        <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-semibold shadow-lg border border-green-200/50 backdrop-blur-sm">
          <Rocket className="inline w-4 h-4 mr-2 animate-pulse" />
          Lancement bêta • Afrique de l'Ouest
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 animate-pulse"></div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-lg">
          <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
            Pharma+
          </span>
          <br />
          <span className="text-gray-800 drop-shadow-md">
            Votre pharmacie et labo
          </span>
          <br />
          <span className="text-gray-700 drop-shadow-md">connectés 24/7</span>
          <Pill className="inline w-8 h-8 ml-3 text-green-600 animate-spin-slow" />
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-sm">
          Commandez vos médicaments, réservez vos examens et consultez des
          professionnels de santé — simple, rapide, et disponible même sans
          Internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <a
            href="#newsletter"
            className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Rejoindre la liste d'attente</span>
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/demo"
            className="group relative bg-white border-3 border-green-600 text-green-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-center overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Tester la démo</span>
            <div className="absolute inset-0 rounded-2xl border-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Hero Image - Médicaments */}
        <div className="relative max-w-5xl mx-auto group">
          <div className="relative rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-green-500/20">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image container */}
            <div className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 transform transition-transform duration-700 group-hover:scale-110">
              {/* Image Hero - Médicaments optimisée avec Next.js Image */}
              <Image
                src="/hero-medicines.jpg"
                alt="Médicaments et soins de santé - Pharma+"
                fill
                priority
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-green-900/10"></div>

              {/* Floating overlay elements */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Pharmacies</div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float delay-500">
                <div className="text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-teal-400 to-green-400 rounded-full animate-pulse delay-700"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
}
