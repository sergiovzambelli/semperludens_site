import PlayerForm from "@/components/Form/PlayerForm";
import LogoSL from "@/components/LogoSL";
import Text from "@/components/Text";
import text from "@/utils/text.json";

export default function PlayerPage() {
  const player_text = text.player_screen;

  return (
    <main className="bg-blue-50 min-h-dvh px-8 py-16 flex flex-col justify-center items-center">
      <div className="gap-16 max-w-[600px] flex flex-col justify-center items-center">
        <LogoSL height={150} width={150} />
        <Text text={player_text.title} type="s" className="text-white" />
        <PlayerForm />
      </div>
    </main>
  );
}
