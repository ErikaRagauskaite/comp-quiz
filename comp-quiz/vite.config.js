import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure the root is set correctly
  build: {
    rollupOptions: {
      input: "index.html", // Ensure the entry point is set to index.html
    },
  },
});
