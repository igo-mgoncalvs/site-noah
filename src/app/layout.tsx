import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import FloatWhatsapp from '@/components/floatWhatsapp'

export const metadata: Metadata = {
  title: "Igreja Noah",
  description: 'Um lugar de descanso! - "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês." Mateus 11:28',
  keywords: ['igreja', 'noah', 'igreja noah', 'lugar de descanso', 'Mateus 11:28', 'igreja em Mauá', 'igreja em Santo André', 'igreja em Araucária', 'igreja em Curitiba'],
  verification: {
    google: "5dQJIRZ64xk8wnlAzbiYxICdpDx4zZRykwSWIbDXTKw"
  },
  robots: {
    index: true,
    googleBot: {
      index: true
    }
  }
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
