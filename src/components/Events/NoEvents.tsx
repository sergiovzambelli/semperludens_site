import text from "@/utils/text.json";
import Text from "@/components/Text";

export default function NoEvents() {

  return (
    <div className="flex items-center justify-center bg-blue-60 p-10 rounded-2xl">
      <Text text={text.events.no_events} type="m" className="text-white text-center"/>
    </div>
  );
}