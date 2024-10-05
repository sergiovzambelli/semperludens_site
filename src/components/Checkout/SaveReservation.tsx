"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import { createPlayer, createReservation } from "@/utils/fetch";
import { Player } from "@/utils/interfaces";
import { sendCheckout } from "@/utils/send-checkout";

interface SaveReservationProps {
  player: Player;
  game_id: string;
  data: {
    event_name: string;
    game_name: string;
    time: string;
    date: string;
    email: string;
  };
}

export default function SaveReservation({ player, game_id, data }: SaveReservationProps) {
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

    const result = await sendCheckout({
      event_name: data.event_name,
      game_name: data.game_name,
      time: data.time,
      date: data.date,
      email: player.email,
    });

    if (!result.success) {
      router.push("/events/complete");
    } else {
      router.push("/events/error");
    }

    router.push("/events/complete");
  }

  return <Button text="Iscrivimi!" icon="empty_arrow" onClick={() => createRecord(player)} />;
}
