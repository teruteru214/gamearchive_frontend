import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import StatusModal from "features/status/StatusModal";
import { game } from "types/game/game";

import { useMediaQuery } from "../lib/mantine/useMediaQuery";

type GameCardAcquisitionProps = {
  game: game;
};

const GameCardAcquisition: React.FC<GameCardAcquisitionProps> = ({ game }) => {
  const largerThanSm = useMediaQuery("sm");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card radius="md" className="bg-blue-50 py-0" style={{ width: "450px" }}>
      <Group noWrap spacing={0} className="py-4">
        <Image src={game.cover?.url} width={150} />
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
            ゲームを取得する
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
            {game.genres?.map((genre) => (
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
            {game.platforms?.map((platform) => (
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
        <StatusModal opened={opened} onClose={close} />
      </Group>
    </Card>
  );
};

export default GameCardAcquisition;
