"use client";

import { useDispatch } from "react-redux";
import { setEventId } from "@/lib/features/event/eventSlice";
import Button from "../Button";

interface SaveEventProps {
  event_id: string;
}

export default function SaveEvent({ event_id } : SaveEventProps) {
  const dispatch = useDispatch();

  function saveEvent() {
    dispatch(setEventId(event_id));
  }

  return (
    <Button
      text="Iscrivimi!"
      icon="empty_arrow"
      url={"/events/games"}
      onClick={saveEvent}
    />
  );
}
