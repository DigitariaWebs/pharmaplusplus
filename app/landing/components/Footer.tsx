"use client";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "@/app/components/ContactModal";

const footerLinks = {
  product: [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Comment ça marche", href: "#how-it-works" },
    { name: "Tarifs", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  professional: [
    { name: "Pour les pharmacies", href: "#professionals" },
    { name: "Pour les laboratoires", href: "#professionals" },
    { name: "Devenir partenaire", href: "#join" },
    { name: "Espace pro", href: "/login-pro" },
  ],
  company: [
    { name: "À propos", href: "#about" },
    { name: "Blog", href: "/blog" },
    { name: "Carrières", href: "/careers" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/legal" },
    { name: "Confidentialité", href: "/privacy" },
    { name: "CGU", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: "📘", href: "https://facebook.com/pharmaplus" },
  {
    name: "Twitter",
    icon: "🐦",
    href: "https://twitter.com/pharmaplus_africa",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    href: "https://linkedin.com/company/pharmaplus",
  },
  { name: "Instagram", icon: "📷", href: "https://instagram.com/pharmaplus" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactContext, setContactContext] = useState<string | undefined>(
    undefined,
  );

  function openContact(context?: string) {
    setContactContext(context);
    setIsContactOpen(true);
  }
  function closeContact() {
    setIsContactOpen(false);
    setContactContext(undefined);
  }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo-transparent-png.png"
                  alt="Pharma+"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Pharma<span className="text-green-400">+</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Votre pharmacie connectée pour l'Afrique de l'Ouest. Simple,
              rapide, accessible.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
              ,
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Professionnels</h3>
            <ul className="space-y-3">
              {footerLinks.professional.map((link) => (
                <li key={link.name}>
                  {link.name === "Devenir partenaire" ? (
                    <button
                      type="button"
                      onClick={() => openContact("Partenariat")}
                      className="text-left text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.name === "Contact" ? (
                    <button
                      type="button"
                      onClick={() => openContact("Contact")}
                      className="text-left text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App download section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">
                Téléchargez l'application
              </h3>
              <p className="text-sm text-gray-400">
                Disponible bientôt sur iOS et Android
              </p>
            </div>
            <a href="#newsletter" className="block">
              <Image
                src="/logo%20app%20store%20et%20google%20plais%20.png"
                alt="App Store et Google Play"
                width={360}
                height={110}
                className="h-auto w-[260px] sm:w-[320px] md:w-[360px] object-contain"
                priority
                unoptimized
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Pharma+. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 md:gap-6 text-sm text-gray-500 flex-wrap justify-center">
            <span>🇸🇳 Sénégal</span>
            <span>🇨🇮 Côte d'Ivoire</span>
            <span>🇲🇱 Mali</span>
            <span>🇧🇫 Burkina Faso</span>
            <span>🇳🇬 Nigeria</span>
            <span>🇳🇪 Niger</span>
            <span>🇹🇬 Togo</span>
            <span>🇧🇯 Bénin</span>
            <span>🇬🇭 Ghana</span>
            <span>🇬🇲 Gambie</span>
            <span>🇬🇳 Guinée</span>
            <span>🇱🇷 Libéria</span>
            <span>🇸🇱 Sierra Leone</span>
            <span>🇨🇻 Cap-Vert</span>
            <span>🇲🇷 Mauritanie</span>
          </div>
        </div>
        <ContactModal
          open={isContactOpen}
          context={contactContext}
          onClose={closeContact}
        />
      </div>
    </footer>
  );
}
