import { Container, Loader } from "@mantine/core";
import { useFirebaseAuth } from "lib/auth/firebaseAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type RouteAuthGuardProps = {
  component: React.ReactNode;
  redirect: string;
};

export const RouteAuthGuard = ({
  component,
  redirect,
}: RouteAuthGuardProps) => {
  const location = useLocation();
  const { currentUser } = useFirebaseAuth();

  if (!currentUser.authChecked || !currentUser.apiChecked) {
    return (
      <Container className="flex items-center justify-center py-60">
        <Loader />
      </Container>
    );
  }

  if (
    (!currentUser.uid && location.pathname === "/acquisition") ||
    (!currentUser.uid && location.pathname === "/management/:status") ||
    (!currentUser.uid && location.pathname === "/profile") ||
    (!currentUser.uid && location.pathname === "/users")
  ) {
    return (
      <Navigate to={redirect} state={{ from: location }} replace={false} />
    );
  }

  return <>{component}</>;
};
