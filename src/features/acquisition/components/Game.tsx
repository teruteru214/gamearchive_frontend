import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GameAcquisition } from "features/acquisition/types";
import LoginModal from "features/auth/components/LoginModal";
import StatusModal from "features/status/components/StatusModal";
import { useFirebaseAuth } from "lib/auth/firebaseAuth";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useState } from "react";

type GameProps = {
  game: GameAcquisition;
};

const Game: React.FC<GameProps> = ({ game }: GameProps) => {
  const largerThanXs = useMediaQuery("xs");
  const [opened, { open, close }] = useDisclosure(false);
  const defaultImage =
    "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";

  const { currentUser } = useFirebaseAuth();
  const isLogin = currentUser.uid ? true : false;

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openModal = () => {
    if (isLogin) {
      open();
    } else {
      openLoginModal();
    }
  };

  return (
    <>
      {largerThanXs ? (
        <Card radius="md" className="bg-blue-50 hover:bg-blue-100">
          <Group noWrap spacing={0}>
            <a href={game.url} target="_blank" rel="noreferrer">
              <Image
                src={game.cover ? game.cover : defaultImage}
                width={148}
                height={200}
                fit="contain"
              />
            </a>
            <div className="pl-4">
              <Button size="md" onClick={openModal} className="mt-2 w-64">
                ゲームを取得する
              </Button>
              <div className="h-14">
                <Text
                  className="line-clamp-2 w-64 text-ellipsis font-sans font-bold leading-[1.5rem]"
                  mt="xs"
                  mb="md"
                >
                  {game.title}
                </Text>
              </div>
              <Text className="font-sans font-bold leading-5" mb="md">
                {`Rating: ${game.rating || "None"}`}
              </Text>
              <div className="flex w-64 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {game.genres && game.genres.length > 0
                    ? game.genres.map((genre) => `#${genre}`).join("  ")
                    : "#None"}
                </Text>
              </div>
              <div className="flex w-64 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {game.platforms && game.platforms.length > 0
                    ? game.platforms.map((platform) => `#${platform}`).join(" ")
                    : "#None"}
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
            <StatusModal
              opened={opened}
              onClose={close}
              game={game}
              defaultImage={defaultImage}
            />
            <LoginModal opened={loginModalOpen} close={closeLoginModal} />
          </Group>
        </Card>
      ) : (
        <Card radius="md" className="bg-blue-50 hover:bg-blue-100">
          <Group noWrap spacing={0}>
            <a href={game.url} target="_blank" rel="noreferrer">
              <Image
                src={game.cover ? game.cover : defaultImage}
                width={145}
                height={190}
                fit="contain"
              />
            </a>
            <div className="pl-2">
              <Button size="sm" onClick={openModal} className="mt-2 w-auto">
                ゲームを取得する
              </Button>
              <div className="h-14">
                <Text
                  className="line-clamp-2 w-36 text-ellipsis font-sans font-bold leading-[1.5rem]"
                  mt="xs"
                  mb="md"
                >
                  {game.title}
                </Text>
              </div>
              <Text className="font-sans font-bold leading-5" mb="md">
                {`Rating: ${game.rating || "None"}`}
              </Text>
              <div className="flex w-36 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {game.genres && game.genres.length > 0
                    ? game.genres.map((genre) => `#${genre}`).join("  ")
                    : "#None"}
                </Text>
              </div>
              <div className="flex w-36 space-x-2">
                <Text
                  color="dimmed"
                  size="xs"
                  className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                >
                  {game.platforms && game.platforms.length > 0
                    ? game.platforms.map((platform) => `#${platform}`).join(" ")
                    : "#None"}
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
            <StatusModal
              opened={opened}
              onClose={close}
              game={game}
              defaultImage={defaultImage}
            />
            <LoginModal opened={loginModalOpen} close={closeLoginModal} />
          </Group>
        </Card>
      )}
    </>
  );
};

export default Game;
