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
import { useMediaQuery } from "lib/mantine/useMediaQuery";

interface UserInfoActionProps {
  name: string;
  avatar: string;
  description: string;
  twitterUsername: string;
}

const Profile = ({
  avatar,
  name,
  description,
  twitterUsername,
}: UserInfoActionProps) => {
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
                {name}
              </Title>
              <Text size="sm" className="break-all">
                {description}
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
          <Button color="yellow">プロフィールを編集する</Button>
        </div>
      ) : (
        <Stack>
          <Avatar src={avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {name}
          </Text>
          <div className="flex justify-center">
            <Text
              align="center"
              color="dimmed"
              size="sm"
              className="w-1/2 break-words"
            >
              {description}
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
