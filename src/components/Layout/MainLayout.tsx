import { FooterAtom } from "atoms/ui";
import { isLoginAtom } from "atoms/user";
import { loginUserAtom } from "atoms/user/userInfoAtom";
import FooterLinks from "components/FooterLinks";
import HeaderAction from "components/HeaderAction";
import { useAtom } from "jotai";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const [data] = useAtom(FooterAtom);
  const [isLogin] = useAtom(isLoginAtom);
  const [user] = useAtom(loginUserAtom);

  const location = useLocation();
  return (
    <>
      <HeaderAction {...{ user, isLogin }} />
      {location.pathname === "/" ||
      location.pathname === "/acquisition" ||
      location.pathname === "/management/status/unplaying" ||
      location.pathname === "/management/status/playing" ||
      location.pathname === "/management/status/clear" ||
      location.pathname === "/profile" ||
      location.pathname === "/users" ||
      location.pathname === "/users/:id" ? (
        <Outlet />
      ) : (
        <Outlet />
      )}
      <FooterLinks {...{ data }} />
    </>
  );
};

export default MainLayout;
