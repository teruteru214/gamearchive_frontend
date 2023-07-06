export type game = {
  id: number;
  name: string;
  cover?: {
    id: number;
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
  url: string;
  rating?: number;
};
