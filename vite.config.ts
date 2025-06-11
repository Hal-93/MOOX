import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  test: {
    coverage: {
      exclude: [
        "node_modules/**",
        "build/**",
        "app/components/ui/**",
        "eslint.config.js",
        "react-router.config.ts",
        "vite.config.ts",
        ".react-router/**",
      ],
    },
  },
});
