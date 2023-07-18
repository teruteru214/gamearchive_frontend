import MainLayout from "components/Layout/MainLayout";
import GameAcquisition from "features/acquisition/components/GameAcquisition";
import GameManagement from "features/management/components/GameManagement";
// Import your StatusGameCards compone
import Top from "features/top/components/Top";
import UserDetail from "features/user/components/UserDetail";
import ProfileEdit from "features/user/container/ProfileEdit";
import UserListPage from "features/users/components/UserListPage";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { NotFoundTitle } from "./NotFoundTitle";
import { RouteAuthGuard } from "./RouteAuthGuard";

const AppRoutes = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="acquisition" element={<MainLayout />}>
        <Route
          index
          element={
            <RouteAuthGuard component={<GameAcquisition />} redirect="/" />
          }
        />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="management" element={<MainLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route
          path=":status"
          element={
            <RouteAuthGuard component={<GameManagement />} redirect="/" />
          }
        />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="profile" element={<MainLayout />}>
        <Route
          index
          element={<RouteAuthGuard component={<ProfileEdit />} redirect="/" />}
        />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="users" element={<MainLayout />}>
        <Route
          index
          element={<RouteAuthGuard component={<UserListPage />} redirect="/" />}
        />
        <Route
          path=":userid"
          element={<RouteAuthGuard component={<UserDetail />} redirect="/" />}
        />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Top />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="*" element={<NotFoundTitle />} />
    </Routes>
  );
};

export default AppRoutes;
