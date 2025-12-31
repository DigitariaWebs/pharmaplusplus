"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Pharmacies partenaires",
    sublabel: "Dans toute l'Afrique de l'Ouest",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Patients servis",
    sublabel: "Chaque mois",
  },
  {
    value: 99,
    suffix: "%",
    label: "Précision des audits",
    sublabel: "Garantie qualité",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    count.set(value);
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [value, count, rounded]);

  return (
    <span>
      {displayValue.toLocaleString()}
      <span className="text-2xl">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-dark">
            Pharma+ en chiffres
          </h2>
          <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">
            Découvrez l'impact de notre plateforme sur la santé en Afrique de
            l'Ouest
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full border-2 border-border/50 bg-card shadow-lg hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <motion.p
                    className="text-4xl md:text-5xl font-bold text-primary-bg mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {hasAnimated ? (
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </motion.p>
                  <p className="text-sm font-semibold text-text-dark mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-text-dark/60">{stat.sublabel}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
