import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
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
import Packages from "@/components/sections/Packages";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Founders from "@/components/sections/Founders";
import Contact from "@/components/sections/Contact";

// Subtle raised tone applied to alternating sections so the dark page reads as
// distinct bands instead of one continuous surface (visual rhythm).
const band = "bg-surface/30";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <ScrollToTop />
      <WhatsAppFab />
      <Navbar />
      <main className="relative">
        <Hero />
        <div className={band}>
          <About />
        </div>
        <Services />
        <div className={band}>
          <Work limit={4} />
        </div>
        <CTABanner />
        <div className={band}>
          <Process />
        </div>
        <TechStack />
        <div className={band}>
          <WhyUs />
        </div>
        <Promise />
        <div className={band}>
          <Packages />
        </div>
        <Testimonials />
        <div className={band}>
          <FAQ />
        </div>
        <Founders />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
