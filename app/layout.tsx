import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
