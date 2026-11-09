"use client";

import { motion } from "framer-motion";
import {
  Home,
  Car,
  Compass,
  CheckCircle,
  Shield,
  Clock,
  Sparkles,
  MapPin,
  Lock,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "stays",
      icon: Home,
      tag: "Personally Inspected",
      tagColor: "bg-[#3A7D5C]/15 text-[#3A7D5C] border-[#3A7D5C]/30",
      accentColor: "#3A7D5C",
      title: "100% Safe & Verified Stays",
      description:
        "Every French Quarter heritage villa, coastal cottage, and private homestay in our network is personally audited by our founders for safety, cleanliness, and comfort.",
      features: [
        "Personally inspected villas & boutique homestays",
        "24/7 CCTV surveillance & verified live-in caretakers",
        "Well-lit, family-friendly, and couple-safe neighbourhoods",
        "100% genuine properties — zero fake or misleading photos",
        "Secure digital locks & emergency first-aid kits on premise",
      ],
      badge: "Zero Fake Stays",
    },
    {
      id: "cabs",
      icon: Car,
      tag: "Fixed Transparent Fares",
      tagColor: "bg-[#D46A43]/15 text-[#D46A43] border-[#D46A43]/30",
      accentColor: "#D46A43",
      title: "Verified Yellow-Board Cabs",
      description:
        "Say goodbye to tourist overcharging, auto haggling, or stranded drivers. Travel in certified commercial yellow-board vehicles with trusted local drivers.",
      features: [
        "Background-checked, polite, and verified local drivers",
        "100% fixed, transparent pricing with zero surprise charges",
        "Guaranteed on-time pickups — zero last-minute cancellations",
        "Clean, sanitized, and chilled air-conditioned cabs",
        "Seamless airport, railway station, & intercity transit",
      ],
      badge: "No Meter Tampering",
    },
    {
      id: "buddy",
      icon: Compass,
      tag: "Always By Your Side",
      tagColor: "bg-[#1B4D57]/15 text-[#1B4D57] border-[#1B4D57]/30",
      accentColor: "#1B4D57",
      title: "24/7 Local Buddy Support & Secret Trails",
      description:
        "You’re never a stranger in Pondicherry. Our founders and on-ground team are on call 24/7 to solve emergencies and reveal hidden gems only locals know.",
      features: [
        "On-ground emergency and medical assistance anytime",
        "Curated secret sunrise beaches away from crowded tourist spots",
        "Authentic French bakery & Tamil-Creole foodie trail maps",
        "Live WhatsApp recommendation buddy for cafes & bike rentals",
        "Direct founder hotline for complete peace of mind",
      ],
      badge: "24/7 Founder Hotline",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F4E9D8]/50 border-y border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1B4D57]/10 text-[#1B4D57] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D46A43]" />
            What We Do For You
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4D57] tracking-tight">
            Our Safe & Trusted Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1B4D57]/70 font-normal">
            We built Friends in Pondy to eliminate scams, exorbitant commissions, and safety concerns. Here is how we guarantee your trip remains unforgettable and 100% safe.
          </p>
        </div>

        {/* 3 Floating Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#FDF8EE] rounded-3xl p-7 sm:p-8 border border-[#E2D2BC] shadow-vintage hover:shadow-vintage-hover transition-all flex flex-col justify-between relative group"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#1B4D57] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#1B4D57]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#1B4D57]/80">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#3A7D5C] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Trust Badge & Action */}
                <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3A7D5C]">
                    <Shield className="w-3.5 h-3.5" />
                    {item.badge}
                  </span>
                  <a
                    href="#hero"
                    className="text-xs font-bold text-[#D46A43] hover:text-[#C0562F] flex items-center gap-1 group-hover:underline"
                  >
                    Inquire Now →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Safety Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#1B4D57] text-[#FDF8EE] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D46A43] flex items-center justify-center text-white flex-shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-playfair text-xl sm:text-2xl font-bold">
                100% Verified Local Safety Pledge
              </h4>
              <p className="text-sm text-[#FDF8EE]/80 mt-1">
                If anything doesn&apos;t match our verified standards, our local founders will immediately replace or resolve it on-ground.
              </p>
            </div>
          </div>
          <a
            href="#hero"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-[#D46A43] hover:bg-[#C0562F] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            Get Verified Plan
          </a>
        </div>

      </div>
    </section>
  );
}
