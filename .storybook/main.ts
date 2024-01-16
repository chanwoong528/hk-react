import type { StorybookConfig } from "@storybook/react-vite";
const path = require("path");
const { mergeConfig } = require("vite");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "storybook-css-modules",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  // async viteFinal(config) {
  //   return mergeConfig(config, {
  //     css: {
  //       postcss: null,
  //       preprocessorOptions: {
  //         scss: {
  //           // additionalData: `@use "/styles/normalize.scss";`,
  //           additionalData: `
  //                       @use "${path.resolve(
  //                         __dirname,
  //                         "../src/styles/normalize.scss"
  //                       )}";
  //                   `,
  //         },
  //       },
  //     },
  //   });
  // },
};
export default config;
