import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import MainLayout from "components/Layout/MainLayout";
import GameAcquisition from "features/aquisition/GameAquisition";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        {/* <Top /> */}
        {/* <GameManagement /> */}
        <GameAcquisition />
        {/* <ProfileForm /> */}
        {/* <UserListPage /> */}
        {/* <UserDetail /> */}
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
