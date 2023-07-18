import MainLayout from "components/Layout/MainLayout";
import GameAcquisition from "features/acquisition/components/GameAcquisition";
import LoginImage from "features/auth/container/LoginImage";
import GameManagement from "features/management/components/GameManagement";
// Import your StatusGameCards compone
import Top from "features/top/components/Top";
import UserDetail from "features/user/components/UserDetail";
import ProfileEdit from "features/user/container/ProfileEdit";
import UserListPage from "features/users/components/UserListPage";
import { useFirebaseAuth } from "lib/auth/auth";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { NotFoundTitle } from "./NotFoundTitle";

const AppRoutes = () => {
  const { hash, pathname } = useLocation();
  const { currentUser } = useFirebaseAuth();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="acquisition" element={<MainLayout />}>
        <Route index element={<GameAcquisition />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="management" element={<MainLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route path=":status" element={<GameManagement />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="profile" element={<MainLayout />}>
        <Route index element={<ProfileEdit />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="users" element={<MainLayout />}>
        <Route index element={<UserListPage />} />
        <Route path=":userId" element={<UserDetail />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Top />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="login" element={<LoginImage />} />
      <Route path="*" element={<NotFoundTitle />} />
    </Routes>
  );
};

export default AppRoutes;
