import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GameAcquisition } from "features/acquisition/types";
import StatusModal from "features/status/components/StatusModal";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

type GameCardAcquisitionProps = {
  game: GameAcquisition;
};

const GameCardAcquisition: React.FC<GameCardAcquisitionProps> = ({
  game,
}: GameCardAcquisitionProps) => {
  const largerThanSm = useMediaQuery("sm");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card radius="md" className="bg-blue-50 py-0" style={{ width: "450px" }}>
      <Group noWrap spacing={0} className="py-4">
        <Image
          src={game.cover?.url}
          width={145}
          height={largerThanSm ? 210 : 180}
          fit="contain"
        />
        <div className="pl-3">
          <Button
            size={largerThanSm ? "md" : "xs"}
            className={`${largerThanSm ? "w-64" : "w-40"}`}
            onClick={open}
          >
            ゲームを取得する
          </Button>
          <Text
            className={`line-clamp-1 overflow-hidden text-ellipsis whitespace-nowrap ${
              largerThanSm ? "w-64" : "w-40"
            } font-sans font-bold `}
            mt="xs"
            mb="md"
          >
            {game.name}
          </Text>
          <Text className="font-sans font-bold leading-5" mt="xs" mb="md">
            {`Rating: ${game.rating}`}
          </Text>
          <div className={`flex space-x-2 ${largerThanSm ? "w-64" : "w-40"}`}>
            <Text
              color="dimmed"
              size="xs"
              className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
            >
              {game.genres?.map((genre) => `#${genre.name}`).join("  ")}
            </Text>
          </div>
          <div className={`flex space-x-2 ${largerThanSm ? "w-64" : "w-40"}`}>
            <Text
              color="dimmed"
              size="xs"
              className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
            >
              {game.platforms?.map((platform) => `#${platform.name}`).join(" ")}
            </Text>
          </div>
          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-400 no-underline hover:underline"
          >
            ゲームの詳細を見る
          </a>
        </div>
        <StatusModal opened={opened} onClose={close} game={game} />
      </Group>
    </Card>
  );
};

export default GameCardAcquisition;
