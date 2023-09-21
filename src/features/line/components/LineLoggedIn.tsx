// LineSettingsLoggedIn.tsx
import {
  Avatar,
  Box,
  Button,
  Center,
  Group,
  NumberInput,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { useState } from "react";

import { Profile } from "../types";

interface LoggedInProps {
  profile: Profile;
}

const LineLoggedIn: React.FC<LoggedInProps> = ({ profile }) => {
  const [isSwitchOn, setSwitchOn] = useState(false);

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
          onChange={() => setSwitchOn(!isSwitchOn)}
        />
        {isSwitchOn && (
          <>
            <NumberInput
              defaultValue={30}
              label="積みゲー通知設定(日数を入力)"
              withAsterisk
            />
            <NumberInput
              defaultValue={30}
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
