"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Turnstile from "react-turnstile"
import { CheckCircle, Loader2, Phone } from "lucide-react"
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Listing, type ListingStatus, formatPrice } from "@/lib/listings-data"

function getStatusBadge(status: ListingStatus) {
  const variants: Record<ListingStatus, { label: string; className: string }> = {
    active: { label: "Active", className: "bg-emerald-600 text-white" },
    pending: { label: "Pending", className: "bg-amber-500 text-white" },
    sold: { label: "Sold", className: "bg-foreground text-background" },
    rented: { label: "Rented", className: "bg-foreground text-background" },
  }
  return variants[status]
}

function ImageGallery({ images, title }: { images: Listing["images"]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="relative">
        <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-xl bg-muted">
          <Image
            src={images[currentIndex]?.url || "/listings/placeholder.png"}
            alt={images[currentIndex]?.alt || title}
            fill
            className="object-cover cursor-pointer"
            onClick={() => setIsFullscreen(true)}
            priority
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <div className="hidden md:grid grid-cols-4 gap-3 mt-3">
            {images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                  index === currentIndex ? "ring-2 ring-foreground" : "opacity-70 hover:opacity-100"
                } transition-all`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-[16/9] mx-4">
            <Image
              src={images[currentIndex]?.url || "/listings/placeholder.png"}
              alt={images[currentIndex]?.alt || title}
              fill
              className="object-contain"
            />
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

function VideoSection({ videoUrl }: { videoUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const getTikTokEmbed = (url: string) => {
    const match = url.match(/video\/(\d+)/)
    return match ? match[1] : null
  }
  
  const videoId = getTikTokEmbed(videoUrl)

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Play className="h-5 w-5" />
        Property Video Tour
      </h3>
      
      {isPlaying && videoId ? (
        <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
          <iframe
            src={`https://www.tiktok.com/embed/v2/${videoId}`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-foreground text-background rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8" />
            </div>
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
            Click to watch video tour on TikTok
          </p>
        </button>
      )}
      
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Watch on TikTok
      </a>
    </div>
  )
}

function FloorPlanSection({ floorPlanImage, title }: { floorPlanImage: string; title: string }) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <>
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Floor Plan</h3>
        <button
          onClick={() => setIsFullscreen(true)}
          className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted hover:opacity-90 transition-opacity"
        >
          <Image
            src={floorPlanImage}
            alt={`Floor plan for ${title}`}
            fill
            className="object-contain p-4"
          />
        </button>
        <p className="text-sm text-muted-foreground text-center mt-3">
          Click to enlarge
        </p>
      </div>

      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={floorPlanImage}
              alt={`Floor plan for ${title}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

function InquiryForm({ listing }: { listing: Listing }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${listing.address}. Please contact me with more information.`
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [captchaToken, setCaptchaToken] = useState("")
  
  const turnstileRef = useRef<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!captchaToken) {
      setError("Please complete the security check.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          inquiryType: "property-inquiry", 
          captchaToken, // FIX: Injected token mapping into the server payload
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
    } catch {
      setError("Failed to send message. Please try again or email directly at annak@realprof.us")
      setCaptchaToken("") // Reset token placeholder on runtime error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6 sticky top-24 shadow-sm">
      <div className="mb-6">
        <p className="text-3xl font-semibold text-foreground">
          {formatPrice(listing.price, listing.type)}
        </p>
        {listing.type === "rent" && (
          <p className="text-sm text-muted-foreground mt-1">With leasing terms</p>
        )}
      </div>

      {isSubmitted ? (
        <div className="bg-muted rounded-xl p-8 text-center transition-all duration-300">
          <CheckCircle className="h-10 w-10 text-foreground mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Inquiry Sent</h3>
          <p className="text-sm text-muted-foreground">
            Thank you! I will review the details for {listing.address} and reach out to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="inquiry-name" className="block text-sm font-medium text-foreground mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              id="inquiry-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="inquiry-email" className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="inquiry-email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              placeholder="you@example.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="inquiry-phone" className="block text-sm font-medium text-foreground mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              id="inquiry-phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              placeholder="(555) 123-4567"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="inquiry-message" className="block text-sm font-medium text-foreground mb-1.5">
              Message
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none transition-all"
              required
              disabled={isSubmitting}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs">
              {error}
            </div>
          )}

          {/* Turnstile Captcha Container layout formatting matching style presets */}
          <div className="flex justify-center w-full overflow-hidden py-1.5">
            <Turnstile
              sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken("")}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all"
            size="lg"
            disabled={!captchaToken || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Request...
              </>
            ) : (
              "Request Information"
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full border-border hover:bg-muted"
            size="lg"
            onClick={() => (window.location.href = "tel:+1(551)202-5550")}
            disabled={isSubmitting}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </form>
      )}

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold text-foreground">
            AK
          </div>
          <div>
            <p className="font-medium text-foreground">Anna Kolbasova</p>
            <p>Licensed Real Estate Salesperson</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ListingDetail({ listing }: { listing: Listing }) {
  const statusBadge = getStatusBadge(listing.status)
  const isArchived = listing.status === "sold" || listing.status === "rented"

  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href={isArchived ? "/archive" : "/#listings"}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to {isArchived ? "Archive" : "Listings"}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <ImageGallery images={listing.images} title={listing.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge className={statusBadge.className}>
                  {statusBadge.label}
                </Badge>
                <Badge variant="secondary">
                  {listing.type === "sale" ? "For Sale" : "For Rent"}
                </Badge>
                {isArchived && listing.dateSold && (
                  <span className="text-sm text-muted-foreground">
                    {listing.status === "sold" ? "Sold" : "Rented"} on {new Date(listing.dateSold).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 text-balance">
                {listing.title}
              </h1>
              
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{listing.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 py-6 border-y border-border">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-foreground">{listing.beds === 0 ? "Studio" : listing.beds}</p>
                  <p className="text-sm text-muted-foreground">{listing.beds === 0 ? "" : listing.beds === 1 ? "Bedroom" : "Bedrooms"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-foreground">{listing.baths}</p>
                  <p className="text-sm text-muted-foreground">{listing.baths === 1 ? "Bathroom" : "Bathrooms"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Square className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-foreground">{listing.sqft.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Square Feet</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-foreground">
                    {new Date(listing.dateAdded).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </p>
                  <p className="text-sm text-muted-foreground">Listed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">About This Property</h2>
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                {listing.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {listing.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {listing.floorPlanImage && (
              <FloorPlanSection floorPlanImage={listing.floorPlanImage} title={listing.title} />
            )}

            {listing.videoUrl && (
              <VideoSection videoUrl={listing.videoUrl} />
            )}

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Location</h2>
              <div className="bg-muted rounded-xl aspect-[16/9] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">{listing.neighborhood}</p>
                  <p className="text-sm">{listing.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <InquiryForm listing={listing} />
          </div>
        </div>
      </div>
    </main>
  )
}