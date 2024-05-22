import type { Config } from "tailwindcss";
import sharedConfig from "@emiya-turbo-origin/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','./src/**/*.less'],
  prefix: 'em-',
  presets: [sharedConfig],
};

export default config;
