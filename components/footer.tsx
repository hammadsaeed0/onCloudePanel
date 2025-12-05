"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

const LOGO_URL = "https://res.cloudinary.com/dirfoibin/image/upload/v1764831818/ikknfcc6sgaiku99wu4o.png"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative border-t border-[#023047]/10 bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={LOGO_URL}
                alt="AgentFlow"
                width={160}
                height={45}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[#374151] text-sm mb-6 max-w-xs">
              Transform your WhatsApp into a powerful sales engine with our advanced automation and CRM platform.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#374151] hover:text-[#006D77] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#023047] mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-sm text-[#374151] hover:text-[#006D77] transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm text-[#374151] hover:text-[#006D77] transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-[#374151] hover:text-[#006D77] transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-sm text-[#374151] hover:text-[#006D77] transition-colors"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#023047] mb-4 text-sm">Contact</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-sm text-[#374151]">
                  Email: agentflowcloud@gmail.com
                </p>
              </li>
              <li>
                <p className="text-sm text-[#374151]">
                  WhatsApp: +92 330 3040088
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#023047]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#374151] text-sm flex items-center gap-2">
            Powered by{" "}
            <a href="#" className="font-semibold text-[#006D77] hover:text-[#9EF01A] transition-colors">
              Spark Digital Media
            </a>
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#374151]">
              © {new Date().getFullYear()} AgentFlow. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
