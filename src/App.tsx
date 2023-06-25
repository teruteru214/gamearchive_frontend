import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import FooterLinks from "components/FooterLinks";
import HeaderAction from "components/HeaderAction";
import AppDescription from "components/Top/AppDescription";
import HeroContents from "components/Top/HeroContents";

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

const gameItem = {
  id: 1,
  name: "The Legend of Zelda: Skyward Sword HD",
  cover: {
    id: 123,
    url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p3a.png",
  },
  genres: [
    {
      id: 1,
      name: "Adventure",
    },
    {
      id: 2,
      name: "Role-playing(RPG)",
    },
  ],
  platforms: [
    {
      id: 3,
      name: "NintendoSwitch",
    },
    {
      id: 4,
      name: "Wii",
    },
  ],
  url: "https://www.igdb.com/games/the-legend-of-zelda-skyward-sword-hd",
  rating: 76,
  status: "プレイ中", // Add status here
};

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderAction isLogin={isLogin} user={user} />
      <HeroContents />
      <AppDescription />
      <FooterLinks {...{ data }} />
    </MantineProvider>
  );
};

export default App;
