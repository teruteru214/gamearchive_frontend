import axios from "axios";
import { endpoint } from "config";
import AppProvider from "providers/app";
import { useEffect } from "react";
import AppRoutes from "routes";

const App = () => {
  useEffect(() => {
    axios
      .get(`${endpoint}/api/v1/hello`)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
