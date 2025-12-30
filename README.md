# Landing Page Pharma+ (Standalone)

Version autonome de la landing page Pharma+ - Prête à être déployée indépendamment.

## 🚀 Installation

```bash
npm install
# ou
pnpm install
# ou
yarn install
```

## 📝 Développement

```bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build pour production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
landing-page-standalone/
├── app/
│   ├── landing/          # Pages et composants du landing page
│   │   ├── components/   # Tous les composants (Hero, Features, etc.)
│   │   ├── layout.tsx    # Layout spécifique au landing page
│   │   └── page.tsx      # Page principale du landing page
│   ├── api/
│   │   └── newsletter/   # API route pour la newsletter
│   ├── layout.tsx        # Layout racine
│   ├── page.tsx          # Page d'accueil (redirige vers /landing)
│   └── globals.css       # Styles globaux
├── public/               # Assets statiques (images, favicon, etc.)
├── next.config.js        # Configuration Next.js
├── tailwind.config.js    # Configuration Tailwind CSS
└── package.json          # Dépendances
```

## ⚙️ Configuration

### API Newsletter

Par défaut, l'API newsletter (`app/api/newsletter/route.ts`) simule une inscription. 

Pour intégrer un vrai service :
1. Ouvrez `app/api/newsletter/route.ts`
2. Remplacez la simulation par votre service (Mailchimp, SendGrid, Brevo, etc.)

### Images

Assurez-vous d'avoir les images suivantes dans `/public` :
- `hero-medicines.jpg` - Image principale du hero

### Déploiement

Ce projet peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **Railway**
- **Tout hébergeur supportant Node.js**

Pour Vercel :
```bash
npm install -g vercel
vercel
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans :
- `tailwind.config.js` - Configuration Tailwind
- `app/globals.css` - Variables CSS

### Contenu

Tous les textes sont dans les composants :
- `app/landing/components/Hero.tsx`
- `app/landing/components/Features.tsx`
- `app/landing/components/HowItWorks.tsx`
- etc.

## 📄 Licence

Ce projet fait partie de Pharma+.

