import './globals.css'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Bird',
  description: 'Grow your business with Bird',
  favicon: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={font.className}>{children}
      </body>

      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>

  
    </html>
  )
}
