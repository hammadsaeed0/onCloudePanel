"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Mail, Phone, Send, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with us directly",
      value: "+92 XXX XXXXXXX",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      description: "We'll respond within 24 hours",
      value: "hello@agentflow.com",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Mon-Sat 10am to 6pm",
      value: "+92 XXX XXXXXXX",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6">
            <Mail className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Ready to{" "}
            <span className="text-gradient-cta-lively">Get Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Contact us to learn more about AgentFlow and how we can help grow your business with WhatsApp automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glassmorphism-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-high-contrast">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-accent rounded-xl"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-accent rounded-xl"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-border/50 focus:border-accent rounded-xl"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone / WhatsApp Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-muted/50 border-border/50 focus:border-accent rounded-xl"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-muted/50 border-border/50 focus:border-accent rounded-xl resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-premium text-white font-semibold py-6 rounded-xl"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="glassmorphism-card-hover border-0 group cursor-pointer"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-high-contrast">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                      <p className="text-accent font-medium mt-1">{info.value}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="glassmorphism-card border-0 mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-high-contrast mb-3">
                  Start Your Free Trial Today
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  No credit card required. Get started in minutes.
                </p>
                <Button className="btn-premium text-white font-semibold rounded-xl px-8">
                  7 Days Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
