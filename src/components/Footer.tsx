import Image from "next/image";
import { ShieldCheck, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B4D57] text-[#FDF8EE] pt-14 pb-10 border-t-4 border-[#D46A43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#FDF8EE]/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#D46A43] bg-white shadow-md flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="Friends in Pondy"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-playfair text-xl sm:text-2xl font-bold tracking-tight text-[#FDF8EE] block leading-tight">
                  Friends in Pondy
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#D46A43] flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 inline text-[#3A7D5C]" />
                  Your Trusted Travel Buddies
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FDF8EE]/75 leading-relaxed max-w-sm">
              Pondicherry&apos;s #1 safety-first travel collective. Personally verified stays, certified yellow-board cabs, and 24/7 on-ground buddy support.
            </p>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDF8EE]/10 border border-[#FDF8EE]/20 text-xs text-[#FDF8EE]/90">
              <MapPin className="w-3.5 h-3.5 text-[#D46A43]" />
              <span>Puducherry 605001, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-playfair text-base font-bold text-[#FDF8EE] tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FDF8EE]/75">
              <li>
                <a href="#hero" className="hover:text-[#D46A43] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D46A43] transition-colors">
                  Safe Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#D46A43] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D46A43] transition-colors">
                  About Our Founders
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D46A43] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Safety Pledge */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-playfair text-base font-bold text-[#FDF8EE] tracking-wide">
              Our Safety Promise
            </h4>
            <p className="text-xs sm:text-sm text-[#FDF8EE]/75 leading-relaxed">
              Proudly created by local Pondicherry tech entrepreneurs to eliminate travel scams and overcharging.
            </p>
            <div className="bg-[#12373F] p-3.5 rounded-2xl border border-[#FDF8EE]/10 text-xs space-y-1 text-[#FDF8EE]/90">
              <div className="flex items-center gap-1.5 text-[#3A7D5C] font-semibold">
                ✓ 100% In-Person Stay Verification
              </div>
              <div className="flex items-center gap-1.5 text-[#D46A43] font-semibold">
                ✓ Transparent Yellow-Board Cabs
              </div>
              <div className="flex items-center gap-1.5 text-white font-semibold">
                ✓ 24/7 Local Buddy Helpline
              </div>
            </div>
            <p className="text-[11px] text-[#FDF8EE]/60 italic">
              &ldquo;We don&apos;t just book rooms; we look after you like our own guests in Pondy.&rdquo;
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDF8EE]/60 gap-3">
          <p>
            © {new Date().getFullYear()} Friends in Pondy. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-[#D46A43] fill-[#D46A43]" /> for safe travels in Pondicherry.
          </p>
        </div>

      </div>
    </footer>
  );
}
