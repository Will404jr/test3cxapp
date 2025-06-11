import { type NextRequest, NextResponse } from "next/server"
import { contacts } from "@/lib/contacts"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const phone = searchParams.get("phone")

  if (!phone) {
    return NextResponse.json({ error: "Phone number parameter is required" }, { status: 400 })
  }

  // Find contact by phone number (exact match first)
  let contact = contacts.find((c) => c.mobilephone === phone)

  // If no exact match found, try matching by last 7 digits
  if (!contact && phone.length >= 7) {
    // Remove any non-digit characters and get last 7 digits of search term
    const searchDigits = phone.replace(/\D/g, "").slice(-7)

    if (searchDigits.length === 7) {
      contact = contacts.find((c) => {
        // Get last 7 digits of contact's phone number
        const contactDigits = c.mobilephone.replace(/\D/g, "").slice(-7)
        return contactDigits === searchDigits
      })
    }
  }

  if (!contact) {
    return NextResponse.json({ error: "Contact not found" }, { status: 404 })
  }

  return NextResponse.json({
    contact: {
      id: contact.id,
      firstname: contact.firstname,
      lastname: contact.lastname,
      deliveryAddress: contact.deliveryAddress,
      mobilephone: contact.mobilephone,
    },
  })
}
