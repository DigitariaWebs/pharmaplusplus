import Image from "next/image";
import {
  Sparkles,
  Pill,
  FlaskConical,
  Smartphone,
  Globe,
  CheckCircle,
  Lock,
  Zap,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <Pill className="w-16 h-16" />,
    title: "Recherche et commande de médicaments",
    description:
      "Trouvez et commandez vos médicaments en quelques clics. Stock en temps réel dans plus de 500 pharmacies, prix transparents, livraison rapide en moins de 24h.",
  },
  {
    icon: <FlaskConical className="w-16 h-16" />,
    title: "Prise de rendez-vous en laboratoire",
    description:
      "Réservez vos analyses dans plus de 50 laboratoires certifiés. Recevez vos résultats directement dans l'app avec rappels automatiques et suivi en temps réel.",
  },
  {
    icon: <Smartphone className="w-16 h-16" />,
    title: "Paiement Mobile Money 100% sécurisé",
    description:
      "Payez facilement avec Orange Money, MTN Money, Wave ou Moov Money. Également compatible cartes bancaires. Transaction sécurisée avec confirmation instantanée.",
  },
  {
    icon: <Globe className="w-16 h-16" />,
    title: "Fonctionne à 70% sans Internet",
    description:
      "Recherchez des médicaments, consultez votre historique et ajoutez au panier même hors ligne. Synchronisation automatique dès la reconnexion. Parfait pour les zones à faible couverture.",
  },
];

export default function Features() {
  return (
    <section className="py-24 md:py-28 lg:py-32 xl:py-36 px-6 bg-gradient-to-b from-background via-primary/5 to-muted/20 relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/4 rounded-full blur-2xl animate-pulse delay-500" />

        {/* Floating sparkles */}
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-primary/30 animate-ping" />
        <Sparkles className="absolute bottom-32 right-16 w-5 h-5 text-primary/25 animate-ping delay-700" />
        <Sparkles className="absolute top-3/4 left-1/3 w-4 h-4 text-primary/35 animate-ping delay-300" />
        <Star className="absolute bottom-20 left-16 w-3 h-3 text-primary/40 animate-spin" />
        <Star className="absolute top-40 right-32 w-4 h-4 text-primary/30 animate-spin delay-500" />
      </div>

      {/* Image décorative en arrière-plan */}
      <div className="absolute top-10 right-0 w-[520px] h-[220px] opacity-20 pointer-events-none select-none">
        <Image
          src="/bandeau.png"
          alt="Décor bandeau"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 520px"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm text-sm font-bold mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-bold">Fonctionnalités</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Tout ce dont vous avez besoin
            </span>
            <br />
            <span className="text-foreground drop-shadow-md">
              pour votre santé
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium drop-shadow-sm">
            Une plateforme complète qui simplifie l'accès aux soins et aux
            médicaments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card/90 to-card/70 border-2 border-border/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:-translate-y-4 relative group backdrop-blur-sm"
            >
              {/* Enhanced hover gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground relative z-10 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary/40 rounded-full animate-ping delay-300" />
              <Sparkles className="absolute top-2 left-2 w-3 h-3 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Enhanced benefits section */}
        <div className="mt-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-3xl p-16 text-primary-foreground text-center relative overflow-hidden shadow-2xl">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-6 left-6 w-20 h-20 border-2 border-primary-foreground/30 rounded-full animate-spin-slow" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-2 border-primary-foreground/30 rounded-full animate-spin-slow delay-1000" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-primary-foreground/30 rounded-full animate-spin-slow delay-500" />
            <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-primary-foreground/30 rounded-full animate-spin-slow delay-1500" />
          </div>

          {/* Floating sparkles */}
          <Sparkles className="absolute top-8 right-8 w-6 h-6 text-primary-foreground/40 animate-ping" />
          <Sparkles className="absolute bottom-8 left-8 w-5 h-5 text-primary-foreground/40 animate-ping delay-700" />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-12 drop-shadow-lg">
              Pourquoi choisir notre plateforme ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="group space-y-4">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                  <CheckCircle className="w-20 h-20 animate-pulse" />
                </div>
                <h4 className="font-bold text-xl mb-3 drop-shadow-md">
                  Fiabilité garantie
                </h4>
                <p className="text-primary-foreground/90 font-medium">
                  Pharmacies et laboratoires certifiés
                </p>
              </div>
              <div className="group space-y-4">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                  <Lock className="w-20 h-20 animate-pulse delay-300" />
                </div>
                <h4 className="font-bold text-xl mb-3 drop-shadow-md">
                  Données sécurisées
                </h4>
                <p className="text-primary-foreground/90 font-medium">
                  Vos informations médicales protégées
                </p>
              </div>
              <div className="group space-y-4">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                  <Zap className="w-20 h-20 animate-pulse delay-600" />
                </div>
                <h4 className="font-bold text-xl mb-3 drop-shadow-md">
                  Livraison rapide
                </h4>
                <p className="text-primary-foreground/90 font-medium">
                  Recevez vos commandes en moins de 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
