import FooterLinks from "components/FooterLinks";
import HeaderAction from "components/HeaderAction";
import { FC, ReactElement } from "react";

const data = [
  {
    link: "#",
    label: "プライバシーポリシー",
  },
  {
    link: "#",
    label: "利用規約",
  },
  {
    link: "#",
    label: "お問い合わせ",
  },
];

const isLogin = true;
const user = { name: "User", image: "user-image-url" };

type MainLayoutProps = {
  children: ReactElement;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderAction {...{ user, isLogin }} />
      {children}
      <FooterLinks {...{ data }} />
    </>
  );
};

export default MainLayout;
