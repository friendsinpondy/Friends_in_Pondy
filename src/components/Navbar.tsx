"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ShieldCheck, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Safe Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDF8EE]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Brand Identity */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D46A43] shadow-md transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpeg"
                alt="Friends in Pondy Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl sm:text-2xl font-bold tracking-tight text-[#1B4D57] group-hover:text-[#D46A43] transition-colors leading-tight">
                Friends in Pondy
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#3A7D5C] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 inline text-[#3A7D5C]" />
                Your Trusted Travel Buddies
              </span>
            </div>
          </a>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#1B4D57]/80 hover:text-[#D46A43] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D46A43] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#hero"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D46A43] hover:bg-[#C0562F] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-4 h-4" />
              Plan Safe Trip
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1B4D57] hover:bg-[#F4E9D8] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDF8EE] border-b border-[#E8DEC8] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-[#1B4D57] hover:bg-[#F4E9D8] hover:text-[#D46A43] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D46A43] hover:bg-[#C0562F] text-white font-semibold text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Plan Safe Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
