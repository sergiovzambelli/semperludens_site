import { type NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db-client';

export const dynamic = 'force-static'

export async function GET(request: NextRequest) {
  try {
    const events = await prisma.event.findMany()
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const event = await prisma.event.create({
      data : {
        title: 'Evento di prova',
        subtitle: 'Evento di prova',
        description: 'Evento di prova',
        start_date: '2022-01-01',
        start_time: '00:00:00',
        location: 'Online',
        isActive: true,
        isPublished: true,
        link_maps: 'https://maps.google.com',
        link_image: 'https://image.com',
      },
    })

    return NextResponse.json(event, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  } 
}