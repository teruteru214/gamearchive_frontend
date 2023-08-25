import { Container, Loader } from "@mantine/core";
import { useFirebaseAuth } from "lib/auth/firebaseAuth";
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
  const { currentUser } = useFirebaseAuth();
  const { tab } = useParams(); // 追加

  if (!currentUser.authChecked || !currentUser.apiChecked) {
    return (
      <Container className="flex items-center justify-center py-60">
        <Loader />
      </Container>
    );
  }

  if (validTabs && tab && !validTabs.includes(tab)) {
    return <Navigate to="/management/unplaying" replace />;
  }

  if (
    (!currentUser.uid && location.pathname === "/management/:tab") ||
    (!currentUser.uid && location.pathname === "/profile")
  ) {
    return <Navigate to={redirect} replace={false} />;
  }

  return <>{component}</>;
};
