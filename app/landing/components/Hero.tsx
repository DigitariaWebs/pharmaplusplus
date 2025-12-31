"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX.set((e.clientX - centerX) * 0.1);
      mouseY.set((e.clientY - centerY) * 0.1);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const imageX = useTransform(x, (value) => value * 0.3);
  const imageY = useTransform(y, (value) => value * 0.3);
  const imageXRight = useTransform(x, (value) => -value * 0.3);
  const imageYRight = useTransform(y, (value) => -value * 0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-bg pt-20"
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/95 via-primary-bg to-primary-bg/95 z-0"></div>

      {/* Left side image - hidden on mobile, visible on lg+ */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        style={{
          x: imageX,
          y: imageY,
        }}
        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[300px] xl:w-[400px] h-[500px] xl:h-[600px] z-10 opacity-80"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hero-medicines.jpg"
            alt="Pharmaceutical medicines"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 300px, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-bg via-primary-bg/50 to-transparent"></div>
        </div>
      </motion.div>

      {/* Right side image - hidden on mobile, visible on lg+ */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        style={{
          x: imageXRight,
          y: imageYRight,
        }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[300px] xl:w-[400px] h-[500px] xl:h-[600px] z-10 opacity-80"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hero-medicines.jpg"
            alt="Pharmaceutical medicines"
            fill
            className="object-cover scale-x-[-1]"
            priority
            sizes="(max-width: 1280px) 300px, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary-bg via-primary-bg/50 to-transparent"></div>
        </div>
      </motion.div>

      {/* Mobile image - visible only on mobile/tablet, positioned at bottom */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="lg:hidden absolute bottom-0 left-0 right-0 w-full h-[300px] md:h-[400px] z-10 opacity-60"
      >
        <div className="relative w-full h-full">
          <Image
            src="/hero-medicines.jpg"
            alt="Pharmaceutical medicines"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent"></div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/20 backdrop-blur-sm border border-accent-primary/30 rounded-full text-sm font-medium text-text-light">
              <Lock className="w-4 h-4 text-accent-primary" />
              Sécurisé et fiable
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-text-light drop-shadow-lg"
          >
            {["Connectez.", "Apprenez.", "Guérissez."].map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-light/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md"
          >
            Votre santé est un atout précieux. Avec Pharma+ vous contrôlez vos
            médicaments, vos examens et vos rendez-vous médicaux, simplement et
            en toute sécurité.
          </motion.p>

          {/* Feature indicators with animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 mb-16"
          >
            <div className="w-3 h-3 rounded-full bg-text-light/30"></div>
            <motion.div
              className="w-3 h-3 rounded-full bg-accent-primary flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(209, 244, 78, 0.4)",
                  "0 0 0 8px rgba(209, 244, 78, 0)",
                  "0 0 0 0 rgba(209, 244, 78, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Lock className="w-2 h-2 text-text-dark" />
            </motion.div>
            <div className="w-3 h-3 rounded-full bg-text-light/30"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#newsletter"
              className="bg-accent-primary text-text-dark px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl inline-flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Rejoindre la liste d'attente
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/demo"
              className="border-2 border-text-light/30 text-text-light hover:bg-text-light/10 backdrop-blur-sm px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Tester la démo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
