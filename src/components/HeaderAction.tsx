import {
  Avatar,
  Button,
  Container,
  createStyles,
  Group,
  Image,
  Menu,
  rem,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconChevronDown,
  IconDeviceGamepad2,
  IconDisc,
  IconLogout,
  IconStack3,
  IconStar,
  IconSwitchHorizontal,
  IconTrophy,
  IconUserEdit,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useState } from "react";

import logo from "../assets/logo.png";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors.white,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    marginBottom: rem(120),
  },
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
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  // burger: {
  //   [theme.fn.largerThan("xs")]: {
  //     display: "none",
  //   },
  // },
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
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Image src={logo} width={250} fit="contain" />
          {isLogin ? (
            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(classes.user, {
                    [classes.userActive]: userMenuOpened,
                  })}
                >
                  <Group spacing={7}>
                    <Avatar
                      src={user.image}
                      alt={user.name}
                      radius="xl"
                      size={20}
                    />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {user.name}
                    </Text>
                    <IconChevronDown size={rem(12)} stroke={1.5} />
                  </Group>
                </UnstyledButton>
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
                <Menu.Item
                  icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}
                >
                  ゲーム管理
                </Menu.Item>
                <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                  ログアウト
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button size="xs" color="yellow">
              ログイン
            </Button>
          )}
        </Group>
      </Container>
    </div>
  );
};

export default HeaderAction;
