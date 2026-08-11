// lib/listings.ts

// 1. Import raw data from your 4 separate files
import { listings as activeSales } from "./listings-data-active-sale"
import { listings as activeRents } from "./listings-data-active-rent"
import { listings as soldSales } from "./listings-data-sold-sale"
import { listings as rentedListings } from "./listings-data-rented"

// 2. Shared Types
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
  description: string[]
  features: string[]
  images: ListingImage[]
  floorPlanImage?: string
  videoUrl?: string
  dateAdded: string
  dateSold?: string
}

// 3. Combine all 4 datasets into one master array
export const allListings: Listing[] = [
  ...activeSales,
  ...activeRents,
  ...soldSales,
  ...rentedListings,
]

// 4. Helper Functions across ALL datasets

// Get all active / pending listings (both sales and rentals)
export function getActiveListings(): Listing[] {
  return allListings.filter((l) => l.status === "active" || l.status === "pending")
}

// Get active sales only
export function getActiveSaleListings(): Listing[] {
  return allListings.filter((l) => (l.status === "active" || l.status === "pending") && l.type === "sale")
}

// Get active rentals only
export function getActiveRentListings(): Listing[] {
  return allListings.filter((l) => (l.status === "active" || l.status === "pending") && l.type === "rent")
}

// Get all archived listings (sold & rented)
export function getArchivedListings(): Listing[] {
  return allListings.filter((l) => l.status === "sold" || l.status === "rented")
}

// Find any property across ALL 4 datasets by ID/Slug
export function getListingById(id: string): Listing | undefined {
  return allListings.find((l) => l.id === id)
}

// Get listings by type across all statuses
export function getListingsByType(type: ListingType): Listing[] {
  return allListings.filter((l) => l.type === type)
}

// Price formatter
export function formatPrice(price: number, type: ListingType): string {
  if (type === "rent") {
    return `$${price.toLocaleString()}/mo`
  }
  return `$${price.toLocaleString()}`
}