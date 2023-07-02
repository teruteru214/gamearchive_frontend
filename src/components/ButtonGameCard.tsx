import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import StatusModal from "features/status/StatusModal";
import StatusUpdateModal from "features/status/StatusUpdateModal";

import { useMediaQuery } from "../lib/mantine/useMediaQuery"; // useMediaQuery フックのパスを正しく指定してください。

interface StatusGameCardProps {
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
  buttonText: string;
}

const ButtonGameCard = ({ game, buttonText }: StatusGameCardProps) => {
  const largerThanSm = useMediaQuery("sm");
  const [opened, { open, close }] = useDisclosure(false);

  const isGetGame = buttonText === "ゲームを取得する";
  const isUpdateStatus = buttonText === "ゲームステータスを変更";

  return (
    <Card radius="md" className="bg-blue-50 py-0" style={{ width: "450px" }}>
      <Group noWrap spacing={0} className="py-4">
        <Image src={game.cover.url} width={150} />
        <div
          className={`pl-3 ${
            largerThanSm ? "" : "sm:max-w-xs sm:overflow-auto"
          }`}
        >
          <Button
            size={largerThanSm ? "md" : "xs"}
            className="w-full"
            onClick={open}
          >
            {buttonText}
          </Button>
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
        {isGetGame && <StatusModal opened={opened} onClose={close} />}
        {isUpdateStatus && (
          <StatusUpdateModal opened={opened} onClose={close} />
        )}
      </Group>
    </Card>
  );
};

export default ButtonGameCard;
