export type ConvertedGame = {
  game: {
    id: number;
    title: string;
    cover: string | null;
    rating: number;
    url: string;
  };
  genres: string[];
  platforms: string[];
  gameStatus: {
    id: number;
    user_id: number;
    status: string;
  };
} | null;

export type GameStatus = 0 | 1 | 2;

export type GameCard = {
  game: {
    title: string;
    cover?: string;
    rating?: number;
    url: string;
  };
  genres?: string[];
  platforms?: string[];
  gameStatus: {
    status: GameStatus;
  };
};
