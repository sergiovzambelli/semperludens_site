"use client";
import SaveReservation from "@/components/Checkout/SaveReservation";
import { RootState } from "@/lib/store";
import { Player } from "@/utils/interfaces";
import { useSelector } from "react-redux";

 

export default function CheckoutPage() {

  const event_id = useSelector((state: RootState) => state.event.event_id); 
  const game_id = useSelector((state: RootState) => state.event.game_id);
  const name = useSelector((state: RootState) => state.player.name);
  const surname = useSelector((state: RootState) => state.player.surname);
  const email = useSelector((state: RootState) => state.player.email);
  const phone = useSelector((state: RootState) => state.player.phone);

  const player : Player = {
    name: name,
    surname: surname,
    email: email,
    phone: phone,
    id: "",
    reservations: [],
  }

  return (
    <main className="min-h-dvh bg-red-50">
      <div>
        <h1>Checkout Page</h1>
        <p>Event ID: {event_id}</p>
        <p>Game ID: {game_id}</p>
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <SaveReservation player={player} game_id={game_id}/>
      </div>
    </main>
  );
}
