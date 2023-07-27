import { ActionIcon, Button } from "@mantine/core";

import { ReactComponent as GoogleIcon } from "../../assets/google.svg";

interface GoogleButtonProps {
  title: string;
  loading: boolean;
  onClick: () => void;
}

const GoogleButton = ({ onClick, title, loading }: GoogleButtonProps) => {
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
      loading={loading}
    >
      {title}
    </Button>
  );
};

export default GoogleButton;
