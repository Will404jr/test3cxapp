import { type NextRequest, NextResponse } from "next/server"
import { contacts } from "@/lib/contacts"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const phone = searchParams.get("phone")

  if (!phone) {
    return NextResponse.json({ error: "Phone number parameter is required" }, { status: 400 })
  }

  // Find contact by phone number
  const contact = contacts.find((c) => c.mobilephone === phone)

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
