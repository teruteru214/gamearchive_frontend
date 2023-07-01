import { ActionIcon, Button } from "@mantine/core";
import { ReactNode } from "react";

import { ReactComponent as GoogleIcon } from "../../assets/google.svg";

interface GoogleLoginButtonProps {
  children: ReactNode;
  [x: string]: any; // other props
}

const GoogleLoginButton = ({ children, ...props }: GoogleLoginButtonProps) => {
  return (
    <Button
      leftIcon={
        <ActionIcon size="xs">
          <GoogleIcon />
        </ActionIcon>
      }
      variant="default"
      color="gray"
      {...props}
    >
      {children}
    </Button>
  );
};

export default GoogleLoginButton;
