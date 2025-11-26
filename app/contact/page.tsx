"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      })
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-core-deep">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Get in <span className="text-gradient-core-vibrant">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-high-contrast-muted mb-8 max-w-3xl mx-auto text-pretty">
            Have questions about AgentFlow? We're here to help. Reach out to our team and we'll get back to you within
            24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glassmorphism-high-contrast p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-high-contrast mb-6">Send us a Message</h2>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-high-contrast font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-high-contrast placeholder:text-high-contrast-muted focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-high-contrast font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-high-contrast placeholder:text-high-contrast-muted focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-high-contrast font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 text-high-contrast placeholder:text-high-contrast-muted focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-high-contrast font-medium mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-high-contrast placeholder:text-high-contrast-muted focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-high-contrast font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-high-contrast focus:border-accent focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Request Demo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-high-contrast font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 text-high-contrast placeholder:text-high-contrast-muted focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold py-3 shadow-lg border border-white/20 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glassmorphism-high-contrast p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-high-contrast mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-cta-lively rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-high-contrast mb-1">Email</h3>
                      <p className="text-high-contrast-muted">hello@agentflow.com</p>
                      <p className="text-high-contrast-muted">support@agentflow.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-cta-lively rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-high-contrast mb-1">Phone</h3>
                      <p className="text-high-contrast-muted">+1 (555) 123-4567</p>
                      <p className="text-high-contrast-muted text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-cta-lively rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-high-contrast mb-1">Office</h3>
                      <p className="text-high-contrast-muted">123 Innovation Drive</p>
                      <p className="text-high-contrast-muted">San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-cta-lively rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-high-contrast mb-1">Business Hours</h3>
                      <p className="text-high-contrast-muted">Monday - Friday: 9AM - 6PM EST</p>
                      <p className="text-high-contrast-muted">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glassmorphism-high-contrast p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-high-contrast mb-6">Quick Actions</h3>

                <div className="space-y-4">
                  <Button className="w-full justify-start bg-white/5 hover:bg-white/10 text-high-contrast border border-white/20">
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Schedule a Demo
                  </Button>

                  <Button className="w-full justify-start bg-white/5 hover:bg-white/10 text-high-contrast border border-white/20">
                    <Headphones className="w-5 h-5 mr-3" />
                    Technical Support
                  </Button>

                  <Button className="w-full justify-start bg-white/5 hover:bg-white/10 text-high-contrast border border-white/20">
                    <Phone className="w-5 h-5 mr-3" />
                    Sales Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">Common Questions</h2>
            <p className="text-xl text-high-contrast-muted">
              Quick answers to questions you might have before reaching out
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-high-contrast mb-3">How quickly do you respond?</h3>
              <p className="text-high-contrast-muted">
                We typically respond to all inquiries within 24 hours during business days. For urgent technical issues,
                we aim for same-day response.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-high-contrast mb-3">Can I schedule a demo?</h3>
              <p className="text-high-contrast-muted">
                We offer personalized demos to show you how AgentFlow can work for your specific business needs.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-high-contrast mb-3">Do you offer phone support?</h3>
              <p className="text-high-contrast-muted">
                Yes, phone support is available for Business and Enterprise plan customers during business hours.
              </p>
            </div>

            <div className="glassmorphism-high-contrast p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-high-contrast mb-3">What about enterprise solutions?</h3>
              <p className="text-high-contrast-muted">
                We offer custom enterprise solutions with dedicated support, custom integrations, and SLA guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glassmorphism-high-contrast p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-high-contrast">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-high-contrast-muted mb-8">
              Don't wait - start automating your WhatsApp communications today with our free trial.
            </p>
            <Button
              size="lg"
              className="bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold px-8 py-4 text-lg shadow-lg border border-white/20"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
