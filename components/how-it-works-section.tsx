"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, QrCode, Settings, Rocket } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: QrCode,
      title: "Connect Your WhatsApp",
      description:
        "Link your WhatsApp Business account via QR code or Cloud API in just a few clicks. Secure and instant setup.",
      gradient: "from-[#9EF01A] to-[#7BC410]",
      iconColor: "text-[#023047]",
    },
    {
      step: "02",
      icon: Settings,
      title: "Configure Automation",
      description:
        "Set up your chatbots, auto-responses, and workflows using our intuitive drag-and-drop interface. No coding required.",
      gradient: "from-[#006D77] to-[#023047]",
    },
    {
      step: "03",
      icon: Rocket,
      title: "Launch & Scale",
      description:
        "Go live with your automated WhatsApp system and watch your customer engagement and sales grow exponentially.",
      gradient: "from-[#023047] to-[#006D77]",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f1f7fa] border border-[#023047]/10 mb-6">
            <Rocket className="h-4 w-4 text-[#9EF01A]" />
            <span className="text-sm text-[#374151]">Quick Setup</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6 text-[#023047]">
            Get Started in{" "}
            <span className="text-[#9EF01A]">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-[#374151] text-pretty max-w-2xl mx-auto">
            Transform your WhatsApp into a powerful business tool in minutes. Our streamlined setup gets you up and running fast.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white border border-[#023047]/8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>
                  </div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-6 mt-4`}>
                    <step.icon className={`h-8 w-8 ${step.iconColor || 'text-white'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-[#023047]">{step.title}</h3>
                  <p className="text-[#374151] leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[#9EF01A] to-[#006D77]"></div>
                  <ArrowRight className="h-6 w-6 text-[#006D77] absolute -right-2 top-1/2 -translate-y-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="btn-premium font-semibold text-lg px-8 py-6 rounded-xl"
          >
            Start Your 7 Days Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-[#374151] mt-4">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
