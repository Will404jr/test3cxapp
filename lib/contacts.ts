export interface Contact {
  id: string
  firstname: string
  lastname: string
  deliveryAddress: string
  mobilephone: string
}

export const contacts: Contact[] = [
  {
    id: "1",
    firstname: "John",
    lastname: "Mukasa",
    deliveryAddress: "Plot 123, Kampala Road, Kampala",
    mobilephone: "0785256291",
  },
  {
    id: "2",
    firstname: "Sarah",
    lastname: "Nakato",
    deliveryAddress: "Block 45, Ntinda, Kampala",
    mobilephone: "0701234567",
  },
  {
    id: "3",
    firstname: "David",
    lastname: "Ssemakula",
    deliveryAddress: "House 78, Bugolobi, Kampala",
    mobilephone: "0772345678",
  },
  {
    id: "4",
    firstname: "Grace",
    lastname: "Namugga",
    deliveryAddress: "Plot 56, Entebbe Road, Wakiso",
    mobilephone: "0753456789",
  },
  {
    id: "5",
    firstname: "Peter",
    lastname: "Kato",
    deliveryAddress: "House 12, Muyenga, Kampala",
    mobilephone: "0704567890",
  },
  {
    id: "6",
    firstname: "Mary",
    lastname: "Nabirye",
    deliveryAddress: "Block 23, Najera, Wakiso",
    mobilephone: "0786789012",
  },
  {
    id: "7",
    firstname: "James",
    lastname: "Okello",
    deliveryAddress: "Plot 89, Jinja Road, Kampala",
    mobilephone: "0751890123",
  },
  {
    id: "8",
    firstname: "Agnes",
    lastname: "Atim",
    deliveryAddress: "House 34, Kololo, Kampala",
    mobilephone: "0779012345",
  },
]
