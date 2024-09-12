import { Event, Game, Player } from "./interfaces";

// EVENTS API

export async function getEvents() {
  try {
    const response = await fetch("/api/events");
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API", error);
    return [];
  }
}

export async function getSingleEvent(id: string) {
  try {
    const response = await fetch("/api/events/" + id);
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API", error);
    return [];
  }
}

export async function createEvent(event: Event) {
  try {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API", error);
    return {};
  }
}

// GAMES API

// export async function getGames() {
//   return
// }

export async function getSingleGame(id: string) {
  try {
    const response = await fetch("/api/events/" + id);
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API", error);
    return [];
  }
}

export async function createGame(game: Game) {
  try {
    const response = await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API", error);
    return {};
  }
}

// PLAYERS API

export async function getPlayers() {
  return;
}

export async function createPlayer(player: Player) {
  try {
    const response = await fetch("/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API", error);
    return {};
  }
}

// RESERVATIONS API

export async function createReservation() {
  return;
}
