import { Card, Group, Image, Text } from "@mantine/core";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { GameCardStatus } from "types/game";

const UserGameCard = ({ gameData }: { gameData: GameCardStatus }) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Card radius="md" className="bg-blue-50 py-0" style={{ width: "450px" }}>
      <Group noWrap spacing={0} className="py-4">
        <Image
          src={gameData.game.cover}
          width={140}
          height={155}
          fit="contain"
        />
        <div className="pl-3">
          <Text
            className={`line-clamp-2 text-ellipsis ${
              largerThanSm ? "w-64" : "w-40"
            } font-bold `}
            mt="xs"
            mb="md"
          >
            {gameData.game.title}
          </Text>
          <Text className="my-3 font-sans font-bold" mt="xs" mb="md">
            {`Rating: ${gameData.game?.rating}`}
          </Text>
          <div className={`flex space-x-2 ${largerThanSm ? "w-64" : "w-40"}`}>
            <Text
              color="dimmed"
              size="xs"
              className="line-clamp-1 text-ellipsis font-bold"
            >
              {gameData.genres?.map((genre) => `#${genre.name}`).join(" ")}
            </Text>
          </div>
          <div className={`flex space-x-2 ${largerThanSm ? "w-64" : "w-40"}`}>
            <Text
              color="dimmed"
              size="xs"
              className="line-clamp-1 text-ellipsis font-bold"
            >
              {gameData.platforms
                ?.map((platform) => `#${platform.name}`)
                .join(" ")}
            </Text>
          </div>
          <a
            href={gameData.game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-400 no-underline hover:underline"
          >
            ゲームの詳細を見る
          </a>
        </div>
      </Group>
    </Card>
  );
};

export default UserGameCard;
