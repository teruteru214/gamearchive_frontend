import { GameCard } from "../types";

export const sortGamesByRating = (
  games: GameCard[],
  ascending: boolean
): GameCard[] => {
  return [...games].sort((a, b) => {
    const ratingA = a.rating || 0;
    const ratingB = b.rating || 0;
    return ascending ? ratingA - ratingB : ratingB - ratingA;
  });
};

export const extractUniqueGenresAndPlatforms = (games: GameCard[]) => {
  const genres: Set<string> = new Set();
  const platforms: Set<string> = new Set();

  games.forEach((game) => {
    game.genres?.forEach((genre) => genres.add(genre.name));
    game.platforms?.forEach((platform) => platforms.add(platform.name));
  });

  return {
    genres: Array.from(genres),
    platforms: Array.from(platforms),
  };
};
