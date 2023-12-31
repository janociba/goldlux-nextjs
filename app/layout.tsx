import payload from 'payload'
import './globals.css'
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'Goldlux',
  description: 'Goldlux, the new way of cleaning',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={roboto.className}>
      <body id="root" >{children}</body>
    </html>
  )
}
