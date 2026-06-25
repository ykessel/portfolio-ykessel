import type { Metadata } from 'next'
import { Archivo, JetBrains_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import Navigation from '@/components/ui/Navigation'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yan Kessel — Web Developer',
  description:
    'Web developer building fast, modern, and memorable digital experiences.',
  openGraph: {
    title: 'Yan Kessel — Web Developer',
    description:
      'Web developer building fast, modern, and memorable digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} bg-background text-primary font-body antialiased`}
      >
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
