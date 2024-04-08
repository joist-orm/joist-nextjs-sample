import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Next.js Postgres Demo with Prisma',
  description:
    'A simple Next.js app with Postgres as the database and Joist as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
