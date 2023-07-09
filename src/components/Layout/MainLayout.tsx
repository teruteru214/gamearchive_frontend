import { FooterAtom } from "atoms/ui";
import { isLoginAtom } from "atoms/user";
import { loginUserAtom } from "atoms/user/userInfoAtom";
import FooterLinks from "components/FooterLinks";
import HeaderAction from "components/HeaderAction";
import { useAtom } from "jotai";
import { FC, ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [data] = useAtom(FooterAtom);
  const [isLogin] = useAtom(isLoginAtom);
  const [user] = useAtom(loginUserAtom);

  return (
    <>
      <HeaderAction {...{ user, isLogin }} />
      {children}
      <FooterLinks {...{ data }} />
    </>
  );
};

export default MainLayout;
