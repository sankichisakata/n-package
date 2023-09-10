import './globals.css'
import Header from '../components/layouts/header/header'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layouts/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'N-Package',
  description: 'ダンボールのプロフェッショナル企業です|企画・製造・販売、お気軽にご相談ください。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
