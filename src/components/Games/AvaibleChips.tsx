import Text from "@/components/Text";

interface AvaibleChipsProps {
  isAvaible: boolean;
  n: number;
}

export default function AvaibleChips({ isAvaible, n }: AvaibleChipsProps) {
  return (
    <div
      className={`py-2 px-4 border-4 rounded-xl ${
        isAvaible ? "border-yellow" : "border-red-50 text-red-50"
      }`}
    >
      <Text
        text={isAvaible ? `Posti rimasti: <span style='font-weight: bold;'>${n}</span>` : `<span style='font-weight: bold;'>Sold out</span>`}
        type="m"
        className="text-center !font-medium !text-blue-50"
      />
    </div>
  );
}
