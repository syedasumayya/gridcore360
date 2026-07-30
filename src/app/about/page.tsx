import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import AboutMission from "@/components/sections/AboutMission";
import OperatingPrinciples from "@/components/sections/OperatingPrinciples";


export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageBanner 
        badge="About Us" 
        title="Engineering the Future of" 
        highlight="Business Growth" 
        description="We are a global team of AI engineers, growth hackers, and strategic thinkers." 
      />
      
      <section className="section-padding pt-0">
        <div className="container-custom mx-auto space-y-8"> {/* TIGHTENED */}
          <AboutMission />
          <OperatingPrinciples />

        </div>
      </section>

      <Footer />
    </main>
  );
}