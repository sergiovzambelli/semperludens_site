"use client";

import { useEffect, useState } from "react";
import { Event, Game } from "@/utils/interfaces";
import { getEvents, createGame } from "@/utils/fetch";

export default function CreateGameForm() {
  const [message, setMessage] = useState<string>("");
  const [game, setGame] = useState<Game>({
    id: "",
    title: "",
    description: "",
    master_name: "",
    game: "",
    player_max: 0,
    reservations: [],
    event: {
      id: "",
      title: "",
      subtitle: "",
      description: "",
      start_date: "",
      start_time: "",
      location: "",
      games: [],
      isActive: false,
      isPublished: false,
      link_maps: "",
      link_image: "",
    },
    eventId: "",
  });

  const [events, setEvents] = useState<Event[]>([]); // Stato per memorizzare gli eventi

  // Effetto per recuperare gli eventi al caricamento del componente
  useEffect(() => {
    const fetchEvents = async () => {
      const eventsList = await getEvents();
      setEvents(eventsList);
    };
    fetchEvents();
  }, []); // L'effetto viene eseguito una sola volta al montaggio del componente

  // Funzione per gestire le modifiche nei campi del form
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setGame((prevGame) => ({ ...prevGame, [name]: value }));
  };

  // Funzione per creare un nuovo gioco
  async function handleCreateGame() {
    try {
      const newGame = await createGame({
        title: game.title,
        description: game.description,
        master_name: game.master_name,
        game: game.game,
        player_max: Number(game.player_max),
        eventId: game.eventId,
        reservations: [],
        event: {
          id: game.eventId,
          title: "",
          subtitle: "",
          description: "",
          start_date: "",
          start_time: "",
          location: "",
          games: [],
          isActive: false,
          isPublished: false,
          link_maps: "",
          link_image: "",
        },
        id: "",
      });
      setMessage("Game created successfully");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error creating game:", error);
      setMessage("Error creating game");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md h-full w-full relative">
      <h2 className="text-2xl font-bold mb-4">Create New Game</h2>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Game Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={game.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Game title"
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={game.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Game description"
            rows={4}
          />
        </div>

        {/* Master Name */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="master_name"
          >
            Game Master Name
          </label>
          <input
            type="text"
            id="master_name"
            name="master_name"
            value={game.master_name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Name of the Game Master"
          />
        </div>

        {/* Game */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="game"
          >
            Game System
          </label>
          <input
            type="text"
            id="game"
            name="game"
            value={game.game}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Game system (e.g. D&D, Call of Cthulhu)"
          />
        </div>

        {/* Max Players */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="player_max"
          >
            Maximum Players
          </label>
          <input
            type="number"
            id="player_max"
            name="player_max"
            value={game.player_max}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Max number of players"
          />
        </div>

        {/* Event ID */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="eventId"
          >
            Event ID
          </label>
          <select
            id="eventId"
            name="eventId"
            value={game.eventId}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select an Event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="absolute right-4 left-4 bottom-4">
          {!message ? (
            <button
              onClick={handleCreateGame}
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Game
            </button>
          ) : (
            <p className="bg-yellow w-full inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
