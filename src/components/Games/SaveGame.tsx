"use client";

import { useDispatch } from "react-redux";
import { setGameId } from "@/lib/features/event/eventSlice";
import Text from "../Text";
import Link from "next/link";

interface SaveGameProps {
  game_id: string;
}

export default function SaveGame({ game_id }: SaveGameProps) {
  const dispatch = useDispatch();

  function saveGame() {
    dispatch(setGameId(game_id));
  }

  return (
    <Link
      href="/events/player"
      className="bg-blue-50 text-white px-14 py-5 rounded-full" 
      onClick={saveGame}
    >
      <Text text="Iscriviti" type="m" className="!font-medium" />
    </Link>
  );
}
