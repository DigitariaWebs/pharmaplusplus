"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, ShoppingCart, Package } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const steps = [
  {
    number: "1",
    title: "Créez votre compte ou entrez en invité",
    description:
      "Inscription rapide en 30 secondes. Aucune carte bancaire requise pour commencer.",
    icon: User,
  },
  {
    number: "2",
    title: "Commandez ou prenez rendez-vous",
    description:
      "Recherchez vos médicaments ou choisissez votre laboratoire. Sélectionnez l'horaire qui vous convient.",
    icon: ShoppingCart,
  },
  {
    number: "3",
    title: "Payez et suivez en temps réel",
    description:
      "Paiement sécurisé par Mobile Money ou carte. Suivez votre commande ou rendez-vous en direct.",
    icon: Package,
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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
    <section ref={ref} className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour prendre soin de votre santé
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center"
              >
                <div className="border border-gray-200 rounded-3xl shadow-sm hover:shadow-md bg-white h-full p-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full text-2xl font-bold mb-6 relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-green-300"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="mb-4 text-green-600 flex justify-center"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#newsletter"
            className="bg-green-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl inline-block"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer maintenant
          </motion.a>
          <p className="text-sm text-gray-500 mt-4">
            Aucune carte bancaire requise • Gratuit pendant la bêta
          </p>
        </motion.div>
      </div>
    </section>
  );
}
