"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  MessageCircle,
  Rss,
  Share2,
  Link2,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Automation", href: "/services" },
    { name: "SEO & AEO", href: "/services" },
    { name: "Performance Marketing", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "CRM Solutions", href: "/services" },
    { name: "Business Consulting", href: "/services" },
  ],
  industries: [
    { name: "Healthcare", href: "/industries" },
    { name: "Real Estate", href: "/industries" },
    { name: "Automotive", href: "/industries" },
    { name: "Technology", href: "/industries" },
    { name: "Finance", href: "/industries" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Chat" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: Rss, href: "#", label: "RSS" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-900/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column - Logo aligned with headings, no empty gaps */}
          <div className="lg:col-span-2">
                       <Image
              src="/images/logo1.png"
              alt="GridCore360"
              width={500}
              height={150}
              className="h-44 w-auto mb-2"
            />
            <p className="text-slate-400 leading-relaxed max-w-sm text-sm">
              AI-powered cybernetic growth solutions that transform businesses
              into intelligent, automated, and scalable operations.
            </p>
            
            {/* Contact Info directly under paragraph */}
            <div className="space-y-3 text-sm text-slate-400 mt-6">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neon-cyan flex-shrink-0" />
                <span>hello@gridcore360.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-neon-cyan flex-shrink-0" />
                <span>+1 (555) 360-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-neon-cyan flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-neon-cyan transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-neon-cyan transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Socials */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">Industries</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-neon-cyan transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GridCore360. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}