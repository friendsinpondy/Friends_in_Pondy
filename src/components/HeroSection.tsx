"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Star, MapPin } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

export default function HeroSection() {
  const trustChips = [
    { label: "100% Scam-Free", icon: Star, color: "text-amber-700 bg-amber-50 border-amber-200" },
    { label: "Couple & Family Safe", icon: ShieldCheck, color: "text-[#3A7D5C] bg-[#3A7D5C]/10 border-[#3A7D5C]/30" },
    { label: "Local Pondy Founders", icon: MapPin, color: "text-[#D46A43] bg-[#D46A43]/10 border-[#D46A43]/30" },
  ];

  return (
    <section id="hero" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background Vintage Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D46A43]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1B4D57]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A7D5C]/15 border border-[#3A7D5C]/30 text-[#295F44] text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <span className="text-base">🔒</span>
              <span>Pondicherry&apos;s #1 Safety-First Local Travel Team</span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B4D57] leading-[1.18] sm:leading-[1.15] tracking-tight">
              Travel Pondy with{" "}
              <span className="relative inline-block text-[#D46A43]">
                100% Safety
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#D46A43]/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>{" "}
              & Zero Hassle!
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-[#1B4D57]/80 leading-relaxed font-normal">
              <strong className="text-[#1B4D57] font-semibold">100% Personally Verified Safe Stays</strong> •{" "}
              <strong className="text-[#1B4D57] font-semibold">Trusted Yellow-Board Cabs</strong> •{" "}
              <strong className="text-[#1B4D57] font-semibold">24/7 Local Buddy Emergency Support</strong>.{" "}
              We look after you like family.
            </p>

            {/* 3 Trust Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {trustChips.map((chip) => {
                const IconComponent = chip.icon;
                return (
                  <div
                    key={chip.label}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-semibold ${chip.color} shadow-sm`}
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{chip.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Local Heritage Stamp Card (No founder names here) */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4E9D8]/80 border border-[#E2D2BC] flex items-center gap-3.5 sm:gap-4 shadow-sm">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#1B4D57] flex-shrink-0 shadow">
                <Image
                  src="/logo.jpeg"
                  alt="Friends in Pondy Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-playfair font-bold text-[#1B4D57] text-sm sm:text-base leading-tight">
                  &ldquo;We don&apos;t just book rooms; we stand by you on the streets.&rdquo;
                </p>
                <p className="text-[#1B4D57]/70 mt-1">
                  Hand-crafted by proud local Pondy founders and on-ground safety partners.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 mt-4 lg:mt-0"
          >
            <EnquiryForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
