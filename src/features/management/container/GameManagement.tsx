import { Container } from "@mantine/core";
import { IconReplace } from "@tabler/icons-react";
import HeroContents from "components/HeroContents";
import { useParams } from "react-router-dom";

import Profile from "../../../components/Profile";
import GameStatusHeader from "../components/GameStatusHeader";
import { useQueryGames } from "../hooks/useQueryGames";
import GameManagementControls from "./GameManagementControls";

const GameManagement = () => {
  const userGamesQuery = useQueryGames();
  const ClearGames = (userGamesQuery.data || []).filter(
    (game) => game.game_status.status === "clear"
  );
  const PlayGames = (userGamesQuery.data || []).filter(
    (game) => game.game_status.status === "playing"
  );
  const NotPlayGames = (userGamesQuery.data || []).filter(
    (game) => game.game_status.status === "unplaying"
  );

  const params = useParams();

  return (
    <>
      <HeroContents
        IconComponent={<IconReplace size="3rem" stroke={1.5} />}
        title="ゲームマネジメント"
      />
      <Container>
        <Profile />
        <GameManagementControls />
        <GameStatusHeader
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
              ? []
              : params.tab === "clear"
              ? ClearGames || []
              : params.tab === "playing"
              ? PlayGames || []
              : params.tab === "unplaying"
              ? NotPlayGames || []
              : []
          }
        />
      </Container>
    </>
  );
};

export default GameManagement;
