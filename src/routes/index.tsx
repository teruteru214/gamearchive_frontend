import GameAcquisition from "features/acquisition/components/GameAcquisition";
import GameManagement from "features/management/components/GameManagement";
import ProfileForm from "features/profile/components/ProfileForm";
import Top from "features/top/components/Top";
import UserDetail from "features/userdetail/components/UserDetail";
import UserListPage from "features/userlist/components/UserListPage";
import { Navigate, Route, Routes } from "react-router-dom";

import { NotFoundTitle } from "./NotFoundTitle";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="acquisition" element={<GameAcquisition />} />
      <Route path="management" element={<GameManagement />} />
      <Route path="profile" element={<ProfileForm />} />
      <Route path="users" element={<UserListPage />}>
        <Route path=":id" element={<UserDetail />} />
        <Route path="*" element={<NotFoundTitle />} />
      </Route>
      <Route path="/" element={<Top />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
