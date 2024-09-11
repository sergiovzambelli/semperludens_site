import { type NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db-client';

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
    const body = await request.json();
    
    const event = await prisma.event.create({
      data : {
        title: body.title,
        subtitle: body.subtitle,
        description: body.description,
        start_date: body.start_date,
        start_time: body.start_time,
        location: body.location,
        isActive: body.isActive,
        isPublished: body.isPublished,
        link_maps: body.link_maps,
        link_image: body.link_image,
      },
    })
    return NextResponse.json(event, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  } 
}