import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pharma+ | Votre pharmacie connectée en Afrique de l\'Ouest',
  description: 'Achetez vos médicaments, réservez vos examens, et recevez vos soins depuis votre mobile. Simple, rapide, et disponible même sans Internet.',
  keywords: [
    'e-santé',
    'santé digitale',
    'pharmacie en ligne',
    'laboratoire',
    'Afrique de l\'Ouest',
    'mobile money',
    'télémédecine',
    'Sénégal',
    'Côte d\'Ivoire',
    'Mali',
    'Burkina Faso'
  ],
  authors: [{ name: 'E-Santé Team' }],
  openGraph: {
    title: 'E-Santé | Plateforme santé connectée',
    description: 'Achetez vos médicaments, réservez vos examens depuis votre mobile',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Santé | Plateforme santé connectée',
    description: 'Achetez vos médicaments, réservez vos examens depuis votre mobile',
  },
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="antialiased">
      {children}
    </div>
  )
}
