import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Bot,
  BarChart3,
  Users,
  Zap,
  Shield,
  Clock,
  Globe,
  Smartphone,
  Database,
  Settings,
  CheckCircle,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-core-deep">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Powerful <span className="text-gradient-core-vibrant">Features</span>
          </h1>
          <p className="text-xl md:text-2xl text-high-contrast-muted mb-8 max-w-3xl mx-auto text-pretty">
            Everything you need to automate WhatsApp conversations, manage leads, and boost sales in one comprehensive
            platform.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Core Features</h2>
            <p className="text-xl text-high-contrast-muted max-w-3xl mx-auto">
              Advanced automation tools designed to transform your WhatsApp business communications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glassmorphism-high-contrast p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-high-contrast mb-4">AI Chatbots</h3>
              <p className="text-high-contrast-muted mb-6 leading-relaxed">
                Intelligent chatbots that understand context, handle complex queries, and provide personalized responses
                24/7.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Natural language processing
                </li>
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Multi-language support
                </li>
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Custom training data
                </li>
              </ul>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-high-contrast mb-4">Message Automation</h3>
              <p className="text-high-contrast-muted mb-6 leading-relaxed">
                Create sophisticated message flows with triggers, conditions, and personalized content for every
                customer interaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Drag & drop flow builder
                </li>
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Smart triggers
                </li>
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  A/B testing
                </li>
              </ul>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-cta-lively rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-high-contrast mb-4">Advanced Analytics</h3>
              <p className="text-high-contrast-muted mb-6 leading-relaxed">
                Comprehensive insights into your WhatsApp performance with real-time metrics and detailed reporting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Real-time dashboards
                </li>
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Conversion tracking
                </li>
                <li className="flex items-center text-high-contrast-muted">
                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                  Custom reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">CRM Integration</h2>
            <p className="text-xl text-high-contrast-muted max-w-3xl mx-auto">
              Seamlessly manage your customer relationships with our integrated CRM features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glassmorphism-high-contrast p-6 rounded-2xl text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-high-contrast mb-2">Contact Management</h3>
              <p className="text-high-contrast-muted text-sm">
                Organize and segment your contacts with smart tagging and filtering.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl text-center">
              <Database className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-high-contrast mb-2">Lead Tracking</h3>
              <p className="text-high-contrast-muted text-sm">
                Track leads through your sales funnel with automated scoring.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-high-contrast mb-2">Follow-up Automation</h3>
              <p className="text-high-contrast-muted text-sm">
                Never miss a follow-up with intelligent scheduling and reminders.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl text-center">
              <Settings className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-high-contrast mb-2">Pipeline Management</h3>
              <p className="text-high-contrast-muted text-sm">
                Visualize and manage your sales pipeline with drag-and-drop ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Enterprise-Grade Technology</h2>
              <p className="text-lg text-high-contrast-muted mb-8 leading-relaxed">
                Built with security, scalability, and reliability at its core. Our platform handles millions of messages
                daily with 99.9% uptime.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-cta-lively rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-high-contrast mb-2">End-to-End Security</h3>
                    <p className="text-high-contrast-muted">
                      Bank-level encryption and compliance with international data protection standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-cta-lively rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-high-contrast mb-2">Lightning Fast</h3>
                    <p className="text-high-contrast-muted">
                      Sub-second response times with global CDN and optimized infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-cta-lively rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-high-contrast mb-2">Global Scale</h3>
                    <p className="text-high-contrast-muted">
                      Deployed across multiple regions with automatic failover and load balancing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-high-contrast mb-6 text-center">Platform Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">99.9%</div>
                  <div className="text-high-contrast-muted text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">&lt;100ms</div>
                  <div className="text-high-contrast-muted text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">256-bit</div>
                  <div className="text-high-contrast-muted text-sm">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-core-vibrant mb-2">24/7</div>
                  <div className="text-high-contrast-muted text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Mobile-First Design</h2>
            <p className="text-xl text-high-contrast-muted max-w-3xl mx-auto">
              Manage your WhatsApp automation on the go with our responsive web app and mobile features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center">
              <Smartphone className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-high-contrast mb-4">Responsive Dashboard</h3>
              <p className="text-high-contrast-muted">
                Full-featured dashboard that works perfectly on any device, from desktop to mobile.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center">
              <MessageSquare className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-high-contrast mb-4">Mobile Notifications</h3>
              <p className="text-high-contrast-muted">
                Real-time push notifications to keep you updated on important conversations and leads.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-8 rounded-2xl text-center">
              <Settings className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-high-contrast mb-4">Quick Actions</h3>
              <p className="text-high-contrast-muted">
                Perform common tasks quickly with mobile-optimized shortcuts and gestures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glassmorphism-high-contrast p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-high-contrast">Experience All Features Today</h2>
            <p className="text-xl text-high-contrast-muted mb-8">
              Start your free trial and discover how AgentFlow can transform your WhatsApp business communications.
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
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
