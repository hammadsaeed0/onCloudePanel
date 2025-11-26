"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Settings, Rocket } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: <Download className="h-12 w-12" />,
      title: "Connect Your WhatsApp",
      description:
        "Link your WhatsApp Business account to AgentFlow in just a few clicks. Our secure integration ensures your data stays protected.",
      color: "text-secondary",
    },
    {
      step: "02",
      icon: <Settings className="h-12 w-12" />,
      title: "Configure Automation",
      description:
        "Set up your chatbots, auto-responses, and workflows using our intuitive drag-and-drop interface. No coding required.",
      color: "text-accent",
    },
    {
      step: "03",
      icon: <Rocket className="h-12 w-12" />,
      title: "Launch & Scale",
      description:
        "Go live with your automated WhatsApp system and watch your customer engagement and sales grow exponentially.",
      color: "text-primary",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-core-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Get Started in <span className="text-gradient-cta-lively">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Transform your WhatsApp into a powerful business tool in minutes, not hours. Our streamlined setup process
            gets you up and running fast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="glassmorphism-card border-border hover:border-accent transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-muted mb-4 opacity-20">{step.step}</div>
                  <div className={`${step.color} mb-6 flex justify-center`}>{step.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-high-contrast">{step.title}</h3>
                  <p className="text-muted-high-contrast leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-black font-semibold text-lg px-8 py-4 shadow-lg"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </section>
  )
}
