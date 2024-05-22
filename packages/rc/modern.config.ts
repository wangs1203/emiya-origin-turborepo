import { moduleTools, defineConfig } from '@modern-js/module-tools';
// @ts-expect-error
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

export default defineConfig({
  plugins: [moduleTools(), tailwindcssPlugin()],
  buildConfig: {
    dts: {
      tsconfigPath: './tsconfig.build.json',
    },
  },
  buildPreset: 'npm-component',
});
