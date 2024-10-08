import EventDetails from "@/components/Events/EventDetails";
import SaveEvent from "@/components/Events/SaveEvent";
import LogoSL from "@/components/LogoSL";
import Link from "next/link";
import Text from "@/components/Text";

export default function EventPage({ params }: { params: { id: string } }) {
  return (
    <main className="bg-red-50 py-32 min-h-dvh h-full flex flex-col justify-center items-center">
      <div className="px-12 flex flex-col justify-center items-center gap-20 max-w-[1020px] min-w-[400px]">
        <LogoSL height={150} width={150} />

        <EventDetails event_id={params.id} />

        <div className="flex flex-row justify-between w-full">
          <Link
            href={`/events`}
            className="bg-white text-red-50 p-5 rounded-full"
          >
            <Text text="Indietro" type="m" className="!font-medium" />
          </Link>
          <SaveEvent event_id={params.id} />
        </div>
      </div>
    </main>
  );
}
