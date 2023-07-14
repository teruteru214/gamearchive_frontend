import MainLayout from "components/Layout/MainLayout";
import GameAcquisition from "features/acquisition/components/GameAcquisition";
import GameManagement from "features/management/components/GameManagement";
// Import your StatusGameCards component
import ProfileForm from "features/profile/components/ProfileForm";
import Top from "features/top/components/Top";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { NotFoundTitle } from "./NotFoundTitle";

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
        <Route index element={<GameAcquisition />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="management" element={<MainLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route path=":status" element={<GameManagement />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="profile" element={<MainLayout />}>
        <Route index element={<ProfileForm />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      {/* <Route path="users" element={<MainLayout />}>
        <Route index element={<UserListPage />} />
        <Route path=":userId" element={<UserDetail />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route> */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Top />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
