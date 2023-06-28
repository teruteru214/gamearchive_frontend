import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import UserListPage from "components/features/userlist/UserListPage";
import MainLayout from "components/Layout/MainLayout";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        <UserListPage />
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
