"use client";

import { useDispatch } from "react-redux";
import { setGameId } from "@/lib/features/event/eventSlice";
import Button from "../Button";

interface SaveGameProps {
  game_id: string;
}

export default function SaveGame({ game_id } : SaveGameProps) {
  const dispatch = useDispatch();

  function saveGame() {
    dispatch(setGameId(game_id));
  }

  return (
    <Button
      text="Iscriviti"
      icon="full_arrow"
      url="/events/player"
      onClick={saveGame}
    />
  );
}
