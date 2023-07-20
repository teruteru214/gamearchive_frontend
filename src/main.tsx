import "./lib/tailwind.css";

import { initializeApp } from "firebase/app";
import firebaseConfig from "firebase-config";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const prepare = async () => {
  if (
    import.meta.env.MODE === "development" &&
    import.meta.env.VITE_APP_USE_MOCK_SERVER === "true"
  ) {
    const { worker } = await import("./test/browser");
    worker.start();
  }
};
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
console.log(app);

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
