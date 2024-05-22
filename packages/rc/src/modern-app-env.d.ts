/// <reference types='@modern-js/module-tools/types' />
/// <reference types='@modern-js/core' />
/// <reference types='@modern-js/plugin-tailwindcss' />

declare interface Window {
  webkitDevicePixelRatio: number;
  mozDevicePixelRatio: number;
}

declare module '*.less' {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style -- ts declare
  const content: { readonly [key: string]: string };
  // eslint-disable-next-line import/no-default-export -- ts declare
  export default content;
}
