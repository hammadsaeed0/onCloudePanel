"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Zap, TrendingUp, CheckCircle2, Shield, Users, Bot } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#0a1628]">
        {/* Grid pattern */}
        <div className="absolute inset-0 pattern-grid opacity-40"></div>
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 animate-fade-in">
          <Shield className="h-4 w-4 text-secondary" />
          <span className="text-sm text-muted-foreground">Official WhatsApp Cloud API Partner</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 text-high-contrast animate-slide-up">
          Turn WhatsApp into your{" "}
          <span className="text-gradient-cta-lively text-glow">Sales Engine</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto animate-slide-up stagger-1">
          Automate customer conversations, manage leads, and boost sales with AgentFlow's powerful WhatsApp CRM and automation platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up stagger-2">
          <Button
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="btn-premium text-white font-semibold text-lg px-8 py-6 rounded-xl"
          >
            Start 7 Days Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-border/50 text-foreground hover:bg-muted/50 hover:border-accent text-lg px-8 py-6 rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm text-muted-foreground animate-slide-up stagger-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>7-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Bot,
              title: "AI Chatbots",
              description: "Drag & drop builder with NLU",
              color: "text-secondary",
            },
            {
              icon: MessageSquare,
              title: "Broadcasting",
              description: "Campaign sends & segmentation",
              color: "text-accent",
            },
            {
              icon: Users,
              title: "Agent Management",
              description: "Assign & handover chats",
              color: "text-primary",
            },
            {
              icon: TrendingUp,
              title: "Analytics",
              description: "Track conversions & metrics",
              color: "text-secondary",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`glassmorphism-card-hover rounded-2xl p-5 text-center animate-slide-up stagger-${index + 4}`}
            >
              <feature.icon className={`h-8 w-8 ${feature.color} mx-auto mb-3`} />
              <h3 className="text-base font-semibold mb-1 text-high-contrast">{feature.title}</h3>
              <p className="text-muted-foreground text-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
