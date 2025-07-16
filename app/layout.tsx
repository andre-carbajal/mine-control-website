import type React from "react"
import "./globals.css"
import {Inter} from "next/font/google"
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from "@vercel/analytics/react"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "MineControlCli - Manage Minecraft Servers with Ease",
    description: "A powerful CLI tool to create, manage, and run Minecraft servers effortlessly.",
    generator: 'v0.dev',
    icons: {
        icon: [
            { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: [
            { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ]
    },
    manifest: '/favicon/site.webmanifest'
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
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    )
}