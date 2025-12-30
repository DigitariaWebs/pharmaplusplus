'use client'

import { useState } from 'react'

export default function DemoPage() {
  const [currentScreen, setCurrentScreen] = useState<
    'role-selection' | 'login' | 'search' | 'product' | 'cart' | 'payment' | 'confirmation' |
    'pharma-dashboard' | 'pharma-order-detail' | 'pharma-inventory' | 'pharma-analytics' |
    'labo-dashboard' | 'labo-rdv-detail' | 'labo-examens' | 'labo-analytics'
  >('role-selection')
  const [userRole, setUserRole] = useState<'patient' | 'pharmacien' | 'labo'>('patient')
  const [isLoading, setIsLoading] = useState(false)
  const [toasts, setToasts] = useState<Array<{ id: number; message: string }>>([])

  function showToast(message: string) {
    const id = Date.now()
    setToasts((t) => [...t, { id, message }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000)
  }

  function go(next: any, message?: string, delayMs = 700) {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentScreen(next)
      setIsLoading(false)
      if (message) showToast(message)
    }, delayMs)
  }

  const screens = {
    'role-selection': {
      title: 'Sélection du rôle',
      content: (
        <div className="flex flex-col h-full justify-center p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-4xl">💊</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Pharma<span className="text-green-600">+</span>
            </h1>
            <p className="text-gray-600 text-sm">Choisissez votre profil</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                setUserRole('patient')
                go('login')
              }}
              className="w-full bg-white border-2 border-green-500 p-6 rounded-2xl text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">👤</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600">
                    Patient
                  </h3>
                  <p className="text-sm text-gray-600">
                    Commander des médicaments, prendre RDV labo
                  </p>
                </div>
                <div className="text-2xl text-green-600">→</div>
              </div>
            </button>

            <button
              onClick={() => {
                setUserRole('pharmacien')
                go('pharma-dashboard')
              }}
              className="w-full bg-white border-2 border-blue-500 p-6 rounded-2xl text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">👨‍⚕️</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
                    Pharmacien
                  </h3>
                  <p className="text-sm text-gray-600">
                    Gérer commandes et inventaire
                  </p>
                </div>
                <div className="text-2xl text-blue-600">→</div>
              </div>
            </button>

            <button
              onClick={() => {
                setUserRole('labo')
                go('labo-dashboard')
              }}
              className="w-full bg-white border-2 border-purple-500 p-6 rounded-2xl text-left hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">🧪</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600">
                    Laboratoire
                  </h3>
                  <p className="text-sm text-gray-600">
                    Gérer planning RDV et examens
                  </p>
                </div>
                <div className="text-2xl text-purple-600">→</div>
              </div>
            </button>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8">
            🇸🇳 🇨🇮 🇲🇱 🇧🇫 🇳🇬 🇳🇪 🇹🇬 🇧🇯 🇬🇭 🇬🇲 🇬🇳 🇱🇷 🇸🇱 🇨🇻 🇲🇷 Disponible en Afrique de l'Ouest
          </div>
        </div>
      ),
    },
    login: {
      title: 'Connexion',
      content: (
        <div className="flex flex-col h-full justify-between p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="flex items-center mb-4">
            <button onClick={() => go('role-selection')} className="text-2xl text-gray-600">
              ←
            </button>
          </div>
          <div className="text-center pt-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-4xl">💊</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Pharma<span className="text-green-600">+</span>
            </h1>
            <p className="text-gray-600 text-sm">Votre pharmacie connectée</p>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div>
              <label className="text-sm text-gray-700 font-medium mb-2 block">
                Numéro de téléphone
              </label>
              <div className="flex gap-2">
                <div className="bg-white px-3 py-3 rounded-lg border border-gray-200 text-sm">
                  🇸🇳 +221
                </div>
                <input
                  type="tel"
                  placeholder="77 123 45 67"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:outline-none"
                  readOnly
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium mb-2 block">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:outline-none"
                readOnly
              />
            </div>

            <button
              onClick={() => go('search', 'Connexion réussie')}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Se connecter
            </button>

            <div className="text-center">
              <a href="#" className="text-sm text-green-600 hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 pb-4">
            🇸🇳 🇨🇮 🇲🇱 🇧🇫 🇳🇬 🇳🇪 🇹🇬 🇧🇯 🇬🇭 🇬🇲 🇬🇳 🇱🇷 🇸🇱 🇨🇻 🇲🇷 Disponible en Afrique de l'Ouest
          </div>
        </div>
      ),
    },
    search: {
      title: 'Recherche Médicaments',
      content: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => go('login')} className="text-2xl">
                ←
              </button>
              <h2 className="text-lg font-semibold flex-1">Recherche</h2>
              <div className="flex gap-3">
                <button className="text-2xl">🔔</button>
                <button onClick={() => go('role-selection')} className="text-2xl">👤</button>
              </div>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Rechercher un médicament..."
                className="w-full px-4 py-3 rounded-lg text-gray-800 pr-10"
                readOnly
              />
              <span className="absolute right-3 top-3 text-xl">🔍</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4 space-y-3">
            <div className="bg-gray-50 p-3 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">💡 Suggestions</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">
                  Paracétamol
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">
                  Amoxicilline
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">
                  Ibuprofène
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700">Médicaments disponibles</p>
              
              <div
                onClick={() => go('product')}
                className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all"
              >
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center text-3xl">
                    💊
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Paracétamol 1000mg</h3>
                    <p className="text-xs text-gray-500">Boîte de 8 comprimés</p>
                    <p className="text-sm text-green-600 font-semibold mt-1">1 500 FCFA</p>
                  </div>
                  <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full h-fit">
                    ✓ Dispo
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center text-3xl">
                    💊
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Amoxicilline 500mg</h3>
                    <p className="text-xs text-gray-500">Boîte de 12 gélules</p>
                    <p className="text-sm text-green-600 font-semibold mt-1">3 200 FCFA</p>
                  </div>
                  <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full h-fit">
                    ✓ Dispo
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center text-3xl">
                    💊
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Ibuprofène 400mg</h3>
                    <p className="text-xs text-gray-500">Boîte de 20 comprimés</p>
                    <p className="text-sm text-green-600 font-semibold mt-1">2 800 FCFA</p>
                  </div>
                  <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full h-fit">
                    Stock limité
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="border-t border-gray-200 bg-white p-3 flex justify-around">
            <button className="flex flex-col items-center text-green-600">
              <span className="text-2xl">🏠</span>
              <span className="text-xs mt-1">Accueil</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">🧪</span>
              <span className="text-xs mt-1">RDV Labo</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📦</span>
              <span className="text-xs mt-1">Commandes</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">👤</span>
              <span className="text-xs mt-1">Profil</span>
            </button>
          </div>
        </div>
      ),
    },
    product: {
      title: 'Fiche Produit',
      content: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('search')} className="text-2xl">
              ←
            </button>
            <h2 className="text-lg font-semibold flex-1">Détails du produit</h2>
            <button className="text-2xl">🛒</button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto">
            <div className="bg-green-50 p-8 flex items-center justify-center">
              <div className="text-9xl">💊</div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Paracétamol 1000mg</h1>
                <p className="text-gray-600">Boîte de 8 comprimés effervescents</p>
              </div>

              <div className="flex items-center justify-between bg-green-50 p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-600">Prix</p>
                  <p className="text-2xl font-bold text-green-600">1 500 FCFA</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-green-600 font-semibold">✓ Disponible</p>
                  <p className="text-xs text-gray-500">Pharmacie du Plateau</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                <h3 className="font-semibold text-gray-800">📋 Informations</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Principe actif :</strong> Paracétamol</p>
                  <p><strong>Laboratoire :</strong> Pharma Lab</p>
                  <p><strong>Forme :</strong> Comprimé effervescent</p>
                  <p><strong>Prescription :</strong> Sans ordonnance</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-blue-800">
                  💡 <strong>Indication :</strong> Traitement de la douleur et de la fièvre
                </p>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-gray-700">Quantité :</p>
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                  <button className="w-8 h-8 bg-white rounded-lg font-bold text-gray-600">-</button>
                  <span className="font-semibold w-8 text-center">1</span>
                  <button className="w-8 h-8 bg-white rounded-lg font-bold text-green-600">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <button
              onClick={() => go('cart', 'Ajouté au panier')}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              <span>🛒</span>
              Ajouter au panier
            </button>
          </div>
        </div>
      ),
    },
    cart: {
      title: 'Panier',
      content: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('product')} className="text-2xl">
              ←
            </button>
            <h2 className="text-lg font-semibold flex-1">Mon panier</h2>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
              <div className="flex gap-3 mb-3">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl">
                  💊
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Paracétamol 1000mg</h3>
                  <p className="text-xs text-gray-500">Boîte de 8 comprimés</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 bg-white rounded-lg p-1">
                      <button className="w-6 h-6 bg-gray-100 rounded text-sm">-</button>
                      <span className="text-sm w-6 text-center">1</span>
                      <button className="w-6 h-6 bg-green-100 rounded text-sm">+</button>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">1 500 FCFA</p>
                  </div>
                </div>
                <button className="text-red-500 text-xl h-fit">🗑️</button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl space-y-3">
              <h3 className="font-semibold text-gray-800">📸 Ordonnance (optionnel)</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <p className="text-3xl mb-2">📷</p>
                <p className="text-sm text-gray-600">Ajouter une photo d'ordonnance</p>
                <button className="mt-3 text-sm text-green-600 font-semibold">
                  Parcourir
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl space-y-2">
              <h3 className="font-semibold text-gray-800">🚚 Mode de livraison</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 bg-white p-3 rounded-lg border-2 border-green-500">
                  <input type="radio" name="delivery" defaultChecked className="text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Livraison à domicile</p>
                    <p className="text-xs text-gray-500">Sous 2-4h · 1 000 FCFA</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                  <input type="radio" name="delivery" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Retrait en pharmacie</p>
                    <p className="text-xs text-gray-500">Gratuit · Dès maintenant</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Sous-total</span>
                <span className="text-sm font-semibold">1 500 FCFA</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Livraison</span>
                <span className="text-sm font-semibold">1 000 FCFA</span>
              </div>
              <div className="border-t border-green-200 pt-2 mt-2 flex justify-between">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-bold text-green-600 text-lg">2 500 FCFA</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <button
              onClick={() => go('payment', 'Redirection vers le paiement')}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold shadow-lg"
            >
              Passer au paiement
            </button>
          </div>
        </div>
      ),
    },
    payment: {
      title: 'Paiement',
      content: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('cart')} className="text-2xl">
              ←
            </button>
            <h2 className="text-lg font-semibold flex-1">Paiement</h2>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
              <p className="text-sm text-gray-600 mb-1">Montant à payer</p>
              <p className="text-3xl font-bold text-green-600">2 500 FCFA</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800">💳 Mode de paiement</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500 p-4 rounded-xl text-center">
                  <p className="text-3xl mb-2">📱</p>
                  <p className="text-sm font-semibold text-orange-700">Orange Money</p>
                </button>
                <button className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-300 p-4 rounded-xl text-center">
                  <p className="text-3xl mb-2">📱</p>
                  <p className="text-sm font-semibold text-yellow-700">MTN Money</p>
                </button>
                <button className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 p-4 rounded-xl text-center">
                  <p className="text-3xl mb-2">🌊</p>
                  <p className="text-sm font-semibold text-blue-700">Wave</p>
                </button>
                <button className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-300 p-4 rounded-xl text-center">
                  <p className="text-3xl mb-2">💳</p>
                  <p className="text-sm font-semibold text-purple-700">Carte bancaire</p>
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl space-y-3">
              <h3 className="font-semibold text-gray-800">Orange Money</h3>
              <div>
                <label className="text-sm text-gray-600 block mb-2">
                  Numéro de téléphone
                </label>
                <div className="flex gap-2">
                  <div className="bg-white px-3 py-3 rounded-lg border border-gray-200 text-sm">
                    +221
                  </div>
                  <input
                    type="tel"
                    placeholder="77 123 45 67"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:outline-none"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg text-sm text-orange-800">
                💡 Vous recevrez une notification sur votre téléphone pour confirmer le paiement
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <p className="text-sm text-blue-800">
                🔒 <strong>Paiement sécurisé</strong> · Vos données sont protégées
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4 bg-white space-y-2">
            <button
              onClick={() => go('confirmation', 'Paiement confirmé', 1200)}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold shadow-lg"
            >
              Payer 2 500 FCFA
            </button>
            <p className="text-xs text-center text-gray-500">
              En continuant, vous acceptez nos conditions d'utilisation
            </p>
          </div>
        </div>
      ),
    },
    confirmation: {
      title: 'Confirmation',
      content: (
        <div className="flex flex-col h-full bg-gradient-to-br from-green-50 to-emerald-50 items-center justify-center p-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">✅</span>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Commande confirmée !
            </h1>
            <p className="text-gray-600 mb-6">
              Votre commande #PM2025001 a été enregistrée avec succès
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Montant payé</span>
                <span className="font-semibold text-green-600">2 500 FCFA</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Mode de paiement</span>
                <span className="font-semibold">Orange Money</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Livraison</span>
                <span className="font-semibold">À domicile</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Délai estimé</span>
                <span className="font-semibold">2-4 heures</span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-left bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">Commande reçue</p>
                  <p className="text-xs text-gray-500">Il y a quelques instants</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold animate-pulse">
                  ⏳
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">En préparation</p>
                  <p className="text-xs text-gray-500">La pharmacie prépare votre commande</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left bg-gray-50 p-3 rounded-lg opacity-50">
                <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm">
                  📦
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600">En livraison</p>
                  <p className="text-xs text-gray-400">Bientôt...</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => go('role-selection')}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold shadow-lg"
              >
                ← Retour au menu principal
              </button>
              <button
                onClick={() => go('search')}
                className="w-full bg-white border border-green-600 text-green-600 py-3 rounded-xl font-semibold"
              >
                Nouvelle commande
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            📧 Un email de confirmation vous a été envoyé
          </p>
        </div>
      ),
    },
    // PARCOURS PHARMACIEN
    'pharma-dashboard': {
      title: 'Dashboard Pharmacien',
      content: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm text-blue-100">Pharmacie</h2>
                <h1 className="text-lg font-bold">Pharmacie du Plateau</h1>
              </div>
              <button onClick={() => go('role-selection')} className="text-2xl">
                ⚙️
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-blue-100">Commandes</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-2xl font-bold">845</p>
                <p className="text-xs text-blue-100">Produits</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-2xl font-bold">15k</p>
                <p className="text-xs text-blue-100">CA (FCFA)</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-white">
            <button className="flex-1 py-3 px-4 border-b-2 border-blue-600 text-blue-600 font-semibold text-sm">
              Commandes
            </button>
            <button onClick={() => go('pharma-inventory')} className="flex-1 py-3 px-4 text-gray-500 font-semibold text-sm">
              Inventaire
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4 space-y-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Nouvelles commandes</h3>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                3 en attente
              </span>
            </div>

            <div
              onClick={() => go('pharma-order-detail')}
              className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-orange-600 font-semibold mb-1">
                    #PM2025001 • EN ATTENTE
                  </p>
                  <p className="font-semibold text-gray-800">Moussa Diallo</p>
                  <p className="text-xs text-gray-600">+221 77 123 45 67</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-orange-600">2 500 FCFA</p>
                  <p className="text-xs text-gray-600">Il y a 5 min</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-white px-2 py-1 rounded">1× Paracétamol</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">🚚 Livraison</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-blue-600 font-semibold mb-1">
                    #PM2025002 • EN PRÉPARATION
                  </p>
                  <p className="font-semibold text-gray-800">Aïssatou Sow</p>
                  <p className="text-xs text-gray-600">+221 76 543 21 98</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">5 800 FCFA</p>
                  <p className="text-xs text-gray-600">Il y a 15 min</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-gray-50 px-2 py-1 rounded">2× Amoxicilline</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">🏪 Retrait</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-green-600 font-semibold mb-1">
                    #PM2025003 • LIVRÉE
                  </p>
                  <p className="font-semibold text-gray-800">Mamadou Kane</p>
                  <p className="text-xs text-gray-600">+221 77 888 99 00</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">3 200 FCFA</p>
                  <p className="text-xs text-gray-600">Il y a 1h</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-gray-50 px-2 py-1 rounded">1× Ibuprofène</span>
                <span className="text-gray-400">•</span>
                <span className="text-green-600">✓ Terminée</span>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="border-t border-gray-200 bg-white p-3 flex justify-around">
            <button className="flex flex-col items-center text-blue-600">
              <span className="text-2xl">📊</span>
              <span className="text-xs mt-1">Dashboard</span>
            </button>
            <button onClick={() => go('pharma-inventory')} className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📦</span>
              <span className="text-xs mt-1">Stock</span>
            </button>
            <button onClick={() => go('pharma-analytics')} className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📈</span>
              <span className="text-xs mt-1">Analytics</span>
            </button>
          </div>
        </div>
      ),
    },
    'pharma-analytics': {
      title: 'Analytics Pharmacien',
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('pharma-dashboard')} className="text-2xl">←</button>
            <h2 className="text-lg font-semibold flex-1">Analytics</h2>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                <p className="text-xs text-blue-700">CA (7 jours)</p>
                <p className="text-2xl font-bold text-blue-800">115k FCFA</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                <p className="text-xs text-green-700">Commandes</p>
                <p className="text-2xl font-bold text-green-800">38</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800 mb-2">Ventes quotidiennes</p>
              <div className="flex items-end gap-2 h-24">
                {[12, 18, 9, 22, 16, 25, 14].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-100 rounded">
                    <div style={{ height: `${h * 3}px` }} className="bg-blue-500 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800 mb-3">Top produits</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex justify-between"><span>Paracétamol 1000mg</span><span className="font-semibold">145</span></li>
                <li className="flex justify-between"><span>Amoxicilline 500mg</span><span className="font-semibold">98</span></li>
                <li className="flex justify-between"><span>Ibuprofène 400mg</span><span className="font-semibold">86</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 p-3 bg-white">
            <button onClick={() => go('pharma-dashboard')} className="w-full bg-white border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold">← Retour</button>
          </div>
        </div>
      )
    },
    'pharma-order-detail': {
      title: 'Détail Commande',
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('pharma-dashboard')} className="text-2xl">←</button>
            <h2 className="text-lg font-semibold flex-1">Commande #PM2025001</h2>
          </div>

          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-4">
              <p className="text-sm font-semibold text-orange-600 mb-3">⏳ EN ATTENTE • Il y a 5 min</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">Moussa Diallo</p>
                  <p className="text-sm text-gray-600">+221 77 123 45 67</p>
                </div>
                <p className="text-2xl font-bold text-orange-600">2 500 FCFA</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl space-y-2">
              <h3 className="font-semibold text-gray-800">📦 Articles</h3>
              <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">💊</div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Paracétamol 1000mg</p>
                  <p className="text-xs text-gray-500">1× boîte</p>
                </div>
                <p className="font-semibold text-green-600">1 500 FCFA</p>
              </div>
              <div className="bg-gray-100 p-2 rounded text-xs text-gray-600 flex justify-between">
                <span>Livraison</span>
                <span className="font-semibold">1 000 FCFA</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">🚚 Livraison</h3>
              <p className="text-sm text-gray-700">Livraison à domicile</p>
              <p className="text-xs text-gray-500 mt-1">Plateau, Dakar</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">💳 Paiement</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">📱 Orange Money</span>
                <span className="text-green-600 font-semibold">✓ Payé</span>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-800">
              📸 Pas d'ordonnance fournie
            </div>
          </div>

          <div className="border-t border-gray-200 p-4 bg-white space-y-2">
            <button
              onClick={() => go('pharma-dashboard')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              ✓ Confirmer et préparer
            </button>
            <button className="w-full bg-white border border-red-600 text-red-600 py-3 rounded-xl font-semibold">
              ✕ Annuler la commande
            </button>
          </div>
        </div>
      ),
    },
    'pharma-inventory': {
      title: 'Inventaire',
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('pharma-dashboard')} className="text-2xl">←</button>
            <h2 className="text-lg font-semibold flex-1">Inventaire</h2>
            <button className="text-2xl">➕</button>
          </div>

          <div className="p-4">
            <input
              type="search"
              placeholder="Rechercher un médicament..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
              readOnly
            />
          </div>

          <div className="flex-1 overflow-auto px-4 space-y-2">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Paracétamol 1000mg</p>
                  <p className="text-xs text-gray-500">Boîte de 8 comprimés</p>
                </div>
                <button className="text-gray-400">⋮</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Stock</p>
                  <p className="text-lg font-bold text-green-600">125 unités</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">Prix</p>
                  <p className="text-lg font-semibold text-gray-800">1 500 FCFA</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Amoxicilline 500mg</p>
                  <p className="text-xs text-gray-500">Boîte de 12 gélules</p>
                </div>
                <button className="text-gray-400">⋮</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Stock</p>
                  <p className="text-lg font-bold text-green-600">78 unités</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">Prix</p>
                  <p className="text-lg font-semibold text-gray-800">3 200 FCFA</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-400 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Ibuprofène 400mg</p>
                  <p className="text-xs text-gray-500">Boîte de 20 comprimés</p>
                </div>
                <button className="text-gray-400">⋮</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Stock</p>
                  <p className="text-lg font-bold text-orange-600">8 unités ⚠️</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">Prix</p>
                  <p className="text-lg font-semibold text-gray-800">2 800 FCFA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 bg-white p-3 flex justify-around">
            <button onClick={() => go('pharma-dashboard')} className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📊</span>
              <span className="text-xs mt-1">Dashboard</span>
            </button>
            <button className="flex flex-col items-center text-blue-600">
              <span className="text-2xl">📦</span>
              <span className="text-xs mt-1">Stock</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📈</span>
              <span className="text-xs mt-1">Analytics</span>
            </button>
          </div>
        </div>
      ),
    },
    // PARCOURS LABORATOIRE
    'labo-dashboard': {
      title: 'Dashboard Laboratoire',
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm text-purple-100">Laboratoire</h2>
                <h1 className="text-lg font-bold">BioLab Santé Plus</h1>
              </div>
              <button onClick={() => go('role-selection')} className="text-2xl">⚙️</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-purple-100">RDV Aujourd'hui</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-purple-100">Examens</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-xs text-purple-100">Taux remplissage</p>
              </div>
            </div>
          </div>

          <div className="flex border-b border-gray-200 bg-white">
            <button className="flex-1 py-3 px-4 border-b-2 border-purple-600 text-purple-600 font-semibold text-sm">
              Planning
            </button>
            <button onClick={() => go('labo-examens')} className="flex-1 py-3 px-4 text-gray-500 font-semibold text-sm">
              Examens
            </button>
          </div>

          <div className="flex-1 overflow-auto p-4 space-y-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Rendez-vous du jour</h3>
              <p className="text-sm text-gray-600">Mer. 9 Oct 2025</p>
            </div>

            <div
              onClick={() => go('labo-rdv-detail')}
              className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-400 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-purple-600 font-semibold mb-1">
                    09:00 - 09:30 • CONFIRMÉ
                  </p>
                  <p className="font-semibold text-gray-800">Fatou Ndiaye</p>
                  <p className="text-xs text-gray-600">+221 76 111 22 33</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-purple-600">8 500 FCFA</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-white px-2 py-1 rounded">🩸 Bilan sanguin</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-green-600 font-semibold mb-1">
                    10:30 - 11:00 • EN COURS
                  </p>
                  <p className="font-semibold text-gray-800">Abdou Seck</p>
                  <p className="text-xs text-gray-600">+221 77 444 55 66</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">6 000 FCFA</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-gray-50 px-2 py-1 rounded">🧬 Test COVID</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">
                    14:00 - 14:30 • EN ATTENTE
                  </p>
                  <p className="font-semibold text-gray-800">Mame Diarra</p>
                  <p className="text-xs text-gray-600">+221 76 777 88 99</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">12 000 FCFA</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-gray-50 px-2 py-1 rounded">💉 Sérologie</span>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 opacity-60">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-gray-500 font-semibold mb-1">
                    16:00 - 16:30 • LIBRE
                  </p>
                  <p className="font-semibold text-gray-600">Créneau disponible</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 bg-white p-3 flex justify-around">
            <button className="flex flex-col items-center text-purple-600">
              <span className="text-2xl">📅</span>
              <span className="text-xs mt-1">Planning</span>
            </button>
            <button onClick={() => go('labo-examens')} className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">🧪</span>
              <span className="text-xs mt-1">Examens</span>
            </button>
            <button onClick={() => go('labo-analytics')} className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📊</span>
              <span className="text-xs mt-1">Stats</span>
            </button>
          </div>
        </div>
      ),
    },
    'labo-analytics': {
      title: 'Analytics Labo',
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('labo-dashboard')} className="text-2xl">←</button>
            <h2 className="text-lg font-semibold flex-1">Statistiques</h2>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
                <p className="text-xs text-purple-700">RDV / jour (moy.)</p>
                <p className="text-2xl font-bold text-purple-800">12</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                <p className="text-xs text-green-700">Taux de show-up</p>
                <p className="text-2xl font-bold text-green-800">92%</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800 mb-2">RDV par créneau (aujourd'hui)</p>
              <div className="flex items-end gap-2 h-24">
                {[4, 6, 8, 5, 7, 3, 2].map((h, i) => (
                  <div key={i} className="flex-1 bg-purple-100 rounded">
                    <div style={{ height: `${h * 8}px` }} className="bg-purple-500 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800 mb-3">Top examens</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex justify-between"><span>NFS</span><span className="font-semibold">34</span></li>
                <li className="flex justify-between"><span>Glycémie</span><span className="font-semibold">28</span></li>
                <li className="flex justify-between"><span>CRP</span><span className="font-semibold">21</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 p-3 bg-white">
            <button onClick={() => go('labo-dashboard')} className="w-full bg-white border border-purple-600 text-purple-600 py-3 rounded-xl font-semibold">← Retour</button>
          </div>
        </div>
      )
    },
    'labo-rdv-detail': {
      title: 'Détail RDV',
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('labo-dashboard')} className="text-2xl">←</button>
            <h2 className="text-lg font-semibold flex-1">Rendez-vous</h2>
          </div>

          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="bg-purple-50 border-2 border-purple-400 rounded-xl p-4">
              <p className="text-sm font-semibold text-purple-600 mb-3">📅 Mer. 9 Oct • 09:00 - 09:30</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">Fatou Ndiaye</p>
                  <p className="text-sm text-gray-600">+221 76 111 22 33</p>
                  <p className="text-xs text-gray-500 mt-1">23 ans • F</p>
                </div>
                <p className="text-2xl font-bold text-purple-600">8 500 FCFA</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl space-y-3">
              <h3 className="font-semibold text-gray-800">🧪 Examen demandé</h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-1">Bilan sanguin complet</p>
                <p className="text-sm text-gray-600 mb-2">NFS, Glycémie, Cholestérol, Triglycérides</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">⏱️ 30 min</span>
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded">📋 Résultats sous 24h</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">💳 Paiement</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">📱 Wave</span>
                <span className="text-green-600 font-semibold">✓ Payé</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">📝 Statut</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span className="text-gray-700">RDV confirmé par le patient</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs animate-pulse">⏳</div>
                  <span className="text-gray-700 font-semibold">En attente d'arrivée</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-800">
              💡 Prévoir : tubes EDTA (NFS), tube sec (biochimie)
            </div>
          </div>

          <div className="border-t border-gray-200 p-4 bg-white space-y-2">
            <button
              onClick={() => go('labo-dashboard')}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold"
            >
              ✓ Patient arrivé • Démarrer
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-white border border-blue-600 text-blue-600 py-2 rounded-xl font-semibold text-sm">
                📅 Reporter
              </button>
              <button className="bg-white border border-red-600 text-red-600 py-2 rounded-xl font-semibold text-sm">
                ✕ Annuler
              </button>
            </div>
          </div>
        </div>
      ),
    },
    'labo-examens': {
      title: 'Catalogue Examens',
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center gap-3">
            <button onClick={() => go('labo-dashboard')} className="text-2xl">←</button>
            <h2 className="text-lg font-semibold flex-1">Catalogue examens</h2>
            <button className="text-2xl">➕</button>
          </div>

          <div className="p-4">
            <input
              type="search"
              placeholder="Rechercher un examen..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:outline-none"
              readOnly
            />
          </div>

          <div className="flex-1 overflow-auto px-4 space-y-2">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Bilan sanguin complet</p>
                  <p className="text-xs text-gray-500">NFS, Glycémie, Cholestérol, Triglycérides</p>
                </div>
                <button className="text-gray-400">⋮</button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2 text-xs">
                  <span className="bg-white px-2 py-1 rounded">⏱️ 30 min</span>
                  <span className="bg-white px-2 py-1 rounded">📋 24h</span>
                </div>
                <p className="text-lg font-semibold text-purple-600">8 500 FCFA</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Test COVID-19 PCR</p>
                  <p className="text-xs text-gray-500">Dépistage par prélèvement nasopharyngé</p>
                </div>
                <button className="text-gray-400">⋮</button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2 text-xs">
                  <span className="bg-gray-50 px-2 py-1 rounded">⏱️ 15 min</span>
                  <span className="bg-gray-50 px-2 py-1 rounded">📋 48h</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">6 000 FCFA</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Sérologie complète</p>
                  <p className="text-xs text-gray-500">VIH, Hépatites B/C, Syphilis</p>
                </div>
                <button className="text-gray-400">⋮</button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2 text-xs">
                  <span className="bg-gray-50 px-2 py-1 rounded">⏱️ 20 min</span>
                  <span className="bg-gray-50 px-2 py-1 rounded">📋 24h</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">12 000 FCFA</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Analyse d'urine</p>
                  <p className="text-xs text-gray-500">ECBU complet</p>
                </div>
                <button className="text-gray-400">⋮</button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2 text-xs">
                  <span className="bg-gray-50 px-2 py-1 rounded">⏱️ 10 min</span>
                  <span className="bg-gray-50 px-2 py-1 rounded">📋 24h</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">4 500 FCFA</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 bg-white p-3 flex justify-around">
            <button onClick={() => go('labo-dashboard')} className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📅</span>
              <span className="text-xs mt-1">Planning</span>
            </button>
            <button className="flex flex-col items-center text-purple-600">
              <span className="text-2xl">🧪</span>
              <span className="text-xs mt-1">Examens</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <span className="text-2xl">📊</span>
              <span className="text-xs mt-1">Stats</span>
            </button>
          </div>
        </div>
      ),
    },
  } as const

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <a href="/landing" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 md:mb-6 transition-colors text-sm md:text-base">
            <span className="text-xl">←</span>
            <span>Retour à l'accueil</span>
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Démo Interactive <span className="text-green-400">Pharma+</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 px-4">
            Testez les 3 parcours : Patient • Pharmacien • Laboratoire
          </p>
          <div className="flex gap-2 md:gap-3 justify-center mt-3 md:mt-4">
            <button
              onClick={() => go('role-selection')}
              className="bg-gray-700 hover:bg-gray-600 px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm text-white transition-all"
            >
              ↻ Changer de rôle
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Phone Mockup */}
          <div className="flex justify-center lg:sticky lg:top-12">
            <div className="relative w-full max-w-[360px]">
              {/* Phone Frame */}
              <div className="w-full aspect-[9/19] max-w-[360px] max-h-[720px] bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl border-4 md:border-8 border-gray-800 relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-5 md:h-7 bg-gray-900 rounded-b-2xl md:rounded-b-3xl z-10"></div>
                
                {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
            {isLoading ? (
              <div className="h-full p-6 animate-pulse">
                <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                <div className="h-40 bg-gray-100 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-100 rounded"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                </div>
              </div>
            ) : (
              screens[currentScreen].content
            )}
          </div>
              </div>

              {/* Status indicator */}
              <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm text-white whitespace-nowrap">
                📱 {screens[currentScreen].title}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            {/* Sélecteur de parcours */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">
                🎯 Choisissez un parcours
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => {
                    setUserRole('patient')
                    setCurrentScreen('role-selection')
                  }}
                  className="bg-green-600 hover:bg-green-500 p-4 rounded-xl text-center transition-all"
                >
                  <p className="text-3xl mb-2">👤</p>
                  <p className="text-sm font-semibold text-white">Patient</p>
                </button>
                <button
                  onClick={() => {
                    setUserRole('pharmacien')
                    setCurrentScreen('role-selection')
                  }}
                  className="bg-blue-600 hover:bg-blue-500 p-4 rounded-xl text-center transition-all"
                >
                  <p className="text-3xl mb-2">👨‍⚕️</p>
                  <p className="text-sm font-semibold text-white">Pharmacien</p>
                </button>
                <button
                  onClick={() => {
                    setUserRole('labo')
                    setCurrentScreen('role-selection')
                  }}
                  className="bg-purple-600 hover:bg-purple-500 p-4 rounded-xl text-center transition-all"
                >
                  <p className="text-3xl mb-2">🧪</p>
                  <p className="text-sm font-semibold text-white">Labo</p>
                </button>
              </div>
            </div>

            {/* Instructions Patient */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">👤</span> Parcours Patient
              </h2>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>✓ Connexion avec numéro de téléphone</p>
                <p>✓ Recherche de médicaments</p>
                <p>✓ Consultation fiche produit</p>
                <p>✓ Ajout au panier + ordonnance</p>
                <p>✓ Choix livraison/retrait</p>
                <p>✓ Paiement Mobile Money</p>
                <p>✓ Confirmation et suivi commande</p>
              </div>
            </div>

            {/* Instructions Pharmacien */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">👨‍⚕️</span> Parcours Pharmacien
              </h2>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>✓ Dashboard avec statistiques (CA, commandes)</p>
                <p>✓ Gestion des commandes (en attente, préparation, livrées)</p>
                <p>✓ Détail commande avec infos client</p>
                <p>✓ Gestion inventaire médicaments</p>
                <p>✓ Confirmation/Annulation commandes</p>
              </div>
            </div>

            {/* Instructions Labo */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">🧪</span> Parcours Laboratoire
              </h2>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>✓ Planning RDV du jour avec statuts</p>
                <p>✓ Détail RDV avec infos patient</p>
                <p>✓ Gestion catalogue examens (prix, délais)</p>
                <p>✓ Confirmation/Report/Annulation RDV</p>
                <p>✓ Notes préparation prélèvement</p>
                <p>✓ Statistiques et taux de remplissage</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">✨ Fonctionnalités complètes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-green-50 text-sm">
                <div>
                  <p className="font-semibold mb-2 text-white">👤 Patient</p>
                  <ul className="space-y-1">
                    <li>• Commande médicaments</li>
                    <li>• RDV laboratoire</li>
                    <li>• Mobile Money</li>
                    <li>• Suivi temps réel</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-white">👨‍⚕️ Pharmacien</p>
                  <ul className="space-y-1">
                    <li>• Gestion commandes</li>
                    <li>• Inventaire médicaments</li>
                    <li>• Analytics CA</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-white">🧪 Laboratoire</p>
                  <ul className="space-y-1">
                    <li>• Planning RDV</li>
                    <li>• Gestion examens</li>
                    <li>• Catalogue services</li>
                    <li>• Statistiques</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-white">🌍 Pour tous</p>
                  <ul className="space-y-1">
                    <li>• Mode offline 70%</li>
                    <li>• 15 pays couverts</li>
                    <li>• Paiement sécurisé</li>
                    <li>• Support 24/7</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">🌍 Disponible en Afrique de l'Ouest</h3>
              <div className="flex gap-3 flex-wrap text-4xl mb-4">
                <span>🇸🇳</span>
                <span>🇨🇮</span>
                <span>🇲🇱</span>
                <span>🇧🇫</span>
                <span>🇳🇬</span>
                <span>🇳🇪</span>
                <span>🇹🇬</span>
                <span>🇧🇯</span>
                <span>🇬🇭</span>
                <span>🇬🇲</span>
                <span>🇬🇳</span>
                <span>🇱🇷</span>
                <span>🇸🇱</span>
                <span>🇨🇻</span>
                <span>🇲🇷</span>
              </div>
              <p className="text-gray-400">
                Sénégal • Côte d'Ivoire • Mali • Burkina Faso • Nigeria • Niger • Togo • Bénin • Ghana • Gambie • Guinée • Libéria • Sierra Leone • Cap-Vert • Mauritanie
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <p className="text-gray-400 mb-4">
                Envie de tester la vraie application ?
              </p>
              <a
                href="/landing#newsletter"
                className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Rejoindre la liste d'attente
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Toasts */}
      <div className="fixed bottom-6 right-6 space-y-2 z-50">
        {toasts.map((t) => (
          <div key={t.id} className="bg-gray-900/90 text-white px-4 py-3 rounded-xl shadow-lg border border-gray-700">
            {t.message}
          </div>
        ))}
      </div>
    </div>
  )
}

