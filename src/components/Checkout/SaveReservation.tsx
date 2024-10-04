"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import { createPlayer, createReservation } from "@/utils/fetch";
import { Player } from "@/utils/interfaces";

interface SaveReservationProps {
  player: Player;
  game_id: string;
}

export default function SaveReservation({ player, game_id }: SaveReservationProps) {
  const router = useRouter();

  async function createRecord(player: Player) {

    // TODO if it already exists?
    const created_player = await createPlayer({
      name: player.name,
      surname: player.surname,
      email: player.email,
      phone: player.phone,
      id: "",
      reservations: [],
    });

    const created_reservation = await createReservation(created_player.id, game_id);

    console.log(created_reservation);

    router.push("/events/complete");
  }

  return <Button text="Iscrivimi!" icon="empty_arrow" onClick={() => createRecord(player)} />;
}
