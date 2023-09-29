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
      <head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0-uLHPblmURzEuzZBN0CL_YWYRYu2Am8&libraries=places"></script>
      </head>
      <body style={{ backgroundColor: "#CDE7ED" }}><CssBaseline />{children}</body>
    </html>
  )
}
