import "./lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import ProfileForm from "components/features/user/ProfileForm";
import MainLayout from "components/Layout/MainLayout";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainLayout>
        <ProfileForm />
      </MainLayout>
    </MantineProvider>
  );
};

export default App;
