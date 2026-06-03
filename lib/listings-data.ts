export type ListingStatus = "active" | "pending" | "sold" | "rented"
export type ListingType = "sale" | "rent"

export interface ListingImage {
  url: string
  alt: string
}

export interface Listing {
  id: string
  title: string
  address: string
  neighborhood: string
  price: number
  type: ListingType
  status: ListingStatus
  beds: number
  baths: number
  sqft: number
  description: string
  features: string[]
  images: ListingImage[]
  floorPlanImage?: string
  videoUrl?: string
  dateAdded: string
  dateSold?: string
}

export const listings: Listing[] = [
  {
    id: "upper-east-side-3br",
    title: "Luxury 3BR with Central Park Views",
    address: "1045 Park Avenue, Unit 12A",
    neighborhood: "Upper East Side",
    price: 2850000,
    type: "sale",
    status: "active",
    beds: 3,
    baths: 2,
    sqft: 1850,
    description: "Experience quintessential Upper East Side living in this stunning 3-bedroom residence with breathtaking Central Park views. This meticulously renovated apartment features soaring 10-foot ceilings, custom millwork throughout, and sun-drenched rooms that create an atmosphere of timeless elegance. The chef's kitchen boasts top-of-the-line Miele appliances, custom cabinetry, and a generous breakfast bar. The primary suite offers a spa-like bathroom with radiant heated floors and a walk-in closet. Building amenities include 24-hour doorman, fitness center, and private garden.",
    features: [
      "Central Park Views",
      "Chef's Kitchen",
      "24-Hour Doorman",
      "Fitness Center",
      "Private Storage",
      "Pet Friendly",
      "Washer/Dryer In-Unit",
      "Central Air"
    ],
    images: [
      { url: "/listings/listing-1.png", alt: "Living room with park views" },
      { url: "/listings/listing-1-kitchen.png", alt: "Modern chef's kitchen" },
      { url: "/listings/listing-1-bedroom.png", alt: "Primary bedroom suite" },
      { url: "/listings/listing-1-bathroom.png", alt: "Spa-like bathroom" }
    ],
    floorPlanImage: "/listings/floorplan-1.png",
    videoUrl: "https://www.tiktok.com/@annabnn/video/example1",
    dateAdded: "2024-01-15"
  },
  {
    id: "fidi-studio",
    title: "Modern Studio in Luxury High-Rise",
    address: "123 Washington Street, Unit 45B",
    neighborhood: "Financial District",
    price: 875000,
    type: "sale",
    status: "active",
    beds: 0,
    baths: 1,
    sqft: 550,
    description: "Discover urban sophistication in this beautifully designed studio apartment in one of FiDi's most prestigious buildings. Floor-to-ceiling windows showcase stunning city and water views, while the open layout maximizes every square foot. The modern kitchen features quartz countertops and stainless steel appliances. Enjoy world-class amenities including a rooftop pool, state-of-the-art fitness center, resident lounge, and 24-hour concierge. Steps from Whole Foods, Brookfield Place, and major subway lines.",
    features: [
      "Floor-to-Ceiling Windows",
      "City & Water Views",
      "Rooftop Pool",
      "Fitness Center",
      "24-Hour Concierge",
      "Resident Lounge",
      "Bike Storage",
      "Close to Transit"
    ],
    images: [
      { url: "/listings/listing-2.png", alt: "Open concept living space" },
      { url: "/listings/listing-2-view.png", alt: "City views from window" },
      { url: "/listings/listing-2-kitchen.png", alt: "Modern kitchen" },
      { url: "/listings/listing-2-building.png", alt: "Building amenities" }
    ],
    floorPlanImage: "/listings/floorplan-2.png",
    dateAdded: "2024-02-01"
  },
  {
    id: "midtown-penthouse",
    title: "Stunning Penthouse with Terrace",
    address: "350 West 42nd Street, PH1",
    neighborhood: "Midtown West",
    price: 4500000,
    type: "sale",
    status: "pending",
    beds: 4,
    baths: 3,
    sqft: 2800,
    description: "An extraordinary penthouse offering the ultimate in luxury living with a massive private terrace overlooking the Manhattan skyline. This rare offering features dramatic double-height ceilings, a floating staircase, and walls of glass that flood the space with natural light. The gourmet kitchen opens to a formal dining area perfect for entertaining. Four generous bedrooms each offer en-suite bathrooms. The 1,200 sqft wraparound terrace is ideal for al fresco dining and entertaining with panoramic views.",
    features: [
      "Private Terrace (1,200 sqft)",
      "Panoramic Skyline Views",
      "Double-Height Ceilings",
      "Floating Staircase",
      "4 En-Suite Bedrooms",
      "Wine Storage",
      "Smart Home System",
      "2 Parking Spaces"
    ],
    images: [
      { url: "/listings/listing-3.png", alt: "Penthouse living room" },
      { url: "/listings/listing-3-terrace.png", alt: "Private terrace" },
      { url: "/listings/listing-3-kitchen.png", alt: "Gourmet kitchen" },
      { url: "/listings/listing-3-master.png", alt: "Primary suite" }
    ],
    floorPlanImage: "/listings/floorplan-3.png",
    videoUrl: "https://www.tiktok.com/@annabnn/video/example3",
    dateAdded: "2024-01-20"
  },
  {
    id: "turtle-bay-1br",
    title: "Charming 1BR Near UN",
    address: "245 East 47th Street, Unit 8C",
    neighborhood: "Turtle Bay",
    price: 3200,
    type: "rent",
    status: "active",
    beds: 1,
    baths: 1,
    sqft: 725,
    description: "A delightful one-bedroom apartment in the heart of Turtle Bay, just steps from the United Nations and Grand Central Terminal. This thoughtfully designed home features hardwood floors throughout, exposed brick accents, and abundant natural light. The renovated kitchen includes granite countertops and stainless steel appliances. The quiet bedroom easily accommodates a king-size bed. Laundry in building. Perfect for diplomats, UN staff, or anyone seeking a prime Midtown East location.",
    features: [
      "Hardwood Floors",
      "Exposed Brick",
      "Renovated Kitchen",
      "Laundry in Building",
      "Near Grand Central",
      "Pet Friendly",
      "Heat & Hot Water Included",
      "Live-in Super"
    ],
    images: [
      { url: "/listings/listing-4.png", alt: "Cozy living room" },
      { url: "/listings/listing-4-bedroom.png", alt: "Spacious bedroom" },
      { url: "/listings/listing-4-kitchen.png", alt: "Renovated kitchen" },
      { url: "/listings/listing-4-bath.png", alt: "Updated bathroom" }
    ],
    dateAdded: "2024-02-10"
  },
  {
    id: "tribeca-loft",
    title: "Authentic Tribeca Loft",
    address: "88 Franklin Street, Unit 4",
    neighborhood: "Tribeca",
    price: 8500,
    type: "rent",
    status: "active",
    beds: 2,
    baths: 2,
    sqft: 1600,
    description: "Live in one of Tribeca's most coveted converted lofts featuring soaring 14-foot ceilings, massive original windows, and authentic cast-iron columns. This remarkable space offers a true loft experience with an open floor plan that's perfect for both living and entertaining. The chef's kitchen features a large center island, Sub-Zero refrigerator, and Wolf range. Two private bedroom suites each offer generous closet space. Located on a quiet cobblestone street near acclaimed restaurants and boutiques.",
    features: [
      "14-Foot Ceilings",
      "Cast-Iron Columns",
      "Original Windows",
      "Chef's Kitchen",
      "Sub-Zero & Wolf Appliances",
      "Cobblestone Street",
      "Washer/Dryer",
      "Central Air"
    ],
    images: [
      { url: "/listings/listing-5.png", alt: "Dramatic loft living space" },
      { url: "/listings/listing-5-kitchen.png", alt: "Chef's kitchen" },
      { url: "/listings/listing-5-bedroom.png", alt: "Primary bedroom" },
      { url: "/listings/listing-5-details.png", alt: "Architectural details" }
    ],
    floorPlanImage: "/listings/floorplan-5.png",
    videoUrl: "https://www.tiktok.com/@annabnn/video/example5",
    dateAdded: "2024-01-25"
  },
  {
    id: "hells-kitchen-studio",
    title: "Sunny Studio in Hell's Kitchen",
    address: "505 West 54th Street, Unit 3R",
    neighborhood: "Hell's Kitchen",
    price: 2400,
    type: "rent",
    status: "active",
    beds: 0,
    baths: 1,
    sqft: 450,
    description: "A bright and efficient studio apartment in the heart of Hell's Kitchen, perfectly positioned for theater lovers and food enthusiasts. South-facing windows fill the space with natural light throughout the day. The clever layout includes a separate sleeping alcove, modern kitchen with dishwasher, and updated bathroom. Steps from Restaurant Row, Times Square, and Central Park. Excellent subway access makes commuting a breeze. Ideal for young professionals seeking a vibrant neighborhood.",
    features: [
      "South-Facing Windows",
      "Sleeping Alcove",
      "Dishwasher",
      "Near Times Square",
      "Central Park Nearby",
      "Great Subway Access",
      "Laundry in Building",
      "No Fee"
    ],
    images: [
      { url: "/listings/listing-6.png", alt: "Bright studio interior" },
      { url: "/listings/listing-6-kitchen.png", alt: "Modern kitchen" },
      { url: "/listings/listing-6-alcove.png", alt: "Sleeping alcove" },
      { url: "/listings/listing-6-bath.png", alt: "Updated bathroom" }
    ],
    dateAdded: "2024-02-05"
  },
  // Archived listings (sold/rented)
  {
    id: "chelsea-2br-sold",
    title: "Designer 2BR in Chelsea",
    address: "210 West 21st Street, Unit 6A",
    neighborhood: "Chelsea",
    price: 1650000,
    type: "sale",
    status: "sold",
    beds: 2,
    baths: 2,
    sqft: 1200,
    description: "A beautifully designed two-bedroom residence in a prime Chelsea location. This sun-flooded apartment features custom built-ins, a renovated open kitchen, and spa-like bathrooms. The building offers a planted rooftop terrace, gym, and part-time doorman. Steps from the High Line, Chelsea Market, and the gallery district.",
    features: [
      "Custom Built-Ins",
      "Open Kitchen",
      "Rooftop Terrace",
      "Part-Time Doorman",
      "Near High Line",
      "Gym in Building",
      "Storage Available",
      "Bike Room"
    ],
    images: [
      { url: "/listings/listing-sold-1.png", alt: "Designer living room" },
      { url: "/listings/listing-sold-1-kitchen.png", alt: "Open kitchen" },
      { url: "/listings/listing-sold-1-bedroom.png", alt: "Primary bedroom" },
      { url: "/listings/listing-sold-1-bath.png", alt: "Spa bathroom" }
    ],
    dateAdded: "2023-09-01",
    dateSold: "2023-11-15"
  },
  {
    id: "williamsburg-1br-rented",
    title: "Stylish 1BR with Manhattan Views",
    address: "325 Kent Avenue, Unit 22D",
    neighborhood: "Williamsburg",
    price: 4200,
    type: "rent",
    status: "rented",
    beds: 1,
    baths: 1,
    sqft: 780,
    description: "A stunning one-bedroom apartment in a luxury Williamsburg waterfront building with spectacular Manhattan skyline views. Floor-to-ceiling windows, wide-plank oak floors, and a sleek kitchen with integrated appliances. Building amenities include rooftop pool, fitness center, bowling alley, and screening room.",
    features: [
      "Manhattan Views",
      "Floor-to-Ceiling Windows",
      "Rooftop Pool",
      "Fitness Center",
      "Bowling Alley",
      "Screening Room",
      "Doorman",
      "Waterfront Location"
    ],
    images: [
      { url: "/listings/listing-rented-1.png", alt: "Living room with views" },
      { url: "/listings/listing-rented-1-kitchen.png", alt: "Modern kitchen" },
      { url: "/listings/listing-rented-1-bedroom.png", alt: "Bedroom" },
      { url: "/listings/listing-rented-1-view.png", alt: "Skyline view" }
    ],
    dateAdded: "2023-10-01",
    dateSold: "2023-12-01"
  },
  {
    id: "gramercy-condo-sold",
    title: "Elegant Gramercy Park Condo",
    address: "50 Gramercy Park North, Unit 8B",
    neighborhood: "Gramercy Park",
    price: 2100000,
    type: "sale",
    status: "sold",
    beds: 2,
    baths: 2,
    sqft: 1350,
    description: "A rare opportunity in one of Gramercy's finest prewar cooperatives with coveted Gramercy Park key access. This elegant residence features original details including herringbone floors, decorative moldings, and wood-burning fireplace. Updated kitchen and bathrooms blend modern convenience with classic charm.",
    features: [
      "Gramercy Park Key",
      "Prewar Details",
      "Wood-Burning Fireplace",
      "Herringbone Floors",
      "Decorative Moldings",
      "Updated Kitchen",
      "Full-Service Building",
      "Pet Friendly"
    ],
    images: [
      { url: "/listings/listing-sold-2.png", alt: "Elegant living room" },
      { url: "/listings/listing-sold-2-fireplace.png", alt: "Fireplace detail" },
      { url: "/listings/listing-sold-2-kitchen.png", alt: "Updated kitchen" },
      { url: "/listings/listing-sold-2-bedroom.png", alt: "Primary bedroom" }
    ],
    dateAdded: "2023-08-15",
    dateSold: "2023-10-30"
  }
]

// Helper functions
export function getActiveListings(): Listing[] {
  return listings.filter(l => l.status === "active" || l.status === "pending")
}

export function getArchivedListings(): Listing[] {
  return listings.filter(l => l.status === "sold" || l.status === "rented")
}

export function getListingById(id: string): Listing | undefined {
  return listings.find(l => l.id === id)
}

export function getListingsByType(type: ListingType): Listing[] {
  return listings.filter(l => l.type === type)
}

export function formatPrice(price: number, type: ListingType): string {
  if (type === "rent") {
    return `$${price.toLocaleString()}/mo`
  }
  return `$${price.toLocaleString()}`
}
