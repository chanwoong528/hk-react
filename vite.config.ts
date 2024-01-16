//@ts-nocheck

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import Pages from "vite-plugin-pages";
import { resolve } from "path";
import { PAGE_LIST } from "./src/utils/PAGE_LIST";

import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

const DEFAULT_LOC = "pages/";

const PG_LIST = PAGE_LIST.reduce((acc, currentObject) => {
  const { label } = currentObject;
  acc[label] = resolve(root, DEFAULT_LOC + label, "index.html");
  return acc;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",

  root,
  // publicDir: "assets",
  plugins: [react(), cssInjectedByJsPlugin({ relativeCSSInjection: true })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/styles/normalize.scss";`,
      },
    },
  },
  build: {
    modulePreload: false,
    outDir,
    emptyOutDir: true,
    preserveModules: true,
    rollupOptions: {
      input: { main: resolve(root, "index.html"), ...PG_LIST },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
