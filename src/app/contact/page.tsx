import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import ContactBelief from "@/components/sections/ContactBelief"; // <-- ADDED THIS
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import AppointmentBooking from "@/components/sections/AppointmentBooking";
import FAQ from "@/components/sections/FAQ";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageBanner
        badge="Get In Touch"
        title="Let&apos;s Start a"
        highlight="Conversation"
        description="Whether you're ready to scale or just exploring options, we're here to help."
      />
      
      {/* THE NEW BELIEF SECTION */}
      <ContactBelief />

      <section className="section-padding pt-0">
        <div className="container-custom mx-auto space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <ContactForm />
            <AppointmentBooking />
          </div>

          <ContactInfo />
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}