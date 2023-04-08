import { Nunito } from "next/font/google";
import './globals.css'
import React, {ReactNode} from "react";

export const metadata = {
  title: 'Waterbnb',
  description: 'Airbnb but it`s water',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
