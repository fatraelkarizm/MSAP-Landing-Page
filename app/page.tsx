import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import LogoSection from "@/components/sections/LogoSection";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import CTABanner from "@/components/sections/CTABanner";
import ProductCatalog from "@/components/sections/ProductCatalog";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LogoSection />
        <Services />
        <About />
        <CTABanner />
        <ProductCatalog />
        <Benefits />
        <FAQ />
        <Team />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
