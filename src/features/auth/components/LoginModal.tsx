import { Group, Image, Modal, Stack, Text } from "@mantine/core";
import GoogleButton from "components/Button/GoogleButton";
import { signInWithGoogle } from "lib/auth/auth";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";

type LoginModalProps = {
  opened: boolean;
  setOpened: (flag: boolean) => void;
};

const LoginModal: FC<LoginModalProps> = ({ opened, setOpened }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} centered size="sm">
      <Stack className="flex items-center justify-center space-y-4">
        <Image src={logo} width={300} fit="contain" />
        <Text size="sm" color="dimmed">
          GameArchiveは、あなたのゲーム進行状況をシンプルに管理するアプリです。各ゲームの状態を一元管理し、公開設定を選んだユーザーは他のプレイヤーとゲームプレイ状況を共有できます。
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleButton
            title="Login With Google"
            onClick={() => signInWithGoogle(setOpened, navigate, setIsLoading)}
            loading={isLoading}
          />
        </Group>
        <Text size="sm" color="dimmed" className="px-5 text-center">
          利用規約、プライバシーポリシーに同意したうえでログインしてください。
        </Text>
      </Stack>
    </Modal>
  );
};

export default LoginModal;
