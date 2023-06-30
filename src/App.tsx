import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import MainLayout from "components/Layout/MainLayout";
import Top from "features/top/Top";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        <Top />
        {/* <GameManagement /> */}
        {/* <GameAcquisition /> */}
        {/* <ProfileForm /> */}
        {/* <UserListPage /> */}
        {/* <UserDetail /> */}
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
