import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import FooterLinks from "components/FooterLinks";
import GameManagement from "components/GameManagement/GameManagement";
import HeaderAction from "components/HeaderAction";

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

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderAction isLogin={isLogin} user={user} />
      <GameManagement />
      <FooterLinks {...{ data }} />
    </MantineProvider>
  );
};

export default App;
