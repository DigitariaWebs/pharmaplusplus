"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Pill, FlaskConical, Smartphone, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Pill,
    title: "Vos commandes",
    description: "30.00 FCFA",
    subdescription: "Prochain paiement dans : 10,550 pts",
    visual: "graph",
  },
  {
    icon: FlaskConical,
    title: "Connecter des sources",
    description: "Connectez vos pharmacies et laboratoires préférés",
    subdescription: "Télécharger sur l'App Store",
    visual: "apps",
  },
  {
    icon: Smartphone,
    title: "Insights",
    description:
      "Apprenez-en plus sur vos données et prenez de meilleures décisions",
    questions: [
      "Quels produits devrais-je utiliser ?",
      "Où est-ce que je fais le plus de courses en hiver ?",
      "Combien d'argent ai-je économisé sur les remises ?",
    ],
    visual: "chat",
  },
];

const barHeights = [20, 40, 30, 50, 35, 45, 60];
const apps = ["Orange", "MTN", "Wave", "Moov"];

export default function Features() {
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
      id="features"
      ref={ref}
      className="py-20 px-6 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une plateforme complète qui simplifie l'accès aux soins et aux
            médicaments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <div>
                  <div className="mb-6">
                    <motion.div
                      className="mb-4 text-green-600"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    {feature.visual === "graph" && (
                      <div>
                        <p className="text-3xl font-bold text-gray-800 mb-2">
                          {feature.description}
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          {feature.subdescription}
                        </p>
                        <div className="h-24 bg-gray-100 rounded-xl flex items-end justify-between p-4 gap-2">
                          {barHeights.map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={isInView ? { height: `${height}%` } : {}}
                              transition={{
                                delay: index * 0.15 + i * 0.05,
                                duration: 0.6,
                              }}
                              className="w-full bg-green-500 rounded-t"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {feature.visual === "apps" && (
                      <div>
                        <p className="text-sm text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        <div className="flex gap-3 mb-4 flex-wrap">
                          {apps.map((app, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={isInView ? { scale: 1, rotate: 0 } : {}}
                              transition={{
                                delay: index * 0.15 + i * 0.1,
                                type: "spring",
                                stiffness: 200,
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700"
                            >
                              {app[0]}
                            </motion.div>
                          ))}
                        </div>
                        <button className="w-full bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600">
                          Télécharger sur l'App Store
                        </button>
                      </div>
                    )}

                    {feature.visual === "chat" && (
                      <div>
                        <div className="space-y-3 mb-6">
                          {feature.questions?.map((question, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                delay: index * 0.15 + i * 0.1,
                                duration: 0.5,
                              }}
                              whileHover={{ x: 4 }}
                              className="bg-gray-100 rounded-2xl p-4 text-sm text-gray-700"
                            >
                              {question}
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
                          En savoir plus
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
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
