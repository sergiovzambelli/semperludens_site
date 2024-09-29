"use client";

import { Game } from "@/utils/interfaces";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { getGames } from "@/utils/fetch";
import BoxGame from "./BoxGame";
import text from "@/utils/text.json";
import Text from "@/components/Text";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function GamesDisplay() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const games_page = text.games;
  
  const event_id = useSelector((state: RootState) => state.event.event_id); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (event_id) {
          const fetchedGames = await getGames(event_id);
          setGames(fetchedGames);
        } else {
          console.warn("event_id is not available. Skipping fetch.");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [event_id]);

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
