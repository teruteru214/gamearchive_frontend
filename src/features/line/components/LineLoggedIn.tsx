import {
  Avatar,
  Box,
  Button,
  Center,
  Group,
  Loader,
  NumberInput,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { useState } from "react";

import { useQueryLineSetting } from "../hooks/useQueryLineSetting";
import { Profile } from "../types";

interface LoggedInProps {
  profile: Profile;
}

const LineLoggedIn: React.FC<LoggedInProps> = ({ profile }) => {
  const userLineQuery = useQueryLineSetting();
  const [isSwitchOn, setIsSwitchOn] = useState(
    userLineQuery.data?.line_notification || false
  );
  const stackedNotificationInterval =
    userLineQuery.data?.stacked_notification_interval || 0;
  const favoriteNotificationInterval =
    userLineQuery.data?.favorite_notification_interval || 0;

  if (userLineQuery.status === "loading") {
    return (
      <Center>
        <Loader className="h-96" />
      </Center>
    );
  }

  if (userLineQuery.status === "error") {
    return <Text>Error fetching data.</Text>;
  }

  return (
    <Box>
      <Stack spacing="lg">
        <Group>
          <Avatar radius="xl" size="lg" src={profile.pictureUrl} />
          <Text fz="md">{profile.displayName}</Text>
        </Group>
        <Switch
          label="Lineのゲーム通知をオンにする"
          checked={isSwitchOn}
          onChange={() => setIsSwitchOn((prev) => !prev)}
        />
        {isSwitchOn && (
          <>
            <NumberInput
              value={stackedNotificationInterval}
              label="積みゲー通知設定(日数を入力)"
              withAsterisk
            />
            <NumberInput
              value={favoriteNotificationInterval}
              label="お気に入りゲームを通知(日数を入力)"
              withAsterisk
            />
          </>
        )}
        <Center>
          <Button type="submit" radius="xl" size="md" className="w-36">
            更新する
          </Button>
        </Center>
      </Stack>
    </Box>
  );
};

export default LineLoggedIn;
