import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

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
        <Router>{children}</Router>
      </MantineProvider>
    </HelmetProvider>
  );
};

export default AppProvider;
