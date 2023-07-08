import { Group, Image, Modal, Stack, Text } from "@mantine/core";
import GoogleLoginButton from "components/Button/GoogleLoginButton";
import { FC } from "react";

import logo from "../../../assets/logo.png";

type LoginModalProps = {
  opened: boolean;
  setOpened: (flag: boolean) => void;
};

const LoginModal: FC<LoginModalProps> = ({ opened, setOpened }) => {
  return (
    <Modal opened={opened} onClose={() => setOpened(false)} centered size="md">
      <Stack className="flex items-center justify-center space-y-4">
        <Image src={logo} width={300} />
        <Text size="sm" color="dimmed">
          GameArchiveは、あなたのゲーム進行状況をシンプルに管理するアプリです。プレイ中、積みゲー、クリア済みといった各ゲームの状態を一元管理し、公開設定を選んだユーザーは他のプレイヤーと情報を共有できます。
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleLoginButton radius="xl">Googleログイン</GoogleLoginButton>
        </Group>
        <Text size="sm" color="dimmed" className="px-5 text-center">
          利用規約、プライバシーポリシーに同意したうえでログインしてください。
        </Text>
      </Stack>
    </Modal>
  );
};

export default LoginModal;
