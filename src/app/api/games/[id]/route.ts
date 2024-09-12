import prisma from '@/utils/db-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const game = await prisma.game.findUnique({
      where: { id: String(id) },  
    });

    if (!game) {
      return NextResponse.json({ message: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
