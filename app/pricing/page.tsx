import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, Star, Zap, Crown, Rocket } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-core-deep">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Simple <span className="text-gradient-core-vibrant">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-high-contrast-muted mb-8 max-w-3xl mx-auto text-pretty">
            Choose the perfect plan for your business. Start free, scale as you grow, and unlock powerful automation
            features.
          </p>
          <div className="flex justify-center mb-8">
            <div className="glassmorphism-high-contrast p-2 rounded-full">
              <div className="flex items-center space-x-2">
                <button className="px-6 py-2 bg-gradient-cta-lively text-white rounded-full font-medium">
                  Monthly
                </button>
                <button className="px-6 py-2 text-high-contrast hover:bg-white/10 rounded-full font-medium">
                  Annual (Save 20%)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Starter Plan */}
            <div className="glassmorphism-high-contrast p-8 rounded-2xl relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-cta-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-high-contrast mb-2">Starter</h3>
                <p className="text-high-contrast-muted mb-4">Perfect for small businesses</p>
                <div className="text-4xl font-bold text-high-contrast mb-2">
                  $0<span className="text-lg font-normal text-high-contrast-muted">/month</span>
                </div>
                <p className="text-high-contrast-muted text-sm">Forever free</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Up to 100 contacts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">1,000 messages/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Basic chatbot</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Email support</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">CRM integration</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-cta-subtle hover:bg-gradient-cta-lively text-white font-semibold shadow-lg border border-white/20">
                Get Started Free
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="glassmorphism-high-contrast p-8 rounded-2xl relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-high-contrast mb-2">Professional</h3>
                <p className="text-high-contrast-muted mb-4">For growing businesses</p>
                <div className="text-4xl font-bold text-high-contrast mb-2">
                  $49<span className="text-lg font-normal text-high-contrast-muted">/month</span>
                </div>
                <p className="text-high-contrast-muted text-sm">Billed monthly</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Up to 5,000 contacts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">25,000 messages/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Advanced AI chatbot</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Basic CRM features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Priority support</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold shadow-lg border border-white/20">
                Start Free Trial
              </Button>
            </div>

            {/* Business Plan - Most Popular */}
            <div className="glassmorphism-high-contrast p-8 rounded-2xl relative border-2 border-accent">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-cta-lively text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-high-contrast mb-2">Business</h3>
                <p className="text-high-contrast-muted mb-4">For established businesses</p>
                <div className="text-4xl font-bold text-high-contrast mb-2">
                  $149<span className="text-lg font-normal text-high-contrast-muted">/month</span>
                </div>
                <p className="text-high-contrast-muted text-sm">Billed monthly</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Up to 25,000 contacts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">100,000 messages/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Advanced AI + Custom training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Full CRM suite</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">24/7 phone support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">API access</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold shadow-lg border border-white/20">
                Start Free Trial
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="glassmorphism-high-contrast p-8 rounded-2xl relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-high-contrast mb-2">Enterprise</h3>
                <p className="text-high-contrast-muted mb-4">For large organizations</p>
                <div className="text-4xl font-bold text-high-contrast mb-2">Custom</div>
                <p className="text-high-contrast-muted text-sm">Contact for pricing</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Unlimited contacts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Unlimited messages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Custom AI models</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">White-label solution</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Dedicated infrastructure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">Dedicated success manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-high-contrast-muted">SLA guarantee</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold shadow-lg border border-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Frequently Asked Questions</h2>
            <p className="text-xl text-high-contrast-muted">Everything you need to know about our pricing and plans</p>
          </div>

          <div className="space-y-6">
            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-high-contrast mb-3">Can I change my plan anytime?</h3>
              <p className="text-high-contrast-muted">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                prorate any billing differences.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-high-contrast mb-3">Is there a free trial?</h3>
              <p className="text-high-contrast-muted">
                All paid plans come with a 14-day free trial. No credit card required to start. You can also use our
                Starter plan forever for free.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-high-contrast mb-3">What happens if I exceed my message limit?</h3>
              <p className="text-high-contrast-muted">
                We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase
                additional message credits as needed.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-high-contrast mb-3">Do you offer custom enterprise solutions?</h3>
              <p className="text-high-contrast-muted">
                Yes, our Enterprise plan is fully customizable. We can create a solution tailored to your specific
                needs, including custom integrations and dedicated infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glassmorphism-high-contrast p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-high-contrast">Ready to Get Started?</h2>
            <p className="text-xl text-high-contrast-muted mb-8">
              Join thousands of businesses already using AgentFlow to automate their WhatsApp communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold px-8 py-4 text-lg shadow-lg border border-white/20"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-high-contrast hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
