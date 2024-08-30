import { fetchEvent } from "@/utils/fetch"
import { notFound } from "next/navigation";

export default function EventPage({ params }: { params: { id: string } }) {

  const event = fetchEvent(params.id);

  if (!event) {
    notFound();
  }

  return(
    <div>
      
    </div>
  )
}