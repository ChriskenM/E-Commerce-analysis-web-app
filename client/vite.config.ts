// file configures the Vite build tool for the project

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
/*
defineConfig: Function to define the Vite configuration.
plugins: Array of Vite plugins to use, in this case, the React plugin.
resolve: Configuration object for resolving module imports.
alias: Specifies aliases to simplify module imports.
*/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
