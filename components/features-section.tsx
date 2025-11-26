"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Users, BarChart3, Zap, Shield, Smartphone, Bot, Target, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Smart Chatbots",
      description:
        "AI-powered chatbots that understand context and provide intelligent responses to customer queries 24/7.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Broadcast Messaging",
      description: "Send targeted messages to thousands of customers instantly with personalized content and media.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Contact Management",
      description: "Organize and manage all your WhatsApp contacts with advanced CRM features and segmentation.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description: "Track message performance, engagement rates, and conversion metrics with detailed analytics.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Workflow Automation",
      description: "Create custom automation workflows to handle leads, follow-ups, and customer support efficiently.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with end-to-end encryption and GDPR compliance for data protection.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Multi-Device Sync",
      description: "Access your WhatsApp business from any device with real-time synchronization across platforms.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Lead Scoring",
      description: "Automatically score and prioritize leads based on engagement and behavior patterns.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Auto-Responders",
      description: "Set up intelligent auto-responses for common queries and out-of-office messages.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Powerful Features for <span className="text-gradient-core-vibrant">WhatsApp Success</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Everything you need to transform WhatsApp into a powerful business tool that drives growth and customer
            satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glassmorphism border-border hover:border-accent transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="text-secondary group-hover:text-accent transition-colors duration-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-high-contrast">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
