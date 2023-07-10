import axios from "axios";
import { endpoint } from "config";
import AppProvider from "providers/app";
import { useEffect } from "react";
import AppRoutes from "routes";

const App = () => {
  useEffect(() => {
    axios.get(endpoint).then((res) => console.log(res));
  }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
