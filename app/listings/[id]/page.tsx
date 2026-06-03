import { notFound } from "next/navigation"
import { getListingById, getActiveListings, getArchivedListings } from "@/lib/listings-data"
import { ListingDetail } from "@/components/listing-detail"

export async function generateStaticParams() {
  const allListings = [...getActiveListings(), ...getArchivedListings()]
  return allListings.map((listing) => ({
    id: listing.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const listing = getListingById(id)
  
  if (!listing) {
    return {
      title: "Listing Not Found | Anna Kolbasova",
    }
  }

  return {
    title: `${listing.title} | Anna Kolbasova`,
    description: listing.description.slice(0, 160),
  }
}

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const listing = getListingById(id)

  if (!listing) {
    notFound()
  }

  return <ListingDetail listing={listing} />
}
