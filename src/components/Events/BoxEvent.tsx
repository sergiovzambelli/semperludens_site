import { Event } from "@/utils/interfaces"
import Text from "@/components/Text"
import Image from "next/image"
import Button from "../Button"
import { Suspense } from "react"

export default function BoxEvent({event} : {event: Event}) {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-white p-8 rounded-xl flex flex-col gap-6 items-center justify-center">
          <div className="bg-grey w-full h-[150px]"></div>
          <Text text={event.title} type="xl" className="text-yellow text-center"/>
          <div className="border-4 border-yellow px-6 py-2 rounded-2xl text-blue-50 flex flex-row gap-2">
            {/* <Image
              alt="Place icon"
              src={}
              height={24}
              width={24}
              style = {{ minHeight:"24", minWidth:"24"}}
            /> */}
            <Text text={event.location} type="xs" className="!font-medium"/>
          </div>
          <div className="text-blue-50 flex flex-col items-center justify-center">
            <Text text={event.start_date} type="m" className="!font-medium"/>
            <Text text="Iscrizioni aperte" type="m" className="!font-extrabold"/>
          </div>
          <Button text="Scopri di più" icon="full_arrow" url={`/events/${event.id}`}/>
        </div>
      </Suspense>
    </section>
  )
}