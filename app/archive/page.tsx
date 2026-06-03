import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Bed, Bath, Square, MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getArchivedListings, formatPrice, type Listing, type ListingStatus } from "@/lib/listings-data"

export const metadata: Metadata = {
  title: "Past Sales & Rentals | Anna Kolbasova",
  description: "View my track record of successfully sold and rented properties across New York City.",
}

function getStatusBadge(status: ListingStatus) {
  const variants: Record<ListingStatus, { label: string; className: string }> = {
    active: { label: "Active", className: "bg-emerald-600 text-white" },
    pending: { label: "Pending", className: "bg-amber-500 text-white" },
    sold: { label: "Sold", className: "bg-foreground text-background" },
    rented: { label: "Rented", className: "bg-foreground text-background" },
  }
  return variants[status]
}

function ArchivedListingCard({ listing }: { listing: Listing }) {
  const statusBadge = getStatusBadge(listing.status)
  
  return (
    <Link href={`/listings/${listing.id}`} className="block group">
      <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={listing.images[0]?.url || "/listings/placeholder.png"}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%]"
          />
          <Badge className={`absolute top-3 left-3 ${statusBadge.className}`}>
            {statusBadge.label}
          </Badge>
          {listing.dateSold && (
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-md flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>
                  {listing.status === "sold" ? "Sold" : "Rented"}{" "}
                  {new Date(listing.dateSold).toLocaleDateString("en-US", { 
                    month: "short", 
                    year: "numeric" 
                  })}
                </span>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="mb-3">
            <p className="text-2xl font-semibold text-foreground">
              {formatPrice(listing.price, listing.type)}
            </p>
            <p className="text-sm text-muted-foreground">
              {listing.type === "sale" ? "Sale Price" : "Monthly Rent"}
            </p>
          </div>
          
          <h3 className="font-medium text-foreground mb-1 line-clamp-1">
            {listing.title}
          </h3>
          
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
            <MapPin className="h-3.5 w-3.5" />
            <span>{listing.neighborhood}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-1.5">
              <Bed className="h-4 w-4" />
              <span>{listing.beds === 0 ? "Studio" : `${listing.beds} ${listing.beds === 1 ? "Bed" : "Beds"}`}</span>
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
    </Link>
  )
}

export default function ArchivePage() {
  const archivedListings = getArchivedListings()
  
  const soldListings = archivedListings.filter(l => l.status === "sold")
  const rentedListings = archivedListings.filter(l => l.status === "rented")
  
  // Calculate stats
  const totalSalesVolume = soldListings.reduce((sum, l) => sum + l.price, 0)
  const totalTransactions = archivedListings.length

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Link 
            href="/#listings"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Current Listings</span>
          </Link>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-3">
              Track Record
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
              Past Sales & Rentals
            </h1>
            <p className="text-muted-foreground text-lg">
              A showcase of successfully closed transactions. Each property represents a client who found their perfect home or a seller who achieved their goals.
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-semibold text-foreground">{totalTransactions}</p>
              <p className="text-sm text-muted-foreground">Total Transactions</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">${(totalSalesVolume / 1000000).toFixed(1)}M+</p>
              <p className="text-sm text-muted-foreground">Sales Volume</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">{soldListings.length}</p>
              <p className="text-sm text-muted-foreground">Properties Sold</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">{rentedListings.length}</p>
              <p className="text-sm text-muted-foreground">Rentals Placed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Sold Properties */}
        {soldListings.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Recently Sold</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soldListings.map((listing) => (
                <ArchivedListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </section>
        )}

        {/* Rented Properties */}
        {rentedListings.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-8">Recently Rented</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentedListings.map((listing) => (
                <ArchivedListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {archivedListings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No archived listings yet.</p>
          </div>
        )}
      </div>
    </main>
  )
}
