import { Container, Loader } from "@mantine/core";
import { loginUserAtom } from "atoms/auth/loginUser";
import { useAtomValue } from "jotai";
import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

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
  const currentUser = useAtomValue(loginUserAtom);
  const { tab } = useParams();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // useEffect(() => {
  //   let timer: ReturnType<typeof setTimeout>;
  //   if (!currentUser.authChecked) {
  //     timer = setTimeout(() => {
  //       setShouldRedirect(true); // ステートを更新
  //     }, 10000);
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [currentUser.authChecked]);

  if (shouldRedirect) {
    return <Navigate to="/" replace={true} />;
  }

  if (validTabs && tab && !validTabs.includes(tab)) {
    return <Navigate to="/management/unplaying" replace />;
  }

  if (currentUser.authChecked) {
    if (currentUser.apiChecked) {
      if (currentUser.uid) {
        return <>{component}</>;
      } else {
        return (
          <Container className="flex items-center justify-center py-96">
            <Loader />
          </Container>
        );
      }
    } else {
      return <Navigate to={redirect} replace={false} />;
    }
  } else {
    return (
      <Container className="flex items-center justify-center py-96">
        <Loader />
      </Container>
    );
  }
};
