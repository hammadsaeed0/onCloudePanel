"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const LOGO_URL = "https://res.cloudinary.com/dirfoibin/image/upload/v1764831818/ikknfcc6sgaiku99wu4o.png"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glassmorphism-nav py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src={LOGO_URL}
              alt="AgentFlow"
              width={180}
              height={50}
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection("features")}
              className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </a>
            <Button
              onClick={() => scrollToSection("pricing")}
              className="btn-premium text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glassmorphism-nav mt-2 mx-4 rounded-xl overflow-hidden animate-slide-up">
          <div className="p-4 space-y-1">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-border mt-4 space-y-2">
              <a 
                href="#"
                className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                Sign In
              </a>
              <Button
                onClick={() => scrollToSection("pricing")}
                className="w-full btn-premium text-white font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
