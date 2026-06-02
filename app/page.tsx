import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ActiveMarketSection } from "@/components/active-market-section"
import { FeaturedListingsSection } from "@/components/featured-listings-section"
import { DualFocusSection } from "@/components/dual-focus-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ActiveMarketSection />
      <FeaturedListingsSection />
      <DualFocusSection />
      <SocialMediaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
