export type GameStatus = "unplaying" | "playing" | "clear";

export type Game = {
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

export type UpdateGameStatusParams = {
  gameStatusId: number;
  newStatus: string;
  config: { headers: { authorization: string } };
};

export type DeleteGameStatusParams = {
  gameId: number;
  config: { headers: { authorization: string } };
};
