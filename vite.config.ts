/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    open: true,
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    // テスト環境を指定
    environment: "happy-dom",
    // API をグローバルに使う
    globals: true,
  },
});
