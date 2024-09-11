import prisma from "@/utils/db-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const game_id = request.nextUrl.searchParams.get("game");

    if (!game_id) {
      return NextResponse.json(
        { message: "Game ID is required" },
        { status: 400 }
      );
    }

    const players = prisma.player.findMany({
      where: {
        Game: {
          some: {
            id: game_id,
          },
        },
      },
    });

    return NextResponse.json(players, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "Error while fetching the data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const player = prisma.player.create({
      data: {
        name: body.name,
        surname: body.surname,
        email: body.email,
        phone: body.phone,
      },
    });

    return NextResponse.json(player, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while creating the user" },
      { status: 500 }
    );
  }
}
