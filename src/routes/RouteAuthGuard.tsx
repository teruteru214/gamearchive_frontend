import { Center, Loader } from "@mantine/core";
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

  if (currentUser.authChecked) {
    if (currentUser.uid) {
      return <>{component}</>;
    } else {
      return (
        <Navigate to={redirect} state={{ from: location }} replace={false} />
      );
    }
  } else {
    if (location.pathname !== "/") {
      return <Navigate to="/" replace={true} />;
    }
    return (
      <Center>
        <Loader />
      </Center>
    );
  }
};
