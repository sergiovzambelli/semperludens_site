"use client";

import { setName } from "@/lib/features/player/playerSlice"
import { AppDispatch, RootState } from "@/lib/store"
import { useDispatch, useSelector } from "react-redux"

export default function UserPage() {

  const player = useSelector( (state:RootState) => state.player)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      {player.name}
      <button onClick={() => dispatch(setName("Sergio"))}>Set Name</button>
    </div>
  )
}