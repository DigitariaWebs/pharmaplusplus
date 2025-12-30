export default function ForProfessionals() {
  return (
    <section id="professionals" className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50 border-t border-gray-100 relative overflow-hidden scroll-mt-20">
      {/* Background pattern décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">💊</div>
        <div className="absolute bottom-10 right-10 text-8xl">🧪</div>
        <div className="absolute top-1/2 right-1/4 text-6xl">📋</div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            💼 Espace Professionnels
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Pour les pharmacies et laboratoires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez notre réseau et touchez des milliers de clients à proximité. 
            Simplifiez vos ventes, vos rendez-vous et vos paiements grâce à notre 
            plateforme tout-en-un.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <a href="/register-pro" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            S'inscrire comme professionnel
          </a>
          <a href="#professionals-info" className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all text-center">
            En savoir plus
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-2xl font-semibold mb-3">Gestion simplifiée</h3>
            <p className="text-gray-600 leading-relaxed">
              Gérez vos stocks, vos commandes et vos paiements depuis une seule interface 
              intuitive et performante.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-2xl font-semibold mb-3">Prise de rendez-vous</h3>
            <p className="text-gray-600 leading-relaxed">
              Recevez et organisez vos rendez-vous de patients automatiquement. 
              Rappels SMS et notifications inclus.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-semibold mb-3">Abonnement flexible</h3>
            <p className="text-gray-600 leading-relaxed">
              Un système d'abonnement adapté à la taille et aux besoins de votre 
              structure. Sans engagement.
            </p>
          </div>
        </div>

        {/* Benefits section */}
        <div id="professionals-info" className="mt-16 bg-white rounded-3xl p-10 shadow-lg border border-gray-100 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Avantages pour les professionnels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-semibold mb-1">Visibilité accrue</h4>
                <p className="text-gray-600 text-sm">
                  Apparaissez en priorité dans les recherches des patients à proximité
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📊</div>
              <div>
                <h4 className="font-semibold mb-1">Analytics détaillés</h4>
                <p className="text-gray-600 text-sm">
                  Suivez vos performances et optimisez votre activité
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🔔</div>
              <div>
                <h4 className="font-semibold mb-1">Notifications en temps réel</h4>
                <p className="text-gray-600 text-sm">
                  Restez informé de chaque nouvelle commande ou rendez-vous
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">💳</div>
              <div>
                <h4 className="font-semibold mb-1">Paiements sécurisés</h4>
                <p className="text-gray-600 text-sm">
                  Recevez vos paiements directement, sans intermédiaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
