import prisma from "@/utils/db-client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const player_id = params.id;
    const { game_id } = await request.json();

    if (!player_id || !game_id) {
      return NextResponse.json(
        { message: "Player ID and Game ID are required" },
        { status: 400 }
      );
    }

    const updated_player = await prisma.player.update({
      where: { id: player_id },
      data: {
        Game: {
          connect: { id: game_id },
        },
      },
      include: {
        Game: true,
      },
    });

    return NextResponse.json(updated_player, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while associating game to player" },
      { status: 500 }
    );
  }
}
