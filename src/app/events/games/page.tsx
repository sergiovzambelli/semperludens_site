"use client";

import GamesDisplay from "@/components/Games/GamesDisplay"
import LogoSL from "@/components/LogoSL"

export default function GamesPage() {
  
  return (
    <main className="bg-blue-50 py-32 min-h-dvh h-full flex flex-col items-center justify-center">
      <div className="px-6 lg:px-12 flex flex-col justify-center items-center gap-12 max-w-[800px]">
        <LogoSL height={250} width={250} />

        <GamesDisplay/>

      </div>
    </main>
  )
}