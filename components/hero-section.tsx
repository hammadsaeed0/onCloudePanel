"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-core-subtle">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-cta-lively rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-core-vibrant rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glassmorphism-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 text-high-contrast">
            Turn WhatsApp into your <span className="text-gradient-cta-lively">Sales Engine</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-high-contrast mb-8 text-pretty max-w-3xl mx-auto">
            Automate customer conversations, manage leads, and boost sales with AgentFlow's powerful WhatsApp CRM and
            automation platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold text-lg px-8 py-4 shadow-lg"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-black text-lg px-8 py-4 bg-transparent shadow-lg"
            >
              Book a Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glassmorphism-card rounded-xl p-6 text-center">
              <MessageSquare className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-high-contrast">Smart Automation</h3>
              <p className="text-muted-high-contrast">Automate responses and workflows</p>
            </div>
            <div className="glassmorphism-card rounded-xl p-6 text-center">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-high-contrast">Lightning Fast</h3>
              <p className="text-muted-high-contrast">Instant message processing</p>
            </div>
            <div className="glassmorphism-card rounded-xl p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-high-contrast">Boost Sales</h3>
              <p className="text-muted-high-contrast">Increase conversion rates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
