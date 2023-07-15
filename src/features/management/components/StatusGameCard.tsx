import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import StatusUpdateModal from "features/status/components/StatusUpdateModal";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { GameCard } from "types/game";

const StatusGameCard = ({ game }: { game: GameCard }) => {
  const largerThanSm = useMediaQuery("sm");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card radius="md" className="bg-blue-50 py-0" style={{ width: "450px" }}>
      <Group noWrap spacing={0} className="py-4">
        <Image src={game.game.cover} width={150} />
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
            ゲームステータスを変更
          </Button>
          <Text
            className={`line-clamp-2 ${
              largerThanSm ? "w-60" : "w-full"
            } font-sans font-bold leading-5`}
            mt="xs"
            mb="md"
          >
            {game.game.title}
          </Text>
          <Text className="font-sans font-bold leading-5" mt="xs" mb="md">
            {`Rating: ${game.game.rating}`}
          </Text>
          <div className="flex space-x-2">
            <Text
              color="dimmed"
              weight={700}
              size="xs"
              className="line-clamp-1"
            >
              {game.genres?.map((genre) => `#${genre.name}`).join(" ")}
            </Text>
          </div>
          <div className="flex space-x-2">
            <Text
              color="dimmed"
              weight={700}
              size="xs"
              className="line-clamp-1"
            >
              {game.platforms?.map((platform) => `#${platform.name}`).join(" ")}
            </Text>
          </div>
          <a
            href={game.game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-gray-400 no-underline"
          >
            ゲームの詳細を見る
          </a>
        </div>
        <StatusUpdateModal opened={opened} onClose={close} />
      </Group>
    </Card>
  );
};

export default StatusGameCard;
