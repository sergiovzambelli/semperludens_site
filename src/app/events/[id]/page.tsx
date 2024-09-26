import Button from "@/components/Button";
import EventDetails from "@/components/Events/EventDetails";
import LogoSL from "@/components/LogoSL";

export default function EventPage({ params }: { params: { id: string } }) {

  return(
    <main className="bg-red-50 h-dvh flex flex-col justify-center items-center">
      <div className="px-12 flex flex-col justify-center items-center gap-12 max-w-[800px]">
        <LogoSL height={150} width={150} />

        <EventDetails event_id={params.id}/>

        <div className="flex flex-row justify-between w-full">
          <Button text="" icon="empty_arrow" url="/events" />
          <Button text="Iscrivimi!" icon="empty_arrow" url={`/events/${params.id}/games`}/>
        </div>
      </div>
    </main>
  )
}