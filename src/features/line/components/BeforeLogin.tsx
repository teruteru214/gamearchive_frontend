// LineSettingsLoggedOut.tsx
import { Button, Center, Image, Stack, Text, Title } from "@mantine/core";

import notification from "../../../assets/notification.png";
import { BeforeLoginProps } from "../types";

const BeforeLogin: React.FC<BeforeLoginProps> = ({ handleLineLogin }) => {
  return (
    <Center>
      <Stack>
        <Image src={notification} width="340px" mx="auto" />
        <Title order={5}>
          Lineユーザーを登録すると以下の機能が使用可能になります。
        </Title>
        <Text>・自分の取得した積みゲーのプレイを促す通知を設定できます</Text>
        <Text>・他ユーザーのお気に入りのゲームを通知することができます</Text>
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
  );
};

export default BeforeLogin;
