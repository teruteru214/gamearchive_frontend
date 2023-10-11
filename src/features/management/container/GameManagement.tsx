import { Button, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconReplace, IconSettings } from "@tabler/icons-react";
import { gamesAtom } from "atoms/games/gameManagement";
import { confettiDisplayAtom } from "atoms/ui";
import HeroContents from "components/HeroContents";
import { useAtom } from "jotai";
import { useEffect } from "react";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";

import GameSettingDrawer from "../components/GameSettingDrawer";
import GameStatusSelecter from "../components/GameStatusSelecter";
import Profile from "../components/Profile";
import { useQueryFavorites } from "../hooks/useQueryFavorites";
import { useQueryGames } from "../hooks/useQueryGames";

const GameManagement = () => {
  const { width, height } = useWindowSize();
  const [showConfetti] = useAtom(confettiDisplayAtom);
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const userGamesQuery = useQueryGames();
  const userFavoritesQuery = useQueryFavorites();
  const ClearGames = (userGamesQuery.data || []).filter(
    (game) => game.game_status.status === "clear"
  );
  const PlayGames = (userGamesQuery.data || []).filter(
    (game) => game.game_status.status === "playing"
  );
  const NotPlayGames = (userGamesQuery.data || []).filter(
    (game) => game.game_status.status === "unplaying"
  );
  const [, setGames] = useAtom(gamesAtom);

  const params = useParams();

  useEffect(() => {
    if (userGamesQuery.data) {
      setGames(userGamesQuery.data);
    }
  }, [userGamesQuery.data, setGames]);

  return (
    <>
      <HeroContents
        IconComponent={<IconReplace size="3rem" stroke={1.5} />}
        title="ゲームマネジメント"
      />
      <Container>
        <Profile />
        <GameStatusSelecter
          game_status={[
            {
              name: "お気に入り",
              path: "favorites",
            },
            {
              name: "クリア",
              path: "clear",
            },
            {
              name: "プレイ中",
              path: "playing",
            },
            {
              name: "積みゲー",
              path: "unplaying",
            },
          ]}
          gameItems={
            params.tab === "favorites"
              ? userFavoritesQuery.data || []
              : params.tab === "clear"
              ? ClearGames || []
              : params.tab === "playing"
              ? PlayGames || []
              : params.tab === "unplaying"
              ? NotPlayGames || []
              : []
          }
          isLoading={
            userGamesQuery.status === "loading" ||
            userFavoritesQuery.status === "loading"
          }
        />
      </Container>
      <div className="fixed bottom-1 left-1 z-50">
        <Group>
          <Button
            radius="xl"
            size="xs"
            uppercase
            onClick={openDrawer}
            variant="gradient"
            gradient={{ from: "red", to: "yellow", deg: 105 }}
          >
            <IconSettings size="1rem" />
            Game Display Settings
          </Button>
        </Group>
      </div>
      <GameSettingDrawer
        opened={drawerOpened}
        onClose={closeDrawer}
        gameItems={userGamesQuery.data || []}
      />
      {showConfetti && (
        <Confetti width={width} height={height} recycle={false} />
      )}
    </>
  );
};

export default GameManagement;
