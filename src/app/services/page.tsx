import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import ServicesCore from "@/components/sections/ServicesCore";
import ServicesOS from "@/components/sections/ServicesOS";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesCta from "@/components/sections/ServicesCta";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageBanner 
        badge="Our Services" 
        title="End-to-End Cybernetic" 
        highlight="Solutions" 
        description="We don't just offer services; we engineer intelligent systems designed to scale your enterprise." 
      />
      
      <section className="section-padding pt-0">
        <div className="container-custom mx-auto space-y-8"> {/* TIGHTENED */}
          <ServicesCore />
          <ServicesOS />
          
          <div className="pt-8"> {/* TIGHTENED */}
            <SectionHeading
              badge="The Ecosystem"
              title="Comprehensive"
              highlight="Support"
              description="Beyond our core pillars, we provide a full suite of tools to ensure every aspect of your business is optimized."
            />
          </div>

          <ServicesGrid />
          
          <div className="pt-8"> {/* TIGHTENED */}
            <ServicesCta />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}