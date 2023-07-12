import { Button, Modal, Select, Stack, Text } from "@mantine/core";
import {
  convertedGameAtom,
  errorAtom,
  statusAtom,
} from "atoms/games/gameAcquisition";
import { GameAcquisition } from "features/acquisition/types";
import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { z } from "zod";

type StatusModalProps = {
  opened: boolean;
  onClose: () => void;
  game: GameAcquisition;
};

const StatusModal: FC<StatusModalProps> = ({ opened, onClose, game }) => {
  const [status, setStatus] = useAtom(statusAtom);
  const [convertedGame, setConvertedGame] = useAtom(convertedGameAtom);
  const [error, setError] = useAtom(errorAtom);

  const StatusSchema = z
    .string()
    .nonempty({ message: "ゲームステータスを選択してください" });

  useEffect(() => {
    if (status) {
      setConvertedGame({
        game: {
          id: game.id,
          title: game.name,
          cover: game.cover?.url,
          rating: game.rating,
          url: game.url,
        },
        genres: game.genres,
        platforms: game.platforms,
        gameStatus: {
          id: 1, // ここは適切な値に置き換えてください
          user_id: 1, // ここは適切な値に置き換えてください
          status: status,
        },
      });
    }
  }, [status, game]);

  const handleClick = () => {
    if (convertedGame && status) {
      // バリデーション
      const result = StatusSchema.safeParse(status);
      if (result.success) {
        console.log(convertedGame);
        setError(null); // エラーをリセット
      } else {
        setError(result.error.message);
      }
    } else {
      setError("※ゲームステータスを選択してください");
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} centered size="sm">
      <Stack className="flex items-center justify-center space-y-4 pb-16">
        <Text size="lg">ゲームステータスを入力</Text>
        {error && (
          <Text color="red" size="xs">
            {error}
          </Text>
        )}
        <Select
          placeholder="ゲームステータスを選択"
          data={["積みゲー", "プレイ中", "クリア"]}
          onChange={(value) => setStatus(value)}
        />
        <Button onClick={handleClick}>ゲームを取得する</Button>
      </Stack>
    </Modal>
  );
};

export default StatusModal;
