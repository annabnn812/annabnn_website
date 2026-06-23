"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Home, ArrowUpRight } from "lucide-react"
import Image from "next/image"

type Tab = "nyc" | "solutions"

export function DualFocusSection() {
  const [activeTab, setActiveTab] = useState<Tab>("nyc")

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Dual Professional Focus
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Two Paths, One Vision
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#F4F4F5] border border-neutral-200 rounded-xl p-1.5 shadow-inner">
            <button
              onClick={() => setActiveTab("nyc")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "nyc"
                  ? "bg-[#D7D3D2] text-neutral-900 shadow-md transform scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              NYC Real Estate
            </button>
            <button
              onClick={() => setActiveTab("solutions")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "solutions"
                  ? "bg-[#D7D3D2] text-neutral-900 shadow-md transform scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Property Solutions
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "nyc" ? (
            <div id="nyc-real-estate" className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">ACRE NY Realty</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                  NYC Residential & Commercial
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a licensed NY Real Estate Salesperson with ACRE NY Realty, I help buyers, sellers, 
                  and renters navigate the competitive New York market. From Manhattan penthouses to 
                  Brooklyn brownstones, I provide insider brokerage access and personalized service 
                  to achieve your real estate goals.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Buyer & Seller Representation", "Rental Services", "Investment Property Guidance", "Market Analysis & Valuation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                >
                  <Link href="#contact">
                    Work With Me
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                  <Image
                        src= "/listing-5.png"
                        alt="NY Real Estate"
                        width={500}
                        height={500}
                        />
                </div>
              </div>
            </div>
          ) : (
            <div id="property-solutions" className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Home className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">RealPro Solutions</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                  Strategic Property Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through RealPro Solutions, my company based in New Jersey, I specialize in pre-foreclosure 
                  and distressed property solutions across the tri-state area. We help homeowners facing 
                  difficult situations find strategic paths forward while creating opportunities for investors.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Pre-Foreclosure Solutions", "Distressed Property Acquisition", "Creative Deal Structuring", "Win-Win Negotiations"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                >
                  <a href="https://realprof.us/" target="_blank" rel="noopener noreferrer">
                    Visit RealPro Solutions
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                  <Image
                        src= "/RealPro.png"
                        alt="RealPro Solutions"
                        width={500}
                        height={500}
                        />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
