const testimonials = [
  {
    name: "Aïssatou, Dakar",
    text: "J'ai pu commander mes médicaments sans quitter la maison. Simple et rapide !",
    role: "Patiente",
    avatar: "👩🏾",
  },
  {
    name: "Jean, Abidjan",
    text: "Le système de rendez-vous est top, surtout avec les rappels automatiques.",
    role: "Patient",
    avatar: "👨🏿",
  },
  {
    name: "Pharmacie du Plateau",
    text: "Nos ventes ont augmenté depuis qu'on est sur la plateforme. L'abonnement est rentable.",
    role: "Partenaire professionnel",
    avatar: "💊",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ils nous font confiance</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos utilisateurs et partenaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-gray-100 shadow-md hover:shadow-xl p-8 rounded-2xl transition-all hover:scale-105"
            >
              {/* Avatar */}
              <div className="text-5xl mb-4">{testimonial.avatar}</div>

              {/* Quote */}
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">Ils sont déjà partenaires :</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Logo placeholders - à remplacer par de vrais logos */}
            <div className="bg-gray-200 px-8 py-4 rounded-lg font-semibold text-gray-600">
              Pharmacie Plus
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg font-semibold text-gray-600">
              Labo Santé
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg font-semibold text-gray-600">
              MediCare
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg font-semibold text-gray-600">
              Bio Lab
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
