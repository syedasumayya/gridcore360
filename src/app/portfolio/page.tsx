import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageBanner badge="Our Work" title="Case Studies &" highlight="Portfolio" description="Real results from real partnerships. See how we engineer explosive growth." />
      
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}