export type GameStatus = "unplaying" | "playing" | "clear";

export type GameCard = {
  game: {
    title: string;
    cover?: string;
    rating?: number;
    url: string;
  };
  genres?: string[];
  platforms?: string[];
  game_status: {
    status: GameStatus;
  };
};
