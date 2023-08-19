import {
  Button,
  Image,
  Modal,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";
import { GameAcquisition } from "features/acquisition/types";
import { getAuth } from "firebase/auth";
import { FC, useState } from "react";
import { z, ZodError } from "zod";

import { createGame } from "../api/createGame";
import { Game, GameStatus } from "../types";

type StatusModalProps = {
  opened: boolean;
  onClose: () => void;
  game: GameAcquisition;
  defaultImage: string;
};

const statusSchema = z.object({
  gameStatus: z.enum(["unplaying", "playing", "clear"]),
});

const StatusModal: FC<StatusModalProps> = ({
  opened,
  onClose,
  game,
  defaultImage,
}) => {
  const [gameStatus, setGameStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState<ZodError | null>(null);

  const handleClose = () => {
    setValidationError(null);
    onClose();
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      statusSchema.parse({ gameStatus });
      setValidationError(null);

      const payload: Game = {
        game: {
          title: game.title,
          cover: game.cover,
          rating: game.rating,
          url: game.url,
        },
        genres: game.genres,
        platforms: game.platforms,
        game_status: {
          status: gameStatus as GameStatus,
        },
      };

      const auth = getAuth();
      const idToken = await auth.currentUser?.getIdToken(true);
      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };

      await createGame(payload, config);

      notifications.show({
        title: "Success",
        message: `${game.title}を保存しました！`,
        color: "green",
      });
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        setValidationError(error);
      } else if (error instanceof AxiosError && error.response) {
        if (error.response.status === 500) {
          notifications.show({
            title: "Saved in",
            message: "すでに保存されています",
            color: "red",
          });
        } else {
          notifications.show({
            title: "Error",
            message: "は保存されませんでした",
            color: "red",
          });
        }
      }
    } finally {
      setLoading(false);
      if (gameStatus) {
        onClose();
      }
    }
  };

  const handleSelect = (value: string) => {
    setValidationError(null); // Clear error message
    setGameStatus(value); // Save the selected value to state
  };

  return (
    <Modal opened={opened} onClose={handleClose} centered size="sm">
      <Stack className="flex flex-col items-center justify-center space-y-4 pb-14">
        <Title order={4}>ゲームステータスを選択してください</Title>
        <Text className="text-center">{game.title}</Text>
        <Image
          src={game.cover ? game.cover : defaultImage}
          width={140}
          radius="sm"
        />
        <Select
          data={[
            { value: "unplaying", label: "積みゲー" },
            { value: "playing", label: "プレイ中" },
            { value: "clear", label: "クリア" },
          ]}
          value={gameStatus}
          onChange={handleSelect}
          error={validationError ? "ゲームステータスを選択してください" : null}
          className="w-64"
          placeholder="積みゲーorプレイ中orクリア"
        />
        <Button onClick={handleSubmit} loading={loading} className="w-64">
          ゲームを取得する
        </Button>
      </Stack>
    </Modal>
  );
};

export default StatusModal;
