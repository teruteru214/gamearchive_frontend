export type GameTab =
  | "favorites"
  | "unplaying"
  | "playing"
  | "clear"
  | undefined;

export type GameStatus = "unplaying" | "playing" | "clear";

export type GameCard = {
  id: number;
  title: string;
  cover?: string;
  rating?: number;
  url: string;
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

export type GameType = {
  attributes: {
    cover: string;
    game_genres: {
      id: number;
      name: string;
    }[];
    game_platforms: {
      id: number;
      name: string;
    }[];
    game_status: {
      id: number;
      status: GameStatus;
    };
    id: number;
    rating: number;
    title: string;
    url: string;
  };
};

export type ResponseGameType = {
  data: GameType[] | [];
};

export type GameListsType = {
  game_status: {
    name: string;
    path: string;
  }[];
  gameItems: GameCard[];
};
