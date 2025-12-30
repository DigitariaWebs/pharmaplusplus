import Image from 'next/image'

const features = [
  {
    icon: "💊",
    title: "Recherche et commande de médicaments",
    description: "Trouvez et commandez vos médicaments en quelques clics. Stock en temps réel dans plus de 500 pharmacies, prix transparents, livraison rapide en moins de 24h.",
  },
  {
    icon: "🧪",
    title: "Prise de rendez-vous en laboratoire",
    description: "Réservez vos analyses dans plus de 50 laboratoires certifiés. Recevez vos résultats directement dans l'app avec rappels automatiques et suivi en temps réel.",
  },
  {
    icon: "📱",
    title: "Paiement Mobile Money 100% sécurisé",
    description: "Payez facilement avec Orange Money, MTN Money, Wave ou Moov Money. Également compatible cartes bancaires. Transaction sécurisée avec confirmation instantanée.",
  },
  {
    icon: "🌍",
    title: "Fonctionne à 70% sans Internet",
    description: "Recherchez des médicaments, consultez votre historique et ajoutez au panier même hors ligne. Synchronisation automatique dès la reconnexion. Parfait pour les zones à faible couverture.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Image décorative en arrière-plan */}
      <div className="absolute top-10 right-0 w-[520px] h-[220px] opacity-20 pointer-events-none select-none">
        <Image
          src="/bandeau.png"
          alt="Décor bandeau"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 520px"
          priority
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tout ce dont vous avez besoin pour votre santé
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une plateforme complète qui simplifie l'accès aux soins et aux médicaments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Pourquoi choisir notre plateforme ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-semibold mb-2">Fiabilité garantie</h4>
              <p className="text-green-100">Pharmacies et laboratoires certifiés</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold mb-2">Données sécurisées</h4>
              <p className="text-green-100">Vos informations médicales protégées</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Livraison rapide</h4>
              <p className="text-green-100">Recevez vos commandes en moins de 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
