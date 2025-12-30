import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ForProfessionals from "./components/ForProfessionals";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTASection from "./components/FinalCTASection";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <Features />
        <HowItWorks />
        <ForProfessionals />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
