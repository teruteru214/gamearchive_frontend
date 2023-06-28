import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import MainLayout from "components/Layout/MainLayout";
import GameManagement from "features/management/GameManagement";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        {/* <Top /> */}
        <GameManagement />
        {/* <GameAcquisition /> */}
        {/* <ProfileForm /> */}
        {/* <UserListPage /> */}
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
