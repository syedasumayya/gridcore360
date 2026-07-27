import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import CareersList from "@/components/sections/CareersList";
import CareersPerks from "@/components/sections/CareersPerks";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageBanner
        badge="Careers"
        title="Join the"
        highlight="GridCore Team"
        description="Help us build the future of intelligent business growth."
      />
      
      <section className="section-padding">
        <div className="container-custom mx-auto">
          
          <div className="mb-20">
            <h2 className="font-heading text-2xl font-bold text-white mb-8">Why Work Here?</h2>
            <CareersPerks />
          </div>
 
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-8">Open Positions</h2>
            <CareersList />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}