import {
  Avatar,
  Box,
  Center,
  Group,
  Loader,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

import { useQueryLineSetting } from "../hooks/useQueryLineSetting";
import { Profile } from "../types";
import NotificationSettings from "./NotificationSettings";

interface LoggedInProps {
  profile: Profile;
}

const LineLoggedIn: React.FC<LoggedInProps> = ({ profile }) => {
  const userLineQuery = useQueryLineSetting();

  if (userLineQuery.status === "loading") {
    return (
      <Center>
        <Loader className="h-96" />
      </Center>
    );
  }

  if (userLineQuery.status === "error") {
    return <Text>Error fetching data.</Text>;
  }

  return (
    <Box>
      <Stack spacing="lg">
        <Group>
          <Avatar radius="xl" size="lg" src={profile.pictureUrl} />
          <Title order={4}>{profile.displayName}</Title>
        </Group>
        <NotificationSettings
          isSwitchOn={userLineQuery.data?.line_notification}
          interval={userLineQuery.data?.stacked_notification_interval}
          notificationDate={userLineQuery.data?.notification_date}
          userId={userLineQuery.data?.id}
          refetchLineSetting={() => userLineQuery.refetch()}
        />
      </Stack>
    </Box>
  );
};

export default LineLoggedIn;
