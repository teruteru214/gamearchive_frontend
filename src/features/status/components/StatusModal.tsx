import { Modal } from "@mantine/core";
import { errorAtom, statusAtom } from "atoms/games/gameAcquisition";
import { GameAcquisition } from "features/acquisition/types";
import { useAtom } from "jotai";
import { FC } from "react";

type StatusModalProps = {
  opened: boolean;
  onClose: () => void;
  game: GameAcquisition;
};

const StatusModal: FC<StatusModalProps> = ({ opened, onClose }) => {
  const [, setStatus] = useAtom(statusAtom);
  // const [convertedGame, setConvertedGame] = useAtom(convertedGameAtom);
  const [, setError] = useAtom(errorAtom);

  // // zodを用いてステータスのバリデーションを定義
  // const StatusSchema = z
  //   .string()
  //   .nonempty({ message: "ゲームステータスを選択してください" });

  // ゲーム情報と選択したステータスを元に変換したゲームデータを作成
  // useEffect(() => {
  //   if (status) {
  //     setConvertedGame({
  //       game: {
  //         id: game.id,
  //         title: game.name,
  //         cover: game.cover?.url ?? null,
  //         rating: game.rating ?? 0,
  //         url: game.url,
  //       },
  //       genres: game.genres?.map((genre) => genre.name) ?? [],
  //       platforms: game.platforms?.map((platform) => platform.name) ?? [],
  //       gameStatus: {
  //         id: 1, // ここは適切な値に置き換えてください
  //         user_id: 1, // ここは適切な値に置き換えてください
  //         status: status,
  //       },
  //     });
  //   }
  // }, [status, game]);
  // const handleClick = () => {
  //   if (status) {
  //     // バリデーション
  //     const result = StatusSchema.safeParse(status);
  //     if (result.success) {
  //       console.log(convertedGame);
  //       setError(null);
  //     } else {
  //       setError(result.error.message);
  //     }
  //   } else {
  //     setError("※ゲームステータスを選択してください");
  //   }
  // };
  const handleClose = () => {
    setError(null);
    setStatus(null);
    onClose();
  };

  // モーダルが開かれる度にエラーとステータスをリセット;
  // useEffect(() => {
  //   if (opened) {
  //     setError(null);
  //     setStatus(null);
  //   }
  // }, [opened]);

  // ステータスが選択された際にエラーメッセージをリセット
  // const handleStatusChange = (value: string) => {
  //   setStatus(value);
  //   setError(null);
  // };

  // モーダルのレンダリング
  return (
    <Modal opened={opened} onClose={handleClose} centered size="sm">
      {/* <Stack className="flex items-center justify-center space-y-4 pb-16">
        <Text size="lg">ゲームステータスを入力</Text>
        <Select
          placeholder="ゲームステータスを選択"
          data={[
            { value: "unplaying", label: "積みゲー" },
            { value: "playing", label: "プレイ中" },
            { value: "clear", label: "クリア" },
          ]}
          onChange={handleStatusChange} // ステータスが選択された際のハンドラー
          error={error ? "※ゲームステータスを選択してください" : null} // エラーメッセージ
        />
        <Button onClick={handleClick}>ゲームを取得する</Button>
      </Stack> */}
    </Modal>
  );
};

export default StatusModal;
