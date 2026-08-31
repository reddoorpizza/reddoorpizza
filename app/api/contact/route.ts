import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, phone, email, type, date, guests, message, formLocation } =
      body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: "Name and message are required." },
        { status: 400 }
      );
    }

    // Placeholder — connect to Resend, SendGrid, or similar mailer service
    console.log("Contact form submission:", {
      name,
      phone,
      email,
      type,
      date,
      guests,
      message,
      formLocation,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Enquiry received. We'll be in touch." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}
