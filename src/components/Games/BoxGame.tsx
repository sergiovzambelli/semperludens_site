import Text from "@/components/Text";
import { Game } from "@/utils/interfaces";

interface BoxGameProps {
  game : Game;
}

export default function BoxGame({game} : BoxGameProps) {

  const isAvaible = game.reservations && game.reservations.length > 0

  return (
    <section className="bg-white p-6 lg:p-8 flex flex-col justify-center items-center rounded-xl gap-10">
      <Text text={game.title} type="xl" className="text-blue-50 text-center !font-bold"/>

      <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
        <Text text={`Master: ${game.master_name}`} type="l" className="text-blue-50 text-center"/>
        <Text text={`${game.game}`}  type="l" className="text-blue-50 text-center"/>
      </div>

      <div className={`py-2 px-4 border-4 rounded-xl ${isAvaible ? "border-blue-50" : "border-red-50 text-red-50"}`}>
        <Text text={isAvaible ? `Posti rimasti: ${game.reservations.length}` : `Sold out`} 
        type="m" 
        className="text-center "/>
      </div>
    </section>
  )  
}