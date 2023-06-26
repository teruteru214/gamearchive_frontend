import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import FooterLinks from "components/FooterLinks";
import GameAcquisition from "components/GameAquisition/GameAquisition";
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
      <GameAcquisition />
      <FooterLinks {...{ data }} />
    </MantineProvider>
  );
};

export default App;
