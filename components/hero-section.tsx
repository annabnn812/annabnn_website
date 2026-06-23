import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-1">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Licensed NY Real Estate Salesperson
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Navigating NYC Real Estate. Delivering Strategic Property Solutions.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Licensed NY Real Estate Salesperson with ACRE NY Realty & Founder of RealPro Solutions. 
              Combining deep market expertise with strategic property solutions across the tri-state area.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                <Link href="#nyc-real-estate">
                  View My Listings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Link href="#property-solutions">Distressed Property Solutions</Link>
              </Button>
            </div>
          </div>

          {/* Media Placeholder */}
          <div className="order-2">
            <div className="relative aspect-[3/4] bg-secondary rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Image
                              src= "/IMG_05611.jpg"
                              alt="Anna Kolbasova"
                              fill
                              className="object-cover cursor-pointer"
                              priority
                            />
                  <p className="text-sm text-muted-foreground">Professional Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
