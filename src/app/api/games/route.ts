import { type NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db-client';


export async function GET(request: NextRequest) {
  try {
    const event_id = request.nextUrl.searchParams.get("event");

    if (!event_id) {
      return NextResponse.json(
        { message: "Event ID is required" },
        { status: 400 }
      );
    }

    const games = await prisma.game.findMany({
      where: { eventId: event_id },
    });

    return NextResponse.json(games, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const game = await prisma.game.create({
      data : {
        title: body.title,
        description: body.description,
        master_name: body.master_name,
        game: body.game,
        player_max: body.player_max,
        eventId: body.eventId,
      },
    })
    return NextResponse.json(game, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  } 
}