"use client";

import { useEffect, useRef, useState } from "react";

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
  const [displayedCount, setDisplayedCount] = useState<number>(0);
  const animRef = useRef<number | null>(null);

  // Animation compteur (compte progressif vers la valeur cible)
  useEffect(() => {
    const start = displayedCount;
    const end = count;
    if (start === end) return;

    const duration = 600; // ms
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const value = Math.round(start + (end - start) * progress);
      setDisplayedCount(value);
      if (progress < 1) {
        animRef.current = requestAnimationFrame(tick);
      }
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

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

        // Reset après 5 secondes
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
      className="py-20 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Rejoignez la liste d'attente
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Soyez parmi les premiers à profiter de notre plateforme.
          Inscrivez-vous pour être informé du lancement et bénéficier d'offres
          exclusives.
        </p>

        {isSubmitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto animate-fade-in">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold mb-2">
              Merci de votre inscription !
            </h3>
            <p className="text-green-100">
              Votre demande a bien été prise en compte. Nous vous contacterons
              avant le lancement dans votre pays.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6 text-left">
                <h3 className="text-lg font-semibold text-white">
                  Informations professionnelles
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-green-100 mb-1">
                    Nom de la société
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                    placeholder="Ex: PharmaPlus Dakar"
                  />
                </div>
                <div>
                  <label className="block text-sm text-green-100 mb-1">
                    Nom du responsable
                  </label>
                  <input
                    type="text"
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                    placeholder="Ex: Aïssatou Ndiaye"
                  />
                </div>
              </div>

              <div className="mb-4 text-left">
                <h3 className="text-lg font-semibold text-white">
                  Coordonnées
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-green-100 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-green-100 mb-1">
                    Téléphone (optionnel)
                  </label>
                  <div className="relative">
                    <select
                      aria-label="Indicatif du pays"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-28 px-3 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all border border-gray-300"
                    >
                      <option value="">Indicatif</option>
                      <option value="+221">🇸🇳 +221 (Sénégal)</option>
                      <option value="+225">🇨🇮 +225 (Côte d’Ivoire)</option>
                      <option value="+223">🇲🇱 +223 (Mali)</option>
                      <option value="+226">🇧🇫 +226 (Burkina Faso)</option>
                      <option value="+227">🇳🇪 +227 (Niger)</option>
                      <option value="+228">🇹🇬 +228 (Togo)</option>
                      <option value="+229">🇧🇯 +229 (Bénin)</option>
                      <option value="+233">🇬🇭 +233 (Ghana)</option>
                      <option value="+220">🇬🇲 +220 (Gambie)</option>
                      <option value="+224">🇬🇳 +224 (Guinée)</option>
                      <option value="+231">🇱🇷 +231 (Libéria)</option>
                      <option value="+232">🇸🇱 +232 (Sierra Leone)</option>
                      <option value="+238">🇨🇻 +238 (Cap-Vert)</option>
                      <option value="+222">🇲🇷 +222 (Mauritanie)</option>
                    </select>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-32 pr-6 py-4 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all border border-gray-300"
                      placeholder="Numéro de téléphone"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Inscription en cours..." : "Rejoindre la bêta"}
              </button>

              {error && (
                <p className="text-red-200 text-sm mt-2 bg-red-500/20 px-4 py-2 rounded-lg">
                  {error}
                </p>
              )}
            </div>

            <p className="text-sm text-green-100 mt-6">
              🎁 Les 200 premiers inscrits bénéficieront de 6 mois gratuits
            </p>
          </form>
        )}

        {/* Counter */}
        <div className="mt-16 inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
          <p className="text-sm text-green-100 mb-1">Déjà inscrits</p>
          <p className="text-4xl font-bold tabular-nums">
            {displayedCount.toLocaleString("fr-FR")}
          </p>
          <p className="text-sm text-green-100 mt-1">
            personnes dans la file d'attente
          </p>
        </div>
      </div>
    </section>
  );
}
