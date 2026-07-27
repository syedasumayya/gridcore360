import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import IndustryPrinciples from "@/components/sections/IndustryPrinciples"; // <-- NEW PRINCIPLES
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import FinalCTA from "@/components/sections/FinalCTA";

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageBanner 
        badge="Industries" 
        title="Sectors We" 
        highlight="Transform" 
        description="We deliver specialized cybernetic growth solutions tailored to the unique demands of high-impact industries." 
      />
      
      <section className="section-padding pt-0">
        <div className="container-custom mx-auto space-y-8"> {/* TIGHTENED */}
          <IndustryPrinciples />

          <div className="pt-8"> {/* TIGHTENED */}
            <div className="text-center mb-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                Our <span className="gradient-text">Ecosystem</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                From startups to Fortune 500s, we scale the operations that matter most to your specific sector.
              </p>
            </div>
            <IndustriesGrid />
          </div>
           <FinalCTA/>
        </div>
      </section>

      <Footer />
    </main>
  );
}