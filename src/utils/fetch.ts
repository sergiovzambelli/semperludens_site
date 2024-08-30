import events from "@/utils/events_db.json";

export function fetchEvents() {
  return events;
}

export function fetchActiveEvents() {
  return events.filter((event) => event.active);
}

export function fetchEvent(id:string) {
  return events.find((event) => event.id === id);
}