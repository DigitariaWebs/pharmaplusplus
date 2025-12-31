"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContactModal from "@/app/components/ContactModal";
import {
  Star,
  Check,
  Smartphone,
  CreditCard,
  Waves,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
    description:
      "Tarification sur devis, tarifs raisonnables selon vos besoins",
    features: [
      "Prise de rendez-vous en laboratoire",
      "Réception des résultats dans l'app",
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
];

const payments = [
  { icon: Smartphone, label: "Orange Money" },
  { icon: CreditCard, label: "MTN Money" },
  { icon: Waves, label: "Wave" },
  { icon: Phone, label: "Moov Money" },
  { icon: CreditCard, label: "Carte bancaire" },
];

export default function Pricing() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactContext, setContactContext] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  function openContact(planName: string) {
    setContactContext(planName);
    setIsContactOpen(true);
  }

  function closeContact() {
    setIsContactOpen(false);
    setContactContext(null);
  }

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
      id="pricing"
      ref={ref}
      className="py-20 px-6 bg-primary-bg scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light">
            Tarifs transparents
          </h2>
          <p className="text-lg text-text-light/80 max-w-2xl mx-auto">
            Choisissez le plan qui vous convient. Tous les plans acceptent
            Mobile Money et cartes bancaires.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card
                className={`h-full border-2 transition-colors shadow-lg hover:shadow-xl ${
                  plan.highlighted
                    ? "border-accent-primary bg-secondary-bg hover:border-accent-primary-hover"
                    : "border-border/50 bg-card hover:border-accent-primary/50"
                }`}
              >
                <CardHeader>
                  {plan.highlighted && (
                    <Badge className="bg-accent-primary text-accent-primary-foreground mb-4 w-fit">
                      <Star className="w-3 h-3 mr-1.5" />
                      Plus populaire
                    </Badge>
                  )}
                  ,
                  <CardTitle className="text-2xl text-text-dark">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-text-dark">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-lg text-text-dark/70">
                        {" "}
                        ,{plan.period},
                      </span>
                    )}
                    ,
                  </div>

                  <p className="mb-6 text-text-dark/70">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 mt-0.5 text-accent-primary flex-shrink-0" />
                        <span className="text-sm text-text-dark">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {plan.cta &&
                    (plan.cta === "Nous contacter" ? (
                      <Button
                        onClick={() => openContact(plan.name)}
                        className="w-full bg-accent-primary text-accent-primary-foreground hover:bg-accent-primary-hover rounded-full"
                      >
                        {plan.cta}
                      </Button>
                    ) : (
                      <Button
                        asChild
                        className="w-full bg-accent-primary text-accent-primary-foreground hover:bg-accent-primary-hover rounded-full"
                      >
                        <a href={plan.href}>{plan.cta}</a>
                      </Button>
                    ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="border-2 border-accent-primary/30 bg-secondary-bg shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-center text-text-dark">
                Moyens de paiement acceptés
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
                {payments.map((payment, index) => {
                  const Icon = payment.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="text-center"
                    >
                      <Icon className="w-16 h-16 mb-2 mx-auto text-primary-bg" />
                      <p className="text-sm font-semibold text-text-dark">
                        {payment.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <ContactModal
          open={isContactOpen}
          context={contactContext ? `plan ${contactContext}` : undefined}
          onClose={closeContact}
        />
      </div>
    </section>
  );
}
