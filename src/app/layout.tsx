import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import FloatWhatsapp from '@/components/floatWhatsapp'

export const metadata: Metadata = {
  title: "Igreja No'ah",
}

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body>
        {children}
        <FloatWhatsapp />
      </body>
    </html>
  )
}
