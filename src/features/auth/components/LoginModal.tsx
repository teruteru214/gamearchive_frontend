import { Group, Image, Modal, Stack, Text } from "@mantine/core";
import GoogleButton from "components/Button/GoogleButton";
import { signInWithGoogle } from "lib/auth/auth";
import { FC, useState } from "react";

import logo from "../../../assets/logo.png";

type LoginModalProps = {
  opened: boolean;
  close: () => void;
};

const LoginModal: FC<LoginModalProps> = ({ opened, close }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal opened={opened} onClose={close} centered size="md">
      <Stack className="flex items-center justify-center space-y-4">
        <Image src={logo} width={300} fit="contain" />
        <Text size="sm" color="dimmed">
          GameArchiveは、あなたの全てのゲーム進行状況を一元化し、効率的なプレイを実現するためのアプリケーションです。ここでは、複数のプラットフォームのゲームを一覧表示し、プレイ状況を一目で確認することができます
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleButton
            title="Login With Google"
            onClick={() => signInWithGoogle(close, setIsLoading)}
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
