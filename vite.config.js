import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import sass from "sass";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/confi
export default defineConfig({
  plugins: [svgr(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      images: path.resolve(__dirname, "./src/assets/images"),
      icons: path.resolve(__dirname, "./src/assets/icons"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      layouts: `${path.resolve(__dirname, "./src/layouts/")}`,
      ui: `${path.resolve(__dirname, "./src/components/ui")}`,
    },
  },
});
