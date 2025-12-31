"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <section
      id="faq"
      ref={ref}
      className="py-20 px-6 bg-white scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Pharma+
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="border border-gray-200 rounded-3xl overflow-hidden hover:border-green-300 transition-colors bg-white shadow-sm">
                <div className="p-0">
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left hover:bg-gray-50 transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-semibold text-gray-800 text-lg pr-4 group-hover:text-green-600 transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                    </motion.div>
                  </motion.button>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-green-50 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider
            </p>
            <button
              onClick={openContact}
              className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
            >
              Contactez-nous
            </button>
          </div>
        </motion.div>
        <ContactModal
          open={isContactOpen}
          context="FAQ"
          onClose={closeContact}
        />
      </div>
    </section>
  );
}
