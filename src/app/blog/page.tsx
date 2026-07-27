import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import BlogFeatured from "@/components/sections/BlogFeatured";
import BlogGrid from "@/components/sections/BlogGrid";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageBanner
        badge="Insights"
        title="The GridCore"
        highlight="Blog"
        description="Deep dives into AI, growth engineering, and the future of enterprise tech."
      />
      
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <BlogFeatured />
          <BlogGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}