import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import StatusUpdateModal from "features/status/components/StatusUpdateModal";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

import { GameCard } from "../types";

type MyGameProps = {
  gameItem: GameCard;
};

const MyGame = ({ gameItem }: MyGameProps) => {
  const largerThanXs = useMediaQuery("xs");
  const [opened, { open, close }] = useDisclosure(false);
  const defaultImage =
    "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";
  return (
    <>
      {largerThanXs ? (
        <Card radius="md" className="bg-gray-100">
          <Group noWrap spacing={0}>
            <a href={gameItem.url} target="_blank" rel="noreferrer">
              <Image
                src={gameItem.cover ? gameItem.cover : defaultImage}
                width={148}
                height={200}
                fit="contain"
              />
            </a>
            <div className="pl-4">
              <Button size="md" className="mt-2 w-64" onClick={open}>
                プレイ状況を変更する
              </Button>
              <div className="h-14">
                <Text
                  className="line-clamp-2 w-64 text-ellipsis font-sans font-bold leading-[1.5rem]"
                  mt="xs"
                  mb="md"
                >
                  {gameItem.title}
                </Text>
              </div>
              <Text className="font-sans font-bold leading-5" mb="md">
                {`Rating: ${gameItem.rating || "None"}`}
              </Text>
              <div className="flex w-64 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {gameItem.genres && gameItem.genres.length > 0
                    ? gameItem.genres.map((genre) => `#${genre.name}`).join(" ")
                    : "#None"}
                </Text>
              </div>
              <div className="flex w-64 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {gameItem.platforms && gameItem.platforms.length > 0
                    ? gameItem.platforms
                        .map((platform) => `#${platform.name}`)
                        .join(" ")
                    : "#None"}
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
              defaultImage={defaultImage}
            />
          </Group>
        </Card>
      ) : (
        <Card radius="md" className="bg-gray-100">
          <Group noWrap spacing={0}>
            <a href={gameItem.url} target="_blank" rel="noreferrer">
              <Image
                src={gameItem.cover ? gameItem.cover : defaultImage}
                width={145}
                height={190}
                fit="contain"
              />
            </a>
            <div className="pl-2">
              <Button size="sm" className="mt-2 w-40" onClick={open}>
                プレイ状況を変更
              </Button>
              <div className="h-14">
                <Text
                  className="line-clamp-2 w-40 text-ellipsis font-sans font-bold leading-[1.5rem]"
                  mt="xs"
                  mb="md"
                >
                  {gameItem.title}
                </Text>
              </div>
              <Text className="font-sans font-bold leading-5" mb="md">
                {`Rating: ${gameItem.rating || "None"}`}
              </Text>
              <div className="flex w-40 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {gameItem.genres && gameItem.genres.length > 0
                    ? gameItem.genres.map((genre) => `#${genre.name}`).join(" ")
                    : "#None"}
                </Text>
              </div>
              <div className="flex w-40 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {gameItem.platforms && gameItem.platforms.length > 0
                    ? gameItem.platforms
                        .map((platform) => `#${platform.name}`)
                        .join(" ")
                    : "#None"}
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
              defaultImage={defaultImage}
            />
          </Group>
        </Card>
      )}
    </>
  );
};

export default MyGame;
