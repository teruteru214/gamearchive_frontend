import liff from "@line/liff";
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
import { useEffect, useState } from "react";

import notification from "../../../assets/notification.png";

interface Profile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
}

const LineSettings = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const initLiff = async () => {
      const liffId = import.meta.env.VITE_APP_LIFF_ID;
      if (liffId) {
        try {
          await liff.init({ liffId });
          const isLogin = liff.isLoggedIn();
          setLogin(isLogin);
          if (isLogin) {
            const userProfile = await liff.getProfile(); // プロフィールを取得
            setProfile(userProfile); // プロフィールをステートに保存
          }
        } catch (err) {
          console.error({ err });
        }
      }
    };

    initLiff();
  }, []);

  const handleLineLogin = async () => {
    if (liff.isLoggedIn()) {
      liff.logout();
      setLogin(false);
      setProfile(null); // ログアウト時にプロフィールをリセット
    } else {
      try {
        await liff.login();
        setLogin(true);
        const userProfile = await liff.getProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error("Login failed: ", error);
      }
    }
  };

  return (
    <>
      {isLogin && profile ? (
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
            <Button
              className="w-52"
              color="teal"
              mx="auto"
              onClick={handleLineLogin}
            >
              Lineユーザーを登録する
            </Button>
          </Stack>
        </Center>
      )}
    </>
  );
};

export default LineSettings;
