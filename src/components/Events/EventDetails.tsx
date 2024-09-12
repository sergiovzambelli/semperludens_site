"use client";

import { getSingleEvent } from "@/utils/fetch";
import { useEffect, useState } from "react";
import Text from "../Text";
import { Event } from "@/utils/interfaces";
import { notFound } from "next/navigation";
import Loading from "../Loading";
import text from "@/utils/text.json";

interface EventDetailsProps {
  event_id: string;
}

export default function EventDetails({event_id} : EventDetailsProps) {

  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState(true);
  const event_text = text.event;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched_event = await getSingleEvent(event_id);
        setEvent(fetched_event);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!loading && !event) {
    notFound();
  }

  return (
    <div>
      {
        event
        ?
        <div className="flex flex-col gap-12">
          <Text text={event.title} type="xl" className="text-yellow"/>

          <div className="flex flex-col gap-0 items-center">
            <Text text={event_text.when + event.start_date} type="m" className="text-white"/>
            <Text text={event_text.time + event.start_date} type="m" className="text-white"/>
            <Text text={event_text.where + event.start_date} type="m" className="text-white"/>
          </div>

          <div className="flex flex-col items-center">
            <Text text={event_text.min_age} type="l" className="text-white !font-bold"/>
            <Text text={event.description} type="s" className="text-white"/>
          </div>
        </div>
        :
        <Loading />
      }
    </div>
  );
}