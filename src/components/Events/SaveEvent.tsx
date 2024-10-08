"use client";

import { useDispatch } from "react-redux";
import { setEventId } from "@/lib/features/event/eventSlice";
import Link from "next/link";
import Text from "@/components/Text";

interface SaveEventProps {
  event_id: string;
}

export default function SaveEvent({ event_id }: SaveEventProps) {
  const dispatch = useDispatch();

  function saveEvent() {
    dispatch(setEventId(event_id));
  }

  return (
    <Link href={`/events/games`} className="bg-white text-red-50 p-5 rounded-full" onClick={saveEvent}>
      <Text text="Iscrivimi!" type="m" className="!font-medium" />
    </Link>
  );
}
