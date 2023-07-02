import {
  Avatar,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Image,
  Menu,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDeviceGamepad2,
  IconDisc,
  IconLogout,
  IconReplace,
  IconStack3,
  IconStar,
  IconTrophy,
  IconUserEdit,
  IconUsersGroup,
} from "@tabler/icons-react";
import LoginModal from "features/auth/LoginModal";
import { useState } from "react";

import logo from "../assets/logo.png";

const useStyles = createStyles((theme) => ({
  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",
    "&:hover": {
      backgroundColor: theme.colors.yellow[0],
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

interface HeaderActionProps {
  isLogin: boolean;
  user: { name: string; image: string };
}

const HeaderAction = ({ isLogin, user }: HeaderActionProps) => {
  const { classes } = useStyles();

  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="sticky top-0 z-10 border-b border-gray-200 bg-white pt-2">
      <Container className={classes.mainSection} size="lg">
        <Group position="apart">
          <Image src={logo} width={200} fit="contain" />

          {!isLogin ? (
            <Button
              radius="xl"
              className="h-8"
              onClick={() => setLoginModalOpened(true)}
            >
              ログイン
            </Button>
          ) : (
            // ログイン済みの時に表示するコンポーネント
            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onOpen={toggle}
              onClose={toggle}
              withinPortal
            >
              <Menu.Target>
                <Group
                  spacing={7}
                  onClick={toggle}
                  aria-label={opened ? "Close navigation" : "Open navigation"}
                >
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={20}
                  />

                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>

                  <Burger opened={opened} />
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IconDisc size="0.9rem" stroke={1.5} />}>
                  ゲーム登録
                </Menu.Item>

                <Menu.Item icon={<IconTrophy size="0.9rem" stroke={1.5} />}>
                  クリアしたゲーム
                </Menu.Item>

                <Menu.Item
                  icon={<IconDeviceGamepad2 size="0.9rem" stroke={1.5} />}
                >
                  プレイ中のゲーム
                </Menu.Item>

                <Menu.Item icon={<IconStack3 size="0.9rem" stroke={1.5} />}>
                  積みゲー
                </Menu.Item>

                <Menu.Item icon={<IconStar size="0.9rem" stroke={1.5} />}>
                  お気に入りのゲーム
                </Menu.Item>

                <Menu.Item icon={<IconUsersGroup size="0.9rem" stroke={1.5} />}>
                  ユーザー一覧
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Settings</Menu.Label>

                <Menu.Item icon={<IconUserEdit size="0.9rem" stroke={1.5} />}>
                  プロフィール編集
                </Menu.Item>

                <Menu.Item icon={<IconReplace size="0.9rem" stroke={1.5} />}>
                  ゲームマネジメント
                </Menu.Item>

                <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                  ログアウト
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
        </Group>
      </Container>
      <LoginModal opened={loginModalOpened} setOpened={setLoginModalOpened} />
    </div>
  );
};

export default HeaderAction;
