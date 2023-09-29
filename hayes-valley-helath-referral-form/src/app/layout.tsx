import { CssBaseline } from '@mui/material'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Patient Referral',
  description: 'Patient referral form for Hayes Valley Health San Francisco.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#CDE7ED" }}><CssBaseline />{children}</body>
    </html>
  )
}
