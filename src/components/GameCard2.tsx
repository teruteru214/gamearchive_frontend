import { Card, Group, Image, Text } from "@mantine/core";

import { useMediaQuery } from "../lib/mantine/useMediaQuery"; // useMediaQuery フックのパスを正しく指定してください。

interface GameCardProps {
  game: {
    id: number;
    name: string;
    cover: {
      id: number;
      url: string;
    };
    genres: {
      id: number;
      name: string;
    }[];
    platforms: {
      id: number;
      name: string;
    }[];
    url: string;
    rating: number;
    status: string;
  };
}

const GameCard2 = ({ game }: GameCardProps) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Card radius="md" className="max-w-md bg-blue-50 py-0">
      <Group noWrap spacing={0} className="py-4">
        <Image src={game.cover.url} width={150} />
        <div
          className={`pl-3 ${
            largerThanSm ? "" : "sm:max-w-xs sm:overflow-auto"
          }`}
        >
          <Text
            className={`line-clamp-2 ${
              largerThanSm ? "w-60" : "w-full"
            } font-sans font-bold leading-5`}
            mt="xs"
            mb="md"
          >
            {game.name}
          </Text>
          <Text className="font-sans font-bold leading-5" mt="xs" mb="md">
            {`Rating: ${game.rating}`}
          </Text>
          <div className="flex space-x-2">
            {game.genres.map((genre) => (
              <Text
                key={genre.id}
                color="dimmed"
                weight={700}
                size="xs"
                className="line-clamp-1"
              >
                #{genre.name}
              </Text>
            ))}
          </div>
          <div className="flex space-x-2">
            {game.platforms.map((platform) => (
              <Text
                key={platform.id}
                color="dimmed"
                weight={700}
                size="xs"
                className="line-clamp-1"
              >
                #{platform.name}
              </Text>
            ))}
          </div>
          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-gray-400 no-underline"
          >
            ゲームの詳細を見る
          </a>
        </div>
      </Group>
    </Card>
  );
};

export default GameCard2;
