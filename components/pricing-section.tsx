"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Star, Zap, Crown } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "STARTER",
      price: "2,200",
      period: "/mo",
      duration: "30 Days",
      description: "Perfect for small businesses getting started",
      icon: Star,
      features: [
        { name: "Contact limit (1,000)", included: true },
        { name: "1 QR Account Login", included: true },
        { name: "Rest API (WA QR)", included: true },
        { name: "Agent System limit (1)", included: true },
        { name: "Cloud API Access", included: true },
        { name: "Chat Note & Tag", included: true },
        { name: "Live Chat Widget", included: false },
        { name: "AI Integration", included: false },
        { name: "Campaign Schedule", included: false },
      ],
      buttonText: "7 Days Free Trial",
      popular: false,
      gradient: "from-slate-500 to-slate-600",
    },
    {
      name: "GROWTH",
      price: "1,900",
      period: "/mo",
      duration: "180 Days",
      description: "Ideal for growing businesses with more needs",
      icon: Zap,
      features: [
        { name: "Contact limit (5,000)", included: true },
        { name: "3 QR Account Login", included: true },
        { name: "Rest API (WA QR)", included: true },
        { name: "Agent System limit (5)", included: true },
        { name: "Cloud API Access", included: true },
        { name: "Chat Note & Tag", included: true },
        { name: "Live Chat Widget", included: true },
        { name: "AI Integration", included: false },
        { name: "Bulk Messaging", included: true },
        { name: "Campaign Schedule", included: false },
      ],
      buttonText: "7 Days Free Trial",
      popular: true,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "SCALE",
      price: "1,800",
      period: "/mo",
      duration: "365 Days",
      description: "For businesses requiring maximum scalability",
      icon: Crown,
      features: [
        { name: "Contact limit (Unlimited)", included: true },
        { name: "5 QR Account Login", included: true },
        { name: "Rest API (WA QR)", included: true },
        { name: "Agent System limit (5)", included: true },
        { name: "Cloud API Access", included: true },
        { name: "Live Chat Widget", included: true },
        { name: "AI Integration", included: true },
        { name: "Bulk Messaging", included: true },
        { name: "Much More Features", included: true },
      ],
      buttonText: "7 Days Free Trial",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6">
            <Crown className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Choose Your{" "}
            <span className="text-gradient-core-vibrant">Growth Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Transparent pricing in PKR with no hidden fees. All plans include a 7-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? "glassmorphism-card-hover lg:scale-105 glow-secondary" 
                  : "glassmorphism-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              )}
              
              {plan.popular && (
                <div className="absolute -top-0 right-6">
                  <div className="bg-gradient-cta-lively text-white text-xs font-semibold px-4 py-1 rounded-b-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6 pt-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-high-contrast mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">PKR</span>
                  <span className="text-4xl md:text-5xl font-bold text-high-contrast ml-1">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>
                <p className="text-secondary text-sm font-medium">{plan.duration}</p>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  className={`w-full mb-6 font-semibold py-6 rounded-xl ${
                    plan.popular
                      ? "btn-premium text-white"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-muted-foreground/50" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center glassmorphism-card rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-high-contrast mb-2">
            Need a custom solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contact us for enterprise packages tailored to your specific requirements.
          </p>
          <Button
            variant="outline"
            className="border-accent/50 text-accent hover:bg-accent hover:text-white rounded-xl px-6"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
