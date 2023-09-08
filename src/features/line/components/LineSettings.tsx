import {
  Avatar,
  Box,
  Button,
  Center,
  Group,
  Image,
  NumberInput,
  Stack,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

import notification from "../../../assets/notification.png";

const LineSettings = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [isLineLogin, setLineLogin] = useState(false);

  const largerThanSm = useMediaQuery("sm");

  return (
    <>
      {isLineLogin ? (
        <Box>
          <Stack spacing="lg">
            <Group>
              <Avatar
                radius="xl"
                size="lg"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
              <Text fz="md">Mike</Text>
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
      ) : (
        <Center>
          <Stack>
            <Image src={notification} width="340px" mx="auto" />
            <Title order={5}>
              Lineユーザーを登録すると以下の機能が使用可能になります。
            </Title>
            <Text>
              ・自分の取得した積みゲーのプレイを促す通知を設定できます
            </Text>
            <Text>
              ・他ユーザーのお気に入りのゲームを通知することができます
            </Text>
            <Button className="w-52" color="teal" mx="auto">
              Lineユーザーを登録する
            </Button>
          </Stack>
        </Center>
      )}
    </>
  );
};

export default LineSettings;
