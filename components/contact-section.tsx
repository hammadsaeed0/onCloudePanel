"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-core-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Ready to <span className="text-gradient-cta-lively">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Get in touch with our team to learn how AgentFlow can revolutionize your WhatsApp customer engagement and
            boost your sales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glassmorphism-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-high-contrast">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-high-contrast">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-high-contrast placeholder:text-muted-high-contrast"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-high-contrast">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-input border-border text-high-contrast placeholder:text-muted-high-contrast"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-high-contrast">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-high-contrast placeholder:text-muted-high-contrast"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-high-contrast">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-input border-border text-high-contrast placeholder:text-muted-high-contrast"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-high-contrast">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-input border-border text-high-contrast placeholder:text-muted-high-contrast"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-black font-semibold shadow-lg"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glassmorphism-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-8 w-8 text-secondary" />
                  <div>
                    <h3 className="text-lg font-semibold text-high-contrast">WhatsApp Support</h3>
                    <p className="text-muted-high-contrast">Chat with us directly on WhatsApp for instant support</p>
                    <p className="text-accent font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-lg font-semibold text-high-contrast">Email Us</h3>
                    <p className="text-muted-high-contrast">
                      Send us an email and we'll get back to you within 24 hours
                    </p>
                    <p className="text-accent font-medium">hello@agentflow.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-high-contrast">Call Us</h3>
                    <p className="text-muted-high-contrast">Speak with our sales team about your business needs</p>
                    <p className="text-accent font-medium">+1 (555) 987-6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-secondary" />
                  <div>
                    <h3 className="text-lg font-semibold text-high-contrast">Visit Us</h3>
                    <p className="text-muted-high-contrast">Come visit our office for a personalized demo</p>
                    <p className="text-accent font-medium">123 Tech Street, San Francisco, CA 94105</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
