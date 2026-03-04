import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Muhamad Arif Nurrohman — Full Stack Developer',
  description:
    'Portfolio of Muhamad Arif Nurrohman — Programmer & Full Stack Developer specializing in JavaScript, PHP, Laravel, Next.js, Node.js, and React.',
  keywords: ['Full Stack Developer', 'Laravel', 'Next.js', 'React', 'Node.js', 'PHP', 'JavaScript'],
  authors: [{ name: 'Muhamad Arif Nurrohman' }],
  openGraph: {
    title: 'Muhamad Arif Nurrohman — Full Stack Developer',
    description: 'Programmer & Full Stack Developer | JavaScript · PHP · Laravel · Next.js · React',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#080f1e] text-slate-800 dark:text-[#c9d8f0] transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
