import { ActionIcon, Button } from "@mantine/core";

import { ReactComponent as GoogleIcon } from "../../assets/google.svg";

interface GoogleButtonProps {
  title: string;
  onClick: () => void;
}

const GoogleButton = ({ onClick, title }: GoogleButtonProps) => {
  return (
    <Button
      leftIcon={
        <ActionIcon size="xs">
          <GoogleIcon />
        </ActionIcon>
      }
      variant="default"
      color="gray"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default GoogleButton;
