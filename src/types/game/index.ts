export type GameStatus = "unplaying" | "playing" | "clear";

export type GameCardStatus = {
  game: {
    id: number;
    title: string;
    cover?: string;
    rating?: number;
    url: string;
  };
  genres?: {
    id: number;
    name: string;
  }[];
  platforms?: {
    id: number;
    name: string;
  }[];
  game_status: {
    id: number;
    status: GameStatus;
  };
};
