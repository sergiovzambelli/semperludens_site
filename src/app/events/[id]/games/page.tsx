import GamesDisplay from "@/components/Games/GamesDisplay"
import LogoSL from "@/components/LogoSL"

export default function GamesPage({params} : { params: { id: string } }) {
  return (
    <main className="bg-blue-50 h-dvh flex flex-col items-center justify-center">
      <div className="px-12 flex flex-col justify-center items-center gap-12 max-w-[800px]">
        <LogoSL height={250} width={250} />

        <GamesDisplay event_id={params.id}/>

      </div>
    </main>
  )
}