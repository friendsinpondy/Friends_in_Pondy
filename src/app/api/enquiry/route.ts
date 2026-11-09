import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbxE7l4uOMS593LEcpzTvW86gzOqjuRxY7BSY5J_qoa7Cenz5tnhvvsgJY2NQGAhFZCwmw/exec";

// Generate FIP-YYYY-XXXX enquiry ID (year + 4 random digits)
function generateEnquiryId(): string {
  const year = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
  });
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `FIP-${year}-${randomDigits}`;
}

// Format 12-hour AM/PM timestamp in Indian Standard Time (IST)
function getFormatted12HrTimestamp(): string {
  const now = new Date();
  return now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      arrivalDate,
      travellerType,
      services,
      duration,
      customDuration,
      specialRequests,
      website_url, // Honeypot spam trap
    } = body;

    // Generate fallback FIP-YYYY-XXXX Enquiry ID
    const enquiryId = body.enquiryId || generateEnquiryId();

    // 12-Hour AM/PM IST Timestamp
    const formattedTimestamp = getFormatted12HrTimestamp();

    // Honeypot check: bot filled the hidden field → silent fake success
    if (website_url) {
      return NextResponse.json({
        success: true,
        enquiryId,
        timestamp: formattedTimestamp,
        message: "Enquiry received successfully.",
      });
    }

    // --- Server-side validation ---
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const cleanPhone = (phone || "").toString().replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Resolve duration string
    const resolvedDuration =
      duration === "Custom Duration" && customDuration?.trim()
        ? `Custom (${customDuration.trim()})`
        : duration || "2 Days / 1 Night";

    // Resolve arrival date string
    const resolvedArrivalDate = arrivalDate
      ? arrivalDate.toString().trim()
      : "Flexible / Not specified";

    // Resolve services as comma-separated string
    const resolvedServices = Array.isArray(services)
      ? services.join(", ").slice(0, 250)
      : (services || "Not specified").toString().slice(0, 250);

    // -----------------------------------------------------------------------
    // Payload aligned with Google Apps Script column expectations:
    //   enquiryId | timestamp | travelDate | groupType | services |
    //   duration  | notes     | name       | phone     | email    | source
    // -----------------------------------------------------------------------
    const payload = {
      enquiryId,
      timestamp: formattedTimestamp,
      // Both keys sent so GAS can read whichever column name it uses
      travelDate: resolvedArrivalDate,
      arrivalDate: resolvedArrivalDate,
      // Both keys sent so GAS can read whichever column name it uses
      groupType: (travellerType || "Couple").toString().slice(0, 50),
      travellerType: (travellerType || "Couple").toString().slice(0, 50),
      services: resolvedServices,
      duration: resolvedDuration.slice(0, 80),
      // Both keys sent so GAS can read whichever column name it uses
      notes: (specialRequests || "").toString().trim().slice(0, 500),
      specialRequests: (specialRequests || "").toString().trim().slice(0, 500),
      name: name.trim().slice(0, 100),
      phone: cleanPhone,
      email: email.trim().toLowerCase().slice(0, 120),
      source: "Friends in Pondy Web App",
    };

    // Forward to Google Apps Script Webhook and attempt to read back enquiry ID
    let gasEnquiryId = enquiryId; // fallback to locally-generated ID
    try {
      const gasResponse = await fetch(GOOGLE_SCRIPT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      // If GAS returns a JSON body with its own sequential enquiryId, prefer it
      if (gasResponse.ok) {
        try {
          const gasData = await gasResponse.json();
          if (gasData && gasData.enquiryId) {
            gasEnquiryId = gasData.enquiryId;
          }
        } catch {
          // GAS returned non-JSON (plain "OK" text) — keep our generated ID
        }
      }
    } catch (forwardErr) {
      console.error("Webhook forwarding notice:", forwardErr);
      // Keep showing success to user even if webhook has a network hiccup
    }

    return NextResponse.json({
      success: true,
      enquiryId: gasEnquiryId,
      timestamp: formattedTimestamp,
      arrivalDate: resolvedArrivalDate,
      travelDate: resolvedArrivalDate,
      message: "Enquiry received successfully.",
    });
  } catch (err: unknown) {
    console.error("Enquiry API handler error:", err);
    return NextResponse.json(
      {
        success: true,
        enquiryId: generateEnquiryId(),
        timestamp: getFormatted12HrTimestamp(),
        message: "Enquiry received successfully.",
      },
      { status: 200 }
    );
  }
}
