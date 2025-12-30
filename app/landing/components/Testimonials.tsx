import { MessageCircle, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aïssatou, Dakar",
    text: "J'ai pu commander mes médicaments sans quitter la maison. Simple et rapide !",
    role: "Patiente",
    avatar: "A",
  },
  {
    name: "Jean, Abidjan",
    text: "Le système de rendez-vous est top, surtout avec les rappels automatiques.",
    role: "Patient",
    avatar: "J",
  },
  {
    name: "Pharmacie du Plateau",
    text: "Nos ventes ont augmenté depuis qu'on est sur la plateforme. L'abonnement est rentable.",
    role: "Partenaire professionnel",
    avatar: "P",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-28 lg:py-32 xl:py-36 bg-gradient-to-b from-background via-primary/5 to-muted/20 px-6 relative overflow-hidden">
      {/* Enhanced Background decoration */}
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

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm text-sm font-bold mb-8 shadow-lg">
            <MessageCircle className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-bold">Témoignages</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Ils nous font confiance
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium drop-shadow-sm">
            Découvrez les témoignages de nos utilisateurs et partenaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card/90 to-card/70 border-2 border-border/50 shadow-xl hover:shadow-2xl hover:shadow-primary/20 p-8 rounded-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 relative group backdrop-blur-sm"
            >
              {/* Enhanced hover gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/40 text-4xl group-hover:text-primary transition-colors duration-300">
                "
              </div>

              {/* Enhanced Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center text-2xl font-black mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {testimonial.avatar}
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Quote */}
              <p className="text-foreground italic text-lg mb-6 leading-relaxed relative z-10 group-hover:text-primary transition-colors duration-300">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t-2 border-primary/20 pt-4 relative z-10 group-hover:border-primary/40 transition-colors duration-300">
                <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  {testimonial.role}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-ping delay-300" />
              <Sparkles className="absolute top-2 left-2 w-3 h-3 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="absolute bottom-2 right-2 w-3 h-3 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
            </div>
          ))}
        </div>

        {/* Enhanced Trust badges */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground mb-10 font-medium">
            Ils sont déjà partenaires :
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "Pharmacie Plus",
              "Labo Santé",
              "MediCare",
              "Bio Lab",
              "Santé Express",
              "PharmaNet",
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card/90 to-card/70 border-2 border-border/50 px-8 py-4 rounded-2xl font-bold text-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <span className="relative z-10">{partner}</span>
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-ping delay-300" />
            <div className="w-4 h-4 bg-primary/20 rounded-full animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
