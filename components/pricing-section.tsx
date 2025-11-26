"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started with WhatsApp automation",
      features: [
        "Up to 1,000 contacts",
        "Basic chatbot responses",
        "5 automation workflows",
        "Email support",
        "Basic analytics",
        "WhatsApp Web integration",
      ],
      buttonText: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses that need advanced automation features",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI chatbots",
        "Unlimited workflows",
        "Priority support",
        "Advanced analytics",
        "Multi-device access",
        "Custom integrations",
        "Lead scoring",
        "Broadcast messaging",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations requiring maximum scalability and customization",
      features: [
        "Unlimited contacts",
        "Custom AI training",
        "White-label solution",
        "Dedicated account manager",
        "Custom reporting",
        "API access",
        "SSO integration",
        "Advanced security",
        "Custom workflows",
        "24/7 phone support",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Simple, Transparent <span className="text-gradient-core-vibrant">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card
            required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`glassmorphism border-border hover:border-accent transition-all duration-300 relative ${
                plan.popular ? "border-accent scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-cta-lively text-black font-semibold px-4 py-1">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold text-high-contrast mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-high-contrast">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-pretty">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  className={`w-full mb-6 font-semibold ${
                    plan.popular
                      ? "bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-black"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer tailored packages for enterprises with specific requirements.
          </p>
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
          >
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  )
}
