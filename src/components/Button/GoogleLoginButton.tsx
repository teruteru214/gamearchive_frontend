import { Button } from "@mantine/core";
import { ReactNode } from "react";

interface GoogleLoginButtonProps {
  children: ReactNode;
}

const GoogleLoginButton = ({ children, ...props }: GoogleLoginButtonProps) => {
  return (
    <Button variant="default" color="gray" {...props}>
      {children}
    </Button>
  );
};

export default GoogleLoginButton;
