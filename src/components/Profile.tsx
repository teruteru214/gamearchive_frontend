import {
  ActionIcon,
  Avatar,
  Button,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons-react";
import { loginUserAtom } from "atoms/user/userInfoAtom";
import { useAtom } from "jotai";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

const Profile = () => {
  const [userProfileData] = useAtom(loginUserAtom);

  const { username, avatar, introduction, twitterUsername } = userProfileData;
  const largerThanSm = useMediaQuery("sm");
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.white,
      })}
      className="my-8"
    >
      {largerThanSm ? (
        <div className="flex justify-between space-x-5 px-10">
          <div className="flex w-2/3 space-x-5">
            <Avatar src={avatar} size={120} radius={120} />
            <Stack>
              <Title order={3} weight={500}>
                {username}
              </Title>
              <Text size="sm" className="break-all">
                {introduction}
              </Text>
              <div className="flex w-1/12 items-center justify-start">
                {twitterUsername && (
                  <>
                    <ActionIcon
                      component="a"
                      href={`https://twitter.com/${twitterUsername}`}
                      target="_blank"
                    >
                      <IconBrandTwitter size={18} />
                    </ActionIcon>
                    <Text size="sm">@{twitterUsername}</Text>
                  </>
                )}
              </div>
            </Stack>
          </div>
          <Button>プロフィールを編集する</Button>
        </div>
      ) : (
        <Stack>
          <Avatar src={avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {username}
          </Text>
          <div className="flex justify-center">
            <Text
              align="center"
              color="dimmed"
              size="sm"
              className="w-1/2 break-words"
            >
              {introduction}
            </Text>
          </div>
          <div className="mx-auto flex w-1/2 items-center justify-center">
            {twitterUsername && (
              <>
                <ActionIcon
                  component="a"
                  href={`https://twitter.com/${twitterUsername}`}
                  target="_blank"
                >
                  <IconBrandTwitter size={18} />
                </ActionIcon>
                <Text size="sm">@{twitterUsername}</Text>
              </>
            )}
          </div>

          <Button variant="default" fullWidth mt="md">
            プロフィールを編集する
          </Button>
        </Stack>
      )}
    </Paper>
  );
};

export default Profile;
