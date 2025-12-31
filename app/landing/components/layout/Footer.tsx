"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Services", href: "#" },
      { label: "Premium", href: "#" },
      { label: "Business", href: "#" },
      { label: "Delivery", href: "#" },
    ],
    company: [
      { label: "À propos", href: "#about" },
      { label: "Carrières", href: "#" },
      { label: "Presse", href: "#" },
      { label: "Blog", href: "#" },
    ],
    support: [
      { label: "Centre d'aide", href: "#" },
      { label: "Sécurité", href: "#" },
      { label: "Conditions", href: "#" },
      { label: "Confidentialité", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative border-t border-primary-bg-foreground/20 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-3 lg:col-span-2"
          >
            <a href="#" className="mb-4 flex items-center gap-2">
              <Image
                src="/logo-transparent-png.png"
                alt="Pharma+"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-text-light tracking-wider">
                PHARMA+
              </span>
            </a>
            <p className="text-text-light/80 leading-relaxed max-w-sm mb-4 text-sm">
              Votre partenaire de confiance pour les solutions pharmaceutiques.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-light/80 mb-6">
              <MapPin className="w-4 h-4 text-accent-primary" />
              <span>Afrique de l'Ouest</span>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-accent-primary/20 hover:bg-accent-primary/30 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-text-light">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-light/80 hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-text-light">
              Entreprise
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-light/80 hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social + Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-text-light">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-light/80 hover:text-accent-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="py-6 border-t border-primary-bg-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-text-light/80">
            © {currentYear} Pharma+. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-text-light/80 hover:text-accent-primary transition-colors"
            >
              Confidentialité
            </a>
            <a
              href="#"
              className="text-sm text-text-light/80 hover:text-accent-primary transition-colors"
            >
              Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
