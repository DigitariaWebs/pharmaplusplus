'use client'

import { useEffect, useMemo, useState } from 'react'

type WaitlistEntry = {
  id: number
  email: string
  phone?: string | null
  source: string
  createdAt: string
}

export default function WaitlistAdminPage() {
  const [token, setToken] = useState('')
  const [items, setItems] = useState<WaitlistEntry[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [contacts, setContacts] = useState<any[]>([])
  const [isLoadingContacts, setIsLoadingContacts] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fromEnv = process.env.NEXT_PUBLIC_ADMIN_TOKEN as string | undefined
    // Ne pas auto-préremplir pour la sécurité; laisser vide par défaut
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      })
      if (!res.ok) {
        const t = await res.text()
        throw new Error(t || `HTTP ${res.status}`)
      }
      const data = await res.json()
      setItems(data.items || [])
    } catch (e: any) {
      setError(e?.message || 'Erreur inconnue')
    } finally {
      setIsLoading(false)
    }
  }

  const csv = useMemo(() => {
    const header = ['id', 'email', 'phone', 'source', 'createdAt']
    const rows = items.map((x) => [x.id, x.email, x.phone ?? '', x.source, x.createdAt])
    const all = [header, ...rows]
    return all.map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\n')
  }, [items])

  const contactsCsv = useMemo(() => {
    const header = ['id', 'name', 'email', 'phone', 'organization', 'context', 'message', 'createdAt']
    const rows = contacts.map((x) => [x.id, x.name, x.email, x.phone ?? '', x.organization ?? '', x.context ?? '', (x.message ?? '').replaceAll('\n', ' '), x.createdAt])
    const all = [header, ...rows]
    return all.map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\n')
  }, [contacts])

  const downloadCsv = () => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `waitlist_${new Date().toISOString().slice(0, 19)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadContactsCsv = () => {
    const blob = new Blob([contactsCsv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `contacts_${new Date().toISOString().slice(0, 19)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const fetchContacts = async () => {
    setIsLoadingContacts(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      })
      if (!res.ok) {
        const t = await res.text()
        throw new Error(t || `HTTP ${res.status}`)
      }
      const data = await res.json()
      setContacts(data.items || [])
    } catch (e: any) {
      setError(e?.message || 'Erreur inconnue')
    } finally {
      setIsLoadingContacts(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Administration — Liste d'attente</h1>

        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Admin Token</label>
          <div className="flex gap-2">
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Saisir ADMIN_TOKEN"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={fetchData}
              disabled={isLoading || !token}
              className="px-4 py-2 rounded-lg bg-green-600 text-white disabled:opacity-50"
            >
              {isLoading ? 'Chargement…' : 'Charger'}
            </button>
            <button
              onClick={downloadCsv}
              disabled={!items.length}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white disabled:opacity-50"
            >
              Export Waitlist CSV
            </button>
            <button
              onClick={fetchContacts}
              disabled={isLoadingContacts || !token}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
            >
              {isLoadingContacts ? 'Chargement…' : 'Charger contacts'}
            </button>
            <button
              onClick={downloadContactsCsv}
              disabled={!contacts.length}
              className="px-4 py-2 rounded-lg bg-gray-900 text-white disabled:opacity-50"
            >
              Export Contacts CSV
            </button>
          </div>
          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Téléphone</th>
                  <th className="px-4 py-2 text-left">Source</th>
                  <th className="px-4 py-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {items.map((x) => (
                  <tr key={x.id} className="border-t">
                    <td className="px-4 py-2">{x.id}</td>
                    <td className="px-4 py-2 font-medium">{x.email}</td>
                    <td className="px-4 py-2">{x.phone || '-'}</td>
                    <td className="px-4 py-2">{x.source}</td>
                    <td className="px-4 py-2">{new Date(x.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
                {!items.length && (
                  <tr>
                    <td className="px-4 py-8 text-center text-gray-500" colSpan={5}>
                      Aucune donnée chargée.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}


