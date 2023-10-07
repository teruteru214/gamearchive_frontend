import {
  ActionIcon,
  Avatar,
  Button,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandTwitter, IconUserEdit } from "@tabler/icons-react";
import { loginUserAtom } from "atoms/auth/loginUser";
import { useAtom } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [currentUser] = useAtom(loginUserAtom);
  const largerThanSm = useMediaQuery("sm");
  const { avatar, nickname, introduction, twitter_name, visibility } =
    currentUser || {};

  const navigate = useNavigate();
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.white,
      })}
      className="mt-4"
    >
      {largerThanSm ? (
        <div className="flex justify-between space-x-5 px-10">
          <div className="flex w-2/3 space-x-5">
            <Avatar src={avatar} size={150} radius={120} />
            <Stack>
              <Title order={3} weight={500}>
                {nickname}
              </Title>
              <Text size="sm" className="break-all">
                {introduction}
              </Text>
              <Text size="sm" className="break-all">
                お気に入りのゲーム:{" "}
                {visibility === "public" ? "公開中" : "非公開"}
              </Text>
              <div className="flex items-center justify-start">
                {twitter_name && (
                  <>
                    <ActionIcon
                      component="a"
                      href={`https://twitter.com/${twitter_name}`}
                      target="_blank"
                    >
                      <IconBrandTwitter size={18} />
                    </ActionIcon>
                    <Text size="sm">@{twitter_name}</Text>
                  </>
                )}
              </div>
            </Stack>
          </div>
          <Button onClick={() => navigate("/profile")}>
            <IconUserEdit size="0.9rem" stroke={1.5} className="mr-1" />
            プロフィールを編集する
          </Button>
        </div>
      ) : (
        <Stack>
          <Avatar src={avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {nickname}
          </Text>
          <div className="flex justify-center">
            <Text
              align="center"
              color="dimmed"
              size="sm"
              className="w-80 break-all"
            >
              {introduction}
            </Text>
          </div>
          <Text size="sm" align="center">
            お気に入りのゲーム: {visibility === "public" ? "公開中" : "非公開"}
          </Text>
          <div className="mx-auto flex w-80 items-center justify-center">
            {twitter_name && (
              <>
                <ActionIcon
                  component="a"
                  href={`https://twitter.com/${twitter_name}`}
                  target="_blank"
                >
                  <IconBrandTwitter size={18} />
                </ActionIcon>
                <Text size="sm">@{twitter_name}</Text>
              </>
            )}
          </div>

          <Button onClick={() => navigate("/profile")}>
            <IconUserEdit size="0.9rem" stroke={1.5} className="mr-1" />
            プロフィールを編集する
          </Button>
        </Stack>
      )}
    </Paper>
  );
};

export default Profile;
