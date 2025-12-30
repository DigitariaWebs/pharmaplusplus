import { ArrowRight, BarChart3, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

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

export default function StatsSection() {
  return (
    <section className="py-24 md:py-28 lg:py-32 xl:py-36 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/3" />
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-primary/8 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/6 rounded-full blur-3xl animate-pulse delay-1500" />

        {/* Sparkle effects */}
        <Sparkles className="absolute top-16 right-16 w-6 h-6 text-primary/40 animate-ping" />
        <Sparkles className="absolute bottom-24 left-20 w-4 h-4 text-primary/30 animate-ping delay-700" />
        <Sparkles className="absolute top-1/2 left-16 w-5 h-5 text-primary/35 animate-ping delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm text-sm font-semibold shadow-lg">
              <BarChart3 className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-bold">Chiffres clés</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Pharma+ en chiffres
              </span>
              <br />
              <span className="text-foreground drop-shadow-lg">
                Confiance et efficacité
              </span>
            </h2>

            <p className="text-muted-foreground text-xl mb-10 max-w-xl leading-relaxed font-medium">
              Découvrez l'impact de notre plateforme sur la santé en Afrique de
              l'Ouest. Des chiffres qui parlent d'eux-mêmes.
            </p>

            <Button
              variant="outline"
              className="rounded-full group overflow-hidden relative px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                En savoir plus
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Right - Enhanced Stats Grid */}
          <div>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative p-8 md:p-6 lg:p-8 xl:p-8 rounded-3xl border-2 border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md text-center group cursor-default hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                >
                  {/* Enhanced hover gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                      <span className="text-2xl md:text-3xl font-bold">
                        {stat.suffix}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold mb-2 group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground/80 font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {stat.sublabel}
                    </p>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/40 animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/30 animate-ping delay-300" />
                  <div className="absolute top-1/2 left-2 w-1 h-1 rounded-full bg-primary/50 animate-pulse delay-700" />

                  {/* Corner sparkles */}
                  <Sparkles className="absolute top-2 left-2 w-3 h-3 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Sparkles className="absolute bottom-2 right-2 w-3 h-3 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
