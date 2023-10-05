import { Button, Image, Modal, Select, Title } from "@mantine/core";
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
      <div className="flex flex-col items-center justify-center space-y-4">
        <Title order={5}>ゲームステータスを選択してください</Title>
        <Image
          src={game.cover ? game.cover : defaultImage}
          width={200}
          radius="sm"
        />
        <Title order={5} className="text-center">
          {game.title}
        </Title>
        <Select
          data={[
            { value: "unplaying", label: "積みゲー" },
            { value: "playing", label: "プレイ中" },
            { value: "clear", label: "クリア" },
          ]}
          value={gameStatus}
          onChange={handleSelect}
          error={validationError ? "ゲームステータスを選択してください" : null}
          className="w-52"
          placeholder="ここから選択"
        />
        <Button onClick={handleSubmit} loading={loading} className="w-52">
          ゲームを取得する
        </Button>
      </div>
    </Modal>
  );
};

export default StatusModal;
