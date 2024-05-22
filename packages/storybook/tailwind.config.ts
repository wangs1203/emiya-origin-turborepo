import type { Config } from 'tailwindcss';

import sharedConfig from '@emiya-turbo-origin/tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: [
    './stories/**/*.{js,jsx,ts,tsx}',
    './.storybook/welcome.mdx',
    '../react-components/src/**/*.{js,jsx,ts,tsx}',
    '../react-components/stories/**/*.{js,jsx,ts,tsx}',
  ],
  // darkMode: 'class',
  prefix: 'em-',
  presets: [sharedConfig],
};

export default config;
