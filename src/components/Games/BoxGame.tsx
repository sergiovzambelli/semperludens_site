"use client";

import Text from "@/components/Text";
import { Game } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import ModalGame from "./ModalGame";
import AvaibleChips from "./AvaibleChips";
import Button from "../Button";

interface BoxGameProps {
  game: Game;
}

export default function BoxGame({ game }: BoxGameProps) {
  const reservations = game.reservations
    ? game.player_max - game.reservations.length
    : game.player_max;
  const isAvaible = reservations > 0;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section
      className={`bg-white px-6 py-10 lg:p-8 flex flex-col justify-center items-center rounded-xl gap-10 ${
        isOpen ? "" : "cursor-pointer"
      }`}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      {isOpen && <ModalGame game={game} setIsOpen={setIsOpen} />}

      <div className="flex flex-col justify-center items-center gap-6 lg:gap-10">
        <Text
          text={game.title}
          type="xl"
          className="text-blue-50 text-center"
        />

        <div className="flex flex-col gap-2 lp:gap-4">

        <Text
          text={`Master: ${game.master_name}`}
          type="l"
          className="text-blue-50 text-center"
        />
        <Text
          text={`${game.game}`}
          type="l"
          className="text-blue-50 text-center"
        />
        </div>
      </div>

      <AvaibleChips isAvaible={isAvaible} n={reservations} />

      {isAvaible && <Button text="Scopri di più" url="#" icon="full_arrow" />}
    </section>
  );
}
