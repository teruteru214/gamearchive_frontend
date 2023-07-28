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

  if (currentUser.authChecked) {
    if (currentUser.apiChecked) {
      if (currentUser.uid) {
        return <>{component}</>;
      } else {
        if (
          location.pathname.startsWith("/acquisition") ||
          location.pathname.startsWith("/management") ||
          location.pathname.startsWith("/profile") ||
          location.pathname.startsWith("/users")
        ) {
          <Container className="flex items-center justify-center py-60">
            <Loader />
          </Container>;
        }
      }
    } else {
      return (
        <Navigate to={redirect} state={{ from: location }} replace={false} />
      );
    }
  } else {
    if (
      location.pathname === "/acquisition" ||
      location.pathname === "/management" ||
      location.pathname === "/profile" ||
      location.pathname === "/users"
    ) {
      return <Navigate to="/" replace={true} />;
    } else {
      return (
        <Container className="flex items-center justify-center py-60">
          <Loader />
        </Container>
      );
    }
  }
};
{
  /* <Navigate to={redirect} state={{ from: location }} replace={false} />; */
}
