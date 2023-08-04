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
  gameStatus: {
    id: number;
    status: GameStatus;
  };
};
