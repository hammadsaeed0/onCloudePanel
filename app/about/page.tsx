import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-core-deep">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            About <span className="text-gradient-core-vibrant">AgentFlow</span>
          </h1>
          <p className="text-xl md:text-2xl text-high-contrast-muted mb-8 max-w-3xl mx-auto text-pretty">
            Revolutionizing business communication through intelligent WhatsApp automation and CRM solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Our Mission</h2>
              <p className="text-lg text-high-contrast-muted mb-6 leading-relaxed">
                We believe that every business deserves access to powerful automation tools that can transform customer
                relationships. AgentFlow was born from the vision of making WhatsApp automation accessible, intelligent,
                and incredibly effective for businesses of all sizes.
              </p>
              <p className="text-lg text-high-contrast-muted leading-relaxed">
                Our platform combines cutting-edge AI technology with intuitive design to help businesses automate
                conversations, manage leads, and boost sales through the world's most popular messaging platform.
              </p>
            </div>
            <div className="glassmorphism-high-contrast p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">10K+</div>
                  <div className="text-high-contrast-muted">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">50M+</div>
                  <div className="text-high-contrast-muted">Messages Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">99.9%</div>
                  <div className="text-high-contrast-muted">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">24/7</div>
                  <div className="text-high-contrast-muted">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Our Values</h2>
            <p className="text-xl text-high-contrast-muted max-w-3xl mx-auto">
              The principles that guide everything we do at AgentFlow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-high-contrast mb-4">Customer First</h3>
              <p className="text-high-contrast-muted">
                Every decision we make is centered around delivering exceptional value to our customers.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-high-contrast mb-4">Innovation</h3>
              <p className="text-high-contrast-muted">
                We continuously push the boundaries of what's possible with automation technology.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-high-contrast mb-4">Excellence</h3>
              <p className="text-high-contrast-muted">
                We strive for perfection in every aspect of our platform and service delivery.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-high-contrast mb-4">Efficiency</h3>
              <p className="text-high-contrast-muted">
                We believe in making complex processes simple and time-consuming tasks effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Meet Our Team</h2>
            <p className="text-xl text-high-contrast-muted max-w-3xl mx-auto">
              The passionate individuals behind AgentFlow's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gradient-cta-lively rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-bold text-high-contrast mb-2">John Doe</h3>
              <p className="text-accent mb-4">CEO & Founder</p>
              <p className="text-high-contrast-muted">
                Visionary leader with 10+ years in automation and AI technology.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gradient-cta-lively rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-xl font-bold text-high-contrast mb-2">Jane Smith</h3>
              <p className="text-accent mb-4">CTO</p>
              <p className="text-high-contrast-muted">Technical genius behind our cutting-edge automation platform.</p>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gradient-cta-lively rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-high-contrast mb-2">Mike Johnson</h3>
              <p className="text-accent mb-4">Head of Product</p>
              <p className="text-high-contrast-muted">
                Product strategist focused on delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glassmorphism-high-contrast p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-high-contrast">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-high-contrast-muted mb-8">
              Join thousands of businesses already using AgentFlow to automate their WhatsApp communications.
            </p>
            <Button
              size="lg"
              className="bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold px-8 py-4 text-lg shadow-lg border border-white/20"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
