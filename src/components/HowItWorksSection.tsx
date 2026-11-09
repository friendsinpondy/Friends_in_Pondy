"use client";

import { motion } from "framer-motion";
import { MessageSquareText, FileCheck, Smile, ArrowRight, Sparkles } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Share Your Vibe",
      tagline: "Takes less than 60 seconds",
      description:
        "Select who is travelling (couple, friends, family, or solo), your dates, and what you need—whether it’s a verified villa, a safe yellow-board cab, or secret local itineraries.",
      icon: MessageSquareText,
      accent: "#D46A43",
    },
    {
      step: "02",
      title: "Get Curated Safe Options",
      tagline: "Within 30 minutes on WhatsApp/Email",
      description:
        "Our local Pondicherry team personally reviews your preferences and sends you handpicked, 100% verified stay options and transparent cab quotes at direct local rates.",
      icon: FileCheck,
      accent: "#3A7D5C",
    },
    {
      step: "03",
      title: "Travel Pondy Stress-Free",
      tagline: "24/7 On-Ground Support",
      description:
        "Land in Pondy knowing your stay is legit, your cab driver is background-checked, and our local on-ground buddy team is on standby 24/7 for any emergency.",
      icon: Smile,
      accent: "#1B4D57",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-28 bg-[#FDF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D46A43]/15 text-[#D46A43] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Simple & Transparent Journey
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4D57] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#1B4D57]/70 font-normal">
            Planning a trip to Pondicherry has never been this seamless or safe. 3 simple steps to a hassle-free vacation.
          </p>
        </div>

        {/* 3-Step Visual Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[#DECBB4] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-[#F4E9D8] rounded-3xl p-6 sm:p-8 border border-[#E2D2BC] shadow-vintage hover:shadow-vintage-hover transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <span className="font-playfair text-3xl font-black text-[#1B4D57]/30 group-hover:text-[#D46A43] transition-colors">
                        {item.step}
                      </span>
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
                        style={{ backgroundColor: item.accent }}
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-[#D46A43] mb-1">
                      {item.tagline}
                    </div>

                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#1B4D57] mb-2 sm:mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1B4D57]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DECBB4]/80 flex items-center justify-between text-xs font-semibold text-[#1B4D57]">
                    <span>Step {index + 1} of 3</span>
                    <span className="text-[#3A7D5C]">✓ Hassle Free</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar below timeline */}
        <div className="mt-12 sm:mt-14 text-center">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#1B4D57] hover:bg-[#12373F] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Start Your 60-Second Trip Plan</span>
            <ArrowRight className="w-4 h-4 text-[#D46A43]" />
          </a>
        </div>

      </div>
    </section>
  );
}
