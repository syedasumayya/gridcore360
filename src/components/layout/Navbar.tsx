"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Bot, Search, Target, Code2, Smartphone, Gamepad2, Users, Palette, Headphones, Lightbulb, LineChart, Car, HeartPulse, HardHat, Building2, Truck, ShoppingCart, GraduationCap, Monitor, UtensilsCrossed, Landmark } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Automation", href: "/services", icon: Bot },
      { name: "SEO & AEO", href: "/services", icon: Search },
      { name: "Performance Marketing", href: "/services", icon: Target },
      { name: "Website Development", href: "/services", icon: Code2 },
      { name: "Mobile Development", href: "/services", icon: Smartphone },
      { name: "Game Development", href: "/services", icon: Gamepad2 },
      { name: "CRM Solutions", href: "/services", icon: Users },
      { name: "Branding & Content", href: "/services", icon: Palette },
      { name: "BPO & Support", href: "/services", icon: Headphones },
      { name: "Business Consulting", href: "/services", icon: Lightbulb },
      { name: "Analytics & Reporting", href: "/services", icon: LineChart },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    children: [
      { name: "Automotive", href: "/industries", icon: Car },
      { name: "Healthcare", href: "/industries", icon: HeartPulse },
      { name: "Construction", href: "/industries", icon: HardHat },
      { name: "Real Estate", href: "/industries", icon: Building2 },
      { name: "Logistics", href: "/industries", icon: Truck },
      { name: "Retail", href: "/industries", icon: ShoppingCart },
      { name: "Education", href: "/industries", icon: GraduationCap },
      { name: "Technology", href: "/industries", icon: Monitor },
      { name: "Hospitality", href: "/industries", icon: UtensilsCrossed },
      { name: "Finance", href: "/industries", icon: Landmark },
    ],
  },

  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },


];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      {/* THE FIX: h-16 locks the bar size. overflow-visible lets the logo pop out! */}
      <div className={`transition-all duration-500 rounded-full px-6 h-16 flex items-center justify-between overflow-visible ${
        scrolled 
          ? "glass-strong shadow-2xl shadow-black/40 border border-white/10" 
          : "bg-dark-900/60 backdrop-blur-md border border-white/5"
      }`}>
        
               {/* Logo - Forced to 96px tall */}
              <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo1.png"
            alt="GridCore360"
            width={600}
            height={200}
            className="h-36 w-auto object-contain"
            priority
            style={{ maxWidth: 'none', marginRight: '-50px' }} 
          />
        </Link>

                 {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`px-3 py-2 text-sm flex items-center gap-1 transition-all duration-200 rounded-full hover:bg-white/5 ${
                  activeDropdown === link.name ? "text-neon-cyan" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                {link.children && <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === link.name && link.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-strong rounded-2xl p-4 shadow-2xl shadow-black/50 border border-white/10 ${
                      link.name === "Services" ? "w-[480px] grid grid-cols-2 gap-1" : "w-[220px] space-y-1"
                    }`}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-dark-800/90 border-l border-t border-white/10" />
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-300 hover:text-neon-cyan hover:bg-white/5 transition-all duration-200"
                      >
                        <child.icon size={15} className="flex-shrink-0 opacity-60" />
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact" className="btn-primary text-sm !py-2.5 !px-6 !rounded-full whitespace-nowrap">
            <span>Book a Call</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 glass-strong rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform ${mobileDropdown === link.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-neon-cyan transition-colors"
                              >
                                <child.icon size={13} />
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="pt-3 px-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-sm !rounded-full"
                >
                  <span>Book a Call</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}