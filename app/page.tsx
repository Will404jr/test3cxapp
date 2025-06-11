import { contacts } from "@/lib/contacts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, User } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contacts Directory</h1>
        <p className="text-muted-foreground">Browse all contacts in the system. Total contacts: {contacts.length}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5" />
                {contact.firstname} {contact.lastname}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono">{contact.mobilephone}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{contact.deliveryAddress}</span>
              </div>
              <div className="text-xs text-muted-foreground pt-2 border-t">ID: {contact.id}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-3">API Usage</h2>
        <p className="text-sm text-muted-foreground mb-2">Use the lookup endpoint to find contacts by phone number:</p>
        <div className="space-y-2">
          <code className="text-sm bg-background px-3 py-1 rounded border block">GET /api/lookup?phone=0785256291</code>
          <code className="text-sm bg-background px-3 py-1 rounded border block">GET /api/lookup?phone=5256291</code>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          You can search using the full phone number or just the last 7 digits.
        </p>
      </div>
    </div>
  )
}
