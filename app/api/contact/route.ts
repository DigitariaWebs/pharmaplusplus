import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, organization, message, context } = body || {}

    if (!name || !email || !String(email).includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Champs requis: nom et email valides' },
        { status: 400 }
      )
    }

    await prisma.contactMessage.create({
      data: {
        name: String(name),
        email: String(email),
        phone: phone ? String(phone) : null,
        organization: organization ? String(organization) : null,
        message: message ? String(message) : null,
        context: context ? String(context) : null,
      },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Erreur contact:', error)
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue' },
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

    const items = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 500,
    })
    return NextResponse.json({ count: items.length, items })
  } catch (error) {
    console.error('Erreur GET contact:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}


