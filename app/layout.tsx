import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import Navigation from '@/components/ui/Navigation'

// Fonts are self-hosted (app/fonts, OFL-1.1 via Fontsource) so the build never
// depends on downloading from Google Fonts.
const archivo = localFont({
  src: './fonts/archivo-latin-wght-normal.woff2',
  variable: '--font-archivo',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
})

const jetbrainsMono = localFont({
  src: './fonts/jetbrains-mono-latin-wght-normal.woff2',
  variable: '--font-jetbrains-mono',
  weight: '100 800',
  style: 'normal',
  display: 'swap',
})

const instrumentSerif = localFont({
  src: [
    { path: './fonts/instrument-serif-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yan Kessel — Frontend Developer',
  description:
    'Yan Kessel — frontend developer building web products with Next.js, TypeScript and real-time interfaces. Live demos of every project.',
  openGraph: {
    title: 'Yan Kessel — Frontend Developer',
    description:
      'Frontend developer building web products with Next.js, TypeScript and real-time interfaces.',
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
