import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  clean: true,
  target: "es2020",
  treeshake: true,
  format: ["cjs", "esm"],
  external: ["react", "react-dom"],
  ...options,
}));
