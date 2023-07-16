/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "jotai/babel/plugin-debug-label",
          "jotai/babel/plugin-react-refresh",
        ],
      },
    }),
    tsconfigPaths(),
    svgr(),
  ],
});
