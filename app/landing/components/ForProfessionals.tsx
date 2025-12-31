"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Package,
  Calendar,
  DollarSign,
  CheckCircle,
  BarChart3,
  Bell,
  CreditCard,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const cards = [
  {
    icon: Package,
    title: "Gestion simplifiée",
    description:
      "Gérez vos stocks, vos commandes et vos paiements depuis une seule interface intuitive et performante.",
  },
  {
    icon: Calendar,
    title: "Prise de rendez-vous",
    description:
      "Recevez et organisez vos rendez-vous de patients automatiquement. Rappels SMS et notifications inclus.",
  },
  {
    icon: DollarSign,
    title: "Abonnement flexible",
    description:
      "Un système d'abonnement adapté à la taille et aux besoins de votre structure. Sans engagement.",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "Visibilité accrue",
    description:
      "Apparaissez en priorité dans les recherches des patients à proximité",
  },
  {
    icon: BarChart3,
    title: "Analytics détaillés",
    description: "Suivez vos performances et optimisez votre activité",
  },
  {
    icon: Bell,
    title: "Notifications en temps réel",
    description: "Restez informé de chaque nouvelle commande ou rendez-vous",
  },
  {
    icon: CreditCard,
    title: "Paiements sécurisés",
    description: "Recevez vos paiements directement, sans intermédiaire",
  },
];

export default function ForProfessionals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="professionals"
      ref={ref}
      className="py-20 px-6 bg-gray-50 relative overflow-hidden scroll-mt-20"
    >
      {/* Split Section - Left: Light, Right: Dark */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Light Beige Background */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-medium mb-4 w-fit">
            <Briefcase className="w-4 h-4 text-green-600" />
            Espace Professionnels
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Pour les pharmacies et laboratoires
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mb-8">
            Rejoignez notre réseau et touchez des milliers de clients à
            proximité. Simplifiez vos ventes, vos rendez-vous et vos paiements
            grâce à notre plateforme tout-en-un.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="/register-pro"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              S'inscrire comme professionnel
            </motion.a>
            <motion.a
              href="#professionals-info"
              className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              En savoir plus
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Dark Green Background */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900 p-12 flex flex-col justify-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Avantages pour les professionnels
          </h3>
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 mt-1 text-green-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <div className="h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md p-8">
                  <div className="mb-6">
                    <motion.div
                      className="mb-4 text-green-600"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {card.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
