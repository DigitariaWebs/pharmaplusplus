import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone } = body

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Email invalide' },
        { status: 400 }
      )
    }

    // Persistance en base via Prisma (SQLite)
    await prisma.waitlistEntry.upsert({
      where: { email },
      create: { email, phone: phone || undefined, source: 'landing-page' },
      update: { phone: phone || undefined },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription réussie !' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur newsletter:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Une erreur est survenue. Veuillez réessayer.',
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization') || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
    if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const items = await prisma.waitlistEntry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 500,
    })
    return NextResponse.json({ count: items.length, items })
  } catch (error) {
    console.error('Erreur GET newsletter:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}



