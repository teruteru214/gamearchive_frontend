import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import MainLayout from "components/Layout/MainLayout";
import UserDetail from "features/userdetail/components/UserDetail";

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
        {/* <GameManagement /> */}
        {/* <GameAcquisition /> */}
        {/* <ProfileForm /> */}
        {/* <UserListPage /> */}
        <UserDetail />
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
