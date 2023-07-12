import { acquisitionGamesHandlers } from "./acquisitionGames";
import { savedGamesHandlers } from "./savedGame";

export const handlers = [...acquisitionGamesHandlers, ...savedGamesHandlers];
