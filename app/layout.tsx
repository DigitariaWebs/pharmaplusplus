import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://pharmaplus-afrique.com'),
  title: {
    default: 'Pharma+ | Votre pharmacie connectée en Afrique de l\'Ouest',
    template: '%s | Pharma+'
  },
  description: 'Achetez vos médicaments, réservez vos examens, et recevez vos soins depuis votre mobile. Simple, rapide, et disponible même sans Internet.',
  keywords: [
    'pharma+',
    'pharmacie en ligne',
    'médicaments',
    'santé digitale',
    'laboratoire',
    'Afrique de l\'Ouest',
    'mobile money',
    'télémédecine',
    'Sénégal',
    'Côte d\'Ivoire',
    'Mali',
    'Burkina Faso'
  ],
  authors: [{ name: 'Pharma+ Team' }],
  creator: 'Pharma+',
  publisher: 'Pharma+',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pharmaplus-afrique.com',
    siteName: 'Pharma+',
    title: 'Pharma+ | Votre pharmacie connectée',
    description: 'Achetez vos médicaments, réservez vos examens depuis votre mobile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharma+ | Votre pharmacie connectée',
    description: 'Achetez vos médicaments, réservez vos examens depuis votre mobile',
    creator: '@pharmaplus_africa',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
