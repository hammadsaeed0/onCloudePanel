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
      value: "+92 3091456953",
      gradient: "from-[#9EF01A] to-[#7BC410]",
      iconColor: "text-[#023047]",
    },
    {
      icon: Mail,
      title: "Email",
      description: "We'll respond within 24 hours",
      value: "agentflowcloud@gmail.com",
      gradient: "from-[#006D77] to-[#023047]",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Mon-Sat 10am to 6pm",
      value: "+92 3091456953",
      gradient: "from-[#023047] to-[#006D77]",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#f1f7fa]">
      {/* Background */}
      <div className="absolute inset-0 pattern-grid opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#023047]/10 shadow-sm mb-6">
            <Mail className="h-4 w-4 text-[#006D77]" />
            <span className="text-sm text-[#374151]">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6 text-[#023047]">
            Ready to{" "}
            <span className="text-[#9EF01A]">Get Started?</span>
          </h2>
          <p className="text-lg text-[#374151] text-pretty max-w-2xl mx-auto">
            Contact us to learn more about AgentFlow and how we can help grow your business with WhatsApp automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border border-[#023047]/8 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-[#023047]">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#023047]">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-[#F3F4F6] border-[#023047]/10 focus:border-[#006D77] rounded-xl"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#023047]">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-[#F3F4F6] border-[#023047]/10 focus:border-[#006D77] rounded-xl"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#023047]">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#F3F4F6] border-[#023047]/10 focus:border-[#006D77] rounded-xl"
                    placeholder="Email Address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#023047]">
                    Phone / WhatsApp Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#F3F4F6] border-[#023047]/10 focus:border-[#006D77] rounded-xl"
                    placeholder="+92 3091456953"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#023047]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-[#F3F4F6] border-[#023047]/10 focus:border-[#006D77] rounded-xl resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-premium font-semibold py-6 rounded-xl"
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
                className="bg-white border border-[#023047]/8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className={`h-6 w-6 ${info.iconColor || 'text-white'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#023047]">{info.title}</h3>
                      <p className="text-sm text-[#374151]">{info.description}</p>
                      <p className="text-[#006D77] font-medium mt-1">{info.value}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#9ca3af] group-hover:text-[#006D77] group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="bg-[#023047] border-0 mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Start Your Free Trial Today
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  No credit card required. Get started in minutes.
                </p>
                <Button className="btn-premium font-semibold rounded-xl px-8">
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
