import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Anna Kolbasova",
  description: "Privacy Policy for Anna Kolbasova Real Estate Services",
}

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Anna Kolbasova (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed 
              to protecting your personal information. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our 
              real estate services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Property preferences and requirements</li>
              <li>Financial information relevant to real estate transactions</li>
              <li>Communication history and correspondence</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on site</li>
              <li>Referral source</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide real estate services and respond to inquiries</li>
              <li>Send property listings and market updates</li>
              <li>Process transactions and maintain records</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Communicate about services you&apos;ve requested</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>ACRE NY Realty (our affiliated brokerage)</li>
              <li>Other real estate professionals involved in your transaction</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect your personal information. 
              However, no method of transmission over the internet or electronic storage is 
              completely secure. While we strive to protect your information, we cannot guarantee 
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your 
              experience. You can control cookie settings through your browser preferences. 
              Disabling cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party sites or integrate with third-party 
              services. This Privacy Policy does not apply to those external sites. We encourage 
              you to review the privacy policies of any third-party services you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Data portability</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes 
              outlined in this policy, unless a longer retention period is required by law. 
              Transaction records may be kept for the period required by real estate regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under 18 years of age. We do not 
              knowingly collect personal information from children. If you believe we have 
              collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on 
              this page with an updated effective date. Your continued use of our website after 
              changes constitutes acceptance of the modified policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Anna Kolbasova</strong></p>
              <p>Licensed Real Estate Salesperson</p>
              <p>ACRE NY Realty</p>
              <p>
                Email:{" "}
                <a 
                  href="mailto:anna@annabnn.com" 
                  className="text-foreground underline hover:text-foreground/80"
                >
                  anna@annabnn.com
                </a>
              </p>
            </div>
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
