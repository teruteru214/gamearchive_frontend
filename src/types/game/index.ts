export type GameStatus = "unplaying" | "playing" | "clear";

export type GameCard = {
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
    user_id: number;
    status: GameStatus;
  };
};
