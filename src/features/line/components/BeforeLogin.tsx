// LineSettingsLoggedOut.tsx
import { Button, Center, Image, Stack } from "@mantine/core";
import { IconBrandLine } from "@tabler/icons-react";

import notification from "../../../assets/notification.png";
import { BeforeLoginProps } from "../types";

const BeforeLogin: React.FC<BeforeLoginProps> = ({ handleLineLogin }) => {
  return (
    <Stack>
      <Image src={notification} />
      <Center>
        <Button
          className="mb-5 w-52"
          color="teal"
          mx="auto"
          onClick={handleLineLogin}
        >
          <IconBrandLine />
          LINEユーザーを登録する
        </Button>
      </Center>
    </Stack>
  );
};

export default BeforeLogin;
