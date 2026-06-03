import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Anna Kolbasova",
  description: "Terms of Service for Anna Kolbasova Real Estate Services",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
          Terms of Service
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the website of Anna Kolbasova (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Real Estate Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Anna Kolbasova is a licensed Real Estate Salesperson in the State of New York, 
              affiliated with ACRE NY Realty. All real estate services are subject to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>New York State real estate laws and regulations</li>
              <li>Fair Housing Act requirements</li>
              <li>Applicable local ordinances and regulations</li>
              <li>The policies and procedures of ACRE NY Realty</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. RealPro Solutions</h2>
            <p className="text-muted-foreground leading-relaxed">
              RealPro Solutions is a separate business entity offering pre-foreclosure and property 
              solutions. Services provided through RealPro Solutions are subject to their own terms 
              and conditions available at{" "}
              <a 
                href="https://realprof.us" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-foreground/80"
              >
                realprof.us
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Website Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The content on this website is for informational purposes only and does not constitute:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>A guarantee of property availability or pricing</li>
              <li>An offer to buy or sell real estate</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Property listings and market information are subject to change without notice. 
              Always verify information independently before making real estate decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When using our website or services, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Use the website for lawful purposes only</li>
              <li>Not interfere with the website&apos;s operation</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, images, logos, and design elements, 
              is the property of Anna Kolbasova or its licensors and is protected by copyright 
              and other intellectual property laws. You may not reproduce, distribute, or create 
              derivative works without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Anna Kolbasova shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your 
              use of the website or services. This includes but is not limited to damages for loss 
              of profits, data, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to third-party websites. We are not responsible for 
              the content, privacy policies, or practices of any third-party sites. Visiting these 
              links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting to the website. Your continued use of the website 
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the 
              laws of the State of New York, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:{" "}
              <a 
                href="mailto:anna@annabnn.com" 
                className="text-foreground underline hover:text-foreground/80"
              >
                anna@annabnn.com
              </a>
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Anna Kolbasova. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
