import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/application/providers/ThemeProvider'
import Container from '@/application/container'

import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import { Toaster } from '@/shared/ui/toaster'

const bicubik = localFont({
  variable: '--font-bicubik',
  src: './Bicubik.otf',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'PC Aggregator',
  description: 'Made by AOM',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bicubik.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Header />
            <div className="flex max-w-[630px] flex-col items-center justify-center gap-20 self-center px-5 lg:max-w-full">
              {children}
            </div>
            <Footer />
          </Container>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
