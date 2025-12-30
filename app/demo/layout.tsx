import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Démo Interactive | Pharma+',
  description: 'Découvrez la démo interactive de Pharma+ - Votre pharmacie connectée en Afrique de l\'Ouest. Testez le parcours complet d\'achat de médicaments.',
  openGraph: {
    title: 'Démo Interactive Pharma+',
    description: 'Testez notre application de pharmacie en ligne',
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

