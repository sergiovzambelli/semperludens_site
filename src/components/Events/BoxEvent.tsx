import { Event } from "@/utils/interfaces";
import Text from "@/components/Text";
import Image from "next/image";
import Button from "../Button";
import { Suspense } from "react";
import Link from "next/link";

export default function BoxEvent({ event }: { event: Event }) {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="border-white bg-white p-4 lg:p-8 border-[1px] rounded-[20px] flex flex-col gap-6 items-center justify-center">
          <Image
            className="object-cover object-center w-full h-[300px] rounded-[18px]"
            alt="No alt"
            src = "/hero_bg.png"
            // src={
            //   event.link_image
            //     ? event.link_image
            //     : "/logo_SL.svg"
            // }
            width={500} 
            height={200} 
          />
          <Text
            text={event.title}
            type="xl"
            className="text-yellow text-center"
          />
          <div className="border-4 border-yellow px-6 py-2 rounded-2xl text-blue-50 flex flex-row gap-2">
            {/* <Image
              alt="Place icon"
              src={"/icons/pointer_map.svg"}
              height={48}
              width={48}
              style = {{ minHeight:"48", minWidth:"48"}}
            /> */}
            <Text text={event.location} type="xs" className="!font-medium !text-xl" />
          </div>
          <div className="text-blue-50 flex flex-col items-center justify-center">
            <Text text={event.start_date} type="m" className="!font-medium" />
            <Text
              text="Iscrizioni Aperte"
              type="m"
              className="!font-extrabold"
            />
          </div>
          <Link href={`/events/${event.id}`} className="bg-blue-50 text-white p-5 rounded-full">
            <Text text="Scopri di più" type="m" className="!font-medium" />
          </Link>
        </div>
      </Suspense>
    </section>
  );
}
