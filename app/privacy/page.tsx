"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-high-contrast mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-foreground">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">1. Introduction</h2>
              <p className="text-foreground leading-relaxed mb-4">
                AgentFlow ("we" or "us" or "our") operates the website. This page informs you of our policies regarding
                the collection, use, and disclosure of personal data when you use our service and the choices you have
                associated with that data.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">2. Information Collection and Use</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our
                service to you.
              </p>
              <h3 className="text-lg font-semibold text-high-contrast mb-3 mt-4">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>
                  <strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain
                  personally identifiable information that can be used to contact or identify you ("Personal Data").
                  This may include, but is not limited to: Email address, First name and last name, Phone number,
                  Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data
                </li>
                <li>
                  <strong>Usage Data:</strong> We may also collect information on how the service is accessed and used
                  ("Usage Data"). This may include information such as your computer's Internet Protocol (IP) address,
                  browser type, browser version, the pages you visit, the time and date of your visit, and other
                  diagnostic data.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">3. Use of Data</h2>
              <p className="text-foreground leading-relaxed mb-4">
                AgentFlow uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">4. Security of Data</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">6. Contact Us</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 mt-4">
                <p className="text-foreground">Email: privacy@agentflow.com</p>
                <p className="text-foreground">Address: Your Company Address</p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">7. Your Privacy Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>The right to access, update or to delete the information we have on you</li>
                <li>The right of rectification</li>
                <li>The right to object</li>
                <li>The right of restriction</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
