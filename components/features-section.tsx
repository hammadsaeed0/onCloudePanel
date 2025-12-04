"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  MessageCircle, 
  Bot, 
  Megaphone, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Plug, 
  Target, 
  Calendar, 
  Globe, 
  Shield, 
  Sparkles,
  MoreHorizontal
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "Official WhatsApp API (Cloud)",
      description: "Online chat + delivered/seen/failed tracking for complete message visibility.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Bot,
      title: "Automated Chatbot",
      description: "Drag & drop builder with AI/NLU & branching for intelligent conversations.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Megaphone,
      title: "Broadcasting & Phonebook",
      description: "Campaign sends; segment lists & tags for targeted messaging.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Chats & Agent Management",
      description: "Assign, prioritize, and handover to humans fast for seamless support.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: MessageSquare,
      title: "Dynamic Chat Widget",
      description: "Add WhatsApp chat to your website for instant customer connection.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Dashboard & Analytics",
      description: "Track replies, conversions, and response times with detailed insights.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Plug,
      title: "API & Integrations",
      description: "Connect Google Sheets, CRMs, or your DB for seamless data flow.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Lead Gen & Qualification",
      description: "Capture details and auto-segment users for efficient lead management.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Calendar,
      title: "Booking & Reminders",
      description: "Schedule, confirm, and auto-follow up appointments effortlessly.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Talk in Urdu, English, Arabic and more languages.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Compliance & Number Health",
      description: "Opt-in/STOP handling to reduce bans and maintain account health.",
      gradient: "from-slate-500 to-slate-600",
    },
    {
      icon: Sparkles,
      title: "Interactive Design",
      description: "Clean UI for agents & customers with modern interface.",
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Everything You Need for{" "}
            <span className="text-gradient-core-vibrant">WhatsApp Success</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Powerful features to transform WhatsApp into your ultimate business tool for customer engagement and sales growth.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glassmorphism-card-hover border-0 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-high-contrast group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Much More */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 glassmorphism-card rounded-2xl px-8 py-4">
            <MoreHorizontal className="h-6 w-6 text-secondary" />
            <span className="text-lg font-semibold text-high-contrast">Much More Features Included</span>
          </div>
        </div>
      </div>
    </section>
  )
}
