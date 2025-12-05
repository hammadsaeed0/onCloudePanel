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
      gradient: "from-[#374151] to-[#1f2937]",
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
      gradient: "from-[#9EF01A] to-[#7BC410]",
      iconColor: "text-[#023047]",
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
      gradient: "from-[#023047] to-[#006D77]",
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pattern-grid opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f1f7fa] border border-[#023047]/10 mb-6">
            <Crown className="h-4 w-4 text-[#006D77]" />
            <span className="text-sm text-[#374151]">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6 text-[#023047]">
            Choose Your{" "}
            <span className="text-[#006D77]">Growth Plan</span>
          </h2>
          <p className="text-lg text-[#374151] text-pretty max-w-2xl mx-auto">
            Transparent pricing in PKR with no hidden fees. All plans include a 7-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? "bg-white border-[#9EF01A] shadow-xl shadow-[#9EF01A]/20 lg:scale-105" 
                  : "bg-white border-[#023047]/10 shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9EF01A] to-[#7BC410]"></div>
              )}
              
              {plan.popular && (
                <div className="absolute -top-0 right-6">
                  <div className="bg-gradient-to-r from-[#9EF01A] to-[#7BC410] text-[#023047] text-xs font-semibold px-4 py-1.5 rounded-b-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6 pt-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className={`h-7 w-7 ${plan.iconColor || 'text-white'}`} />
                </div>
                <h3 className="text-2xl font-bold text-[#023047] mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-sm text-[#374151]">PKR</span>
                  <span className="text-4xl md:text-5xl font-bold text-[#023047] ml-1">{plan.price}</span>
                  <span className="text-[#374151] text-lg">{plan.period}</span>
                </div>
                <p className="text-[#9EF01A] text-sm font-medium">{plan.duration}</p>
                <p className="text-[#374151] text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  className={`w-full mb-6 font-semibold py-6 rounded-xl ${
                    plan.popular
                      ? "btn-premium"
                      : "bg-[#023047] hover:bg-[#006D77] text-white"
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
                        <div className="w-5 h-5 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-[#9ca3af]" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-[#374151]' : 'text-[#9ca3af]'}`}>
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
        <div className="text-center bg-[#f1f7fa] rounded-2xl p-8 max-w-3xl mx-auto border border-[#023047]/5">
          <h3 className="text-xl font-semibold text-[#023047] mb-2">
            Need a custom solution?
          </h3>
          <p className="text-[#374151] mb-6">
            Contact us for enterprise packages tailored to your specific requirements.
          </p>
          <Button
            variant="outline"
            className="border-[#006D77] text-[#006D77] hover:bg-[#006D77] hover:text-white rounded-xl px-6"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
