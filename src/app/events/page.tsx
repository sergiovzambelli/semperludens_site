import LogoSL from "@/components/LogoSL";
import Text from "@/components/Text";
import text from "@/utils/text.json";
import ShowEvents from "@/components/Events/ShowEvents";

export default function EventsPage() {
  const events_page = text.events;

  return (
    <main className="min-h-dvh py-32 bg-blue-50 flex flex-col items-center px-10 gap-16">
      <LogoSL height={400} width={400} />

      <div className="flex flex-col items-center gap-4">
        <Text text={events_page.title} type="xxxxl" className="text-yellow"/>
        <Text text={events_page.subtitle} type="m" className="text-white text-center"/>
      </div>

      <ShowEvents />
    </main>
  )
}