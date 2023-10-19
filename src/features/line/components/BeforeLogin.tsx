import { Button, Center, Image, Stack } from "@mantine/core";
import { IconBrandLine } from "@tabler/icons-react";

import notification from "../../../assets/notification.png";
import { BeforeLoginProps } from "../types";

const BeforeLogin: React.FC<BeforeLoginProps> = ({ handleLineLogin }) => {
  return (
    <Stack>
      <div className="flex items-center justify-center">
        <Image src={notification} width={200} />
      </div>
      <Center>
        <Button
          className="mb-5 w-56"
          color="teal"
          mx="auto"
          onClick={handleLineLogin}
        >
          <IconBrandLine className="pr-1" />
          LINEで友達を追加する
        </Button>
      </Center>
    </Stack>
  );
};

export default BeforeLogin;
