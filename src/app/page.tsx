import SmoothScroll from "@/components/providers/SmoothScroll";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import CTABanner from "@/components/sections/CTABanner";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import WhyUs from "@/components/sections/WhyUs";
import Promise from "@/components/sections/Promise";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Founder from "@/components/sections/Founder";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <WhatsAppFab />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Work />
        <CTABanner />
        <Process />
        <TechStack />
        <WhyUs />
        <Promise />
        <Testimonials />
        <FAQ />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
