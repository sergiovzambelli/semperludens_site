/// EVENTS
export interface Event {
  id: string;
  
  title: string;
  subtitle: string;
  description: string;

  start_date: string;
  start_time: string; 
  location: string;

  games: Game[];

  isActive: boolean;  
  isPublished: boolean;

  link_maps: string;
  link_image: string;
} 

export interface Game {
  id: string;
  
  title: string;
  description: string;
  master_name: string;
  game: string;

  player_max: number;
  players: Player[];

  event: Event;
}

export interface Player {
  id: string;

  name: string;
  surname: string;
  email: string;
  phone: string;
}

export interface Admin {
  id: string;

  email: string;
  password: string;
}



// Esiste un evento che ha delle partite associate
// esistono delle partite che devono essere associate a un evento
// esistono dei giocatori che possono iscriversi alle partite di un evento
// un giocatore non può iscriversi a più di una partita per evento