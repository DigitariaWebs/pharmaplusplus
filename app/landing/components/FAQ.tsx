"use client";

import { useState } from "react";
import ContactModal from "@/app/components/ContactModal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment fonctionne l'application en mode hors ligne ?",
    answer:
      "70% des fonctionnalités sont disponibles sans connexion Internet : recherche de médicaments, consultation de votre historique, ajout au panier. Vos actions seront automatiquement synchronisées dès que vous serez en ligne.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons tous les principaux moyens de paiement en Afrique de l'Ouest : Orange Money, MTN Money, Wave, Moov Money et cartes bancaires (Visa, Mastercard). Le paiement est 100% sécurisé.",
  },
  {
    question: "Comment puis-je recevoir ma commande ?",
    answer:
      "Vous pouvez choisir la livraison à domicile (délai 2-24h selon votre zone) ou le retrait en pharmacie. La livraison est gratuite pour les abonnés Premium sur les commandes de plus de 10 000 FCFA.",
  },
  {
    question: "L'application est-elle gratuite ?",
    answer:
      "Oui ! La version gratuite vous permet de rechercher des médicaments et de passer des commandes. Pour bénéficier de fonctionnalités avancées (livraison gratuite, rappels, réductions), vous pouvez souscrire au plan Premium à 2 500 FCFA/mois.",
  },
  {
    question: "Comment devenir partenaire en tant que pharmacie/laboratoire ?",
    answer:
      "Inscrivez-vous via notre espace professionnels. Vous bénéficierez d'un tableau de bord complet pour gérer vos stocks, commandes et rendez-vous. Un abonnement flexible est proposé selon la taille de votre structure.",
  },
  {
    question: "Mes données de santé sont-elles protégées ?",
    answer:
      "Absolument. Toutes vos données médicales sont chiffrées et stockées de manière sécurisée. Nous respectons les normes internationales de protection des données de santé (RGPD). Vos informations ne sont jamais partagées sans votre consentement.",
  },
  {
    question: "Dans quels pays l'application est-elle disponible ?",
    answer:
      "Pharma+ est actuellement disponible au Sénégal, en Côte d'Ivoire, au Mali et au Burkina Faso. Nous prévoyons de nous étendre dans d'autres pays d'Afrique de l'Ouest prochainement.",
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer:
      "Oui, vous pouvez annuler votre abonnement Premium à tout moment depuis les paramètres de l'application. Aucun engagement, aucuns frais cachés.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  function openContact() {
    setIsContactOpen(true);
  }

  function closeContact() {
    setIsContactOpen(false);
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Pharma+
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-green-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left bg-white hover:bg-green-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-green-600 transform transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-5 bg-gradient-to-br from-green-50 to-emerald-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <h3 className="text-2xl font-bold mb-2">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous aider
          </p>
          <button
            type="button"
            onClick={openContact}
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            Contactez-nous
          </button>
        </div>
        <ContactModal
          open={isContactOpen}
          context="FAQ"
          onClose={closeContact}
        />
      </div>
    </section>
  );
}
