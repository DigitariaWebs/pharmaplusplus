"use client"
import { useState } from 'react'
import ContactModal from '@/app/components/ContactModal'
const plans = [
  {
    name: "Patients",
    price: "0",
    period: "",
    description: "Gratuit pour toujours",
    features: [
      "Recherche de médicaments",
      "Consultation des prix",
      "Prise de rendez-vous en laboratoire",
      "Historique limité (3 mois)",
      "Support par email",
    ],
    cta: "",
    href: "#newsletter",
    highlighted: true,
  },
  {
    name: "Laboratoires",
    price: "Sur devis",
    period: "",
    description: "Tarification sur devis, tarifs raisonnables selon vos besoins",
    features: [
      "Prise de rendez-vous en laboratoire",
      "Réception des résultats dans l’app",
      "Paiement Mobile Money 100% sécurisé",
      "Fonctionne à 70% sans Internet",
      "Support par email",
    ],
    cta: "Nous contacter",
    href: "#professionals",
    highlighted: false,
  },
  {
    name: "Pharmaciens",
    price: "Sur devis",
    period: "",
    description: "Payant, tarifs raisonnables selon vos besoins",
    features: [
      "Tableau de bord complet",
      "Gestion des stocks",
      "Analytics avancés",
      "Intégration API",
      "Support dédié 24/7",
      "Formation incluse",
    ],
    cta: "Nous contacter",
    href: "#professionals",
    highlighted: false,
  },
]

export default function Pricing() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [contactContext, setContactContext] = useState<string | null>(null)

  function openContact(planName: string) {
    setContactContext(planName)
    setIsContactOpen(true)
  }

  function closeContact() {
    setIsContactOpen(false)
    setContactContext(null)
  }

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-green-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tarifs transparents</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui vous convient. Tous les plans acceptent Mobile Money et cartes bancaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-2xl scale-105 border-4 border-green-400'
                  : 'bg-white border-2 border-gray-200'
              } transition-all hover:scale-105`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4">
                  ⭐ Plus populaire
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}>
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-green-600'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-lg ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                    {' '}{plan.period}
                  </span>
                )}
              </div>

              <p className={`mb-6 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`text-xl ${plan.highlighted ? 'text-white' : 'text-green-600'}`}>
                      ✓
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-green-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.cta && (
                plan.cta === 'Nous contacter' ? (
                  <button
                    type="button"
                    onClick={() => openContact(plan.name)}
                    className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-white text-green-600 hover:bg-green-50 shadow-lg'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl'
                    }`}
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <a
                    href={plan.href}
                    className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-white text-green-600 hover:bg-green-50 shadow-lg'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl'
                    }`}
                  >
                    {plan.cta}
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold mb-6 text-center">Moyens de paiement acceptés</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <p className="text-sm font-semibold text-gray-700">Orange Money</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💳</div>
              <p className="text-sm font-semibold text-gray-700">MTN Money</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌊</div>
              <p className="text-sm font-semibold text-gray-700">Wave</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📞</div>
              <p className="text-sm font-semibold text-gray-700">Moov Money</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💳</div>
              <p className="text-sm font-semibold text-gray-700">Carte bancaire</p>
            </div>
          </div>
        </div>

        <ContactModal open={isContactOpen} context={contactContext ? `plan ${contactContext}` : undefined} onClose={closeContact} />
      </div>
    </section>
  )
}

