import BoxEvent from "@/components/Events/BoxEvent";
import NoEvents from "@/components/Events/NoEvents";
import LogoSL from "@/components/LogoSL";
import Text from "@/components/Text";
import { fetchActiveEvents } from "@/utils/fetch";
import text from "@/utils/text.json";
import { Event } from "@/utils/interfaces";

export default function EventsPage() {
  const events_page = text.events;
  const active_events = fetchActiveEvents();

  return (
    <main className="h-full bg-blue-50 flex flex-col items-center py-16 px-10 gap-16">
      <LogoSL height={400} width={400} />

      <div className="flex flex-col items-center gap-4">
        <Text text={events_page.title} type="xxxxl" className="text-yellow"/>
        <Text text={events_page.subtitle} type="m" className="text-white text-center"/>
      </div>

      <div className="flex flex-col gap-16">
        <Text text={events_page.selection} type="l" className="text-white text-center !font-bold"/>

        {
          active_events.length > 0
          ?
          active_events.map((event : Event) => (
            <BoxEvent key={event.id} event={event} />
          ))
          :
          <NoEvents />
        }
        
      </div>
    </main>
  )
}