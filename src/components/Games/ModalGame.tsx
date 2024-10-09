import { Game } from "@/utils/interfaces";
import Text from "@/components/Text";
import AvaibleChips from "./AvaibleChips";
import Button from "../Button";
import Image from "next/image";
import SaveGame from "./SaveGame";

interface ModalGameProps {
  game: Game;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalGame({ game, setIsOpen }: ModalGameProps) {
  const reservations = game.reservations
    ? game.player_max - game.reservations.length
    : game.player_max;
  const isAvaible = reservations > 0;

  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-blue-70 bg-opacity-80">
        <div className="relative bg-white z-50 px-4 py-28 lg:p-24 rounded-xl flex justify-center items-center flex-col gap-12 w-[700px] lg:w-[900px]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 self-end text-gray-500 hover:text-gray-700 cursor-pointer bg-red-60 p-4 rounded-full"
          >
            <Image
              alt="Close modal"
              src="/close.svg"
              width={20}
              height={20}
              style={{
                height: "auto",
                width: "auto",
                maxWidth: "20px",
                maxHeight: "20px",
              }}
            />
          </button>

          <Text
            text={game.title}
            type="xl"
            className="text-blue-50 text-center"
          />

          <div className="flex flex-col gap-2">
            <Text
              text={`<span style='font-weight: bold;'>Sistema di gioco: </span> ${game.game}`}
              type="m"
              className="text-blue-50 text-center"
            />
            <Text
              text={`<span style='font-weight: bold;'>Master: </span>${game.master_name}`}
              type="m"
              className="text-blue-50 text-center"
            />
          </div>

          <Text
            text={`${game.description}`}
            type="l"
            className="text-blue-50 text-center"
          />

          <AvaibleChips isAvaible={isAvaible} n={reservations} />

          <SaveGame game_id={game.id} />
        </div>
      </div>
    </section>
  );
}
