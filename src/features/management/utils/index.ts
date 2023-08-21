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
