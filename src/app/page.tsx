import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Examples from "@/components/Examples";
import Share from "@/components/Share";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Examples />
      <Share />
      <Footer />
    </main>
  );
}
