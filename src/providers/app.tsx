import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Provider } from "jotai";
import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { authStore } from "store/store";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <HelmetProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          primaryColor: "yellow",
        }}
      >
        <Notifications />
        <Router>
          <Provider store={authStore}>{children}</Provider>
        </Router>
      </MantineProvider>
    </HelmetProvider>
  );
};

export default AppProvider;
