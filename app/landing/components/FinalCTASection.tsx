"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export default function FinalCTASection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 text-green-600" />
              Bêta en cours
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              Prêt à révolutionner
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              votre expérience santé ?
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Rejoignez les pionniers de la santé digitale en Afrique de l'Ouest.
            Soyez parmi les premiers à bénéficier de Pharma+.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <motion.a
              href="#newsletter"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Rejoindre la liste d'attente
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="inline-block border-2 border-green-200 bg-white rounded-2xl px-6 py-4 shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-sm font-medium text-gray-700">
                  Plus de 1000 professionnels inscrits
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
