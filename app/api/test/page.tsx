"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Search } from "lucide-react"

interface Contact {
  id: string
  firstname: string
  lastname: string
  deliveryAddress: string
  mobilephone: string
}

interface LookupResponse {
  contact: Contact
}

export default function TestAPIPage() {
  const [phoneNumber, setPhoneNumber] = useState("0785256291")
  const [result, setResult] = useState<Contact | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLookup = async () => {
    if (!phoneNumber.trim()) {
      setError("Please enter a phone number")
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch(`/api/lookup?phone=${encodeURIComponent(phoneNumber)}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch contact")
      }

      const data: LookupResponse = await response.json()
      setResult(data.contact)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">API Lookup Test</h1>
        <p className="text-muted-foreground">Test the phone number lookup API endpoint</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Phone Number Lookup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="text"
              placeholder="Enter phone number (e.g., 0785256291)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLookup()}
            />
          </div>
          <Button onClick={handleLookup} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Looking up...
              </>
            ) : (
              "Lookup Contact"
            )}
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Contact Found</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">ID</Label>
                <p className="text-sm text-muted-foreground">{result.id}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Phone</Label>
                <p className="text-sm text-muted-foreground font-mono">{result.mobilephone}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">First Name</Label>
                <p className="text-sm text-muted-foreground">{result.firstname}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Last Name</Label>
                <p className="text-sm text-muted-foreground">{result.lastname}</p>
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium">Delivery Address</Label>
              <p className="text-sm text-muted-foreground">{result.deliveryAddress}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Sample Phone Numbers to Test:</h3>
        <div className="grid grid-cols-2 gap-2 text-sm font-mono">
          <button onClick={() => setPhoneNumber("0785256291")} className="text-left hover:text-primary cursor-pointer">
            0785256291
          </button>
          <button onClick={() => setPhoneNumber("0701234567")} className="text-left hover:text-primary cursor-pointer">
            0701234567
          </button>
          <button onClick={() => setPhoneNumber("0772345678")} className="text-left hover:text-primary cursor-pointer">
            0772345678
          </button>
          <button onClick={() => setPhoneNumber("0753456789")} className="text-left hover:text-primary cursor-pointer">
            0753456789
          </button>
        </div>
      </div>
    </div>
  )
}
