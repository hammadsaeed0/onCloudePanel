import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AgentFlow - WhatsApp Automation & CRM Platform",
  description:
    "Transform WhatsApp into your sales engine with AgentFlow's powerful automation and CRM platform. Boost customer engagement and drive sales growth.",
  generator: "v0.app",
  keywords: "WhatsApp automation, CRM, business messaging, chatbots, customer engagement",
  authors: [{ name: "AgentFlow" }],
  openGraph: {
    title: "AgentFlow - WhatsApp Automation & CRM Platform",
    description: "Transform WhatsApp into your sales engine with powerful automation and CRM features.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${GeistMono.variable} font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
