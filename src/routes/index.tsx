import About from "components/About";
import MainLayout from "components/Layout/MainLayout";
import PrivacyPolicy from "components/PrivacyPolicy";
import Terms from "components/Terms";
import GameAcquisition from "features/acquisition/container/GameAcquisition";
import GameManagement from "features/management/container/GameManagement";
import Top from "features/top/container/Top";
import ProfileEdit from "features/user/container/ProfileEdit";
import { usePageViewsTracking } from "hooks/usePageViewsTracking";
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

  usePageViewsTracking();

  return (
    <Routes>
      <Route path="management" element={<MainLayout />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route
          path=":tab"
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
      {/* <Route path="users" element={<MainLayout />}>
        <Route
          index
          element={<RouteAuthGuard component={<UserListPage />} redirect="/" />}
        />
        <Route
          path=":userid"
          element={<RouteAuthGuard component={<UserDetail />} redirect="/" />}
        />
        <Route path="*" element={<NotFoundTitle />} />
      </Route> */}
      <Route path="acquisition" element={<MainLayout />}>
        <Route index element={<GameAcquisition />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Top />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="/about" element={<MainLayout />}>
        <Route index element={<About />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="/terms" element={<MainLayout />}>
        <Route index element={<Terms />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="/privacy-policy" element={<MainLayout />}>
        <Route index element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>

      <Route path="*" element={<NotFoundTitle />} />
    </Routes>
  );
};

export default AppRoutes;
