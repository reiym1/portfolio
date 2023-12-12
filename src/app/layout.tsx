import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './component/nav-bar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '推し活をはかどらせよう！',
  description: '推し活をはかどらせるものです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
