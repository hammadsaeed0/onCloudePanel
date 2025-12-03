"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-high-contrast mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-foreground">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By accessing and using AgentFlow, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">2. Use License</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                AgentFlow for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on AgentFlow</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">3. Disclaimer</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The materials on AgentFlow are provided on an 'as is' basis. AgentFlow makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">4. Limitations</h2>
              <p className="text-foreground leading-relaxed mb-4">
                In no event shall AgentFlow or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on AgentFlow, even if AgentFlow or an authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">5. Accuracy of Materials</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The materials appearing on AgentFlow could include technical, typographical, or photographic errors.
                AgentFlow does not warrant that any of the materials on the website are accurate, complete, or current.
                AgentFlow may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">6. Links</h2>
              <p className="text-foreground leading-relaxed mb-4">
                AgentFlow has not reviewed all of the sites linked to its website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by AgentFlow of
                the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">7. Modifications</h2>
              <p className="text-foreground leading-relaxed mb-4">
                AgentFlow may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-high-contrast mb-4">8. Governing Law</h2>
              <p className="text-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which AgentFlow operates, and you irrevocably submit to the exclusive jurisdiction of the courts in
                that location.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
