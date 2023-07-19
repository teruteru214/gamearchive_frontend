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
import { useFirebaseAuth } from "lib/auth/firebaseAuth";
import { useMediaQuery } from "lib/mantine/useMediaQuery";

const Profile = () => {
  const { currentUser } = useFirebaseAuth();
  const largerThanSm = useMediaQuery("sm");
  const { avatar, nickname, introduction, twitter_name } = currentUser || {};
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
                {nickname}
              </Title>
              <Text size="sm" className="break-all">
                {introduction}
              </Text>
              <div className="flex w-1/12 items-center justify-start">
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
          <Button>プロフィールを編集する</Button>
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
              className="w-1/2 break-words"
            >
              {introduction}
            </Text>
          </div>
          <div className="mx-auto flex w-1/2 items-center justify-center">
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

          <Button variant="default" fullWidth mt="md">
            プロフィールを編集する
          </Button>
        </Stack>
      )}
    </Paper>
  );
};

export default Profile;
