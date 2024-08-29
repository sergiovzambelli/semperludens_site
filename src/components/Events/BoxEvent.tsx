import { EventBoxProps } from "@/utils/types"
import Text from "@/components/Text"

export default function BoxEvent({event} : {event: EventBoxProps}) {
  return (
    <div className="bg-white p-8 rounded-xl">
      <Text text={event.title} type="l" className="text-yellow"/>
    </div>
  )
}