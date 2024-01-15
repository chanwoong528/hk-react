//@ts-nocheck

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root,
  plugins: [react(), cssInjectedByJsPlugin({ relativeCSSInjection: true })],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "pages/about", "index.html"),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
