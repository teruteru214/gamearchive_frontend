import { Card, Container, Grid, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBell,
  IconDisc,
  IconReplace,
  IconUserEdit,
} from "@tabler/icons-react";
import LoginModal from "features/auth/components/LoginModal";
import { useFirebaseAuth } from "lib/auth/firebaseAuth";
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "../../../lib/mantine/useMediaQuery";

const AppDescription = () => {
  const navigate = useNavigate();
  const { currentUser } = useFirebaseAuth();
  const isLogin = currentUser && currentUser.uid ? true : false;
  const [opened, { open, close }] = useDisclosure(false);
  const largerThanSm = useMediaQuery("sm");
  const colSpan = largerThanSm ? 5 : 12;

  const handleCardClick = (path: string) => {
    if (isLogin) {
      navigate(path);
    } else {
      open();
    }
  };

  return (
    <Container>
      <h1 className="mb-0 pt-6 text-center text-2xl font-medium sm:text-3xl">
        本アプリの使い方
      </h1>
      <p className="text-center text-xs text-gray-400">
        (Googleログインを行うことで、多くの機能を活用できます)
      </p>
      <Grid className="justify-center">
        <Grid.Col span={colSpan}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            onClick={() => navigate("/acquisition")}
            className="cursor-pointer hover:bg-gray-100"
          >
            <Card.Section className="flex h-[180px] items-center justify-center">
              <IconDisc className="h-[180px] w-auto" />
            </Card.Section>

            <Text weight={500}>ゲームを取得</Text>

            <Text size="sm" color="dimmed">
              ゲームを検索すると、ゲームの詳細を確認できます。ログインするとプレイ状況に基づいてゲームを保存することができます。
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={colSpan}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            onClick={() => handleCardClick("/management/unplaying")}
            className="cursor-pointer hover:bg-gray-100"
          >
            <Card.Section className="flex h-[180px] items-center justify-center">
              <IconReplace className="h-[180px] w-auto" />
            </Card.Section>

            <Text weight={500}>ゲームマネジメント</Text>

            <Text size="sm" color="dimmed">
              ゲームプレイ状況の変更や評価値による並び替え。ジャンルやプラットやプラットフォームで絞り込み。お気に入りも登録可能(ログインユーザーのみ)
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={colSpan}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            onClick={() => handleCardClick("/line")}
            className="cursor-pointer hover:bg-gray-100"
          >
            <Card.Section className="flex h-[180px] items-center justify-center">
              <IconBell className="h-[180px] w-auto" />
            </Card.Section>

            <Text weight={500}>LINE通知設定</Text>

            <Text size="sm" color="dimmed">
              LINEログインすることで積みゲー通知や他ユーザーのお気に入りのゲームの通知をLINEのチャンネルから受け取ることができます。(ログインユーザーのみ)
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={colSpan}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            onClick={() => handleCardClick("/profile")}
            className="cursor-pointer hover:bg-gray-100"
          >
            <Card.Section className="flex h-[180px] items-center justify-center">
              <IconUserEdit className="h-[180px] w-auto" />
            </Card.Section>

            <Text weight={500}>プロフィール編集</Text>

            <Text size="sm" color="dimmed">
              自身のプロフィール編集できます。公開設定をオンにすると自身のお気に入りのゲームを他ユーザーに通知することができます。(ログインユーザーのみ)
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
      <LoginModal opened={opened} close={close} />
    </Container>
  );
};

export default AppDescription;
