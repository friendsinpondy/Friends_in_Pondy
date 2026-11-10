"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Send,
  Loader2,
  Users,
  Compass,
  Calendar,
  Phone,
  Mail,
  User,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Clock,
  Ticket,
  UserCheck,
} from "lucide-react";

type TravellerType = "Couple" | "Friends Gang" | "Family" | "Solo Safe";
type TravellerCount = "1" | "2" | "3" | "4" | "5" | "More than 5";
type DurationType = "2 Days / 1 Night" | "3 Days / 2 Nights" | "Custom Duration";

const TRAVELLER_OPTIONS: { label: TravellerType; emoji: string; subtitle: string }[] = [
  { label: "Couple", emoji: "💑", subtitle: "Private & Romantic" },
  { label: "Friends Gang", emoji: "🏄", subtitle: "Fun & Beachside" },
  { label: "Family", emoji: "👨‍👩‍👧‍👦", subtitle: "Safe & Relaxed" },
  { label: "Solo Safe", emoji: "🎒", subtitle: "Verified Peace of Mind" },
];

const TRAVELLER_COUNTS: TravellerCount[] = ["1", "2", "3", "4", "5", "More than 5"];

const SERVICE_OPTIONS = [
  "100% Verified Stays",
  "Smooth & Safe Rides",
  "Always-On Local Buddy Support",
  "Secret Hidden Spot",
];

const DURATION_OPTIONS: DurationType[] = [
  "2 Days / 1 Night",
  "3 Days / 2 Nights",
  "Custom Duration",
];

