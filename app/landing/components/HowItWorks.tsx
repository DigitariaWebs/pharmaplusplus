const steps = [
  {
    number: "1",
    title: "Créez votre compte ou entrez en invité",
    description: "Inscription rapide en 30 secondes. Aucune carte bancaire requise pour commencer.",
    icon: "👤",
  },
  {
    number: "2",
    title: "Commandez ou prenez rendez-vous",
    description: "Recherchez vos médicaments ou choisissez votre laboratoire. Sélectionnez l'horaire qui vous convient.",
    icon: "🛒",
  },
  {
    number: "3",
    title: "Payez et suivez en temps réel",
    description: "Paiement sécurisé par Mobile Money ou carte. Suivez votre commande ou rendez-vous en direct.",
    icon: "📦",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour prendre soin de votre santé
          </p>
        </div>

        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 mx-auto w-2/3 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step number circle */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-3xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA after steps */}
        <div className="text-center mt-16">
          <a href="#newsletter" className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Commencer maintenant
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Aucune carte bancaire requise • Gratuit pendant la bêta
          </p>
        </div>
      </div>
    </section>
  )
}
