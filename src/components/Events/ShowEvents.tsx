"use client";

import { useEffect, useState } from "react";
import BoxEvent from "./BoxEvent";
import NoEvents from "./NoEvents";
import Text from "@/components/Text";
import text from "@/utils/text.json";
import { getEvents } from "@/utils/fetch";
import { Event } from "@/utils/interfaces";
import Loading from "../Loading";

export default function ShowEvents() {
  const events_page = text.events;
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="flex flex-col gap-12">
      <Text text={events_page.selection} type="l" className="text-white text-center !font-bold"/>

      {
        loading 
        ?
        <Loading />
        :
        events.length > 0
        ?
        events.map((event : Event, key: number) => (
          <BoxEvent key={key} event={event} />
        ))
        :
        <NoEvents />
      }
    </div>
  );
}