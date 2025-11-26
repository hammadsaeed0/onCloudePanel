"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/pricing")
  }

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gradient-core-vibrant hover:opacity-80 transition-opacity"
            >
              AgentFlow
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/features"
                className="text-high-contrast hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-high-contrast hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-high-contrast hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-high-contrast hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold shadow-lg border border-white/20"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-high-contrast hover:text-accent">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glassmorphism-nav">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/features"
              className="text-high-contrast hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-high-contrast hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-high-contrast hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-high-contrast hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                handleGetStarted()
                setIsOpen(false)
              }}
              className="w-full mt-4 bg-gradient-cta-lively hover:bg-gradient-cta-subtle text-white font-semibold shadow-lg border border-white/20"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
