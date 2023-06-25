import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import Top from "components/Top/Top";

// const gameItem = {
//   id: 1,
//   name: "The Legend of Zelda: Skyward Sword HD",
//   cover: {
//     id: 123,
//     url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p3a.png",
//   },
//   genres: [
//     {
//       id: 1,
//       name: "Adventure",
//     },
//     {
//       id: 2,
//       name: "Role-playing(RPG)",
//     },
//   ],
//   platforms: [
//     {
//       id: 3,
//       name: "NintendoSwitch",
//     },
//     {
//       id: 4,
//       name: "Wii",
//     },
//   ],
//   url: "https://www.igdb.com/games/the-legend-of-zelda-skyward-sword-hd",
//   rating: 76,
//   status: "プレイ中", // Add status here
// };

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Top />
    </MantineProvider>
  );
};

export default App;
