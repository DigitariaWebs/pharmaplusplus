"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [responsible, setResponsible] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const countValue = useMotionValue(0);
  const rounded = useSpring(countValue, { damping: 30, stiffness: 100 });
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    countValue.set(count);
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayedCount(Math.round(latest));
    });
    return unsubscribe;
  }, [count, countValue, rounded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
        setPhone("");
        setCount((prev) => prev + 1);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message || "Une erreur est survenue");
      }
    } catch (err) {
      setError("Impossible de se connecter au serveur");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      ref={ref}
      className="py-20 px-6 bg-gray-50 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Rejoignez la liste d'attente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soyez parmi les premiers à profiter de notre plateforme.
            Inscrivez-vous pour être informé du lancement et bénéficier d'offres
            exclusives.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto mt-10"
            >
              <div className="border border-green-200 bg-white rounded-3xl p-8 shadow-sm">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  ✅
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Merci de votre inscription !
                </h3>
                <p className="text-gray-600">
                  Votre demande a bien été prise en compte. Nous vous
                  contacterons avant le lancement dans votre pays.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto mt-10"
            >
              <div className="border border-gray-200 rounded-3xl shadow-sm hover:shadow-md bg-white p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Informations professionnelles
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Nom de la société
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-6 py-4 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="Ex: PharmaPlus Dakar"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Nom du responsable
                      </label>
                      <input
                        type="text"
                        value={responsible}
                        onChange={(e) => setResponsible(e.target.value)}
                        className="w-full px-6 py-4 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="Ex: Aïssatou Ndiaye"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-gray-800 font-semibold">
                      Coordonnées
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-6 py-4 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          placeholder="vous@exemple.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Téléphone (optionnel)
                        </label>
                        <div className="relative">
                          <select
                            aria-label="Indicatif du pays"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-28 px-3 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
                          >
                            <option value="">Indicatif</option>
                            <option value="+221">🇸🇳 +221</option>
                            <option value="+225">🇨🇮 +225</option>
                            <option value="+223">🇲🇱 +223</option>
                            <option value="+226">🇧🇫 +226</option>
                          </select>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-32 pr-6 py-4 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            placeholder="Numéro de téléphone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-full font-medium disabled:opacity-50 transition-colors"
                  >
                    {isLoading
                      ? "Inscription en cours..."
                      : "Rejoindre la bêta"}
                  </button>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm"
                    >
                      {error}
                    </motion.div>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                🎁 Les 200 premiers inscrits bénéficieront de 6 mois gratuits
              </p>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <div className="inline-block border border-green-200 bg-white rounded-2xl px-8 py-4 shadow-sm">
            <p className="text-sm text-green-600 mb-1 font-medium">
              Déjà inscrits
            </p>
            <p className="text-4xl font-bold tabular-nums text-gray-800">
              {displayedCount.toLocaleString("fr-FR")}
            </p>
            <p className="text-sm text-green-600 mt-1">
              personnes dans la file d'attente
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
