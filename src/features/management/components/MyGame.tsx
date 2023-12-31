import { ActionIcon, Button, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconStar, IconStarFilled, IconTrash } from "@tabler/icons-react";
import DeleteModal from "features/status/components/DeleteModal";
import StatusUpdateModal from "features/status/components/StatusUpdateModal";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

import { useMutateFavorite } from "../hooks/useMutateFavorite";
import { useQueryFavorites } from "../hooks/useQueryFavorites";
import { GameCard } from "../types";

type MyGameProps = {
  gameItem: GameCard;
};

const MyGame = ({ gameItem }: MyGameProps) => {
  const largerThanXs = useMediaQuery("xs");
  const [statusOpened, { open: openStatus, close: closeStatus }] =
    useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  const defaultImage =
    "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";

  const userFavoritesQuery = useQueryFavorites();

  const { createFavoriteMutation, deleteFavoriteMutation } =
    useMutateFavorite();

  const isFavorite =
    userFavoritesQuery.data &&
    userFavoritesQuery.data.find((game) => game.id === gameItem.id);

  const favorite = async () => {
    if (isFavorite) {
      deleteFavoriteMutation.mutate({
        ...gameItem,
      });
    } else {
      createFavoriteMutation.mutate({
        ...gameItem,
      });
    }
  };

  return (
    <>
      {largerThanXs ? (
        <Card radius="md" className="bg-blue-50 hover:bg-blue-100">
          <Group noWrap spacing={0} className="relative">
            <a href={gameItem.url} target="_blank" rel="noreferrer">
              <Image
                src={gameItem.cover ? gameItem.cover : defaultImage}
                width={145}
                height={195}
                fit="contain"
              />
            </a>
            <div className="pl-4">
              <Button size="md" className="mt-2 w-64" onClick={openStatus}>
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
              <Text className="font-sans font-bold leading-5" mb="xs">
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
              <div className=" flex w-64 space-x-2">
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
              {isFavorite ? (
                <ActionIcon
                  className="absolute bottom-0 right-7 hover:bg-gray-200"
                  onClick={favorite}
                >
                  <IconStarFilled size={18} style={{ color: "#FFD200" }} />
                </ActionIcon>
              ) : (
                <ActionIcon
                  className="absolute bottom-0 right-7 hover:bg-gray-200"
                  onClick={favorite}
                >
                  <IconStar size={18} />
                </ActionIcon>
              )}
              <ActionIcon className="absolute bottom-0 right-0 hover:bg-gray-200">
                <IconTrash size={18} onClick={openDelete} />
              </ActionIcon>
            </div>
            <StatusUpdateModal
              opened={statusOpened}
              onClose={closeStatus}
              gameItem={gameItem}
              defaultImage={defaultImage}
            />
            <DeleteModal
              gameItem={gameItem}
              opened={deleteOpened}
              onClose={closeDelete}
              defaultImage={defaultImage}
            />
          </Group>
        </Card>
      ) : (
        <Card radius="md" className="bg-blue-50 hover:bg-blue-100">
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
              <Button size="sm" className="mt-2 w-auto" onClick={openStatus}>
                プレイ状況を変更
              </Button>
              <div className="h-14">
                <Text
                  className="line-clamp-2 w-auto text-ellipsis font-sans font-bold leading-[1.5rem]"
                  mt="xs"
                  mb="md"
                >
                  {gameItem.title}
                </Text>
              </div>
              <Text className="font-sans font-bold leading-5" mb="md">
                {`Rating: ${gameItem.rating || "None"}`}
              </Text>
              <div className="flex w-36 space-x-2">
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
              <div className="flex w-36 space-x-2">
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
                詳細を見る
              </a>
              {isFavorite ? (
                <ActionIcon
                  className="absolute bottom-4 right-8 hover:bg-gray-200"
                  onClick={favorite}
                >
                  <IconStarFilled size={18} style={{ color: "#FFD200" }} />
                </ActionIcon>
              ) : (
                <ActionIcon
                  className="absolute bottom-4 right-8 hover:bg-gray-200"
                  onClick={favorite}
                >
                  <IconStar size={18} />
                </ActionIcon>
              )}
              <ActionIcon className="absolute bottom-4 right-2 hover:bg-gray-200">
                <IconTrash size={18} onClick={openDelete} />
              </ActionIcon>
            </div>
            <StatusUpdateModal
              opened={statusOpened}
              onClose={closeStatus}
              gameItem={gameItem}
              defaultImage={defaultImage}
            />
            <DeleteModal
              gameItem={gameItem}
              opened={deleteOpened}
              onClose={closeDelete}
              defaultImage={defaultImage}
            />
          </Group>
        </Card>
      )}
    </>
  );
};

export default MyGame;
