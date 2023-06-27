import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import GameManagement from "components/GameManagement/GameManagement";
import MainLayout from "components/Layout/MainLayout";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        <GameManagement />
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
