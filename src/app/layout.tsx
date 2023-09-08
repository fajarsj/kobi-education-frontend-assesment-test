import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kobi Education',
  description:
    'Unlock Your Potential with Kobi Education - Your Path to Success Starts Here! Explore our comprehensive educational programs and resources designed to empower learners of all ages. Join us today and embark on a journey towards knowledge, growth, and achievement.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

export default RootLayout
