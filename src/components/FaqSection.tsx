"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you guarantee that stays are 100% safe and verified?",
      answer:
        "Unlike generic aggregation sites that let anyone upload unverified photos, our local founders personally visit and inspect every single property. We check physical locks, CCTV coverage, neighbourhood safety at night, caretaker trustworthiness, and cleanliness standards before any guest is booked. If anything falls short, we replace your stay immediately.",
    },
    {
      question: "Are the yellow-board cabs fixed price with no hidden charges?",
      answer:
        "Yes, absolutely. We partner directly with verified commercial yellow-board operators. When you request a cab (airport transfer, local sightseeing, Auroville, or Chennai ECR), you receive an all-inclusive, fixed rate quote upfront. No meter tampering, no surge pricing during weekends or festivals, and zero surprise driver allowances.",
    },
    {
      question: "What kind of 24/7 Local Buddy Support do you provide?",
      answer:
        "You get a dedicated WhatsApp support line connected directly to our founders and local on-ground team. Need emergency medical help? Lost your way in the French Quarter? Looking for late-night food or an uncrowded sunrise beach? We are available 24/7 to guide you, call cabs, or show up in person if needed.",
    },
    {
      question: "Why should we book through Friends in Pondy instead of big generic travel apps?",
      answer:
        "Big booking platforms take 20-30% commissions, driving up costs for you and forcing property owners to cut corners. More importantly, when problems occur (fake bookings, overbooked rooms, stranded cabs), big apps leave you stuck on hold with automated bots. With Friends in Pondy, you get honest local prices, personally audited stays, and genuine local friends right here in Puducherry watching your back.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-[#FDF8EE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1B4D57]/10 text-[#1B4D57] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D46A43]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4D57] tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#1B4D57]/70 font-normal">
            Everything you need to know about safe stays, cabs, and 24/7 support in Pondicherry.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F4E9D8] rounded-2xl border border-[#E2D2BC] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left transition-colors hover:bg-[#F0E3D0] cursor-pointer touch-manipulation select-none"
                >
                  <span className="font-playfair text-base sm:text-xl font-bold text-[#1B4D57] pr-3 sm:pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#D46A43] text-white rotate-180"
                        : "bg-[#1B4D57]/10 text-[#1B4D57]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-[#1B4D57]/80 leading-relaxed border-t border-[#DECBB4]/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 sm:mt-12 text-center p-5 sm:p-6 bg-[#F4E9D8]/60 rounded-3xl border border-[#E2D2BC]">
          <h4 className="font-playfair text-base sm:text-lg font-bold text-[#1B4D57]">
            Have a custom itinerary or specific question?
          </h4>
          <p className="text-xs sm:text-sm text-[#1B4D57]/70 mt-1">
            Talk to our local founders and travel buddies directly.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 mt-3.5 px-6 py-2.5 rounded-full bg-[#D46A43] hover:bg-[#C0562F] text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <span>Ask A Local Buddy</span>
          </a>
        </div>

      </div>
    </section>
  );
}
