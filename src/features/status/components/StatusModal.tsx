import { Button, Modal, Select, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";
import { GameAcquisition } from "features/acquisition/types";
import { getAuth } from "firebase/auth";
import { FC, useState } from "react";
import { z, ZodError } from "zod";

import { createGame } from "../api/createGame";

type StatusModalProps = {
  opened: boolean;
  onClose: () => void;
  game: GameAcquisition;
};

const statusSchema = z.object({
  gameStatus: z.enum(["unplaying", "playing", "clear"]),
});

const StatusModal: FC<StatusModalProps> = ({ opened, onClose, game }) => {
  const [gameStatus, setGameStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState<ZodError | null>(null);

  const handleClose = () => {
    setValidationError(null);
    onClose();
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true
    try {
      statusSchema.parse({ gameStatus });
      setValidationError(null);

      // Create the payload
      const payload = {
        game: {
          title: game.title,
          cover: game.cover,
          rating: game.rating,
          url: game.url,
        },
        genres: game.genres,
        platforms: game.platforms,
        game_status: {
          status: gameStatus,
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
      });
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        setValidationError(error);
      } else if (error instanceof AxiosError && error.response) {
        if (error.response.status === 422) {
          notifications.show({
            title: game.title,
            message: "はすでに保存されています",
            color: "red",
          });
        } else {
          notifications.show({
            title: game.title,
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
        <Text size="lg">ゲームステータスを入力</Text>
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
        />
        <Button onClick={handleSubmit} loading={loading}>
          ゲームを取得する
        </Button>
      </Stack>
    </Modal>
  );
};

export default StatusModal;
