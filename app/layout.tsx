import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MineControlCli - Manage Minecraft Servers with Ease",
  description: "A powerful CLI tool to create, manage, and run Minecraft servers effortlessly.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  )
}