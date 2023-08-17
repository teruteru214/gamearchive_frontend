import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import StatusUpdateModal from "features/status/components/StatusUpdateModal";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

import { GameCard } from "../types";

type StatusGameCardProps = {
  gameItem: GameCard;
};

const StatusGameCard = ({ gameItem }: StatusGameCardProps) => {
  const largerThanSm = useMediaQuery("sm");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card radius="md" className="bg-blue-50 py-0" style={{ width: "450px" }}>
      <Group noWrap spacing={0} className="py-4">
        <Image
          src={gameItem.cover}
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
            className={`line-clamp-1 text-ellipsis ${
              largerThanSm ? "w-64" : "w-40"
            } font-bold `}
            mt="xs"
            mb="md"
          >
            {gameItem.title}
          </Text>
          <Text className="font-sans font-bold" mt="xs" mb="md">
            {`Rating: ${gameItem.rating}`}
          </Text>
          <div className={`flex space-x-2 ${largerThanSm ? "w-64" : "w-40"}`}>
            <Text
              color="dimmed"
              size="xs"
              className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
            >
              {gameItem.genres?.map((genre) => `#${genre.name}`).join("  ")}
            </Text>
          </div>
          <div className={`flex space-x-2 ${largerThanSm ? "w-64" : "w-40"}`}>
            <Text
              color="dimmed"
              size="xs"
              className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
            >
              {gameItem.platforms
                ?.map((platform) => `#${platform.name}`)
                .join(" ")}
            </Text>
          </div>
          <a
            href={gameItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-400 no-underline hover:underline"
          >
            ゲームの詳細を見る
          </a>
        </div>
        <StatusUpdateModal
          opened={opened}
          onClose={close}
          gameItem={gameItem}
        />
      </Group>
    </Card>
  );
};

export default StatusGameCard;
