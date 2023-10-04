import { Group, Image, Modal, Stack, Text } from "@mantine/core";
import GoogleButton from "components/Button/GoogleButton";
import { signInWithGoogle } from "lib/auth/auth";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";

type LoginModalProps = {
  opened: boolean;
  close: () => void;
};

const LoginModal: FC<LoginModalProps> = ({ opened, close }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <Modal opened={opened} onClose={close} centered size="md">
      <Stack className="flex items-center justify-center space-y-4">
        <Image src={logo} width={300} fit="contain" />
        <Text size="sm" color="dimmed">
          ログインすると以下の機能が使用可能になります
          <ul>
            <li>ゲームが保存可能になります</li>
            <li>ゲームマネジメントが使えるようになります</li>
            <li>積みゲー通知設定ができるようになります</li>
          </ul>
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleButton
            title="Login With Google"
            onClick={() => signInWithGoogle(close, setIsLoading)}
            loading={isLoading}
          />
        </Group>
        <Text size="sm" color="dimmed" className="px-5 text-center">
          <span
            onClick={() => navigate("/terms")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate("/terms");
              }
            }}
            role="button"
            tabIndex={0}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            利用規約
          </span>
          、
          <span
            onClick={() => navigate("/privacy-policy")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate("/privacy-policy");
              }
            }}
            role="button"
            tabIndex={0}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            プライバシーポリシー
          </span>
          に同意したうえでログインしてください。
        </Text>
      </Stack>
    </Modal>
  );
};

export default LoginModal;
