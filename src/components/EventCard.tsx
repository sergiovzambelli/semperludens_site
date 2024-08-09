import Image from "next/image";
import Text from "./Text";

interface EventCardProps {
  event_url: string,
  text: string,
  classname?: string
}

export default function EventCard({ event_url, text, classname } : EventCardProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-lg ${classname}`}>
      <div className="flex justify-center items-center bg-red-60 min-h-40 p-8">
        <Image
          src={event_url}
          alt="Event logo"
          width={150}
          height={100}
          style={{ height: 'auto', width: 'auto' }}
        />
      </div>
      <Text type="s" text={text}/>
    </div>
  );
}