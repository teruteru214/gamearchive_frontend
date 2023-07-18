import { Group, Image, Modal, Stack, Text } from "@mantine/core";
import GoogleButton from "components/Button/GoogleButton";
import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";

type LoginModalProps = {
  opened: boolean;
  setOpened: (flag: boolean) => void;
};

const LoginModal: FC<LoginModalProps> = ({ opened, setOpened }) => {
  const navigate = useNavigate();
  const signInwithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setOpened(false);
        if (getAdditionalUserInfo(result)?.isNewUser) {
          navigate("/acquisition");
          return;
        }
        navigate("/");
      })
      .catch((error) => {
        setOpened(false);
        if (error.code === "auth/account-exists-with-different-credential") {
          alert(
            `${error.customData.email}は他のSNSと連携した既存ユーザーが登録済みです。既存ユーザーでログイン後、こちらのSNSとの連携が可能です`
          );
          return;
        }
        alert(`ログイン/新規登録に失敗しました。\n${error.message}`);
      });
  };

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} centered size="sm">
      <Stack className="flex items-center justify-center space-y-4">
        <Image src={logo} width={300} fit="contain" />
        <Text size="sm" color="dimmed">
          GameArchiveは、あなたのゲーム進行状況をシンプルに管理するアプリです。各ゲームの状態を一元管理し、公開設定を選んだユーザーは他のプレイヤーとゲームプレイ状況を共有できます。
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleButton title="Login With Google" onClick={signInwithGoogle} />
        </Group>
        <Text size="sm" color="dimmed" className="px-5 text-center">
          利用規約、プライバシーポリシーに同意したうえでログインしてください。
        </Text>
      </Stack>
    </Modal>
  );
};

export default LoginModal;
