import '../styles/globals.css'

export const metadata = {
  title: 'User Management Dashboard',
  description: 'Manage user accounts and view statistics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}