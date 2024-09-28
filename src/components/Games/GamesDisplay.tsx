"use client";

import { Game } from "@/utils/interfaces";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { getGames } from "@/utils/fetch";
import BoxGame from "./BoxGame";
import text from "@/utils/text.json";
import Text from "@/components/Text";

interface GamesDisplayProps {
  event_id: string;
}

export default function GamesDisplay({ event_id }: GamesDisplayProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const games_page = text.games;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGames = await getGames(event_id);
        setGames(fetchedGames);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-16 lg:gap-20">
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-8">
        <Text text={games_page.title} type="xl" className="text-white text-center"/>
        <Text text={games_page.subtitle} type="m" className="text-white text-center"/>
      </div>

      {loading ? (
        <Loading />
      ) : (
        games.map((game: Game, key: number) => <BoxGame game={game} key={key}/>)
      )}
    </section>
  );
}
