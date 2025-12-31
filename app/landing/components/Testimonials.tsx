"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    name: "Aïssatou, Dakar",
    text: "J'ai pu commander mes médicaments sans quitter la maison. Simple et rapide !",
    role: "Patiente",
    avatar: "A",
  },
  {
    name: "Jean, Abidjan",
    text: "Le système de rendez-vous est top, surtout avec les rappels automatiques.",
    role: "Patient",
    avatar: "J",
  },
  {
    name: "Pharmacie du Plateau",
    text: "Nos ventes ont augmenté depuis qu'on est sur la plateforme. L'abonnement est rentable.",
    role: "Partenaire professionnel",
    avatar: "P",
  },
];

const partners = [
  "Pharmacie Plus",
  "Labo Santé",
  "MediCare",
  "Bio Lab",
  "Santé Express",
  "PharmaNet",
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-secondary-bg relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-accent-primary/20 text-primary-bg border-accent-primary/30">
            <MessageCircle className="w-3 h-3 mr-1.5" />
            Témoignages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">
            Découvrez les témoignages de nos utilisateurs et partenaires
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full border-2 border-border/50 hover:border-accent-primary/50 transition-colors shadow-lg hover:shadow-xl bg-card">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center text-xl font-bold text-primary-bg mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <p className="text-text-dark italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-text-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-dark/60">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-text-dark/70 mb-8">
            Ils sont déjà partenaires :
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium border-2 border-primary-bg/30 hover:border-accent-primary/50 bg-card"
                >
                  {partner}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
