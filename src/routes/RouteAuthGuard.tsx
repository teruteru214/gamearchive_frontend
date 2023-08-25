import { Container, Loader } from "@mantine/core";
import { loginUserAtom } from "atoms/auth/loginUser";
import { useAtomValue } from "jotai";
import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

type RouteAuthGuardProps = {
  component: React.ReactNode;
  redirect: string;
  validTabs?: string[];
};

export const RouteAuthGuard = ({
  component,
  redirect,
  validTabs,
}: RouteAuthGuardProps) => {
  const location = useLocation();
  const currentUser = useAtomValue(loginUserAtom);
  const { tab } = useParams();

  if (validTabs && tab && !validTabs.includes(tab)) {
    return <Navigate to="/management/unplaying" replace />;
  }

  if (currentUser.authChecked) {
    if (currentUser.apiChecked) {
      if (currentUser.uid) {
        return <>{component}</>;
      } else {
        if (location.pathname === "/profile") {
          return (
            <Container className="flex items-center justify-center py-60">
              <Loader />
            </Container>
          );
        } else if (location.pathname === "/management/tab") {
          return (
            <Container className="flex items-center justify-center py-60">
              <Loader />
            </Container>
          );
        } else {
          return (
            <Container className="flex items-center justify-center py-60">
              <Loader />
            </Container>
          );
        }
      }
    } else {
      return (
        <Navigate to={redirect} state={{ from: location }} replace={false} />
      );
    }
  } else {
    if (location.pathname === "/profile") {
      return (
        <Container className="flex items-center justify-center py-60">
          <Loader />
        </Container>
      );
    } else if (location.pathname === "/management/tab") {
      return (
        <Container className="flex items-center justify-center py-60">
          <Loader />
        </Container>
      );
    } else {
      return (
        <Container className="flex items-center justify-center py-60">
          <Loader />
        </Container>
      );
    }
  }
};
