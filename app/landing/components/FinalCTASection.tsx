import { Rocket, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";

export default function FinalCTASection() {
  return (
    <section className="py-24 md:py-28 lg:py-32 xl:py-36 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-60 h-60 bg-primary/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-primary/7 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1500" />

        {/* Floating sparkles */}
        <Sparkles className="absolute top-16 right-16 w-6 h-6 text-primary/40 animate-ping" />
        <Sparkles className="absolute bottom-24 left-20 w-5 h-5 text-primary/35 animate-ping delay-700" />
        <Sparkles className="absolute top-1/2 left-16 w-4 h-4 text-primary/30 animate-ping delay-300" />
        <Star className="absolute bottom-16 right-24 w-3 h-3 text-primary/40 animate-spin" />
        <Star className="absolute top-32 left-32 w-4 h-4 text-primary/35 animate-spin delay-500" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm text-sm font-bold mb-8 shadow-lg">
          <Rocket className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-primary font-bold">Bêta en cours</span>
          <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
        </div>

        {/* Enhanced Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 drop-shadow-lg">
          <span className="text-foreground drop-shadow-md">
            Prêt à révolutionner
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            votre expérience santé ?
          </span>
        </h2>

        <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium drop-shadow-sm">
          Rejoignez les pionniers de la santé digitale en Afrique de l'Ouest.
          Soyez parmi les premiers à bénéficier de Pharma+.
        </p>

        {/* Enhanced CTA Button */}
        <div className="mb-12">
          <Button className="group relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Rejoindre la liste d'attente</span>
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="absolute top-2 right-2 w-4 h-4 text-primary-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </div>

        {/* Enhanced Trust indicator */}
        <div className="flex items-center justify-center gap-3 bg-card/50 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-border/50">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm font-semibold text-muted-foreground">
            Plus de 1000 professionnels inscrits
          </span>
          <div className="w-2 h-2 rounded-full bg-primary animate-ping delay-300"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-16 right-12 w-4 h-4 bg-primary/30 rounded-full animate-ping delay-500" />
        <div className="absolute bottom-12 left-16 w-5 h-5 bg-primary/25 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-primary/35 rounded-full animate-ping delay-700" />
      </div>
    </section>
  );
}
