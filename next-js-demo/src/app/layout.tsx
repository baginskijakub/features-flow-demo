import './globals.css'
import React from "react";

export const metadata = {
  title: 'FeaturesFlow Demo',
  description: 'Demo showcasing FeaturesFlow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <a href='/' className='fixed top-0 right-0 px-4 py-2 bg-slate-700 text-white rounded-bl-md'>Home</a>
      {children}
      </body>
    </html>
  )
}
