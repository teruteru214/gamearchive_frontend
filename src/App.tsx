import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import MainLayout from "components/Layout/MainLayout";
import GameManagement from "features/management/components/GameManagement";

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: "yellow",
      }}
    >
      <MainLayout>
        {/* <Top /> */}
        <GameManagement />
        {/* <GameAcquisition /> */}
        {/* <ProfileForm /> */}
        {/* <UserListPage /> */}
        {/* <UserDetail /> */}
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
