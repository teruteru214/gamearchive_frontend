import { FooterAtom } from "atoms/ui";
import FooterLinks from "components/FooterLinks";
import HeaderAction from "components/HeaderAction";
import { useAtom } from "jotai";
import { useFirebaseAuth } from "lib/auth/firebaseAuth";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { currentUser } = useFirebaseAuth();
  const isLogin = currentUser.uid ? true : false;
  const [data] = useAtom(FooterAtom);

  return (
    <>
      <HeaderAction {...{ isLogin }} />
      <Outlet />
      <FooterLinks {...{ data }} />
    </>
  );
};

export default MainLayout;
