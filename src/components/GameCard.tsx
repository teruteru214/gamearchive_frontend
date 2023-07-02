import { Card, Group, Image, Text } from "@mantine/core";

import { useMediaQuery } from "../lib/mantine/useMediaQuery"; // useMediaQuery フックのパスを正しく指定してください。

interface GameCardProps {
  game: {
    id: number;
    name: string;
    cover?: string;
    genres?: string;
    platforms?: string;
    url: string;
    rating?: number;
    status: number;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Card radius="md" className="bg-blue-50 py-0" style={{ width: "450px" }}>
      <Group noWrap spacing={0} className="py-4">
        <Image src={game.cover} width={115} />
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
            <Text
              color="dimmed"
              weight={700}
              size="xs"
              className="line-clamp-1"
            >
              {game.genres}
            </Text>
          </div>
          <div className="flex space-x-2">
            <Text
              color="dimmed"
              weight={700}
              size="xs"
              className="line-clamp-1"
            >
              {game.platforms}
            </Text>
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

export default GameCard;
