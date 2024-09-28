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
        text={isAvaible ? `Posti rimasti: ${n}` : `Sold out`}
        type="m"
        className="text-center !font-light"
      />
    </div>
  );
}
