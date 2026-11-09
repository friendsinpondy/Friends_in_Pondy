"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, HeartHandshake, CheckCircle2, MapPin, UserCheck } from "lucide-react";

export default function AboutSection() {
  const founders = [
    {
      name: "Mohamed Rishan R",
      title: "Co-Founder",
      bio: "Local tech entrepreneur dedicated to eliminating tourist exploitation, verifying transparent logistics, and ensuring round-the-clock safety for all guests in Pondicherry.",
      badge: "Co-Founder",
      initials: "MR",
      accent: "#1B4D57",
    },
    {
      name: "Sri Gokul A",
      title: "Co-Founder",
      bio: "Heritage enthusiast who personally inspects French Quarter villas and homestays, ensuring strict CCTV coverage, verified caretakers, and authentic quiet locations.",
      badge: "Co-Founder",
      initials: "SG",
      accent: "#D46A43",
    },
    {
      name: "Peramudhan V",
      title: "Co-Founder",
      bio: "Works directly with verified local yellow-board drivers and native homestay hosts to guarantee honest local rates and dependable transit across Puducherry.",
      badge: "Co-Founder",
      initials: "PV",
      accent: "#3A7D5C",
    },
  ];

  const trustBadges = [
    {
      title: "Zero Middlemen Scams",
      desc: "Direct host & driver connections. No hidden agency commissions, markups, or fake property photos.",
      icon: ShieldCheck,
      color: "bg-[#3A7D5C]/15 text-[#3A7D5C]",
    },
    {
      title: "100% Local Price Guarantee",
      desc: "Pay honest local rates. Completely transparent fixed-fare yellow-board cabs and authentic villa prices.",
      icon: Award,
      color: "bg-[#D46A43]/15 text-[#D46A43]",
    },
    {
      title: "24/7 On-Ground Support",
      desc: "Direct access to our founders and local travel buddies right here in Pondicherry anytime you need help.",
      icon: Users,
      color: "bg-[#1B4D57]/15 text-[#1B4D57]",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-[#F4E9D8]/40 border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3A7D5C]/15 text-[#3A7D5C] text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Our Heritage & Story
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4D57] tracking-tight">
            Meet Your Local Pondy Founders
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#1B4D57]/80 font-normal">
            We are not an anonymous corporate booking app. We are local students and young entrepreneurs from Puducherry who treat every traveler like family.
          </p>
        </div>

        {/* Storytelling Block & Logo Showcase */}
        <div className="bg-[#FDF8EE] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E2D2BC] shadow-vintage mb-14 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D46A43]">
                Why We Started &ldquo;Friends in Pondy&rdquo;
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1B4D57] leading-snug">
                Built to protect travelers from fake listings, overpriced autos, and vacation stress.
              </h3>
              <p className="text-sm sm:text-base text-[#1B4D57]/80 leading-relaxed">
                Pondicherry is a coastal jewel loved for its French Quarter avenues, serene beaches, and spiritual cafes. But too often, visitors fall victim to inflated broker commissions, uninspected homestays with poor security, and predatory cab pricing.
              </p>
              <p className="text-sm sm:text-base text-[#1B4D57]/80 leading-relaxed">
                We founded <strong className="text-[#D46A43] font-semibold">Friends in Pondy</strong> to change that. By personally auditing every property, partnering with certified yellow-board drivers, and providing on-ground assistance 24/7, we guarantee a safe, stress-free stay for couples, families, and solo explorers.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 text-xs font-semibold text-[#1B4D57]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3A7D5C] flex-shrink-0" />
                  <span>Personally Audited Keys</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3A7D5C] flex-shrink-0" />
                  <span>Certified Yellow-Board Drivers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3A7D5C] flex-shrink-0" />
                  <span>On-Ground Local Emergency Network</span>
                </div>
              </div>
            </div>

            {/* Emblem / Badge Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-[#F4E9D8] rounded-2xl border border-[#E2D2BC]">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#1B4D57] shadow-xl mb-4">
                <Image
                  src="/logo.jpeg"
                  alt="Friends in Pondy Official Badge"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-playfair text-xl font-bold text-[#1B4D57]">
                Friends in Pondy
              </h4>
              <p className="text-xs font-semibold text-[#D46A43] uppercase tracking-wider">
                &ldquo;Your Trusted Travel Buddies&rdquo;
              </p>
              <p className="text-xs text-[#1B4D57]/70 mt-1 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#3A7D5C]" />
                White Town, Puducherry 605001
              </p>
            </div>

          </div>
        </div>

        {/* Co-Founders: STRICTLY LINE-BY-LINE (1 card per row) with Standardized "Co-Founder" title */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4D57]/10 text-[#1B4D57] text-xs font-bold uppercase tracking-wider mb-2">
              <UserCheck className="w-3.5 h-3.5 text-[#D46A43]" />
              Co-Founders & Leadership Team
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1B4D57]">
              The People Standing Behind Your Trip
            </h3>
            <p className="text-xs sm:text-sm text-[#1B4D57]/70 mt-1 max-w-xl mx-auto">
              Our three co-founders are on the ground in Puducherry to ensure your trip is seamless, honest, and completely safe.
            </p>
          </div>

          {/* Strictly Line-by-Line Stack (1 distinct card per row) */}
          <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto">
            {founders.map((founder, idx) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#FDF8EE] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E2D2BC] shadow-vintage hover:shadow-vintage-hover transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                {/* Left: Avatar & Standardized Co-Founder Title */}
                <div className="flex items-start sm:items-center gap-4">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white font-playfair font-bold text-lg sm:text-xl flex items-center justify-center shadow-md flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: founder.accent }}
                  >
                    {founder.initials}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-playfair text-xl sm:text-2xl font-bold text-[#1B4D57]">
                        {founder.name}
                      </h4>
                      <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#3A7D5C]/15 text-[#3A7D5C] border border-[#3A7D5C]/30">
                        {founder.badge}
                      </span>
                    </div>
                    {/* Standardized Title */}
                    <div className="text-xs sm:text-sm font-bold text-[#D46A43] tracking-wide">
                      {founder.title}
                    </div>
                  </div>
                </div>

                {/* Right: Bio & Location */}
                <div className="md:max-w-md lg:max-w-lg md:text-left border-t md:border-t-0 md:border-l border-[#DECBB4]/80 pt-3 md:pt-0 md:pl-6">
                  <p className="text-xs sm:text-sm text-[#1B4D57]/75 leading-relaxed">
                    {founder.bio}
                  </p>
                  <div className="mt-2.5 flex items-center gap-4 text-[11px] font-semibold text-[#1B4D57]/65">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D46A43]" /> Puducherry Resident
                    </span>
                    <span className="text-[#3A7D5C] flex items-center gap-1">
                      ● Active On-Ground
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 Official Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="bg-[#FDF8EE] rounded-2xl p-5 sm:p-6 border border-[#E2D2BC] shadow-sm flex items-start gap-3.5 sm:gap-4"
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${badge.color}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-playfair text-base sm:text-lg font-bold text-[#1B4D57]">
                    {badge.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1B4D57]/70 mt-1 leading-snug">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
