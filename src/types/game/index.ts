export type GameCard = {
  game: {
    id: number; // このゲームのid (gamesテーブルのid)
    title: string;
    cover?: string;
    rating?: number;
    url: string;
  };
  genres?: {
    id: number; // このジャンルのid (genresテーブルのid)
    name: string;
  }[];
  platforms?: {
    id: number; // このプラットフォームのid (platformsテーブルのid)
    name: string;
  }[];
  gameStatus: {
    id: number; // このゲームステータスのid (gameStatusテーブルのid)
    user_id: number; // このゲームステータスが紐づくユーザーのid (usersテーブルのid)
    status: number;
  };
};
