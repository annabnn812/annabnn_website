"use client"

import { useState } from "react"
import Image from "next/image"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Listing = {
  id: string
  type: "sale" | "rent"
  status: "active" | "pending" | "sold" | "rented"
  price: number
  address: string
  neighborhood: string
  beds: number
  baths: number
  sqft: number
  image: string
}

const listings: Listing[] = [
  {
    id: "1",
    type: "sale",
    status: "active",
    price: 1250000,
    address: "245 East 72nd Street, Unit 12B",
    neighborhood: "Upper East Side",
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: "/listings/listing-1.png"
  },
  {
    id: "2",
    type: "sale",
    status: "pending",
    price: 875000,
    address: "88 Greenwich Street, Unit 2401",
    neighborhood: "Financial District",
    beds: 1,
    baths: 1,
    sqft: 780,
    image: "/listings/listing-2.png"
  },
  {
    id: "3",
    type: "sale",
    status: "active",
    price: 2150000,
    address: "15 West 53rd Street, Unit 8A",
    neighborhood: "Midtown",
    beds: 3,
    baths: 2,
    sqft: 1650,
    image: "/listings/listing-3.png"
  },
  {
    id: "4",
    type: "rent",
    status: "active",
    price: 4500,
    address: "310 East 46th Street, Unit 5F",
    neighborhood: "Turtle Bay",
    beds: 1,
    baths: 1,
    sqft: 650,
    image: "/listings/listing-4.png"
  },
  {
    id: "5",
    type: "rent",
    status: "active",
    price: 7200,
    address: "200 Chambers Street, Unit 18C",
    neighborhood: "Tribeca",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "/listings/listing-5.png"
  },
  {
    id: "6",
    type: "rent",
    status: "rented",
    price: 3800,
    address: "520 West 43rd Street, Unit 12A",
    neighborhood: "Hell's Kitchen",
    beds: 1,
    baths: 1,
    sqft: 580,
    image: "/listings/listing-6.png"
  },
]

function formatPrice(price: number, type: "sale" | "rent") {
  if (type === "rent") {
    return `$${price.toLocaleString()}/mo`
  }
  return `$${price.toLocaleString()}`
}

function getStatusBadge(status: Listing["status"]) {
  const variants: Record<Listing["status"], { label: string; className: string }> = {
    active: { label: "Active", className: "bg-emerald-600 text-white hover:bg-emerald-600" },
    pending: { label: "Pending", className: "bg-amber-500 text-white hover:bg-amber-500" },
    sold: { label: "Sold", className: "bg-foreground text-background hover:bg-foreground" },
    rented: { label: "Rented", className: "bg-foreground text-background hover:bg-foreground" },
  }
  return variants[status]
}

function ListingCard({ listing }: { listing: Listing }) {
  const statusBadge = getStatusBadge(listing.status)
  
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={listing.image}
          alt={listing.address}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className={`absolute top-3 left-3 ${statusBadge.className}`}>
          {statusBadge.label}
        </Badge>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm">
            {listing.type === "sale" ? "For Sale" : "For Rent"}
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <p className="text-2xl font-semibold text-foreground">
            {formatPrice(listing.price, listing.type)}
          </p>
        </div>
        
        <h3 className="font-medium text-foreground mb-1 line-clamp-1">
          {listing.address}
        </h3>
        
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span>{listing.neighborhood}</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>{listing.beds} {listing.beds === 1 ? "Bed" : "Beds"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            <span>{listing.baths} {listing.baths === 1 ? "Bath" : "Baths"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="h-4 w-4" />
            <span>{listing.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedListingsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "sale" | "rent">("all")
  
  const filteredListings = listings.filter(listing => {
    if (activeTab === "all") return true
    return listing.type === activeTab
  })

  return (
    <section id="listings" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-3">
            Featured Properties
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Current Listings
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore my curated selection of properties available for sale and rent across New York City
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-background border border-border rounded-lg p-1">
            {[
              { value: "all", label: "All Properties" },
              { value: "sale", label: "For Sale" },
              { value: "rent", label: "For Rent" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value as typeof activeTab)}
                className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab.value
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
          >
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  )
}
