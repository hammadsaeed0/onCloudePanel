"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X, Star, Zap, Crown, HelpCircle, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "STARTER",
      icon: Star,
      price: "2,200",
      period: "/mo",
      duration: "30 Days",
      description: "Perfect for small businesses",
      gradient: "from-slate-500 to-slate-600",
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
      cta: "7 Days Free Trial",
    },
    {
      name: "GROWTH",
      icon: Zap,
      price: "1,900",
      period: "/mo",
      duration: "180 Days",
      description: "For growing businesses",
      gradient: "from-green-500 to-emerald-500",
      popular: true,
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
      cta: "7 Days Free Trial",
    },
    {
      name: "SCALE",
      icon: Crown,
      price: "1,800",
      period: "/mo",
      duration: "365 Days",
      description: "For large organizations",
      gradient: "from-purple-500 to-pink-500",
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
      cta: "7 Days Free Trial",
    },
  ]

  const faqs = [
    {
      question: "What is the 7 Days Free Trial?",
      answer: "All plans come with a 7-day free trial. No credit card required to start. You can test all features before committing.",
    },
    {
      question: "What currencies do you accept?",
      answer: "We accept payments in PKR. All prices shown are in Pakistani Rupees.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What happens after my trial ends?",
      answer: "After your trial ends, you can choose to continue with a paid plan or your account will be downgraded to limited access.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/15 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6">
            <Crown className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Pricing</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Simple <span className="text-gradient-core-vibrant">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Transparent pricing in PKR. All plans include a 7-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`glassmorphism-card-hover rounded-2xl p-6 relative ${plan.popular ? 'lg:scale-105 border border-secondary/50 glow-secondary' : ''}`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-2xl"></div>
                    <div className="absolute -top-0 right-4">
                      <div className="bg-gradient-cta-lively text-white text-xs font-semibold px-3 py-1 rounded-b-lg">
                        Most Popular
                      </div>
                    </div>
                  </>
                )}
                
                <div className="text-center mb-6 pt-2">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-high-contrast mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">PKR</span>
                    <span className="text-4xl font-bold text-high-contrast ml-1">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-secondary text-sm font-medium">{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full font-semibold py-5 rounded-xl ${plan.popular ? 'btn-premium text-white' : 'bg-muted hover:bg-muted/80 text-foreground'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6">
              <HelpCircle className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-high-contrast">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glassmorphism-card-hover rounded-2xl p-6">
                <h3 className="text-lg font-bold text-high-contrast mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glassmorphism-card rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-high-contrast">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your 7-day free trial today and transform your WhatsApp business.
            </p>
            <Button
              size="lg"
              className="btn-premium text-white font-semibold px-8 py-6 text-lg rounded-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
