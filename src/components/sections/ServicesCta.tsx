import Link from "next/link";

export default function ServicesCta() {
  return (
    <div className="glass-strong rounded-2xl p-12 max-w-3xl mx-auto text-center gradient-border">
      <h2 className="font-heading text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
      <p className="text-slate-400 mb-8">We can build a bespoke package tailored exactly to your business requirements.</p>
      <Link href="/contact" className="btn-primary text-base px-10 py-4">
        <span>Contact Us</span>
      </Link>
    </div>
  );
}