export default function EnquiryForm() {
  const [travellerType, setTravellerType] = useState<TravellerType>("Couple");
  const [travellerCount, setTravellerCount] = useState<TravellerCount>("2");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "100% Verified Stays",
    "Smooth & Safe Rides",
  ]);
  const [duration, setDuration] = useState<DurationType>("2 Days / 1 Night");
  const [customDuration, setCustomDuration] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState(""); // Honeypot

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmedEnquiryId, setConfirmedEnquiryId] = useState("");
  const [confirmedTimestamp, setConfirmedTimestamp] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const todayDateString = new Date().toISOString().split("T")[0];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.length > 1
          ? prev.filter((s) => s !== service)
          : prev
        : [...prev, service]
    );
  };

  const validateForm = () => {
    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return false;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage(
        "Please enter a valid 10-digit Indian mobile number (e.g. 9810098100)."
      );
      return false;
    }
    if (email.trim() !== "") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email.trim())) {
        setErrorMessage("Please enter a valid email address (e.g. rishan@gmail.com).");
        return false;
      }
    }
    setErrorMessage(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const year = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", year: "numeric" });
    const localEnquiryId = `FIP-${year}-${Math.floor(1000 + Math.random() * 9000)}`;

    if (websiteUrl) {
      setConfirmedEnquiryId(localEnquiryId);
      setConfirmedTimestamp(
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true })
      );
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryId: localEnquiryId,
          name: name.trim(),
          phone: phone.replace(/\D/g, ""),
          email: email.trim(),
          travellersCount: travellerCount,
          arrivalDate: arrivalDate.trim(),
          travelDate: arrivalDate.trim(),
          travellerType,
          groupType: travellerType,
          services: selectedServices,
          duration,
          customDuration: duration === "Custom Duration" ? customDuration.trim() : "",
          specialRequests: specialRequests.trim(),
          notes: specialRequests.trim(),
          website_url: websiteUrl,
        }),
      });

      const data = await response.json();
      setConfirmedEnquiryId(data.enquiryId || localEnquiryId);
      setConfirmedTimestamp(
        data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true })
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setConfirmedEnquiryId(localEnquiryId);
      setConfirmedTimestamp(
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true })
      );
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setArrivalDate("");
    setSpecialRequests("");
    setCustomDuration("");
    setWebsiteUrl("");
    setSubmitted(false);
    setConfirmedEnquiryId("");
    setConfirmedTimestamp("");
    setErrorMessage(null);
  };

  return (
    <div
      id="enquiry-card"
      className="relative bg-[#F4E9D8] rounded-3xl p-5 sm:p-7 md:p-8 border-2 border-[#E2D2BC] shadow-vintage overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#1B4D57]/5 flex items-center justify-center pointer-events-none">
        <Sparkles className="w-8 h-8 text-[#D46A43]/40" />
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Trust Header */}
            <div className="mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3A7D5C]/15 border border-[#3A7D5C]/30 text-[#3A7D5C] text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Local Trusted Pondy Guys • Zero Middlemen
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1B4D57] tracking-tight">
                Plan Your Safe Pondy Trip
              </h3>
              <p className="text-xs sm:text-sm text-[#1B4D57]/70 mt-1 leading-relaxed">
                Managed strictly by local experts. Get verified stays & safe rides within 30 minutes!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                <input
                  type="text"
                  name="website_url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Step 1: Who is travelling? */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B4D57] mb-2">
                  <Users className="w-4 h-4 text-[#D46A43]" />
                  <span>Step 1: Who is travelling?</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {TRAVELLER_OPTIONS.map((item) => {
                    const isSelected = travellerType === item.label;
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setTravellerType(item.label)}
                        className={`flex flex-col items-center justify-center min-h-[54px] py-2.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation select-none border ${
                          isSelected
                            ? "bg-[#1B4D57] text-white border-[#1B4D57] shadow-md scale-[1.02]"
                            : "bg-[#FDF8EE] text-[#1B4D57] border-[#DECBB4] hover:border-[#1B4D57]/50 hover:bg-white active:scale-95"
                        }`}
                      >
                        <span className="text-lg leading-none mb-1">{item.emoji}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 1.5: How many members? */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B4D57] mb-2">
                  <UserCheck className="w-4 h-4 text-[#D46A43]" />
                  <span>How many members are coming?</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {TRAVELLER_COUNTS.map((count) => {
                    const isSelected = travellerCount === count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setTravellerCount(count)}
                        className={`min-h-[40px] py-2 px-1 rounded-xl text-xs font-bold text-center transition-all cursor-pointer touch-manipulation select-none border ${
                          isSelected
                            ? "bg-[#D46A43] text-white border-[#D46A43] shadow-sm scale-105"
                            : "bg-[#FDF8EE] text-[#1B4D57] border-[#DECBB4] hover:bg-white active:scale-95"
                        }`}
                      >
                        {count}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: What do you need? */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B4D57]">
                    <Compass className="w-4 h-4 text-[#D46A43]" />
                    <span>Step 2: What do you need?</span>
                  </label>
                  <span className="text-[11px] font-normal text-[#1B4D57]/60">
                    (Multi-select)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`flex items-center gap-2.5 min-h-[44px] py-2 px-3 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer touch-manipulation select-none border ${
                          isSelected
                            ? "bg-[#3A7D5C] text-white border-[#3A7D5C] shadow-sm"
                            : "bg-[#FDF8EE] text-[#1B4D57] border-[#DECBB4] hover:bg-white active:scale-95"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] flex-shrink-0 ${
                            isSelected
                              ? "bg-white text-[#3A7D5C] border-white font-bold"
                              : "border-[#1B4D57]/30 bg-white"
                          }`}
                        >
                          {isSelected && "✓"}
                        </div>
                        <span className="leading-snug">{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Duration & Arrival Date */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B4D57]">
                  <Calendar className="w-4 h-4 text-[#D46A43]" />
                  <span>Step 3: Trip Duration & Arrival Date</span>
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {DURATION_OPTIONS.map((item) => {
                    const isSelected = duration === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setDuration(item)}
                        className={`min-h-[44px] py-2 px-1 rounded-xl text-xs text-center transition-all cursor-pointer touch-manipulation select-none border ${
                          isSelected
                            ? "bg-[#D46A43] text-white border-[#D46A43] font-bold shadow-md"
                            : "bg-[#FDF8EE] text-[#1B4D57] border-[#DECBB4] hover:bg-white"
                        }`}
                      >
                        <span className="block leading-snug">{item}</span>
                      </button>
                    );
                  })}
                </div>

                {duration === "Custom Duration" && (
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-3 text-[#1B4D57]/50" />
                    <input
                      type="text"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      placeholder="Enter duration (e.g. 4 Days / 3 Nights)"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#FDF8EE] border border-[#DECBB4] text-xs sm:text-sm text-[#1B4D57]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#1B4D57] mb-1">
                    Expected Arrival Date in Pondy
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#1B4D57]/40 pointer-events-none" />
                    <input
                      type="date"
                      min={todayDateString}
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FDF8EE] border border-[#DECBB4] text-xs sm:text-sm text-[#1B4D57] focus:outline-none focus:ring-2 focus:ring-[#D46A43]"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="pt-2 border-t border-[#DECBB4]/80 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1B4D57] mb-1">
                      Your Full Name <span className="text-[#D46A43]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3.5 text-[#1B4D57]/40 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Rishan"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FDF8EE] border border-[#DECBB4] text-sm text-[#1B4D57]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1B4D57] mb-1">
                      10-Digit Mobile / WhatsApp <span className="text-[#D46A43]">*</span>
                    </label>
                    <div className="relative flex">
                      <span className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 border-[#DECBB4] bg-[#FDF8EE] text-xs font-semibold text-[#1B4D57]/70">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="9810098100"
                        className="w-full px-3 py-2.5 rounded-r-xl bg-[#FDF8EE] border border-[#DECBB4] text-sm text-[#1B4D57]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-[#1B4D57] mb-1">
                    Email Address <span className="text-[#1B4D57]/50 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3.5 text-[#1B4D57]/40 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., rishan@gmail.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FDF8EE] border border-[#DECBB4] text-sm text-[#1B4D57]"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-[#1B4D57] mb-1">
                    Special Requests <span className="text-[#1B4D57]/50 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 absolute left-3 top-3.5 text-[#1B4D57]/40 pointer-events-none" />
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Near White Town, early sunrise trip"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FDF8EE] border border-[#DECBB4] text-sm text-[#1B4D57]"
                    />
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-100 border border-red-200 text-red-800 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full min-h-[50px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#D46A43] hover:bg-[#C0562F] text-white font-bold text-base shadow-lg cursor-pointer transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Connecting with Pondy team...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div key="success" className="py-6 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#3A7D5C]/15 border-2 border-[#3A7D5C] flex items-center justify-center text-[#3A7D5C] mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            {confirmedEnquiryId && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4D57] text-[#FDF8EE] text-xs font-bold mb-3">
                <Ticket className="w-4 h-4 text-[#D46A43]" />
                <span>Enquiry ID: {confirmedEnquiryId}</span>
              </div>
            )}
            <h3 className="font-playfair text-2xl font-bold text-[#1B4D57] mb-2">Enquiry Received! 🎉</h3>
            <p className="text-xs sm:text-sm text-[#1B4D57]/80 max-w-md mb-5">
              Thank you, <strong className="text-[#1B4D57] font-bold">{name}</strong> ({travellerCount} Travellers • {travellerType}). Our local team will reach out soon!
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#1B4D57]/30 text-[#1B4D57] font-semibold text-xs hover:bg-white cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Submit Another Enquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}