import { Button, Center, NumberInput, Switch } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { getAuth } from "firebase/auth";
import { useState } from "react";

import { updateLineSetting } from "../api/updateLineSetting";
import { NotificationSettingsProps } from "../types";

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  userId,
  initialIsSwitchOn,
  initialStackedValue,
  initialFavoriteValue,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean | undefined>(
    initialIsSwitchOn
  );
  const [stackedValue, setStackedValue] = useState<number | undefined>(
    initialStackedValue
  );
  const [favoriteValue, setFavoriteValue] = useState<number | undefined>(
    initialFavoriteValue
  );
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (
      !userId ||
      isSwitchOn === undefined ||
      stackedValue === undefined ||
      favoriteValue === undefined
    ) {
      console.error("データが正常ではありません");
      return;
    }

    setLoading(true);

    try {
      const auth = getAuth();
      const idToken = await auth.currentUser?.getIdToken(true);
      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };
      await updateLineSetting({
        id: userId,
        line_notification: isSwitchOn,
        stacked_notification_interval: stackedValue,
        favorite_notification_interval: favoriteValue,
        config,
      });
      notifications.show({
        title: "Success",
        message: "LINE通知設定を更新しました！",
        color: "green",
      });
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "LINE通知設定の更新を失敗しました",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Switch
        label="Lineのゲーム通知をオンにする"
        checked={isSwitchOn}
        onChange={() => setIsSwitchOn(!isSwitchOn)}
      />
      {isSwitchOn && (
        <>
          <NumberInput
            defaultValue={stackedValue}
            onChange={(value: number) => setStackedValue(value)}
            label="積みゲー通知設定(日数を入力)"
            withAsterisk
          />
          <NumberInput
            defaultValue={favoriteValue}
            onChange={(value: number) => setFavoriteValue(value)}
            label="お気に入りゲームを通知(日数を入力)"
            withAsterisk
          />
        </>
      )}
      <Center>
        <Button
          type="submit"
          radius="xl"
          size="md"
          className="w-36"
          onClick={handleUpdate}
          loading={loading}
        >
          更新する
        </Button>
      </Center>
    </>
  );
};

export default NotificationSettings;
